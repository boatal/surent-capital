"use client";

import { FormEvent, startTransition, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  capitalType: string;
  loanAmount: string;
  assetType: string;
  assetLocation: string;
  summary: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  capitalType: "",
  loanAmount: "",
  assetType: "",
  assetLocation: "",
  summary: "",
};

const fieldLabelClass =
  "text-[0.6rem] uppercase tracking-[0.25em] text-[#5c5852]";
const fieldBaseClass =
  "w-full border-0 border-b border-white/[0.055] bg-transparent px-0 py-3 text-[0.78rem] font-light tracking-[0.05em] text-[#e6e2d8] outline-none transition-colors placeholder:text-[#5c5852] focus:border-[#c8a96e]";
const selectFieldClass = `${fieldBaseClass} cursor-pointer appearance-none [&>option]:text-black`;

export function SurentContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      company: form.company,
      email: form.email,
      capitalType: form.capitalType,
      assetType: form.assetType,
      assetLocation: form.assetLocation,
      loanAmount: form.loanAmount,
      timeline: "See summary",
      summary: [
        `Capital type needed: ${form.capitalType || "Not provided"}`,
        `Asset type: ${form.assetType || "Not provided"}`,
        `Asset location: ${form.assetLocation || "Not provided"}`,
        "",
        form.summary,
      ].join("\n"),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Submission failed.");
      }

      startTransition(() => {
        setSuccess(true);
        setForm(initialState);
      });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Submission failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-[0.58rem] uppercase tracking-[0.35em] text-[#7a6741]">
          Deal submission
        </p>
        <p className="mt-8 max-w-[38rem] text-[0.73rem] font-light leading-[2] text-[#a09a8e]">
          Complete the fields below. We review every submission personally. You
          will hear from us within one business day.
        </p>
      </div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2.5">
            <span className={fieldLabelClass}>First name</span>
            <input
              required
              className={fieldBaseClass}
              value={form.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              placeholder="First"
            />
          </label>
          <label className="flex flex-col gap-2.5">
            <span className={fieldLabelClass}>Last name</span>
            <input
              required
              className={fieldBaseClass}
              value={form.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              placeholder="Last"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2.5">
          <span className={fieldLabelClass}>Company / Entity</span>
          <input
            required
            className={fieldBaseClass}
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Your sponsoring entity"
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={fieldLabelClass}>Email</span>
          <input
            required
            type="email"
            className={fieldBaseClass}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Your email address"
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={fieldLabelClass}>Capital type needed</span>
          <select
            required
            className={selectFieldClass}
            value={form.capitalType}
            onChange={(event) => updateField("capitalType", event.target.value)}
          >
            <option value="" disabled>
              Select type
            </option>
            <option>Bridge Loan</option>
            <option>Construction Capital</option>
            <option>Mezzanine / Preferred Equity</option>
            <option>Situational / Other</option>
          </select>
        </label>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2.5">
            <span className={fieldLabelClass}>Loan amount</span>
            <input
              required
              className={fieldBaseClass}
              value={form.loanAmount}
              onChange={(event) => updateField("loanAmount", event.target.value)}
              placeholder="$"
            />
          </label>
          <label className="flex flex-col gap-2.5">
            <span className={fieldLabelClass}>Asset type</span>
            <input
              required
              className={fieldBaseClass}
              value={form.assetType}
              onChange={(event) => updateField("assetType", event.target.value)}
              placeholder="Multifamily, commercial..."
            />
          </label>
        </div>

        <label className="flex flex-col gap-2.5">
          <span className={fieldLabelClass}>Asset location</span>
          <input
            required
            className={fieldBaseClass}
            value={form.assetLocation}
            onChange={(event) => updateField("assetLocation", event.target.value)}
            placeholder="City, State"
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={fieldLabelClass}>Timeline and situation summary</span>
          <textarea
            required
            rows={4}
            className={`${fieldBaseClass} min-h-28 resize-none`}
            value={form.summary}
            onChange={(event) => updateField("summary", event.target.value)}
            placeholder="Describe the capital need, timeline, and why conventional financing is not available or sufficient."
          />
        </label>

        <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[12.5rem] text-[0.6rem] leading-[1.8] tracking-[0.08em] text-[#5c5852]">
            We do not share submissions. Direct sponsors only.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-7 self-start border border-[#7a6741] px-8 py-5 text-[0.68rem] uppercase tracking-[0.22em] text-[#c8a96e] transition hover:-translate-y-0.5 hover:border-[#c8a96e] hover:bg-white/[0.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span>{isSubmitting ? "Submitting" : "Submit deal"}</span>
            <span aria-hidden>&rarr;</span>
          </button>
        </div>

        {success ? (
          <p className="text-[0.72rem] leading-[1.9] text-[#e6e2d8]">
            Your submission has been received. If the situation fits our
            mandate, you will hear from us within one business day.
          </p>
        ) : null}

        {error ? (
          <p className="text-[0.72rem] leading-[1.9] text-[#c8a96e]">{error}</p>
        ) : null}
      </form>
    </div>
  );
}
