import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App in Melbourne for Singles & Couples",
  description:
    "Meet singles and couples in Melbourne with Vely. GPS discovery across the CBD, Fitzroy, St Kilda, Richmond and the suburbs, mutual matching, safe chat. Free on Android.",
  keywords: [
    "dating app in Melbourne",
    "Melbourne dating app",
    "couples dating app Melbourne",
    "singles app Melbourne",
    "meet people in Melbourne",
    "open minded dating Melbourne",
    "Vely Melbourne",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-in-melbourne/` },
  openGraph: {
    title: "Dating App in Melbourne | Vely",
    description: "Meet singles and couples in Melbourne with mutual matching and built-in safety.",
    url: `${SITE_URL}/dating-app-in-melbourne/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App in Melbourne",
  slug: "dating-app-in-melbourne",
  eyebrow: "FOR MELBOURNE",
  heroHeading: "Meet people who fit your Melbourne —",
  heroHighlight: "not everyone else's.",
  heroSubtitle:
    "Vely helps singles and couples in Melbourne, from the CBD and Fitzroy to St Kilda, Richmond, Footscray and the outer suburbs, discover genuine local connections through mutual matching.",
  statValue: "MELBOURNE",
  statLabel: "Discover singles and couples near you",
  whyHeading: "A more personal way to connect in Melbourne.",
  benefits: [
    {
      icon: "compass",
      title: "Find people close to home",
      text: "Explore Melbourne profiles using your location, distance preferences and shared interests, north or south of the Yarra.",
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
      heading: "Why Melbourne needs a different kind of dating app",
      paragraphs: [
        "Melbourne is a city of neighbourhoods. Life in Brunswick looks different from life in Brighton, and the people you want to meet are usually a tram ride away, not across the whole metro area. Vely puts distance first: set how far you are willing to travel and discovery shows people inside that radius, whether you are in the CBD, the inner north, the bayside suburbs or out in Dandenong and Werribee.",
        "Melbourne also has a large, open-minded dating community and plenty of couples who want to meet other couples or singles without using an app built for something else. Vely supports both single and joint couple profiles, so couples can be upfront about who they are and singles can choose whether they want to meet singles, couples or both.",
      ],
    },
    {
      heading: "Safer first meetings in Melbourne",
      paragraphs: [
        "Mutual matching means nobody can message you until you have both liked each other, which cuts out most of the noise people leave other apps over. Block and report are one tap away, every profile is for adults only, and couple profiles can verify their partner. For a first meeting, pick a public spot such as a laneway café in the CBD, a walk along the Tan or a bar on Gertrude Street, tell a friend where you are going, and keep the first conversation in the app.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your Melbourne profile",
      text: "Download Vely, add a photo and interests, and choose whether you are joining as a single or a couple.",
    },
    {
      title: "Discover nearby connections",
      text: "Browse relevant people around Melbourne and send a private like when you find someone interesting.",
    },
    {
      title: "Match and make plans",
      text: "Chat after a mutual match, then decide together whether and when to meet in person.",
    },
  ],
  faqs: [
    {
      question: "Does Vely work across all of Melbourne?",
      answer:
        "Yes. Vely uses your location, so it works anywhere in Greater Melbourne, including the CBD, the inner north, the inner south, bayside, the eastern suburbs and the west. You choose the distance.",
    },
    {
      question: "Can couples and singles both join in Melbourne?",
      answer:
        "Yes. Vely is designed for both singles and couples, with profile and discovery options for each. Couples share one joint profile.",
    },
    {
      question: "Is Vely free in Melbourne?",
      answer:
        "Vely is free to download on Android. Core discovery, matching and messaging features are free, with optional Premium features.",
    },
    {
      question: "Is Vely an alternative to Feeld in Melbourne?",
      answer:
        "Vely is an open-minded dating app for singles and couples. If you are looking for a Feeld alternative in Melbourne, Vely offers GPS discovery, mutual matching and joint couple profiles.",
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
  ctaHeading: "Start discovering Melbourne.",
  ctaText: "Download Vely free on Android and meet singles and couples near you.",
};

export default function MelbourneDatingPage() {
  return <SeoPage config={config} />;
}
