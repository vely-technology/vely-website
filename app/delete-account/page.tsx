import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Delete Your Account", description: "How to request permanent deletion of your Vely account and associated personal information.", alternates: { canonical: `${SITE_URL}/delete-account/` } };

export default function DeleteAccountPage() {
  return <main id="main-content"><LegalPage title="Delete your account" description="Account deletion is permanent. Review what happens, cancel any active subscription, and choose one of the request methods below.">
    <aside className="warning"><strong>Before deleting</strong><p>Deleting your Vely account cannot be undone and does not automatically cancel a Google Play subscription.</p></aside>
    <h2>What will be deleted</h2><p>Your profile, uploaded photos, preferences, matches, and account access will be removed from active Vely systems. Messages and safety records may be retained or de-identified where required to protect other users, prevent fraud, resolve disputes, maintain financial records, or comply with law. Backup removal can take additional time.</p>
    <h2>Method 1: Request deletion in the app</h2><ol><li>Open Vely and go to <strong>Home</strong>.</li><li>Open <strong>Settings</strong>.</li><li>Select the account deletion option.</li><li>Read the warning and confirm the request.</li><li>Complete any identity verification shown by the app.</li></ol>
    <h2>Method 2: Request deletion by email</h2><p>If you cannot access the app, send a message from your registered email address to <a href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`}>{SUPPORT_EMAIL}</a> with the subject <strong>Account Deletion Request</strong>. Include your registered email address, profile nickname, and a clear statement that you want the account permanently deleted. Do not send your OTP, password, payment details, or identity documents unless support provides a secure, necessary verification process.</p>
    <h2>Processing timeline</h2><ul><li>We aim to acknowledge email requests within two business days.</li><li>Once identity is verified, the profile will be removed from active visibility and access will be revoked.</li><li>Personal information is generally scheduled for deletion within 30 days, subject to lawful retention.</li><li>Residual encrypted backups may cycle out later under normal backup-retention schedules.</li></ul>
    <h2>Cancel an Android subscription</h2><ol><li>Open Google Play and tap your profile icon.</li><li>Select <strong>Payments & subscriptions</strong>, then <strong>Subscriptions</strong>.</li><li>Select Vely and choose <strong>Cancel subscription</strong>.</li></ol><p>Store billing and refunds are controlled by Google Play under its applicable policies.</p>
    <h2>Need help?</h2><p>For deletion questions, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
  </LegalPage></main>;
}

