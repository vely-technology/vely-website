import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Pattaya — Meet People Near You on Vely",
  description:
    "Vely is the social discovery app in Pattaya for singles and couples. Find genuine connections in Jomtien, Central Pattaya, Pratumnak, and beyond. Free on Android.",
  keywords: [
    "dating app in Pattaya",
    "Pattaya dating app",
    "meet people in Pattaya",
    "social app Pattaya",
    "Pattaya singles app",
    "couples app Pattaya",
    "Vely Pattaya",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-pattaya/` },
  openGraph: {
    title: "Dating App in Pattaya | Vely",
    description:
      "Meet singles and couples across Pattaya with Vely — mutual matching, real chat, built-in safety. Free on Android.",
    url: `${SITE_URL}/dating-app-in-pattaya/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Pattaya",
  slug: "dating-app-in-pattaya",
  eyebrow: "FOR PATTAYA",
  heroHeading: "Meet real people in Pattaya —",
  heroHighlight: "genuine connections nearby.",
  heroSubtitle:
    "Vely is the social discovery app for singles and couples in Pattaya. From Jomtien to Pratumnak, Central Pattaya to Na Jomtien — find people nearby with mutual matching and zero unsolicited messages.",
  statValue: "100%",
  statLabel: "Mutual matching — connections start both ways",
  whyHeading: "Why Vely is right for Pattaya.",
  benefits: [
    {
      icon: "compass",
      title: "Discover people near you in Pattaya",
      text: "Vely uses your location to show you real profiles nearby — whether you're in Jomtien Beach, Pratumnak Hill, or Central Pattaya.",
    },
    {
      icon: "heart",
      title: "Singles and couples welcome",
      text: "Pattaya has a diverse mix of locals, long-term residents, and visitors. Vely supports both individual and couple profiles for all kinds of social connections.",
    },
    {
      icon: "shield",
      title: "Safe, adults-only (18+)",
      text: "Mutual matching, profile verification signals, in-app blocking, and reporting keep Vely a respectful space for genuine connections.",
    },
  ],
  steps: [
    {
      title: "Set up your profile",
      text: "Download free on Android, create your profile, and set Pattaya as your location. You'll be in the discovery feed in minutes.",
    },
    {
      title: "Find people near you",
      text: "Browse real profiles in your area. Filter by distance to find people in your part of Pattaya — from beachside to hillside.",
    },
    {
      title: "Match and connect",
      text: "When both of you are interested, chat opens inside the app. Move at your own pace from a conversation to meeting in person.",
    },
  ],
  faqs: [
    {
      question: "Which areas of Pattaya does Vely cover?",
      answer:
        "Vely covers all of Pattaya and surrounding areas — Jomtien, Pratumnak, Central Pattaya, Na Jomtien, Bang Saray, and beyond. Discovery is based on your current location.",
    },
    {
      question: "Is Vely free in Pattaya?",
      answer:
        "Yes. Vely is completely free to download on Android. Core features including discovery, matching, and messaging are free to use.",
    },
    {
      question: "Can I use Vely if I'm visiting Pattaya short-term?",
      answer:
        "Yes. Vely updates your location automatically so whether you're a resident or a visitor, you'll see people near your current location.",
    },
    {
      question: "Does Vely work for expats in Pattaya?",
      answer:
        "Yes. Vely works for everyone in Pattaya regardless of nationality or how long you've been there. Discovery is based on location and shared interests.",
    },
    {
      question: "Is Vely safe to use in Pattaya?",
      answer:
        "Vely is adults-only (18+) with mutual matching that prevents unsolicited contact, plus in-app blocking and reporting tools for full control over your experience.",
    },
  ],
  ctaHeading: "Start discovering Pattaya.",
  ctaText:
    "Download Vely free on Android and meet real people near you in Pattaya today.",
};

export default function DatingAppInPattayaPage() {
  return <SeoPage config={config} />;
}

