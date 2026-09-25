import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in Ghana — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in Ghana. Meet other couples nearby in Accra, Kumasi, Tamale and beyond. Free on Android.",
  keywords: [
    "dating app for couples in Ghana",
    "couples dating app Ghana",
    "couples app Accra",
    "couples app Kumasi",
    "couples app Tamale",
    "meet couples near me Ghana",
    "open minded dating app Ghana",
    "couples dating app Accra",
    "couples app Cape Coast",
    "Vely Ghana",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-ghana/` },
  openGraph: {
    title: "Dating App for Couples in Ghana | Vely",
    description:
      "GPS dating for open-minded couples in Ghana. Accra, Kumasi, Tamale, Cape Coast and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-ghana/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in Ghana",
  slug: "dating-app-for-couples-in-ghana",
  eyebrow: "FOR GHANAIAN COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across Ghana.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in Ghana. Discover other couples in Accra, Kumasi, Tamale, Cape Coast, Takoradi, Ashaiman, and cities everywhere in between.",
  statValue: "5",
  statLabel: "Major Ghanaian cities with Vely communities",
  whyHeading: "The couples app Ghanaian couples have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples near you in Ghana",
      text: "GPS discovery shows real couple profiles in your Ghanaian city. Whether you're in Accra, Kumasi, Tamale, or a smaller city, Vely finds other couples nearby.",
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
      text: "Browse couple profiles nearby. Use filters to find couples who share your interests and relationship style — from major cities to smaller towns.",
    },
    {
      title: "Match and connect",
      text: "When another couple likes you back, the chat opens. Connect at your own pace — from a message to meeting in person when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Which Ghanaian cities is Vely available in?",
      answer:
        "Vely is available across the entire Ghana — Accra, Kumasi, Tamale, Cape Coast, Takoradi, Ashaiman, Tema, and every other city. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Ghana?",
      answer:
        "Yes. Vely is free to download on Android in Ghana. Core features are free. Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Can singles in Ghana use Vely too?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in Ghana?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Ghanaian couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover other couples near you across Ghana.",
};

export default function DatingAppForCouplesInGhanaPage() {
  return <SeoPage config={config} />;
}