import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in the Philippines — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in the Philippines. Meet other couples nearby in Manila, Quezon City, Cebu, and beyond. Free on Android.",
  keywords: [
    "dating app for couples in Philippines",
    "couples dating app Philippines",
    "couples app Manila",
    "couples app Quezon City",
    "couples app Cebu",
    "meet couples near me Philippines",
    "open minded dating app Philippines",
    "couples dating app Manila",
    "couples app Davao",
    "Vely Philippines",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-philippines/` },
  openGraph: {
    title: "Dating App for Couples in the Philippines | Vely",
    description:
      "GPS dating for open-minded couples in the Philippines. Manila, Quezon City, Cebu, Davao, and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-philippines/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in the Philippines",
  slug: "dating-app-for-couples-in-philippines",
  eyebrow: "FOR FILIPINO COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across the Philippines.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in the Philippines. Discover other couples in Manila, Quezon City, Cebu, Davao, Baguio, Iloilo, Cagayan de Oro, and cities everywhere in between.",
  statValue: "6",
  statLabel: "Major Philippine cities with Vely communities",
  whyHeading: "The couples app Filipino couples have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples near you in the Philippines",
      text: "GPS discovery shows real couple profiles in your Philippine city. Whether you're in Manila, Quezon City, Cebu, or a smaller island, Vely finds other couples nearby.",
    },
    {
      icon: "heart",
      title: "All couple types welcome",
      text: "M+F, M+M, F+F — every orientation is welcome on Vely. No assumptions about what you're looking for.",
    },
    {
      icon: "shield",
      title: "Safe and mutual",
      text: "Both sides match before chatting. Verified profiles, blocking, reporting — all built in. Adults only, 18+.",
    },
  ],
  steps: [
    {
      title: "Create your couple profile",
      text: "Sign up and build a joint couple profile. Add both partners' details, photos, and what kind of connections you're looking for.",
    },
    {
      title: "Find couples near you",
      text: "Browse couple profiles nearby. Use filters to find couples who share your interests and relationship style — from major cities to smaller islands.",
    },
    {
      title: "Match and connect",
      text: "When another couple likes you back, the chat opens. Connect at your own pace — from a message to meeting in person when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Which Philippine cities is Vely available in?",
      answer:
        "Vely is available across the entire Philippines — Manila, Quezon City, Cebu, Davao, Baguio, Iloilo, Cagayan de Oro, and every other city. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in the Philippines?",
      answer:
        "Yes. Vely is free to download on Android in the Philippines. Core features are free. Vely Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Can singles in the Philippines use Vely too?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in the Philippines?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Filipino couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover other couples near you across the Philippines.",
};

export default function DatingAppForCouplesInPhilippinesPage() {
  return <SeoPage config={config} />;
}