import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples — Discover Other Couples Together",
  description:
    "Vely is the dating app built for couples. Meet other couples nearby, make new friends, and discover shared experiences — safely, mutually, and on your terms. Free on Android.",
  keywords: [
    "dating app for couples",
    "couples dating app India",
    "couples social app",
    "meet other couples",
    "couples only app",
    "Vely couples",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples/` },
  openGraph: {
    title: "Dating App for Couples | Vely",
    description:
      "Meet other couples nearby with Vely — mutual matching, real-time chat, and safety controls designed for couples who want meaningful connections.",
    url: `${SITE_URL}/dating-app-for-couples/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples",
  slug: "dating-app-for-couples",
  eyebrow: "FOR COUPLES",
  heroHeading: "The dating app built",
  heroHighlight: "for couples like you.",
  heroSubtitle:
    "Vely is the social discovery app where couples can connect together — browse profiles, meet other couples, and build real friendships without the guesswork.",
  statValue: "2-in-1",
  statLabel: "Joint couple profile",
  whyHeading: "Why couples choose Vely over regular dating apps.",
  benefits: [
    {
      icon: "heart",
      title: "One profile, both of you",
      text: "Create a joint couple profile that represents you as a unit. No more building a profile that was not designed for two people.",
    },
    {
      icon: "compass",
      title: "Discover other couples nearby",
      text: "Filter your discovery to find other couples in your city who share your interests, vibe, and connection style.",
    },
    {
      icon: "spark",
      title: "Mutual matching",
      text: "Both sides express interest privately. A conversation only opens when the feeling is mutual — no unsolicited messages.",
    },
  ],
  steps: [
    {
      title: "Create your couple profile",
      text: "Sign up together and build one shared profile — add your photos, interests, and what kind of connections you're looking for.",
    },
    {
      title: "Browse couples nearby",
      text: "Swipe through couple profiles in your area. Filter by interests, distance, and connection type.",
    },
    {
      title: "Match and start chatting",
      text: "When another couple likes you back, the chat opens. Take it at your own pace, in-app.",
    },
  ],
  faqs: [
    {
      question: "Can both partners use the same Vely account?",
      answer:
        "Yes. Vely is designed for couples to share a single joint profile, so both partners can discover and connect together from one account.",
    },
    {
      question: "Is Vely only for couples looking for other couples?",
      answer:
        "Vely supports both couples and singles. As a couple you can set your discovery preferences to find other couples, singles, or both — it's entirely up to you.",
    },
    {
      question: "Is Vely free to use?",
      answer:
        "Yes, Vely is free to download on Android. Core features including profile creation, discovery, and matching are available for free.",
    },
    {
      question: "Is Vely available in India?",
      answer:
        "Vely is built in India and available on Android via Google Play across all Indian cities.",
    },
    {
      question: "How is Vely different from regular dating apps?",
      answer:
        "Most dating apps are designed only for singles. Vely is built from the ground up for couples too — joint profiles, couple discovery, and mutual matching that accounts for both partners.",
    },
  ],
  ctaHeading: "Start exploring as a couple.",
  ctaText:
    "Download Vely free on Android and discover other couples nearby who match your vibe.",
};

export default function DatingAppForCouplesPage() {
  return <SeoPage config={config} />;
}

