import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Singles and Couples Dating App — Meet Everyone on Vely",
  description:
    "Vely is the dating app for singles and couples. Singles can meet couples. Couples can meet couples. GPS matching, verified profiles. Free on Android.",
  keywords: [
    "singles and couples dating app",
    "dating app for singles and couples",
    "single meet couples app",
    "couple friendly app",
    "meet couples as a single",
    "open minded singles app",
    "all in one dating app",
  ],
  alternates: { canonical: `${SITE_URL}/singles-and-couples-dating-app/` },
  openGraph: {
    title: "Singles and Couples Dating App | Vely",
    description:
      "The dating app for singles and couples. GPS matching, mutual likes, all orientations. Free on Android.",
    url: `${SITE_URL}/singles-and-couples-dating-app/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Singles and Couples Dating App",
  slug: "singles-and-couples-dating-app",
  eyebrow: "FOR EVERYONE",
  heroHeading: "The dating app for",
  heroHighlight: "singles and couples.",
  heroSubtitle:
    "Vely is the only dating app built for both singles and couples in one place. Singles can meet couples. Couples can meet couples. Everyone connects on their own terms.",
  statValue: "5",
  statLabel: "Profile types — single M/F, couple M+F, M+M, F+F",
  whyHeading: "One app. Every connection type.",
  benefits: [
    {
      icon: "heart",
      title: "Singles and couples, one app",
      text: "Whether you're a single looking to meet couples, or a couple looking to meet other couples — Vely supports every combination in one place.",
    },
    {
      icon: "compass",
      title: "GPS-based, genuinely nearby",
      text: "See real profiles near your location. Filter by distance, profile type, and interests to find exactly who you're looking for.",
    },
    {
      icon: "spark",
      title: "No unsolicited messages",
      text: "Every conversation starts from mutual interest. Likes are private until both sides match — so every chat is genuinely welcomed.",
    },
  ],
  steps: [
    {
      title: "Create a single or couple profile",
      text: "Sign up as a single or as a couple — Vely supports both. Add your photos, interests, and what kind of connections you want.",
    },
    {
      title: "Discover singles and couples nearby",
      text: "Your discovery feed surfaces singles and couples based on your preferences. Filter to find exactly your kind of match.",
    },
    {
      title: "Match when it's mutual",
      text: "When both sides are interested, the chat opens. Start a real conversation and see where it goes.",
    },
  ],
  faqs: [
    {
      question: "Can a single person match with a couple on Vely?",
      answer:
        "Yes. Vely is built for all match combinations — singles with couples, couples with couples, singles with singles. Discovery preferences let you choose who you want to see.",
    },
    {
      question: "What profile types does Vely support?",
      answer:
        "Vely supports single male, single female, and couple profiles (M+F, M+M, F+F). All orientations are welcome.",
    },
    {
      question: "Is this app only for hookups?",
      answer:
        "No. Vely is for open-minded connections of all kinds — friendships, dating, relationships, and social experiences. You choose what you're looking for on your profile.",
    },
    {
      question: "Is Vely free?",
      answer:
        "Yes, free to download on Android. Core features are free. Vely Premium adds unlimited likes and see who liked you.",
    },
    {
      question: "Is Vely available globally?",
      answer:
        "Yes. Vely is available globally on Android. GPS-based discovery works wherever you are.",
    },
  ],
  ctaHeading: "Singles and couples — you're all welcome.",
  ctaText:
    "Download Vely free on Android and discover open-minded people near you today.",
};

export default function SinglesAndCouplesDatingAppPage() {
  return <SeoPage config={config} />;
}

