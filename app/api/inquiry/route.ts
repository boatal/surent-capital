import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail } from "@/content/surent-capital/site-content";

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  capitalType?: string;
  assetType?: string;
  assetLocation?: string;
  loanAmount?: string;
  timeline?: string;
  summary?: string;
};

const limiter = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ipKey: string) {
  const now = Date.now();
  const attempts = limiter.get(ipKey) ?? [];
  const recent = attempts.filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  limiter.set(ipKey, recent);
  return recent.length <= MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const payload = (await request.json()) as InquiryPayload;

  const name = payload.name?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const capitalType = payload.capitalType?.trim() ?? "";
  const assetType = payload.assetType?.trim() ?? "";
  const assetLocation = payload.assetLocation?.trim() ?? "";
  const loanAmount = payload.loanAmount?.trim() ?? "";
  const timeline = payload.timeline?.trim() ?? "";
  const summary = payload.summary?.trim() ?? "";

  if (!name || !email || !summary) {
    return NextResponse.json(
      { error: "Name, email, and summary are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);
  const subject = `New Financing Inquiry - ${company || name}`;

  const fields = [
    ["Name", name],
    ["Company", company || "N/A"],
    ["Email", email],
    ["Phone", phone || "N/A"],
    ["Capital Type", capitalType || "N/A"],
    ["Asset Type", assetType || "N/A"],
    ["Asset Location", assetLocation || "N/A"],
    ["Loan Amount", loanAmount || "N/A"],
    ["Timeline", timeline || "N/A"],
    ["Summary", summary],
  ] as const;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #d6d9dc;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #d6d9dc;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  try {
    await resend.emails.send({
      from: process.env.INQUIRY_FROM_EMAIL || "Surent Capital <no-reply@surentgroup.com>",
      to: contactEmail,
      replyTo: email,
      subject,
      text,
      html: `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Inter,Arial,sans-serif;font-size:14px;">${htmlRows}</table>`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send inquiry right now." },
      { status: 500 },
    );
  }
}
