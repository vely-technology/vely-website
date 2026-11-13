import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Sydney for Singles & Couples | Vely",
  description:
    "Meet singles and couples in Sydney with Vely. GPS discovery across the Inner West, Eastern Suburbs, North Shore and Parramatta, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Sydney",
    "Sydney dating app",
    "couples dating app Sydney",
    "singles app Sydney",
    "meet people in Sydney",
    "open minded dating Sydney",
    "Vely Sydney",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-sydney/` },
  openGraph: {
    title: "Dating App in Sydney | Vely",
    description: "Meet singles and couples in Sydney with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-sydney/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Sydney",
  slug: "dating-app-in-sydney",
  eyebrow: "FOR SYDNEY",
  heroHeading: "Meet people who fit your Sydney —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Sydney, the Inner West, the Eastern Suburbs, the North Shore, Parramatta and the Northern Beaches discover genuine local connections through mutual matching.",
  statValue: "SYDNEY",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Sydney.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Sydney profiles using your location, distance preferences and shared interests, from Bondi to Blacktown.",
    },
    {
      icon: "heart",
      title: "Built for singles and couples",
      text: "Choose an individual or couple profile and connect with people who are open about what they want.",
    },
    {
      icon: "shield",
      title: "Mutual matching matters",
      text: "No unsolicited conversations. Both sides choose to connect before chat opens, with safety controls built in.",
    },
  ],
  contentSections: [
    {
      heading: "Why Sydney needs a different kind of dating app",
      paragraphs: [
        "Sydney is a big, spread-out city. A match in Cronulla is a long way from a match in Hornsby, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are in the CBD, the Inner West, the Eastern Suburbs, the Hills or out west in Parramatta and Penrith.",
        "Sydney also has one of the most open-minded dating scenes in Australia, and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Sydney",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a café in Surry Hills, a walk along the harbour or a bar in Newtown, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Sydney profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Sydney and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Sydney?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater Sydney, including the Inner West, Eastern Suburbs, North Shore, Northern Beaches, Parramatta, the Hills and the Sutherland Shire. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Sydney?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Sydney?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Sydney?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Sydney, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-australia/", label: "Dating app for singles in Australia" },
    { href: "/dating-app-for-couples-in-australia/", label: "Dating app for couples in Australia" },
    { href: "/dating-app-in-melbourne/", label: "Dating app in Melbourne" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering Sydney.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function SydneyDatingPage() {
  return <SeoPage config={config} />;
}
