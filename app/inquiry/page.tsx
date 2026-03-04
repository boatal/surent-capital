"use client";

import { FormEvent, useState } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  assetType: string;
  loanAmount: string;
  timeline: string;
  summary: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  assetType: "",
  loanAmount: "",
  timeline: "",
  summary: "",
};

export default function InquiryPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Submission failed.");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Submission failed.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="w-full pt-20">
        <Section className="border-t-0" minHeight="chapter">
          {!success ? (
            <div className="grid gap-8">
              <Reveal>
                <h1 className="font-heading text-4xl md:text-5xl">
                  Submit a Financing Inquiry
                </h1>
              </Reveal>
              <Reveal delay={0.04}>
                <p className="max-w-[56ch] text-[var(--muted)]">
                  Submit a concise overview of your transaction and sponsorship
                  background.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-[62ch]">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={(value) => setForm({ ...form, name: value })}
                    required
                  />
                  <Field
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={(value) => setForm({ ...form, company: value })}
                  />
                  <Field
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={(value) => setForm({ ...form, email: value })}
                    type="email"
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={(value) => setForm({ ...form, phone: value })}
                  />
                  <Field
                    label="Asset Type"
                    name="assetType"
                    value={form.assetType}
                    onChange={(value) => setForm({ ...form, assetType: value })}
                  />
                  <Field
                    label="Loan Amount"
                    name="loanAmount"
                    value={form.loanAmount}
                    onChange={(value) => setForm({ ...form, loanAmount: value })}
                  />
                  <Field
                    label="Timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={(value) => setForm({ ...form, timeline: value })}
                  />
                  <label className="grid gap-2 text-sm">
                    <span className="text-[var(--muted)]">Summary *</span>
                    <textarea
                      name="summary"
                      required
                      value={form.summary}
                      onChange={(event) =>
                        setForm({ ...form, summary: event.target.value })
                      }
                      rows={7}
                      className="w-full border divider bg-[var(--bg2)] px-3 py-2 outline-none transition-colors focus:border-[var(--accent)]"
                    />
                  </label>
                  {error ? <p className="text-sm text-[var(--accent)]">{error}</p> : null}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="quiet-button px-5 py-3 disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Submit Financing Inquiry"}
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          ) : (
            <Reveal>
              <div className="grid gap-5 py-8">
                <h1 className="font-heading text-4xl md:text-5xl">
                  Your inquiry has been received.
                </h1>
                <p className="max-w-[60ch] text-[var(--muted)]">
                  Surent Capital reviews submissions with discretion and
                  selectivity. If the opportunity aligns with our mandate, a
                  member of our team will respond.
                </p>
              </div>
            </Reveal>
          )}
        </Section>
      </main>
      <Footer />
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-[var(--muted)]">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border divider bg-[var(--bg2)] px-3 py-2 outline-none transition-colors focus:border-[var(--accent)]"
      />
    </label>
  );
}
