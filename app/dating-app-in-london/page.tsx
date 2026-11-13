import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in London for Singles & Couples",
  description:
    "Meet singles and couples in London with Vely. GPS discovery across from Shoreditch and Hackney to Clapham, Brixton, Camden, Canary Wharf, Croydon and the suburbs inside the M25, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in London",
    "London dating app",
    "couples dating app London",
    "singles app London",
    "meet people in London",
    "open minded dating London",
    "Vely London",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-london/` },
  openGraph: {
    title: "Dating App in London | Vely",
    description: "Meet singles and couples in London with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-london/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in London",
  slug: "dating-app-in-london",
  eyebrow: "FOR LONDON",
  heroHeading: "Meet people who fit your London —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in London, from Shoreditch and Hackney to Clapham, Brixton, Camden, Canary Wharf, Croydon and the suburbs inside the M25 discover genuine local connections through mutual matching.",
  statValue: "LONDON",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in London.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore London profiles using your location, distance preferences and shared interests.",
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
      heading: "Why London needs a different kind of dating app",
      paragraphs: [
        "London is enormous. A match in Walthamstow is an hour from a match in Richmond, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are in Zone 1, east London, south of the river, north London or out in the suburbs.",
        "London has the largest open-minded dating scene in the UK and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in London",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe in Shoreditch, a walk along the South Bank or a pub in Clapham, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your London profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around London and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of London?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater London, including east, north, south and west London and the outer boroughs. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in London?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in London?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in London?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in London, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-uk/", label: "Dating app for singles in UK" },
    { href: "/dating-app-for-couples-in-uk/", label: "Dating app for couples in UK" },
    { href: "/dating-app-in-manchester/", label: "Dating app in Manchester" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering London.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function LondonDatingPage() {
  return <SeoPage config={config} />;
}
