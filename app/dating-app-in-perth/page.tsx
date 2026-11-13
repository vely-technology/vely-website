import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Perth for Singles & Couples",
  description:
    "Meet singles and couples in Perth with Vely. GPS discovery across Fremantle, Subiaco, Leederville, Joondalup, Scarborough, Rockingham and the Swan Valley, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Perth",
    "Perth dating app",
    "couples dating app Perth",
    "singles app Perth",
    "meet people in Perth",
    "open minded dating Perth",
    "Vely Perth",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-perth/` },
  openGraph: {
    title: "Dating App in Perth | Vely",
    description: "Meet singles and couples in Perth with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-perth/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Perth",
  slug: "dating-app-in-perth",
  eyebrow: "FOR PERTH",
  heroHeading: "Meet people who fit your Perth —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Perth, Fremantle, Subiaco, Leederville, Joondalup, Scarborough, Rockingham and the Swan Valley discover genuine local connections through mutual matching.",
  statValue: "PERTH",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Perth.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Perth profiles using your location, distance preferences and shared interests.",
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
      heading: "Why Perth needs a different kind of dating app",
      paragraphs: [
        "Perth is one of the most spread-out cities in the world. A match in Joondalup is nowhere near a match in Rockingham, and most dating apps happily show you both. Vely puts distance first: you set how far you are willing to travel, and discovery shows people inside that radius, whether you are in the CBD, Fremantle, the northern beaches, the hills or the southern suburbs.",
        "Perth's dating pool is smaller and more isolated than the east coast, which makes it even more important to see people who are actually nearby and open to the same thing. Plenty of Perth couples want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Perth",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a cafe in Leederville, a walk along the river at South Perth or a bar in Fremantle, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Perth profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Perth and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Perth?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater Perth, including the inner city, Fremantle, the northern coastal suburbs, the hills and Rockingham. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Perth?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Perth?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Perth?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Perth, Vely offers GPS discovery, mutual matching and joint couple profiles.",
    },
    {
      question: "How does matching work?",
      answer:
        "You express interest privately. A match is created only when both people are interested, and then you can chat in the app.",
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-singles-in-australia/", label: "Dating app for singles in Australia" },
    { href: "/dating-app-for-couples-in-australia/", label: "Dating app for couples in Australia" },
    { href: "/dating-app-in-sydney/", label: "Dating app in Sydney" },
    { href: "/feeld-alternative/", label: "Vely as a Feeld alternative" },
  ],
  ctaHeading: "Start discovering Perth.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function PerthDatingPage() {
  return <SeoPage config={config} />;
}
