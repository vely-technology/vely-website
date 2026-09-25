import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in the UK — Meet People Nearby | Vely",
  description:
    "Vely is the open-minded dating app for singles in the UK. Meet singles and couples nearby in London, Manchester, Birmingham and beyond. GPS matching. Free on Android.",
  keywords: [
    "dating app for singles in UK",
    "singles dating app UK",
    "singles app London",
    "singles app Manchester",
    "singles app Birmingham",
    "singles app Glasgow",
    "meet singles near me UK",
    "open minded singles app UK",
    "Vely UK singles",
    "couples and singles dating UK",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-uk/` },
  openGraph: {
    title: "Dating App for Singles in the UK | Vely",
    description:
      "Open-minded GPS dating for singles in the UK. London, Manchester, Birmingham, Glasgow and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-uk/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in the UK",
  slug: "dating-app-for-singles-in-uk",
  eyebrow: "FOR UK SINGLES",
  heroHeading: "Open-minded dating for singles",
  heroHighlight: "across the United Kingdom.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles in the UK. Discover singles and couples in London, Manchester, Birmingham, Bristol, Leeds, Edinburgh, Glasgow, Liverpool, and everywhere in between.",
  statValue: "12",
  statLabel: "Major UK cities with active Vely communities",
  whyHeading: "The dating app UK singles have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real people near you in the UK",
      text: "GPS discovery shows real profiles in your UK city. Whether you're in central London or a smaller city, Vely finds people near you.",
    },
    {
      icon: "heart",
      title: "All connection types welcome",
      text: "Meet other singles, discover couples, or both. M+M, M+F, F+F — every orientation is supported on Vely. No assumptions about what you're looking for.",
    },
    {
      icon: "spark",
      title: "Mutual matching only",
      text: "Your likes are private until both sides are interested. Every conversation starts from genuine two-way intent — no unsolicited messages.",
    },
  ],
  steps: [
    {
      title: "Download and create your profile",
      text: "Sign up free on Android. Build your profile in minutes — add photos, interests, and what kind of connections you're looking for.",
    },
    {
      title: "Discover people nearby in the UK",
      text: "Vely shows you real profiles nearby. Use distance and interest filters to find singles or couples who match your vibe.",
    },
    {
      title: "Match and start a conversation",
      text: "When someone likes you back, start chatting. Move at your own pace — from a message to meeting in person when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Which UK cities is Vely available in?",
      answer:
        "Vely works across the entire UK — London, Manchester, Birmingham, Bristol, Leeds, Edinburgh, Glasgow, Liverpool, Newcastle, Sheffield, Nottingham, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in the UK?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free. Premium unlocks unlimited likes.",
    },
    {
      question: "Is Vely an alternative to Feeld or 3fun in the UK?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you're looking for alternatives to Feeld or 3fun in the UK, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Can singles in the UK meet couples on Vely?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in the UK?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "UK singles — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you across the UK.",
};

export default function DatingAppForSinglesInUKPage() {
  return <SeoPage config={config} />;
}