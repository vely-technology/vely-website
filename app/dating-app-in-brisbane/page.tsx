import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Brisbane for Singles & Couples",
  description:
    "Meet singles and couples in Brisbane with Vely. GPS discovery across Fortitude Valley, West End, New Farm, South Bank, Chermside, Logan and the Gold Coast corridor, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Brisbane",
    "Brisbane dating app",
    "couples dating app Brisbane",
    "singles app Brisbane",
    "meet people in Brisbane",
    "open minded dating Brisbane",
    "Vely Brisbane",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-brisbane/` },
  openGraph: {
    title: "Dating App in Brisbane | Vely",
    description: "Meet singles and couples in Brisbane with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-brisbane/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Brisbane",
  slug: "dating-app-in-brisbane",
  eyebrow: "FOR BRISBANE",
  heroHeading: "Meet people who fit your Brisbane —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Brisbane, Fortitude Valley, West End, New Farm, South Bank, Chermside, Logan and the Gold Coast corridor discover genuine local connections through mutual matching.",
  statValue: "BRISBANE",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Brisbane.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Brisbane profiles using your location, distance preferences and shared interests.",
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
      heading: "Why Brisbane needs a different kind of dating app",
      paragraphs: [
        "Brisbane spreads a long way along the river and down the coast. A match in Redcliffe is a long drive from a match in Logan, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are in the CBD, Fortitude Valley, West End, the northside, the southside or down towards the Gold Coast.",
        "Brisbane has a relaxed, fast-growing dating scene and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Brisbane",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe in West End, a walk along South Bank or a bar in Fortitude Valley, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Brisbane profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Brisbane and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Brisbane?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater Brisbane, including the inner north, the inner south, the bayside suburbs, Ipswich and the Gold Coast corridor. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Brisbane?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Brisbane?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Brisbane?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Brisbane, Vely offers GPS discovery, mutual matching and joint couple profiles.",
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
  ctaHeading: "Start discovering Brisbane.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function BrisbaneDatingPage() {
  return <SeoPage config={config} />;
}
