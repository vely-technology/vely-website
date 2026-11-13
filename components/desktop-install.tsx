"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://unified-backend-u7zs.onrender.com";
const MIN_SUBMIT_MS = 3200; // backend rejects anything submitted faster than 3 s (bot guard)

/**
 * Desktop visitors cannot install an Android app from a laptop, and iPhone
 * visitors cannot install at all yet. This block gives both a next step:
 * a QR code that opens the Play listing on a phone, and an iOS waitlist.
 * Hidden on narrow screens via CSS (.desktop-install).
 */
export function DesktopInstall({ location = "unknown", compact = false }: { location?: string; compact?: boolean }) {
  return (
    <div className={`desktop-install${compact ? " desktop-install--compact" : ""}`}>
      <div className="desktop-install-qr">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/qr-play.svg" alt="QR code linking to Vely on Google Play" width={112} height={112} loading="lazy" />
        <div>
          <strong>On a computer?</strong>
          <span>Scan with your Android phone to open Vely on Google Play.</span>
        </div>
      </div>
      <IosWaitlist location={location} />
    </div>
  );
}

export function IosWaitlist({ location = "unknown" }: { location?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || status === "submitting") return;
    setStatus("submitting");
    try {
      const elapsed = Date.now() - startedAt.current;
      if (elapsed < MIN_SUBMIT_MS) {
        await new Promise((resolve) => setTimeout(resolve, MIN_SUBMIT_MS - elapsed));
      }
      const page = typeof window !== "undefined" ? window.location.pathname : "/";
      const response = await fetch(`${API_BASE_URL}/api/support/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "iOS waitlist",
          email: email.trim(),
          topic: "Other",
          message: `iOS waitlist signup from joinvely.com (${page}, placement: ${location}). Please notify this email when Vely launches on iPhone.`,
          company_website: "",
          submitted_after_ms: Date.now() - startedAt.current,
        }),
      });
      if (!response.ok) throw new Error("waitlist failed");
      trackEvent("ios_waitlist_signup", { location });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="ios-waitlist" onSubmit={submit} aria-label="iOS waitlist">
      <label>
        <span>On iPhone? Get an email when Vely launches on iOS.</span>
        <div className="ios-waitlist-row">
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => { setEmail(event.target.value); if (status !== "submitting") setStatus("idle"); }}
            disabled={status === "submitting" || status === "success"}
          />
          <button type="submit" className="button" disabled={status === "submitting" || status === "success"}>
            {status === "submitting" ? "Saving…" : status === "success" ? "You're on the list" : "Notify me"}
          </button>
        </div>
      </label>
      {status === "success" && <p className="form-status form-status--success">Thanks. We will email you once Vely is on the App Store.</p>}
      {status === "error" && <p className="form-status form-status--error">Could not save that right now. Please try again in a moment.</p>}
    </form>
  );
}
