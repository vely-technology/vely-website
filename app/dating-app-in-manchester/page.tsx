import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Manchester for Singles & Couples",
  description:
    "Meet singles and couples in Manchester with Vely. GPS discovery across the Northern Quarter, Ancoats, Didsbury, Chorlton, Salford, Stockport, Bolton and the wider Greater Manchester area, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Manchester",
    "Manchester dating app",
    "couples dating app Manchester",
    "singles app Manchester",
    "meet people in Manchester",
    "open minded dating Manchester",
    "Vely Manchester",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-manchester/` },
  openGraph: {
    title: "Dating App in Manchester | Vely",
    description: "Meet singles and couples in Manchester with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-manchester/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Manchester",
  slug: "dating-app-in-manchester",
  eyebrow: "FOR MANCHESTER",
  heroHeading: "Meet people who fit your Manchester —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Manchester, the Northern Quarter, Ancoats, Didsbury, Chorlton, Salford, Stockport, Bolton and the wider Greater Manchester area discover genuine local connections through mutual matching.",
  statValue: "MANCHESTER",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Manchester.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Manchester profiles using your location, distance preferences and shared interests.",
    },
    {
      icon: "heart",
      title: "Built for singles and couples",
      text: "Choose an individual or couple profile and connect with people who are open about what they want.",
    },
    {
      icon: "shield",
      title: "Mutual matching matters",
      text: "No unsolicited conversations. Both sides choose to connect before chat opens, with safety controls built in.",
    },
  ],
  contentSections: [
    {
      heading: "Why Manchester needs a different kind of dating app",
      paragraphs: [
        "Greater Manchester is ten boroughs, not one city. A match in Bolton is a long way from a match in Stockport, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are in the city centre, the Northern Quarter, south Manchester, Salford or one of the outer boroughs.",
        "Manchester has one of the friendliest and most open-minded dating scenes outside London and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Manchester",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe in the Northern Quarter, a walk through Castlefield or a bar in Chorlton, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Manchester profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Manchester and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Manchester?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater Manchester, including Salford, Stockport, Trafford, Bolton, Bury, Oldham and Rochdale. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Manchester?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Manchester?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Manchester?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Manchester, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-uk/", label: "Dating app for singles in UK" },
    { href: "/dating-app-for-couples-in-uk/", label: "Dating app for couples in UK" },
    { href: "/dating-app-in-london/", label: "Dating app in London" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering Manchester.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function ManchesterDatingPage() {
  return <SeoPage config={config} />;
}
