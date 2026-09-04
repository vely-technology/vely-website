import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Couples Dating App — Meet Other Couples Nearby | Vely",
  description:
    "Vely is the couples dating app for M+F, M+M, and F+F couples. Meet other couples nearby with GPS matching, mutual likes, and verified profiles. Free on Android.",
  keywords: [
    "couples dating app",
    "couple app",
    "app for couples to meet couples",
    "dating app for couples",
    "couples social app",
    "meet other couples",
    "swinger app",
    "couples match app",
  ],
  alternates: { canonical: `${SITE_URL}/couples-dating-app/` },
  openGraph: {
    title: "Couples Dating App | Vely",
    description:
      "Meet other couples nearby with Vely. M+F, M+M, F+F profiles welcome. GPS matching, mutual likes. Free on Android.",
    url: `${SITE_URL}/couples-dating-app/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Couples Dating App",
  slug: "couples-dating-app",
  eyebrow: "FOR COUPLES",
  heroHeading: "The dating app where",
  heroHighlight: "couples meet couples.",
  heroSubtitle:
    "Vely is the only dating app designed for couples — M+F, M+M, F+F all welcome. Create a joint couple profile, discover other couples nearby, and connect when the interest is mutual.",
  statValue: "3",
  statLabel: "Couple profile types supported",
  whyHeading: "Why couples choose Vely over mainstream dating apps.",
  benefits: [
    {
      icon: "heart",
      title: "Built for couples, not singles",
      text: "Most dating apps force couples to squeeze into a platform designed for singles. Vely is built from the ground up for couple profiles — M+F, M+M, F+F.",
    },
    {
      icon: "compass",
      title: "Find other couples nearby",
      text: "GPS-based discovery shows you other couples in your area. Filter by distance, interests, and couple type to find your match.",
    },
    {
      icon: "shield",
      title: "Private, safe, and mutual",
      text: "Likes are private until both couples match. Verified profiles, in-app blocking, and mutual matching keep every interaction safe.",
    },
  ],
  steps: [
    {
      title: "Create your couple profile",
      text: "Sign up and build a joint couple profile. Add both partners' details, photos, and what kind of connections you're looking for.",
    },
    {
      title: "Discover other couples",
      text: "Browse couple profiles nearby. Use filters to find couples who share your interests and relationship style.",
    },
    {
      title: "Match and start a conversation",
      text: "When another couple likes you back, the chat opens. Connect at your own pace.",
    },
  ],
  faqs: [
    {
      question: "What couple types does Vely support?",
      answer:
        "Vely supports M+F (male/female), M+M (male/male), and F+F (female/female) couple profiles. All couple types are equally supported.",
    },
    {
      question: "Can couples also match with singles on Vely?",
      answer:
        "Yes. You can set your discovery preferences to find other couples, singles, or both — the choice is yours.",
    },
    {
      question: "Is Vely free for couples?",
      answer:
        "Yes. Vely is free to download on Android. Core features including couple profile creation, discovery, and matching are free.",
    },
    {
      question: "Is Vely available globally?",
      answer:
        "Yes. Vely uses GPS so wherever you are, you'll discover real couples nearby. Available globally on Android.",
    },
    {
      question: "Is Vely discreet?",
      answer:
        "Yes. Likes are private until both sides match. You control your profile visibility and can block or report any user at any time.",
    },
  ],
  ctaHeading: "Find your kind of couple.",
  ctaText:
    "Download Vely free on Android and discover couples nearby who match your vibe.",
};

export default function CouplesDatingAppPage() {
  return <SeoPage config={config} />;
}

