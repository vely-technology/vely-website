import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { IosBadge, StoreButton } from "@/components/store-button";
import { PhoneShowcase } from "@/components/phone-showcase";
import { faqs, features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vely – Open-Minded Dating App for Singles & Couples",
  description:
    "Vely is the open-minded dating app for singles and couples. GPS matching, verified profiles, mutual likes only. Meet people nearby. Free on Android.",
  alternates: { canonical: "https://joinvely.com/" },
  openGraph: {
    title: "Vely – Open-Minded Dating for Singles & Couples",
    description:
      "GPS dating for singles and couples. Mutual matching. Verified profiles. All orientations welcome. Free on Android.",
    url: "https://joinvely.com",
  },
};

export default function HomePage() {
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
      <section className="hero">
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-brand-eyebrow">
              <Image src="/brand-mark.png" alt="" width={18} height={18} />
              Social discovery, made more human
            </span>
            <h1>
              Open-minded dating for <em>singles and couples.</em>
            </h1>
            <p>
              Vely is the GPS-based dating app for singles and couples exploring
              open-minded connections. Mutual matching, verified profiles,
              all orientations welcome.
            </p>
            <div className="hero-actions">
              <StoreButton location="hero" />
              <IosBadge />
            </div>
            <div className="trust-row">
              <span>
                <Icon name="shield" size={17} /> Adults only, 18+
              </span>
              <span>
                <Icon name="check" size={17} /> You choose who connects
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-note floating-note--top">
              <Icon name="spark" />
              <span>
                <strong>It’s a match</strong>
                Start a real conversation
              </span>
            </div>
            <PhoneShowcase />
            <div className="floating-note floating-note--bottom">
              <Icon name="shield" />
              <span>
                <strong>Stay in control</strong>
                Block and report anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip">
        <div className="shell audience-grid">
          <div>
            <span>FOR SINGLES</span>
            <strong>Find friendships and people who get you.</strong>
          </div>
          <i />
          <div>
            <span>FOR COUPLES</span>
            <strong>Meet other people and couples together.</strong>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">WHY VELY</span>
            <h2>Less noise. More genuine connection.</h2>
            <p>
              Thoughtful discovery tools help you decide who enters your circle
              and when the conversation begins.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon name={feature.icon} />
                </div>
                <span>0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="shell split">
          <div className="showcase-stack">
            <PhoneShowcase variant="chat" />
            <div className="connection-orbit">
              <span>RJ</span>
              <i />
              <span>AS</span>
            </div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>From nearby to saying hi.</h2>
            <ol className="steps">
              <li>
                <span>1</span>
                <div>
                  <h3>Show up as yourself</h3>
                  <p>
                    Create a single or couple profile, add your interests, and
                    choose what kind of connections you want.
                  </p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>Discover with intention</h3>
                  <p>
                    Explore nearby profiles and privately decide who feels right
                    for you.
                  </p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Match, then message</h3>
                  <p>
                    When the interest is mutual, start chatting and take the
                    connection at your own pace.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section safety-preview">
        <div className="shell split split--reverse">
          <div className="split-copy">
            <span className="eyebrow">SAFETY, BUILT IN</span>
            <h2>Your boundaries belong to you.</h2>
            <p>
              Every connection should begin with choice. Vely gives you practical
              tools to manage who can reach you and act when something does not
              feel right.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" /> Verification signals on eligible profiles
              </li>
              <li>
                <Icon name="check" /> In-app reporting and blocking
              </li>
              <li>
                <Icon name="check" /> Private likes and mutual matching
              </li>
              <li>
                <Icon name="check" /> Clear adults-only community standards
              </li>
            </ul>
            <Link className="text-link" href="/safety">
              Explore Vely safety <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="profile-showcase">
            <div className="shield-halo">
              <Icon name="shield" size={40} />
            </div>
            <PhoneShowcase variant="profile" />
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>Questions, meet answers.</h2>
            <p>Everything you need before getting started.</p>
            <Link className="text-link" href="/support">
              Visit support <Icon name="arrow" size={18} />
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

      <section className="download-cta">
        <div className="shell cta-inner">
          <div>
            <Image className="cta-brand-mark" src="/brand-mark-white.png" alt="" width={58} height={58} />
            <span className="eyebrow eyebrow--light">YOUR NEXT CONNECTION</span>
            <h2>There are people worth meeting.</h2>
            <p>Discover who is nearby and see where a simple hello can lead.</p>
          </div>
          <div>
            <StoreButton location="footer_cta" />
            <span className="cta-note">Available on Android · iOS coming soon</span>
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

