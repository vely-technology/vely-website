import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Singles in India — Meet Real People on Vely",
  description:
    "Looking for a dating app for singles in India? Vely helps Indian singles discover meaningful connections, friendships, and relationships nearby. Free on Android.",
  keywords: [
    "dating app for singles in India",
    "Indian dating app",
    "singles dating app India",
    "meet singles India",
    "best app for singles India",
    "Vely India singles",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-singles-in-india/` },
  openGraph: {
    title: "Dating App for Singles in India | Vely",
    description:
      "Vely helps Indian singles discover real connections nearby — swipe, match, and chat safely with people who share your vibe. Free on Android.",
    url: `${SITE_URL}/dating-app-for-singles-in-india/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Singles in India",
  slug: "dating-app-for-singles-in-india",
  eyebrow: "FOR SINGLES IN INDIA",
  heroHeading: "Meet real people in India",
  heroHighlight: "who match your vibe.",
  heroSubtitle:
    "Vely is India's social discovery app for singles who want genuine connections — not endless swiping. Find friendships, dates, and meaningful relationships with people near you.",
  statValue: "100%",
  statLabel: "Mutual matching — no unwanted messages",
  whyHeading: "Why Indian singles are switching to Vely.",
  benefits: [
    {
      icon: "compass",
      title: "Discover people near you",
      text: "Browse singles in your city or neighbourhood using distance and interest filters that keep discovery relevant.",
    },
    {
      icon: "spark",
      title: "Swipe privately, match mutually",
      text: "Your likes stay private until the interest is mutual — so every conversation starts from a place of genuine two-way interest.",
    },
    {
      icon: "shield",
      title: "Safe and adults-only (18+)",
      text: "Verification signals, in-app reporting, and clear community rules make Vely a safer space than most apps on the market.",
    },
  ],
  contentSections: [
    {
      heading: "A dating app for Indian singles who want relevant matches",
      paragraphs: [
        "Dating in India is not the same in every city or social circle. Some singles are looking for a serious relationship, some want to meet new people after moving to a new city, and some want open-minded connections without explaining themselves repeatedly. A useful dating app for singles in India needs to support those different goals while still making discovery simple.",
        "Vely focuses on nearby discovery and mutual matching. You can create a profile that explains who you are, set preferences for the kind of people you want to discover, and browse at your own pace. This makes the app useful whether you are in Pune, Mumbai, Delhi, Bangalore, Hyderabad, Chennai, or a smaller Indian city where meeting compatible people offline can be difficult.",
      ],
    },
    {
      heading: "Why singles need more than endless swiping",
      paragraphs: [
        "Many singles download dating apps, use them for a week, and then stop because the experience feels repetitive. Endless swiping creates activity, but it does not always create better conversations. What matters is whether profiles are relevant, whether people can express interest clearly, and whether conversations start from two-way intent.",
        "Vely uses mutual matching so you are not pushed into conversations that do not make sense. Likes stay private until both sides show interest. That keeps the app calmer and helps singles focus on people they actually want to meet. For introverts, busy professionals, and people new to online dating, this can make a major difference.",
      ],
    },
    {
      heading: "Meet people, find a partner, or build something slowly",
      paragraphs: [
        "Searches like dating app for singles, find partner, meet new people, and relationship app often come from the same need: people want connection, but they want it to feel natural. Vely is built for social discovery first, so a match can become a friendship, a date, a serious relationship, or another kind of open-minded connection depending on what both people want.",
        "The best results come from being specific. Add photos that show your face clearly, write a profile that gives someone a reason to message you, and use preferences honestly. A better profile attracts better matches because it reduces guesswork before the first conversation begins.",
      ],
    },
  ],
  steps: [
    {
      title: "Build your profile",
      text: "Create a profile that shows who you really are — your interests, what you're looking for, and how you want to connect.",
    },
    {
      title: "Browse singles nearby",
      text: "Vely shows you people in your area. Use preference filters to narrow down who you see in your discovery feed.",
    },
    {
      title: "Match and chat",
      text: "When both of you are interested, a chat opens. No pressure, no spam — just a natural conversation to get to know each other.",
    },
  ],
  faqs: [
    {
      question: "Is Vely available across India?",
      answer:
        "Yes. Vely is available on Android via Google Play across all Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and more.",
    },
    {
      question: "Is Vely a serious relationship app or casual?",
      answer:
        "Vely supports all kinds of connections — serious relationships, friendships, and socialising with new people. You choose the connection type on your profile and in your preferences.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, Vely is free to download and use. Core features like discovery, matching, and messaging are available for free.",
    },
    {
      question: "Do I need to verify my identity?",
      answer:
        "Vely has optional verification steps that add a verification signal to your profile, helping others trust you. These are not mandatory to get started.",
    },
    {
      question: "Can I hide my profile temporarily?",
      answer:
        "Yes. You can pause your discovery visibility in the app settings at any time without deleting your account.",
    },
  ],
  ctaHeading: "India's social discovery app is here.",
  ctaText:
    "Join thousands of Indian singles on Vely. Download free on Android today.",
};

export default function DatingAppForSinglesInIndiaPage() {
  return <SeoPage config={config} />;
}

