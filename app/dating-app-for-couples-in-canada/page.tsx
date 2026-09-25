import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in Canada — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in Canada. Meet other couples nearby in Toronto, Vancouver, Montreal, Calgary, and beyond. GPS matching. Free on Android.",
  keywords: [
    "dating app for couples in Canada",
    "couples dating app Canada",
    "couples app Toronto",
    "couples app Vancouver",
    "couples app Montreal",
    "couples app Calgary",
    "meet couples near me Canada",
    "open minded dating app Canada",
    "couples dating app Toronto",
    "couples app Vancouver",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-canada/` },
  openGraph: {
    title: "Dating App for Couples in Canada | Vely",
    description:
      "GPS dating for open-minded couples in Canada. Toronto, Vancouver, Montreal, Calgary, Quebec City and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-canada/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in Canada",
  slug: "dating-app-for-couples-in-canada",
  eyebrow: "FOR CANADIAN COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across Canada.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in Canada. Discover other couples in Toronto, Vancouver, Montreal, Calgary, Quebec City, Winnipeg, Edmonton, Hamilton, and cities everywhere in between.",
  statValue: "10",
  statLabel: "Major Canadian cities with Vely communities",
  whyHeading: "The couples app Canadian couples have been waiting for.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples near you in Canada",
      text: "GPS discovery shows real couple profiles in your Canadian city. Whether you're in Toronto, Vancouver, Montreal, or a smaller city, Vely finds other couples nearby.",
    },
    {
      icon: "heart",
      title: "All couple types welcome",
      text: "M+F, M+M, F+F — every orientation is welcome on Vely. No assumptions about what you're looking for. You choose your connection style.",
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
      question: "Which Canadian cities is Vely available in?",
      answer:
        "Vely is available across the entire Canada — Toronto, Vancouver, Montreal, Calgary, Quebec City, Winnipeg, Edmonton, Hamilton, Ottawa, Halifax, Victoria, Kelowna, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in Canada?",
      answer:
        "Yes. Vely is free to download on Android in Canada. Core features are free. Vely Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Is Vely an alternative to CoupleFriendly in Canada?",
      answer:
        "Vely is an open-minded dating app for couples seeking couples. If you're looking for alternatives to CoupleFriendly in Canada, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Can singles in Canada use Vely too?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in Canada?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Verification signals help ensure safety. Adults only, 18+.",
    },
  ],
  ctaHeading: "Canadian couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover other couples near you across Canada.",
};

export default function DatingAppForCouplesInCanadaPage() {
  return <SeoPage config={config} />;
}