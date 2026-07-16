import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Safety", description: "Learn about Vely's adults-only rules, profile verification, reporting, blocking, privacy, and safer meeting guidance.", alternates: { canonical: "/safety" } };

const pillars = [
  ["shield", "Adults only", "Vely is for people aged 18 and above. Accounts belonging to minors are not permitted and should be reported immediately."],
  ["check", "Profile signals", "Verification indicators can provide additional context, but no online verification replaces your own judgment."],
  ["heart", "Mutual connection", "Likes stay private and chat begins after mutual interest, helping reduce unwanted first contact."],
  ["chat", "Report and block", "Use in-app controls to report concerning profiles or behavior and prevent a person from contacting you."],
];

export default function SafetyPage() {
  return <main id="main-content"><PageHero eyebrow="VELY SAFETY" title="Confidence starts with control." description="Technology can support safer choices, but it cannot make them for you. Vely combines practical controls with clear guidance for online and in-person connections."/><section className="section"><div className="shell safety-grid">{pillars.map(([icon,title,text]) => <article className="safety-card-page" key={title}><div><Icon name={icon}/></div><h2>{title}</h2><p>{text}</p></article>)}</div></section><section className="section section--tinted"><div className="shell editorial-grid"><div className="editorial-lead"><span className="eyebrow">MEETING IN PERSON</span><h2>Take the connection at your pace.</h2></div><div className="prose"><ul className="number-list"><li><span>01</span><p><strong>Stay on-platform at first.</strong> Keep early conversations in Vely and watch for pressure to move elsewhere immediately.</p></li><li><span>02</span><p><strong>Meet publicly.</strong> Choose a busy place, arrange your own transport, and tell someone you trust where you are going.</p></li><li><span>03</span><p><strong>Protect personal information.</strong> Never send money, financial details, passwords, OTPs, or sensitive identity documents.</p></li><li><span>04</span><p><strong>Trust discomfort.</strong> You never owe anyone a meeting, reply, or explanation. Leave, block, or report when something feels wrong.</p></li></ul></div></div></section><section className="section"><div className="shell report-panel"><div className="report-icon"><Icon name="shield" size={34}/></div><div><span className="eyebrow">NEED TO REPORT SOMETHING?</span><h2>Your report matters.</h2><p>Use the report control on a profile or conversation. For child-safety concerns, review our dedicated standards. If anyone is in immediate danger, contact local emergency services.</p><div className="inline-actions"><Link className="button" href="/child-safety">Child safety standards</Link><Link className="button button--ghost" href="/support">Contact support</Link></div></div></div></section></main>;
}
