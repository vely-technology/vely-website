import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in the US — Meet People Nearby | Vely",
  description:
    "Vely is the open-minded dating app for singles in the US. Meet singles and couples nearby in New York, LA, Miami, Chicago and beyond. Free on Android.",
  keywords: [
    "dating app for singles in US",
    "singles dating app USA",
    "singles app United States",
    "meet singles near me",
    "open minded dating app US",
    "singles app New York",
    "dating app Los Angeles",
    "meet people Miami",
    "singles app Chicago",
    "Vely US singles",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-us/` },
  openGraph: {
    title: "Dating App for Singles in the US | Vely",
    description:
      "Open-minded GPS dating for singles in the US. New York, LA, Miami, Chicago and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-us/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in the US",
  slug: "dating-app-for-singles-in-us",
  eyebrow: "FOR US SINGLES",
  heroHeading: "Open-minded dating for singles",
  heroHighlight: "across the United States.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles in the US. Discover singles and couples in New York, Los Angeles, Miami, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, and cities everywhere in between.",
  statValue: "50",
  statLabel: "States with active Vely communities",
  whyHeading: "The dating app US singles have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real people, near you",
      text: "GPS-based discovery surfaces real profiles in your US city — not people hundreds of miles away. Find singles and couples in your neighbourhood.",
    },
    {
      icon: "heart",
      title: "All connection types welcome",
      text: "Meet other singles, discover couples, or both. M+F, M+M, F+F — every orientation is supported on Vely. No boxes, no labels, just connection.",
    },
    {
      icon: "spark",
      title: "Mutual matching, always",
      text: "Both sides must express interest before a conversation opens. No unsolicited messages, ever. Your likes stay private until it's mutual.",
    },
  ],
  steps: [
    {
      title: "Download and create your profile",
      text: "Sign up free on Android. Build your profile in minutes — add photos, interests, and what kind of connections you're looking for.",
    },
    {
      title: "Find people near you in the US",
      text: "Vely shows you real profiles nearby. Use distance and interest filters to find the right match — singles, couples, or both.",
    },
    {
      title: "Match and connect",
      text: "When someone likes you back, start chatting. Move at your own pace — in app, then in real life.",
    },
  ],
  faqs: [
    {
      question: "Which US cities is Vely available in?",
      answer:
        "Vely is available across the entire United States. GPS-based discovery works in New York, Los Angeles, Miami, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Austin, Jacksonville, Fort Worth, Columbus, Charlotte, San Francisco, Indianapolis, Seattle, Denver, and every other US city.",
    },
    {
      question: "Is Vely free in the US?",
      answer:
        "Yes. Vely is free to download on Android in the US. Core features including profile creation, discovery, and matching are free. Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Is Vely safe to use?",
      answer:
        "Yes. Vely uses mutual matching to prevent unsolicited contact, verified profile signals, and in-app blocking and reporting. Adults only, 18+.",
    },
    {
      question: "Can singles meet couples on Vely?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles, couples, or both based on their preferences. Couples can also discover singles.",
    },
    {
      question: "Is Vely only for open relationships?",
      answer:
        "Vely is for anyone who is open-minded about connection. You choose what kind of relationships you're looking for — the app doesn't assume anything.",
    },
    {
      question: "What makes Vely different from Tinder or Bumble?",
      answer:
        "Vely is built for open-minded dating with explicit support for singles and couples together. Mutual matching prevents spam, GPS ensures local connections, and profiles support all orientations without labels.",
    },
  ],
  ctaHeading: "Open-minded singles in the US — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover singles and couples near you across the United States.",
};

export default function DatingAppForSinglesInUSPage() {
  return <SeoPage config={config} />;
}