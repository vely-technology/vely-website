"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const topics = [
  "Account/Login",
  "Profile/Photos",
  "Discovery/Matches",
  "Payments/Subscription",
  "Safety/Report",
  "Delete Account",
  "Other",
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://unified-backend-u7zs.onrender.com";

type FormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
  company_website: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  topic: "Account/Login",
  message: "",
  company_website: "",
};

export function SupportContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "submitting") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/support/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          submitted_after_ms: Date.now() - startedAt.current,
        }),
      });

      if (!response.ok) {
        throw new Error("Support request failed");
      }

      setForm(initialForm);
      startedAt.current = Date.now();
      setStatus("success");
      setStatusMessage("Thanks, we received your message. We’ll review it and reply if needed.");
    } catch {
      setStatus("error");
      setStatusMessage("We could not submit your message right now. Please try again later.");
    }
  };

  return (
    <form className="support-form" onSubmit={submit}>
      <label className="support-form-honeypot" aria-hidden="true">
        <span>Company website</span>
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.company_website}
          onChange={(event) => updateField("company_website", event.target.value)}
        />
      </label>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            required
            type="email"
            maxLength={254}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
          />
        </label>
      </div>
      <label>
        <span>Topic</span>
        <select
          value={form.topic}
          onChange={(event) => updateField("topic", event.target.value)}
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          required
          minLength={20}
          maxLength={3000}
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us what happened. Do not include passwords, OTPs, payment card details, or identity documents."
        />
      </label>
      {statusMessage ? (
        <p className={`form-status form-status--${status}`}>{statusMessage}</p>
      ) : null}
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit support request"}
      </button>
    </form>
  );
}
