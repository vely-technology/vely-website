"use client";

import { track } from "@vercel/analytics";

export function TrackedEmail({ email, subject, className, children }: { email: string; subject?: string; className?: string; children?: React.ReactNode }) {
  const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <a className={className} href={href} onClick={() => track("support_email_click", { location: subject ? "support" : "footer" })}>{children ?? email}</a>;
}
