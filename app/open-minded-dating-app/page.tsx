import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open-Minded Dating App for Singles & Couples | Vely",
  description:
    "Vely is the open-minded dating app for singles and couples. GPS matching, all orientations welcome, mutual likes only. Free on Android.",
  keywords: [
    "open minded dating app",
    "open relationship app",
    "couples and singles dating",
    "ethical non monogamy app",
    "ethical non-monogamy dating app",
    "ENM dating app",
    "open relationship dating app",
    "dating app for non-monogamous singles",
    "open minded singles",
    "couples dating app",
  ],
  alternates: { canonical: `${SITE_URL}/open-minded-dating-app/` },
  openGraph: {
    title: "Open-Minded Dating App for Singles & Couples | Vely",
    description:
      "GPS dating for open-minded singles and couples. Mutual matching. All orientations welcome. Free on Android.",
    url: `${SITE_URL}/open-minded-dating-app/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Open-Minded Dating App",
  slug: "open-minded-dating-app",
  eyebrow: "OPEN-MINDED DATING",
  heroHeading: "Dating without labels.",
  heroHighlight: "Open-minded connections for everyone.",
  heroSubtitle:
    "Vely is an open-minded dating app where singles, couples, and everyone in between can discover genuine connections — no judgment, no labels required.",
  statValue: "5",
  statLabel: "Profile types — single, M+F, M+M, F+F & more",
  whyHeading: "Built for open-minded people who know what they want.",
  benefits: [
    {
      icon: "heart",
      title: "All orientations welcome",
      text: "Singles, couples, M+M, F+F, M+F — every profile type is supported on Vely. Discover whoever matches your vibe, without the boxes.",
    },
    {
      icon: "compass",
      title: "GPS-based, so connections are real",
      text: "See who's actually nearby. Vely uses GPS to surface real profiles in your area — not people three cities away.",
    },
    {
      icon: "spark",
      title: "Mutual interest only",
      text: "Likes stay private until both sides match. No unsolicited messages, no pressure — every conversation is wanted by both people.",
    },
  ],
  steps: [
    {
      title: "Create your profile",
      text: "Single or couple, any orientation — build a profile that represents who you really are and what you're looking for.",
    },
    {
      title: "Discover open-minded people nearby",
      text: "Browse profiles filtered by distance, interests, and profile type. Find people who match your energy.",
    },
    {
      title: "Match and connect on your terms",
      text: "When interest is mutual, the conversation opens. Move at your own pace — coffee, friends, or something more.",
    },
  ],
  contentSections: [
    {
      heading: "An ethical non-monogamy dating app for singles and couples",
      paragraphs: [
        "Vely gives people exploring ethical non-monogamy a clear way to describe who they are and what kind of connection they want. Singles can meet couples, couples can meet other couples, and everyone can use discovery preferences to make their boundaries and intentions clearer.",
        "Open-minded dating still works best when it is honest and mutual. Vely keeps likes private until both sides are interested, so a conversation starts with shared intent instead of pressure or assumptions.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is ethical non-monogamy dating?",
      answer:
        "Ethical non-monogamy means that everyone involved understands and consents to the relationship structure. Vely supports open-minded singles and couples who want to explain their preferences clearly and connect mutually.",
    },
    {
      question: "Is Vely for people in open relationships?",
      answer:
        "Yes. Vely is built for open-minded people — singles, couples, and those exploring ethical non-monogamy. All profile types and orientations are welcome.",
    },
    {
      question: "Can a single person match with a couple on Vely?",
      answer:
        "Yes. Vely's discovery feed supports all match combinations — singles with couples, couples with couples, singles with singles — based on each user's preferences.",
    },
    {
      question: "Is Vely judgment-free?",
      answer:
        "Yes. Vely is designed as a judgment-free space. There are no labels, no shame, and no assumptions about what kind of connection you're looking for.",
    },
    {
      question: "Is Vely free to use?",
      answer:
        "Yes, Vely is free to download on Android. Core features are free. Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Is Vely available globally?",
      answer:
        "Yes. Vely is available globally on Android. GPS-based discovery means you see real people near you wherever you are.",
    },
  ],
  ctaHeading: "Open-minded dating starts here.",
  ctaText:
    "Download Vely free on Android and discover open-minded singles and couples near you.",
};

export default function OpenMindedDatingAppPage() {
  return <SeoPage config={config} />;
}

