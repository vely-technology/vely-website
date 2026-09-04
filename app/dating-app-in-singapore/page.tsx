import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Singapore — Meet Singles & Couples Near You | Vely",
  description:
    "Vely is the open-minded dating app in Singapore for singles and couples. GPS matching in Orchard, Tanjong Pagar, Bugis and beyond. Free on Android.",
  keywords: [
    "dating app in Singapore",
    "Singapore dating app",
    "meet people in Singapore",
    "couples app Singapore",
    "open minded dating Singapore",
    "singles Singapore app",
    "Vely Singapore",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-singapore/` },
  openGraph: {
    title: "Dating App in Singapore | Vely",
    description:
      "Meet singles and couples in Singapore with Vely. GPS matching, mutual likes, verified profiles. Free on Android.",
    url: `${SITE_URL}/dating-app-in-singapore/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Singapore",
  slug: "dating-app-in-singapore",
  eyebrow: "FOR SINGAPORE",
  heroHeading: "Singapore's open-minded dating app —",
  heroHighlight: "real connections nearby.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded singles and couples in Singapore. From Orchard to Tanjong Pagar, Bugis to Jurong — discover real people near you.",
  statValue: "GPS",
  statLabel: "Real profiles across Singapore",
  whyHeading: "Why Vely works in Singapore.",
  benefits: [
    {
      icon: "compass",
      title: "Singapore-sized discovery",
      text: "Singapore is compact but vibrant. Vely's GPS discovery shows you real profiles in your neighbourhood — locals, expats, everyone.",
    },
    {
      icon: "heart",
      title: "Singles and couples welcome",
      text: "Whether you're single or part of a couple, Vely supports all profile types and all orientations. Open-minded and judgment-free.",
    },
    {
      icon: "spark",
      title: "Mutual matching — no spam",
      text: "Likes are private until both sides are interested. No unwanted messages — every conversation is genuinely mutual.",
    },
  ],
  steps: [
    {
      title: "Download and create your profile",
      text: "Free on Android. Single or couple profile — set up in minutes and join Singapore's open-minded dating community.",
    },
    {
      title: "Discover people near you in Singapore",
      text: "GPS-based feed shows real profiles across Singapore. Filter by distance and interests.",
    },
    {
      title: "Match and connect",
      text: "When interest is mutual, the chat opens. From a message to meeting for hawker food when you're comfortable.",
    },
  ],
  faqs: [
    {
      question: "Which areas of Singapore does Vely cover?",
      answer:
        "Vely covers all of Singapore — Orchard, CBD, Tanjong Pagar, Bugis, Tiong Bahru, Jurong, Tampines, Woodlands, and every other district. Discovery radius is based on your current location.",
    },
    {
      question: "Is Vely free in Singapore?",
      answer:
        "Yes. Free to download on Android in Singapore. Core features are free.",
    },
    {
      question: "Does Vely work for expats in Singapore?",
      answer:
        "Yes. Vely works for everyone in Singapore regardless of nationality. GPS-based discovery means you see real people near your current location.",
    },
    {
      question: "Is Vely safe to use in Singapore?",
      answer:
        "Yes. Mutual matching prevents unsolicited contact. In-app blocking and reporting, verified profile signals, adults-only (18+).",
    },
    {
      question: "Can couples in Singapore use Vely to meet other couples?",
      answer:
        "Yes. Vely supports joint couple profiles and couple-to-couple discovery. Set your preferences to find other couples in Singapore.",
    },
  ],
  ctaHeading: "Singapore's open-minded dating app is here.",
  ctaText:
    "Download Vely free on Android and meet real people near you in Singapore.",
};

export default function DatingAppInSingaporePage() {
  return <SeoPage config={config} />;
}

