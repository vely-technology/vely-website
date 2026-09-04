import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Child Safety Standards", description: "Vely's standards for preventing underage access and child sexual abuse and exploitation.", alternates: { canonical: `${SITE_URL}/child-safety/` } };

export default function ChildSafetyPage() {
  return <main id="main-content"><LegalPage title="Child Safety Standards" description="Vely is an adults-only platform with zero tolerance for child sexual abuse and exploitation.">
    <aside className="warning"><strong>Report urgent concerns</strong><p>Email <a href={`mailto:${SUPPORT_EMAIL}?subject=URGENT%20Child%20Safety%20Report`}>{SUPPORT_EMAIL}</a> with the subject “URGENT Child Safety Report.” If a child is in immediate danger, contact local law enforcement or emergency services first.</p></aside>
    <h2>1. Adults-only eligibility</h2><p>Users must be at least 18 years old. Date-of-birth information is requested during profile setup. Accounts reasonably believed to belong to minors may be restricted or removed while reviewed.</p>
    <h2>2. Prohibited content and behavior</h2><p>Vely prohibits child sexual abuse material, grooming, sexualization of minors, trafficking, exploitation, attempts to obtain such material, and links or instructions facilitating abuse. Profiles may not include photos of minors, even when the image is otherwise non-sexual.</p>
    <h2>3. Reporting</h2><p>Users can report concerning profiles, photos, messages, or suspected underage accounts through available in-app tools. Reports are confidential to the extent practicable and are reviewed according to severity. Provide profile details and a concise description, but never download, copy, or email suspected illegal imagery.</p>
    <h2>4. Enforcement</h2><p>We may preserve relevant information, restrict access, remove content, suspend or terminate accounts, and make reports to competent authorities or designated child-protection organizations when legally required. We respond to valid legal process and cooperate with authorized investigations.</p>
    <h2>5. Safety controls</h2><p>Vely provides blocking and reporting, adults-only rules, profile information requirements, and review processes intended to reduce abuse. No control is perfect; community reports remain important.</p>
    <h2>6. Ongoing review</h2><p>We review these standards, reporting routes, and enforcement processes as the product and applicable obligations evolve. Team access to safety reports is limited to operational need.</p>
    <h2>7. Contact</h2><p>Send child-safety concerns to <a href={`mailto:${SUPPORT_EMAIL}?subject=URGENT%20Child%20Safety%20Report`}>{SUPPORT_EMAIL}</a>. Include the relevant Vely profile identifier and nature of the concern. Do not transmit illegal content.</p>
  </LegalPage></main>;
}

