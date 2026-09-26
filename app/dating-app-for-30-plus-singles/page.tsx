import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for 30+ Singles — Meet People Over 30 | Vely",
  description:
    "Vely is the open-minded dating app for singles over 30. Meet singles and couples near you — designed for adults 30+. GPS discovery, mutual matching, and safety controls. Free on Android.",
  keywords: [
    "dating app for 30+ singles",
    "dating app for singles over 30",
    "singles 30 plus dating app",
    "dating app 30 years old and above",
    "over 30 dating app",
    "dating app for 30 year olds",
    "singles over 30 dating",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-30-plus-singles/` },
  openGraph: {
    title: "Dating App for 30+ Singles | Vely",
    description:
      "Open-minded GPS dating for singles over 30. Mutual matching. Adults 30+. Free on Android.",
    url: `${SITE_URL}/dating-app-for-30-plus-singles/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for 30+ Singles",
  slug: "dating-app-for-30-plus-singles",
  eyebrow: "FOR 30+ SINGLES",
  heroHeading: "Open-minded dating for",
  heroHighlight: "singles over 30.",
  heroSubtitle:
    "Vely is the GPS-based dating app designed for singles aged 30 and above. Discover singles and couples nearby through mutual matching, chat when interest is mutual, and stay in control with practical safety tools.",
  statValue: "30+",
  statLabel: "Adults 30 and over welcome",
  whyHeading: "Why Vely works better for singles over 30.",
  benefits: [
    {
      icon: "compass",
      title: "Nearby discovery, no wasted time",
      text: "GPS-based discovery shows you real profiles in your area. Filter by distance, age, and interests to find people worth your time — not just anyone.",
    },
    {
      icon: "heart",
      title: "All connection types welcome",
      text: "Meet other singles, discover couples, or both. M+M, M+F, F+F — every orientation is supported on Vely at 30+.",
    },
    {
      icon: "shield",
      title: "Respectful and safe",
      text: "Mutual matching means no unsolicited messages. Verification signals, blocking, and reporting keep your experience safe.",
    },
  ],
  steps: [
    {
      title: "Download and create your profile",
      text: "Sign up free on Android. Build your profile in minutes — add photos, interests, and what kind of connections you're looking for.",
    },
    {
      title: "Find people who match your age and vibe",
      text: "Vely shows you real profiles nearby. Use age and interest filters to find singles or couples who share your lifestyle.",
    },
    {
      title: "Match and start a conversation",
      text: "When someone likes you back, start chatting. Move at your own pace — in app, then in real life when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Is Vely for singles over 30?",
      answer:
        "Yes. Vely is for singles aged 30 and above who want meaningful connections. Whether you're 30, 40, 50, or beyond — Vely is designed for adults who know what they want.",
    },
    {
      question: "Can singles over 30 meet couples on Vely?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely free for singles 30+?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free. Premium unlocks unlimited likes.",
    },
    {
      question: "Is Vely an alternative to Tinder or Bumble for people over 30?",
      answer:
        "Vely is different from mainstream dating apps. It supports singles and couples together, has mutual matching to prevent spam, and is built around genuine connection rather than endless swiping.",
    },
    {
      question: "Is Vely safe for singles over 30?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Singles over 30 — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you.",
};

export default function DatingAppFor30PlusSinglesPage() {
  return <SeoPage config={config} />;
}