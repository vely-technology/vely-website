import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in Australia — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in Australia. Meet other couples nearby in Sydney, Melbourne, Brisbane, Perth and beyond. GPS matching. Free on Android.",
  keywords: [
    "dating app for couples in Australia",
    "couples dating app Australia",
    "couples app Sydney",
    "couples app Melbourne",
    "couples app Brisbane",
    "meet couples near me Australia",
    "open minded dating app Australia",
    "couples dating app Sydney",
    "couples app Perth",
    "Vely Australia",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-australia/` },
  openGraph: {
    title: "Dating App for Couples in Australia | Vely",
    description:
      "GPS dating for open-minded couples in Australia. Sydney, Melbourne, Brisbane, Perth and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-australia/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in Australia",
  slug: "dating-app-for-couples-in-australia",
  eyebrow: "FOR AUSSIE COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across Australia.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in Australia. Discover other couples in Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra, and cities everywhere in between.",
  statValue: "8",
  statLabel: "Major Australian cities with Vely communities",
  whyHeading: "The couples app Australian couples have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples near you in Australia",
      text: "GPS discovery shows real couple profiles in your Australian city. Whether you're in Sydney, Melbourne, Brisbane, or a smaller city, Vely finds other couples nearby.",
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
      question: "Which Australian cities is Vely available in?",
      answer:
        "Vely is available across the entire Australia — Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra, Gold Coast, Newcastle, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Australia?",
      answer:
        "Yes. Vely is free to download on Android in Australia. Core features are free. Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Can singles in Australia use Vely too?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in Australia?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "Australian couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover other couples near you across Australia.",
};

export default function DatingAppForCouplesInAustraliaPage() {
  return <SeoPage config={config} />;
}