import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Bangkok — Meet People Near You on Vely",
  description:
    "Vely is the social discovery app in Bangkok for singles and couples. Find real connections in Sukhumvit, Silom, Thonglor, and beyond. Mutual matching. Free on Android.",
  keywords: [
    "dating app in Bangkok",
    "Bangkok dating app",
    "meet people in Bangkok",
    "social app Bangkok",
    "Bangkok singles app",
    "couples app Bangkok",
    "Vely Bangkok",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-bangkok/` },
  openGraph: {
    title: "Dating App in Bangkok | Vely",
    description:
      "Meet singles and couples across Bangkok with Vely — mutual matching, real chat, built-in safety. Free on Android.",
    url: `${SITE_URL}/dating-app-in-bangkok/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Bangkok",
  slug: "dating-app-in-bangkok",
  eyebrow: "FOR BANGKOK",
  heroHeading: "Bangkok's social discovery app —",
  heroHighlight: "real connections, nearby.",
  heroSubtitle:
    "Whether you're in Sukhumvit, Silom, Thonglor, or On Nut — Vely helps singles and couples in Bangkok discover genuine connections with mutual matching and zero unsolicited messages.",
  statValue: "Local",
  statLabel: "Discover people in your Bangkok neighbourhood",
  whyHeading: "Why Vely is the right app for Bangkok.",
  benefits: [
    {
      icon: "compass",
      title: "Bangkok is big — Vely keeps it local",
      text: "With over 10 million people, Bangkok can feel overwhelming. Vely filters by neighbourhood and distance so you meet people who are actually near you.",
    },
    {
      icon: "heart",
      title: "Singles and couples both welcome",
      text: "Bangkok has a vibrant mix of locals, long-term residents, and expats. Vely supports both individual and couple profiles — discover whoever fits your social goals.",
    },
    {
      icon: "spark",
      title: "Every conversation starts mutual",
      text: "No cold messages. Both people express interest privately, and chat only opens when it is mutual — making every connection intentional.",
    },
  ],
  steps: [
    {
      title: "Download and set up in minutes",
      text: "Create your profile, add your interests, and set Bangkok as your location. You'll be in the discovery feed in under five minutes.",
    },
    {
      title: "Find people in your Bangkok area",
      text: "Vely's discovery feed surfaces real profiles near you. Filter by distance to find people in your part of the city.",
    },
    {
      title: "Match and connect",
      text: "When the interest is mutual, start chatting inside the app. Move at your own pace — from a message to meeting for coffee in Bangkok when you're comfortable.",
    },
  ],
  faqs: [
    {
      question: "Which areas of Bangkok does Vely cover?",
      answer:
        "Vely covers all of Bangkok — Sukhumvit, Silom, Siam, Thonglor, On Nut, Ekkamai, Ladprao, Chatuchak, and every other neighbourhood. Your discovery radius is based on your current location.",
    },
    {
      question: "Is Vely free in Bangkok?",
      answer:
        "Yes. Vely is completely free to download on Android and the core features — discovery, matching, and messaging — are free to use.",
    },
    {
      question: "Can I use Vely if I'm visiting Bangkok short-term?",
      answer:
        "Yes. Vely updates your location automatically, so whether you're a resident or a visitor, you'll see real people near your current location in Bangkok.",
    },
    {
      question: "Is Vely safe in Bangkok?",
      answer:
        "Vely uses mutual matching to prevent unsolicited contact, and has in-app blocking and reporting tools. It is an adults-only (18+) platform with active community moderation.",
    },
    {
      question: "Does Vely work for both locals and expats in Bangkok?",
      answer:
        "Yes. Vely works for everyone in Bangkok regardless of nationality or residency status. Profile discovery is based on location and shared interests, not background.",
    },
  ],
  ctaHeading: "Start discovering Bangkok.",
  ctaText:
    "Download Vely free on Android and meet real people in your part of Bangkok today.",
};

export default function DatingAppInBangkokPage() {
  return <SeoPage config={config} />;
}

