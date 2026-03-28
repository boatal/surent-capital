"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ButtonPrimary } from "@/components/site/ButtonPrimary";

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

export function ContactForm({ legal }: { legal: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

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

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit deal.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit deal.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="deal-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <Field label="First name" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First" required />
        <Field label="Last name" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last" required />
      </div>
      <Field label="Company / Entity" name="company" value={form.company} onChange={handleChange} placeholder="Your sponsoring entity" required />
      <Field label="Email" name="email" value={form.email} onChange={handleChange} placeholder="Your email address" type="email" required />
      <div className="form-field">
        <label className="form-label" htmlFor="capitalType">
          Capital type needed
        </label>
        <select id="capitalType" name="capitalType" className="form-select" value={form.capitalType} onChange={handleChange} required>
          <option value="" disabled>
            Select type
          </option>
          <option>Bridge Loan</option>
          <option>Construction Capital</option>
          <option>Mezzanine / Preferred Equity</option>
          <option>Situational / Other</option>
        </select>
      </div>
      <div className="form-row">
        <Field label="Loan amount" name="loanAmount" value={form.loanAmount} onChange={handleChange} placeholder="$" required />
        <Field label="Asset type" name="assetType" value={form.assetType} onChange={handleChange} placeholder="Multifamily, commercial..." required />
      </div>
      <Field label="Asset location" name="assetLocation" value={form.assetLocation} onChange={handleChange} placeholder="City, State" required />
      <div className="form-field">
        <label className="form-label" htmlFor="summary">
          Timeline and situation summary
        </label>
        <textarea
          id="summary"
          name="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="Describe the capital need, timeline, and why conventional financing is not available or sufficient."
          className="form-textarea"
          required
        />
      </div>
      <div className="form-submit">
        <div>
          <p className="form-legal">{legal}</p>
          {error ? <p className="form-error">{error}</p> : null}
          {submitted ? (
            <p className="form-success">Received. We will respond within one business day.</p>
          ) : null}
        </div>
        <ButtonPrimary type="submit" disabled={submitting}>
          {submitted ? "Received" : submitting ? "Submitting" : "Submit deal"}
        </ButtonPrimary>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
