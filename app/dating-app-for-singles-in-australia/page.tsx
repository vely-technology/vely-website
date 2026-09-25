import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in Australia — Meet People Nearby | Vely",
  description:
    "Vely is the open-minded dating app for singles in Australia. Meet singles and couples nearby in Sydney, Melbourne, Brisbane and beyond. Free on Android.",
  keywords: [
    "dating app for singles in Australia",
    "singles dating app Australia",
    "singles app Sydney",
    "singles app Melbourne",
    "singles app Brisbane",
    "meet singles near me Australia",
    "open minded singles app Australia",
    "Vely Australia singles",
    "couples and singles dating Australia",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-australia/` },
  openGraph: {
    title: "Dating App for Singles in Australia | Vely",
    description:
      "Open-minded GPS dating for singles in Australia. Sydney, Melbourne, Brisbane, Perth and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-australia/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in Australia",
  slug: "dating-app-for-singles-in-australia",
  eyebrow: "FOR AUSTRALIAN SINGLES",
  heroHeading: "Open-minded dating for singles",
  heroHighlight: "across Australia.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles in Australia. Discover singles and couples in Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra, and cities everywhere in between.",
  statValue: "8",
  statLabel: "Major Australian cities with active Vely communities",
  whyHeading: "The dating app Australian singles have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real people, near you",
      text: "GPS-based discovery surfaces real profiles in your Australian city — not people hundreds of miles away. Find singles and couples in your neighbourhood.",
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
      question: "Which Australian cities is Vely available in?",
      answer:
        "Vely is available across the entire Australia — Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra, Gold Coast, Newcastle, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Australia?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free to use.",
    },
    {
      question: "Can singles meet couples on Vely?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely an alternative to Feeld in Australia?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you're looking for alternatives to Feeld in Australia, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Is Vely safe to use in Australia?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Australian singles — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you across Australia.",
};

export default function DatingAppForSinglesInAustraliaPage() {
  return <SeoPage config={config} />;
}