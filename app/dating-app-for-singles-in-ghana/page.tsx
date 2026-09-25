import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in Ghana — Meet People Nearby | Vely",
  description:
    "Vely is the open-minded dating app for singles in Ghana. Meet singles and couples nearby in Accra, Kumasi, Tamale and beyond. Free on Android.",
  keywords: [
    "dating app for singles in Ghana",
    "singles dating app Ghana",
    "singles app Accra",
    "singles app Kumasi",
    "singles app Tamale",
    "meet singles near me Ghana",
    "open minded singles app Ghana",
    "Vely Ghana singles",
    "couples and singles dating Ghana",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-ghana/` },
  openGraph: {
    title: "Dating App for Singles in Ghana | Vely",
    description:
      "Open-minded GPS dating for singles in Ghana. Accra, Kumasi, Tamale, Cape Coast and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-ghana/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in Ghana",
  slug: "dating-app-for-singles-in-ghana",
  eyebrow: "FOR GHANAIAN SINGLES",
  heroHeading: "Open-minded dating for singles",
  heroHighlight: "across Ghana.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles in Ghana. Discover singles and couples in Accra, Kumasi, Tamale, Cape Coast, Takoradi, Ashaiman, and cities everywhere in between.",
  statValue: "5",
  statLabel: "Major Ghanaian cities with active Vely communities",
  whyHeading: "The dating app Ghanaian singles have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real people, near you",
      text: "GPS-based discovery surfaces real profiles in your Ghanaian city — not people hundreds of miles away. Find singles and couples in your neighbourhood.",
    },
    {
      icon: "heart",
      title: "All connection types welcome",
      text: "Meet other singles, discover couples, or both. M+M, M+F, F+F — every orientation is supported on Vely. No boxes, no labels, just connection.",
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
      title: "Find people near you",
      text: "Vely shows you real profiles nearby. Use distance and interest filters to find singles or couples who match your vibe.",
    },
    {
      title: "Match and start a conversation",
      text: "When someone likes you back, start chatting. Move at your own pace — in app, then in real life when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Which Ghanaian cities is Vely available in?",
      answer:
        "Vely is available across the entire Ghana — Accra, Kumasi, Tamale, Cape Coast, Takoradi, Ashaiman, Tema, and every other city. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Ghana?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free to use.",
    },
    {
      question: "Can singles meet couples on Vely?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely an alternative to Feeld in Ghana?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you're looking for alternatives to Feeld in Ghana, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Is Vely safe to use in Ghana?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Ghanaian singles — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you across Ghana.",
};

export default function DatingAppForSinglesInGhanaPage() {
  return <SeoPage config={config} />;
}