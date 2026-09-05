import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Dating App in India for Singles & Couples",
  description:
    "Looking for the best dating app in India? Vely helps singles and couples meet nearby through mutual matching, GPS discovery, chat, and safety controls.",
  keywords: [
    "best dating app in India",
    "dating app India",
    "Indian dating app",
    "relationship app India",
    "meet new people India",
    "find partner app India",
  ],
  alternates: { canonical: `${SITE_URL}/best-dating-app-in-india/` },
  openGraph: {
    title: "Best Dating App in India for Singles & Couples | Vely",
    description:
      "Meet nearby singles and couples in India with mutual matching, profile controls, and in-app chat.",
    url: `${SITE_URL}/best-dating-app-in-india/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Best Dating App in India",
  slug: "best-dating-app-in-india",
  eyebrow: "DATING APP INDIA",
  heroHeading: "A better dating app",
  heroHighlight: "for India.",
  heroSubtitle:
    "Vely helps singles and couples in India meet nearby people through GPS discovery, private likes, mutual matches, real-time chat, and practical safety controls.",
  statValue: "18+",
  statLabel: "Adults-only dating and social discovery",
  whyHeading: "What makes a dating app worth downloading in India.",
  benefits: [
    {
      icon: "compass",
      title: "Nearby discovery",
      text: "Find people around your city instead of wasting time on profiles that are too far away to meet.",
    },
    {
      icon: "spark",
      title: "Mutual matches first",
      text: "A chat starts only when both sides are interested, which keeps the experience calmer and more respectful.",
    },
    {
      icon: "shield",
      title: "Built-in safety controls",
      text: "Blocking, reporting, adults-only rules, and verification signals give users more control from the first interaction.",
    },
  ],
  contentSections: [
    {
      heading: "How to choose the best dating app in India",
      paragraphs: [
        "The best dating app in India is not only the app with the most downloads. For most people, the better question is whether the app helps them meet relevant people nearby, start conversations without pressure, and stay in control of who can contact them. India is a large and diverse dating market. What works in Mumbai may feel different from Pune, Delhi, Bangalore, Hyderabad, Chennai, Jaipur, or Kochi. A useful dating app needs to be flexible enough for different cities, languages, social circles, and relationship goals.",
        "Vely is designed around that practical reality. It is not only for one type of user. Singles can use Vely to meet new people, date, build friendships, or explore serious relationships. Couples can create a joint profile and discover other couples or singles depending on their preferences. That makes Vely different from many dating apps in India that assume everyone is a single person looking for the same kind of relationship.",
      ],
    },
    {
      heading: "Why mutual matching matters",
      paragraphs: [
        "Many people leave dating apps because the experience becomes noisy. Too many random messages, too many irrelevant profiles, and too much pressure can make dating feel like work. Mutual matching solves a large part of that problem. On Vely, interest is private until both sides like each other. That means conversations begin with consent from both people, not with one person pushing into another person’s inbox.",
        "This is especially important for users who want a safer dating app in India. Women, couples, introverts, and new users often prefer an app where they can browse slowly and decide privately. Vely’s matching model supports that behavior. You can take your time, review profiles, and start a chat only when the match makes sense.",
      ],
    },
    {
      heading: "Dating, relationships, and meeting new people",
      paragraphs: [
        "People search for dating apps with different goals: dating app India, relationship app India, meet new people, find partner, couples dating app, or dating app for singles. Vely sits across those needs by focusing on social discovery first. The app gives users a way to meet people nearby and then decide what the connection should become.",
        "If you are looking for a serious relationship, your profile can make that clear. If you want friendships, casual social discovery, or open-minded connections, you can express that too. The point is to reduce mismatch early. Better profiles and clearer preferences help people avoid conversations that were never going anywhere.",
      ],
    },
  ],
  steps: [
    {
      title: "Download Vely on Android",
      text: "Install the Vely app from Google Play and create your profile in a few minutes.",
    },
    {
      title: "Choose your preferences",
      text: "Set who you want to discover, where you want to search, and what kind of connection you are open to.",
    },
    {
      title: "Match and chat",
      text: "Like privately, match when interest is mutual, and keep the first conversation inside the app.",
    },
  ],
  faqs: [
    {
      question: "What is the best dating app in India?",
      answer:
        "The best dating app depends on what you need. Vely is built for singles and couples who want nearby discovery, mutual matching, chat, and safety controls on Android.",
    },
    {
      question: "Is Vely available in India?",
      answer:
        "Yes. Vely is available on Android through Google Play and can be used across Indian cities.",
    },
    {
      question: "Can couples use Vely in India?",
      answer:
        "Yes. Couples can create a joint profile and discover singles or other couples based on their preferences.",
    },
    {
      question: "Is Vely free?",
      answer:
        "Yes. Vely is free to download and includes core discovery, matching, and messaging features.",
    },
    {
      question: "Is Vely safe for dating?",
      answer:
        "Vely includes mutual matching, blocking, reporting, verification signals, and adults-only community rules to help users stay in control.",
    },
  ],
  ctaHeading: "Try Vely, free on Android.",
  ctaText:
    "Download Vely from Google Play and meet nearby singles and couples in India.",
};

export default function BestDatingAppInIndiaPage() {
  return <SeoPage config={config} />;
}
