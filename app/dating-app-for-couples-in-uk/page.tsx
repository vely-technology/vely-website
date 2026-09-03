import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Couples in the UK — Meet Other Couples | Vely",
  description:
    "Vely is the open-minded dating app for couples in the UK. Meet other couples in London, Manchester, Birmingham and beyond. GPS matching. Free on Android.",
  keywords: [
    "dating app for couples in UK",
    "couples dating app UK",
    "couples app United Kingdom",
    "meet couples London",
    "open minded dating UK",
    "couples app Manchester",
    "swinger app UK",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-uk` },
  openGraph: {
    title: "Dating App for Couples in the UK | Vely",
    description:
      "GPS dating for open-minded couples in the UK. London, Manchester, Birmingham and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-uk`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Couples in the UK",
  slug: "dating-app-for-couples-in-uk",
  eyebrow: "FOR UK COUPLES",
  heroHeading: "Open-minded dating for couples",
  heroHighlight: "across the United Kingdom.",
  heroSubtitle:
    "Vely is the GPS-based dating app for open-minded couples in the UK. Discover other couples in London, Manchester, Birmingham, Bristol, and everywhere in between.",
  statValue: "GPS",
  statLabel: "Real profiles near you, anywhere in the UK",
  whyHeading: "The couples app the UK has been missing.",
  benefits: [
    {
      icon: "compass",
      title: "Real couples near you in the UK",
      text: "GPS discovery shows real couple profiles in your UK city. Whether you're in central London or a smaller city, Vely finds people near you.",
    },
    {
      icon: "heart",
      title: "All couple types welcome",
      text: "M+F, M+M, F+F — every orientation is welcome on Vely. No assumptions about what you're looking for.",
    },
    {
      icon: "shield",
      title: "Safe and mutual",
      text: "Both sides match before chatting. Verified profiles, blocking, reporting — all built in.",
    },
  ],
  steps: [
    {
      title: "Download free on Android",
      text: "Available on Google Play in the UK. Create your couple profile in minutes.",
    },
    {
      title: "Find couples near you",
      text: "GPS-based discovery shows real profiles in your UK city. Filter by distance and interests.",
    },
    {
      title: "Match and connect",
      text: "When interest is mutual, chat opens. Move at your own pace.",
    },
  ],
  faqs: [
    {
      question: "Which UK cities is Vely available in?",
      answer:
        "Vely works across the entire UK — London, Manchester, Birmingham, Bristol, Leeds, Edinburgh, Glasgow, Liverpool, and everywhere else. GPS-based discovery works wherever you are.",
    },
    {
      question: "Is Vely free in the UK?",
      answer:
        "Yes. Free to download on Android. Core features are free. Premium unlocks unlimited likes.",
    },
    {
      question: "Is Vely an alternative to Feeld or 3fun in the UK?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you're looking for alternatives to Feeld or 3fun in the UK, Vely offers GPS-based discovery with mutual matching and no paywall on messaging.",
    },
    {
      question: "Can singles in the UK use Vely too?",
      answer:
        "Yes. Vely supports singles and couples. Singles can discover other singles, couples, or both based on their preferences.",
    },
    {
      question: "Is Vely safe to use in the UK?",
      answer:
        "Yes. Mutual matching prevents unsolicited messages. In-app blocking and reporting are available. Adults only, 18+.",
    },
  ],
  ctaHeading: "UK couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover open-minded couples near you across the UK.",
};

export default function DatingAppForCouplesInUKPage() {
  return <SeoPage config={config} />;
}
