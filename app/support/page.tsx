import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { TrackedEmail } from "@/components/tracked-link";
import { SupportContactForm } from "@/components/support-contact-form";

export const metadata: Metadata = { title: "Support", description: "Get help with your Vely account, OTP, profile, discovery, matches, subscriptions, safety, and account deletion.", alternates: { canonical: `${SITE_URL}/support/` } };

const topics = [
  ["Account and login", "Vely sends a one-time code to your email. Check spam, confirm the email address, and wait before requesting another code. Never share an OTP with anyone."],
  ["Profile and discovery", "Complete the required profile details and allow location access while using the app to see relevant nearby profiles. You can adjust preferences from settings."],
  ["Likes, matches, and chat", "A match is created when interest is mutual. If messages are delayed, check your connection and reopen the app before contacting support."],
  ["Subscriptions", "Android subscriptions are managed through Google Play. Cancellation stops the next renewal but does not automatically delete your Vely account."],
  ["Reports and blocking", "Use the controls available on profiles and conversations. Blocking limits further interaction; reports help the team review potential policy violations."],
  ["Privacy and deletion", "Review our privacy policy to understand data use. Follow the account-deletion guide to permanently request removal of your account and associated data."],
];

export default function SupportPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="VELY SUPPORT" title="How can we help?" description="Find quick answers for the most common account, discovery, safety, and subscription questions."/>
      <section className="section">
        <div className="shell support-grid">
          {topics.map(([title,text], index) => (
            <article className="support-topic" key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              {title === "Privacy and deletion" && (
                <Link href="/delete-account">Account deletion steps <Icon name="arrow" size={16}/></Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="section section--tinted">
        <div className="shell contact-card">
          <div className="contact-icon"><Icon name="mail" size={32}/></div>
          <div>
            <span className="eyebrow">STILL NEED HELP?</span>
            <h2>Contact Vely support.</h2>
            <p>Send your request here. We store it securely for review and do not use email forwarding, so auth email quota stays dedicated to OTP and system messages.</p>
            <SupportContactForm />
            <p className="support-fallback">If the form is unavailable, email <TrackedEmail email={SUPPORT_EMAIL} subject="Vely Support Request">{SUPPORT_EMAIL}</TrackedEmail>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

