import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { preload } from "react-dom";
import { Icon } from "@/components/icons";
import { StoreButton } from "@/components/store-button";
import { PhoneShowcase } from "@/components/phone-showcase";
import { DesktopInstall } from "@/components/desktop-install";
import { faqs, locationLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vely App - Dating App for Couples & Singles",
  description:
    "Vely is the dating app where couples and singles meet together. One shared couple profile, GPS discovery, private likes, chat only after a mutual match. Free on Android.",
  alternates: { canonical: "https://joinvely.com/" },
  openGraph: {
    title: "Vely App - Dating App for Couples & Singles",
    description:
      "Couples and singles, meet together. Joint couple profiles, mutual matching, verified profiles. Free on Android.",
    url: "https://joinvely.com",
  },
};

const steps = [
  { title: "Show up as yourself", text: "Create a single profile, or one joint profile with your partner. Add photos, interests and what you're open to." },
  { title: "Discover nearby", text: "See singles and couples around you, filtered by distance and by what you're both looking for. Like privately." },
  { title: "Match, then message", text: "A chat opens only when the interest is mutual. Take it at your own pace, in the app, until you're ready to meet." },
];

export default function HomePage() {
  // Kick off the hero photo before the JS bundles compete for bandwidth (it is the LCP element).
  preload("/images/hero-mobile.webp", { as: "image", fetchPriority: "high", media: "(max-width: 760px)", type: "image/webp" });
  preload("/images/hero-wide.webp", { as: "image", fetchPriority: "high", media: "(min-width: 761px)", type: "image/webp" });
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-photo">
        <div className="hero-photo-media" aria-hidden="true">
          {/* Plain <picture> so the static export can serve a small file on phones (next/image is unoptimized here). */}
          <picture>
            <source media="(max-width: 760px)" type="image/webp" srcSet="/images/hero-mobile.webp" />
            <source media="(max-width: 760px)" srcSet="/images/hero-mobile.jpg" />
            <source type="image/webp" srcSet="/images/hero-wide.webp" />
            <img src="/images/hero-wide.jpg" alt="" width={1600} height={900} fetchPriority="high" decoding="async" />
          </picture>
        </div>
        <div className="shell">
          <div className="hero-photo-copy">
            <span className="eyebrow eyebrow--light">FREE ON ANDROID · 18+</span>
            <h1>
              Couples and singles, <em>meet together.</em>
            </h1>
            <p>
              One shared profile for couples, real people nearby, and a chat that opens only when it&apos;s mutual.
            </p>
            <div className="hero-actions">
              <StoreButton location="hero" />
            </div>
            <div className="hero-trust">
              <span><Icon name="shield" size={16} /> Verified couple profiles</span>
              <span><Icon name="check" size={16} /> Nobody messages you first</span>
              <span><Icon name="check" size={16} /> Block and report in one tap</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ────────────────────────────────────── */}
      <section className="section" id="features">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">WHO VELY IS FOR</span>
            <h2>Two kinds of profile. One honest place to meet.</h2>
            <p>Most apps are built for one person at a time. Vely treats couples as real users, and lets singles choose who they want to meet.</p>
          </div>
          <div className="audience-cards">
            <article className="audience-card">
              <Image src="/images/campus-couple-960.webp" alt="A couple sitting together outdoors, laughing" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <div className="audience-card-body">
                <span className="eyebrow">FOR COUPLES</span>
                <h3>One profile for both of you</h3>
                <p>Discover other couples and singles together, with partner verification so everyone knows you&apos;re real.</p>
                <Link className="text-link" href="/dating-app-for-couples/">How couple profiles work <Icon name="arrow" size={18} /></Link>
              </div>
            </article>
            <article className="audience-card">
              <Image src="/images/hero-cafe-960.webp" alt="A woman smiling in a café" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <div className="audience-card-body">
                <span className="eyebrow">FOR SINGLES</span>
                <h3>Meet people who want what you want</h3>
                <p>Choose singles, couples or both. Everyone you see has opted in to the same kind of connection.</p>
                <Link className="text-link" href="/singles-and-couples-dating-app/">Singles on Vely <Icon name="arrow" size={18} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section className="section section--tinted" id="how-it-works">
        <div className="shell how-grid">
          <div className="how-visual"><PhoneShowcase /></div>
          <div className="split-copy">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>From nearby to saying hi.</h2>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="inline-actions" style={{ marginTop: 28 }}>
              <StoreButton location="how_it_works" compact />
              <Link className="text-link" href="/vely-app/">What is Vely? <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety ──────────────────────────────────────────── */}
      <section className="section">
        <div className="shell seo-safety-row">
          <div className="seo-safety-icon"><Icon name="shield" size={36} /></div>
          <div>
            <h2>Your boundaries belong to you.</h2>
            <p>
              Adults only. Likes stay private until both sides match. Verification signals on eligible profiles,
              partner verification for couples, and blocking and reporting one tap away.
            </p>
            <Link className="text-link" href="/safety/">Read the safety guidelines <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
        <div className="shell proof-row">
          <div><strong>Mutual only</strong><span>No message requests from strangers, ever.</span></div>
          <div><strong>Verified couples</strong><span>Both partners confirm the joint profile.</span></div>
          <div><strong>18+ community</strong><span>Clear rules and in-app reporting.</span></div>
        </div>
      </section>

      {/* ── Locations ───────────────────────────────────────── */}
      <section className="section section--tinted">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">WHERE VELY IS GROWING</span>
            <h2>Find people near you.</h2>
          </div>
          <div className="city-chips">
            {locationLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/dating-app-for-married-couples/">Married couples</Link>
            <Link href="/dating-app-for-30-plus-singles/">Singles 30+</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>Questions, answered.</h2>
            <p>Everything you need before getting started.</p>
            <Link className="text-link" href="/support/">Visit support <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="download-cta">
        <div className="shell cta-inner">
          <div>
            <span className="eyebrow eyebrow--light">GET STARTED FREE</span>
            <h2>There are people worth meeting.</h2>
            <p>Download Vely on Android and see who&apos;s nearby.</p>
          </div>
          <div>
            <StoreButton location="footer_cta" />
            <span className="cta-note">Available on Android · iOS coming soon</span>
            <DesktopInstall location="footer_cta" compact />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
