import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export function InquiryCtaSection() {
  return (
    <Section id="inquiries" tone="bg2">
      <div className="grid items-center gap-10 lg:col-span-12 lg:grid-cols-12">
        <Reveal className="grid gap-6 lg:col-span-8" stagger>
          <p className="section-label">INQUIRIES</p>
          <h2 className="font-heading text-4xl md:text-6xl">
            Submit a Financing Inquiry
          </h2>
          <p className="max-w-[60ch] text-[var(--text)]/90">
            We review opportunities on a rolling basis.
          </p>
          <p className="max-w-[60ch] text-[var(--text)]/90">
            Submit a concise overview of your transaction and sponsorship
            background. If aligned, our team will follow up directly.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:justify-self-end">
          <Link
            href="/inquiry"
            className="link-underline inline-flex items-center gap-3 py-1 text-sm tracking-[0.1em]"
          >
            <span>Submit Financing Inquiry</span>
            <span aria-hidden>{"->"}</span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
