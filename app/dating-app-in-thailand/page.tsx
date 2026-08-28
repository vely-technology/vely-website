import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Thailand — Meet Singles & Couples on Vely",
  description:
    "Vely is the social discovery app in Thailand for singles and couples. Meet real people nearby with mutual matching, safe connections, and zero spam. Free on Android.",
  keywords: [
    "dating app in Thailand",
    "social app Thailand",
    "meet people in Thailand",
    "singles app Thailand",
    "couples app Thailand",
    "Thailand dating app",
    "Vely Thailand",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-thailand` },
  openGraph: {
    title: "Dating App in Thailand | Vely",
    description:
      "Meet singles and couples in Thailand with Vely — mutual matching, real connections, and built-in safety. Free on Android.",
    url: `${SITE_URL}/dating-app-in-thailand`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Thailand",
  slug: "dating-app-in-thailand",
  eyebrow: "FOR THAILAND",
  heroHeading: "Meet real people in Thailand",
  heroHighlight: "who match your vibe.",
  heroSubtitle:
    "Vely is a social discovery app for singles and couples across Thailand — from Bangkok to Chiang Mai, Pattaya to Phuket. Discover genuine connections nearby with mutual matching and built-in safety.",
  statValue: "18+",
  statLabel: "Adults-only, safe community",
  whyHeading: "Why Vely works in Thailand.",
  benefits: [
    {
      icon: "compass",
      title: "Discover people near you",
      text: "Browse singles and couples in your city or neighbourhood using distance and interest filters — find people who are actually nearby.",
    },
    {
      icon: "spark",
      title: "Mutual matching only",
      text: "Your likes are private until both sides are interested. Every conversation starts from genuine two-way intent — no unsolicited messages.",
    },
    {
      icon: "shield",
      title: "Safe and adults-only (18+)",
      text: "Verification signals, in-app blocking, reporting tools, and clear community standards keep Vely a respectful space for everyone.",
    },
  ],
  steps: [
    {
      title: "Create your profile",
      text: "Sign up free and build a profile that represents who you are — your interests, what you're looking for, and how you want to connect.",
    },
    {
      title: "Discover people nearby in Thailand",
      text: "Vely shows you real people in your area. Set your location anywhere in Thailand and filter by distance, age, and interests.",
    },
    {
      title: "Match and start a conversation",
      text: "When both of you are interested, the chat opens. Take it at your own pace — from a message to meeting in person when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Is Vely available in Thailand?",
      answer:
        "Yes. Vely is available on Android via Google Play across Thailand — including Bangkok, Pattaya, Chiang Mai, Phuket, and beyond.",
    },
    {
      question: "Is Vely free in Thailand?",
      answer:
        "Yes. Vely is free to download on Android. Core features including profile creation, discovery, and matching are free to use.",
    },
    {
      question: "Can couples use Vely in Thailand?",
      answer:
        "Yes. Vely supports both individual singles profiles and joint couple profiles. Couples can discover and connect with other couples or singles based on their preferences.",
    },
    {
      question: "Is Vely safe to use in Thailand?",
      answer:
        "Vely is built with safety at its core — mutual matching means no one can message you without mutual interest, and in-app reporting and blocking let you stay in control.",
    },
    {
      question: "What languages does Vely support?",
      answer:
        "Vely currently operates in English. Additional language support is planned for future updates.",
    },
  ],
  ctaHeading: "Thailand's social discovery app is here.",
  ctaText:
    "Download Vely free on Android and start meeting real people near you across Thailand.",
};

export default function DatingAppInThailandPage() {
  return <SeoPage config={config} />;
}
