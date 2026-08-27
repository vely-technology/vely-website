import Link from "next/link";
import { Icon } from "@/components/icons";
import { StoreButton, IosBadge } from "@/components/store-button";
import { SITE_URL } from "@/lib/site";

export interface SeoPageConfig {
  /** Schema.org breadcrumb label for this page */
  breadcrumb: string;
  /** Page slug, e.g. "dating-app-for-couples" */
  slug: string;
  /** Pill eyebrow text above the H1 */
  eyebrow: string;
  /** Hero H1 — plain text portion */
  heroHeading: string;
  /** Hero H1 — italic/highlighted portion rendered in <em> */
  heroHighlight: string;
  /** Subtitle paragraph under the hero H1 */
  heroSubtitle: string;
  /** Big stat or trust number, e.g. "18+" */
  statValue: string;
  /** Label under the stat */
  statLabel: string;
  /** Section heading for the "why" block */
  whyHeading: string;
  /** Three benefit cards */
  benefits: { icon: string; title: string; text: string }[];
  /** How-it-works steps (3) */
  steps: { title: string; text: string }[];
  /** FAQ items */
  faqs: { question: string; answer: string }[];
  /** Final CTA heading */
  ctaHeading: string;
  /** Final CTA subtext */
  ctaText: string;
}

export function SeoPage({ config }: { config: SeoPageConfig }) {
  const { slug, eyebrow, heroHeading, heroHighlight, heroSubtitle, statValue, statLabel,
    whyHeading, benefits, steps, faqs, ctaHeading, ctaText, breadcrumb } = config;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: breadcrumb, item: `${SITE_URL}/${slug}` },
    ],
  };

  return (
    <main id="main-content">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="seo-hero">
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="shell seo-hero-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {heroHeading} <em>{heroHighlight}</em>
          </h1>
          <p className="seo-hero-sub">{heroSubtitle}</p>
          <div className="hero-actions">
            <StoreButton location={`seo_hero_${slug}`} />
            <IosBadge />
          </div>
          <div className="trust-row">
            <span><Icon name="shield" size={17} /> Safe, adults-only 18+</span>
            <span><Icon name="check" size={17} /> Mutual matching only</span>
            <span><Icon name="check" size={17} /> Free to download</span>
          </div>
          {/* Inline stat badge */}
          <div className="seo-stat-badge">
            <strong>{statValue}</strong>
            <span>{statLabel}</span>
          </div>
        </div>
      </section>

      {/* ── Why Vely ─────────────────────────────────────────────── */}
      <section className="section" id="why-vely">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">WHY VELY</span>
            <h2>{whyHeading}</h2>
          </div>
          <div className="seo-benefits-grid">
            {benefits.map((b, i) => (
              <article className="feature-card" key={b.title}>
                <div className="feature-icon"><Icon name={b.icon} /></div>
                <span>0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="section section--tinted">
        <div className="shell seo-steps-wrap">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>Up and connecting in minutes.</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span>{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Safety strip ─────────────────────────────────────────── */}
      <section className="section">
        <div className="shell seo-safety-row">
          <div className="seo-safety-icon"><Icon name="shield" size={36} /></div>
          <div>
            <h2>Your safety is built in, not bolted on.</h2>
            <p>
              Vely is an adults-only platform (18+) with mutual matching, profile verification
              signals, and in-app reporting and blocking — so you always control who can reach you.
            </p>
            <Link className="text-link" href="/safety">
              Read our safety guidelines <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section section--tinted faq-section">
        <div className="shell faq-grid">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">FAQ</span>
            <h2>Good to know.</h2>
            <p>Common questions answered.</p>
            <Link className="text-link" href="/support">
              More help <Icon name="arrow" size={18} />
            </Link>
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

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="download-cta">
        <div className="shell cta-inner">
          <div>
            <span className="eyebrow eyebrow--light">GET STARTED FREE</span>
            <h2>{ctaHeading}</h2>
            <p>{ctaText}</p>
          </div>
          <div>
            <StoreButton location={`seo_cta_${slug}`} />
            <span className="cta-note">Available on Android · iOS coming soon</span>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
