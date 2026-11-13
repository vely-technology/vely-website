import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Toronto for Singles & Couples",
  description:
    "Meet singles and couples in Toronto with Vely. GPS discovery across from Queen West and Kensington Market to Leslieville, the Annex, North York, Scarborough, Etobicoke and Mississauga, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Toronto",
    "Toronto dating app",
    "couples dating app Toronto",
    "singles app Toronto",
    "meet people in Toronto",
    "open minded dating Toronto",
    "Vely Toronto",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-toronto/` },
  openGraph: {
    title: "Dating App in Toronto | Vely",
    description: "Meet singles and couples in Toronto with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-toronto/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Toronto",
  slug: "dating-app-in-toronto",
  eyebrow: "FOR TORONTO",
  heroHeading: "Meet people who fit your Toronto —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Toronto, from Queen West and Kensington Market to Leslieville, the Annex, North York, Scarborough, Etobicoke and Mississauga discover genuine local connections through mutual matching.",
  statValue: "TORONTO",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Toronto.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Toronto profiles using your location, distance preferences and shared interests.",
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
      heading: "Why Toronto needs a different kind of dating app",
      paragraphs: [
        "The GTA is huge. A match in Scarborough is a long transit ride from a match in Mississauga, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are downtown, in the east end, uptown, in Etobicoke or out in the 905.",
        "Toronto has the most diverse, open-minded dating scene in Canada and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Toronto",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe on Queen West, a walk along the waterfront or a bar in Leslieville, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Toronto profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Toronto and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Toronto?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in the Greater Toronto Area, including downtown, North York, Scarborough, Etobicoke, Mississauga, Brampton and Markham. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Toronto?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Toronto?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Toronto?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Toronto, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-canada/", label: "Dating app for singles in Canada" },
    { href: "/dating-app-for-couples-in-canada/", label: "Dating app for couples in Canada" },
    { href: "/dating-app-in-vancouver/", label: "Dating app in Vancouver" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering Toronto.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function TorontoDatingPage() {
  return <SeoPage config={config} />;
}
