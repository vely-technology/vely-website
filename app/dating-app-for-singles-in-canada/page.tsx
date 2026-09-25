import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in Canada — Meet People Nearby | Vely",
  description:
    "Vely is the open-minded dating app for singles in Canada. Meet singles and couples nearby in Toronto, Vancouver, Montreal, Calgary and beyond. Free on Android.",
  keywords: [
    "dating app for singles in Canada",
    "singles dating app Canada",
    "singles app Toronto",
    "singles app Vancouver",
    "singles app Montreal",
    "singles app Calgary",
    "meet singles near me Canada",
    "open minded singles app Canada",
    "Vely Canada singles",
    "couples and singles dating Canada",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-canada/` },
  openGraph: {
    title: "Dating App for Singles in Canada | Vely",
    description:
      "Open-minded GPS dating for singles in Canada. Toronto, Vancouver, Montreal, Calgary and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-canada/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in Canada",
  slug: "dating-app-for-singles-in-canada",
  eyebrow: "FOR CANADIAN SINGLES",
  heroHeading: "Open-minded dating for singles",
  heroHighlight: "across Canada.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles in Canada. Discover singles and couples in Toronto, Vancouver, Montreal, Calgary, Quebec City, Winnipeg, Edmonton, and cities everywhere in between.",
  statValue: "10",
  statLabel: "Major Canadian cities with active Vely communities",
  whyHeading: "The dating app Canadian singles have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real people, near you",
      text: "GPS-based discovery surfaces real profiles in your Canadian city — not people hundreds of miles away. Find singles and couples in your neighbourhood.",
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
      question: "Which Canadian cities is Vely available in?",
      answer:
        "Vely is available across the entire Canada — Toronto, Vancouver, Montreal, Calgary, Quebec City, Winnipeg, Edmonton, Hamilton, Ottawa, Halifax, Victoria, Kelowna, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Canada?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free to use.",
    },
    {
      question: "Can singles meet couples on Vely?",
      answer:
        "Yes. Vely supports both single and couple profiles. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely an alternative to Feeld in Canada?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you're looking for alternatives to Feeld in Canada, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Is Vely safe to use in Canada?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Canadian singles — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you across Canada.",
};

export default function DatingAppForSinglesInCanadaPage() {
  return <SeoPage config={config} />;
}