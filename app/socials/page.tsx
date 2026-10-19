import type { Metadata } from "next";
import { PLAY_STORE_URL, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = { title: "Follow Vely", description: "Follow Vely on YouTube, Facebook, Instagram, Rumble, and X. Download Vely on Google Play.", alternates: { canonical: `${SITE_URL}/socials/` } };

export default function SocialsPage() {
  return <main id="main-content"><section className="page-hero"><div className="shell"><span className="eyebrow">STAY CONNECTED</span><h1>Follow Vely</h1><p>Find Vely across our official social channels and stay up to date with new features, community stories, and dating advice.</p></div></section><section className="section"><div className="shell social-links-page"><div className="social-links-grid">{SOCIAL_LINKS.map(({ label, href }) => <a className="social-link-card" key={href} href={href} target="_blank" rel="noopener noreferrer"><strong>{label}</strong><span>{href}</span></a>)}<a className="social-link-card social-link-card--primary" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"><strong>Google Play</strong><span>Download the Vely app for Android</span></a></div></div></section></main>;
}
