import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Vancouver for Singles & Couples",
  description:
    "Meet singles and couples in Vancouver with Vely. GPS discovery across Kitsilano, Mount Pleasant, Commercial Drive, Yaletown, Burnaby, Richmond, Surrey and North Vancouver, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Vancouver",
    "Vancouver dating app",
    "couples dating app Vancouver",
    "singles app Vancouver",
    "meet people in Vancouver",
    "open minded dating Vancouver",
    "Vely Vancouver",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-vancouver/` },
  openGraph: {
    title: "Dating App in Vancouver | Vely",
    description: "Meet singles and couples in Vancouver with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-vancouver/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Vancouver",
  slug: "dating-app-in-vancouver",
  eyebrow: "FOR VANCOUVER",
  heroHeading: "Meet people who fit your Vancouver —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Vancouver, Kitsilano, Mount Pleasant, Commercial Drive, Yaletown, Burnaby, Richmond, Surrey and North Vancouver discover genuine local connections through mutual matching.",
  statValue: "VANCOUVER",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Vancouver.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Vancouver profiles using your location, distance preferences and shared interests.",
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
      heading: "Why Vancouver needs a different kind of dating app",
      paragraphs: [
        "Metro Vancouver is split by bridges and water. A match in Surrey is a long way from a match on the North Shore, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are downtown, on the west side, in East Van, in Burnaby or across a bridge.",
        "Vancouver has a laid-back, open-minded dating scene and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Vancouver",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe in Mount Pleasant, a walk along the seawall or a bar on Commercial Drive, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Vancouver profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Vancouver and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Vancouver?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Metro Vancouver, including the city, Burnaby, Richmond, Surrey, New Westminster, Coquitlam and the North Shore. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Vancouver?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Vancouver?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Vancouver?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Vancouver, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-canada/", label: "Dating app for singles in Canada" },
    { href: "/dating-app-for-couples-in-canada/", label: "Dating app for couples in Canada" },
    { href: "/dating-app-in-toronto/", label: "Dating app in Toronto" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering Vancouver.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function VancouverDatingPage() {
  return <SeoPage config={config} />;
}
