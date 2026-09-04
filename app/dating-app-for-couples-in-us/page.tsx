import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in the US — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in the US. Meet other couples nearby in New York, LA, Miami, Chicago and beyond. Free on Android.",
  keywords: [
    "dating app for couples in US",
    "couples dating app USA",
    "couples app United States",
    "meet couples near me",
    "open minded dating app US",
    "app for couples New York",
    "couples app Los Angeles",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-us/` },
  openGraph: {
    title: "Dating App for Couples in the US | Vely",
    description:
      "Open-minded GPS dating for couples in the US. New York, LA, Miami, Chicago and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-us/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in the US",
  slug: "dating-app-for-couples-in-us",
  eyebrow: "FOR US COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across the United States.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in the US. Discover other couples in New York, Los Angeles, Miami, Chicago, and cities everywhere in between.",
  statValue: "GPS",
  statLabel: "Real profiles near you, anywhere in the US",
  whyHeading: "The dating app US couples have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples, near you",
      text: "GPS-based discovery surfaces real couple profiles in your US city — not people hundreds of miles away. Find couples in your neighbourhood.",
    },
    {
      icon: "heart",
      title: "All couple types welcome",
      text: "M+F, M+M, F+F — every couple orientation is supported on Vely. No boxes, no labels, just connection.",
    },
    {
      icon: "spark",
      title: "Mutual matching, always",
      text: "Both couples must express interest before a conversation opens. No unsolicited messages, ever.",
    },
  ],
  steps: [
    {
      title: "Download and create your couple profile",
      text: "Sign up free on Android. Build your joint couple profile in minutes — both partners, one account.",
    },
    {
      title: "Find couples near you in the US",
      text: "Vely shows you real couple profiles nearby. Use distance and interest filters to find the right match.",
    },
    {
      title: "Match and connect",
      text: "When another couple likes you back, start chatting. Move at your own pace — in app, then in real life.",
    },
  ],
  faqs: [
    {
      question: "Which US cities is Vely available in?",
      answer:
        "Vely is available across the entire United States. GPS-based discovery works in New York, Los Angeles, Miami, Chicago, Houston, Phoenix, San Francisco, and every other US city.",
    },
    {
      question: "Is Vely free in the US?",
      answer:
        "Yes. Vely is free to download on Android in the US. Core features are free. Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Is Vely safe to use?",
      answer:
        "Yes. Vely uses mutual matching to prevent unsolicited contact, verified profile signals, and in-app blocking and reporting. Adults only, 18+.",
    },
    {
      question: "Can single Americans use Vely too?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles and couples based on their preferences.",
    },
    {
      question: "Is Vely only for open relationships?",
      answer:
        "Vely is for anyone who is open-minded about connection. You choose what kind of relationships you're looking for — the app doesn't assume anything.",
    },
  ],
  ctaHeading: "Open-minded couples in the US — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover couples near you across the United States.",
};

export default function DatingAppForCouplesInUSPage() {
  return <SeoPage config={config} />;
}

