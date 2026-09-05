import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vely App Download - Dating for Singles & Couples",
  description:
    "Download the Vely app on Google Play. Vely helps open-minded singles and couples meet nearby with GPS discovery, mutual matching, chat, and safety controls.",
  keywords: [
    "Vely app",
    "download Vely app",
    "Vely dating app",
    "join Vely",
    "Vely Google Play",
    "open minded dating app",
    "dating app for singles and couples",
  ],
  alternates: { canonical: `${SITE_URL}/vely-app/` },
  openGraph: {
    title: "Vely App Download - Dating for Singles & Couples",
    description:
      "Download Vely on Google Play for open-minded dating, GPS discovery, mutual matching, and real-time chat.",
    url: `${SITE_URL}/vely-app/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Vely App",
  slug: "vely-app",
  eyebrow: "VELY APP DOWNLOAD",
  heroHeading: "Download Vely for",
  heroHighlight: "open-minded dating.",
  heroSubtitle:
    "Vely is an Android dating app for singles and couples who want nearby, mutual connections. Create your profile, discover people around you, match when interest is mutual, and chat in the app.",
  statValue: "Android",
  statLabel: "Available now on Google Play",
  whyHeading: "What you can do in the Vely app.",
  benefits: [
    {
      icon: "compass",
      title: "Meet people nearby",
      text: "Use GPS-based discovery to find singles and couples around your city, with preferences that keep the feed relevant.",
    },
    {
      icon: "heart",
      title: "Create a single or couple profile",
      text: "Vely supports individual profiles and joint couple profiles, so you can show up in the app the way you actually date.",
    },
    {
      icon: "shield",
      title: "Control every connection",
      text: "Likes stay private until both sides are interested. Blocking, reporting, and adults-only rules help keep the experience safer.",
    },
  ],
  steps: [
    {
      title: "Install Vely from Google Play",
      text: "Use the Google Play download button on this page to install the official Vely Android app.",
    },
    {
      title: "Set up your profile",
      text: "Choose a single or couple profile, add photos and interests, and set your discovery preferences.",
    },
    {
      title: "Match and chat",
      text: "Browse nearby profiles, like privately, and start a chat only when the interest is mutual.",
    },
  ],
  faqs: [
    {
      question: "Where can I download the Vely app?",
      answer:
        "You can download Vely on Android from Google Play. The official package is com.vely.app.",
    },
    {
      question: "Is Vely available on Android?",
      answer:
        "Yes. Vely is currently available for Android through Google Play.",
    },
    {
      question: "Is Vely available on iPhone?",
      answer:
        "Vely for iOS is planned, but the current public app download is for Android.",
    },
    {
      question: "Is Vely for singles or couples?",
      answer:
        "Vely is built for both singles and couples. Couples can create a joint profile, and singles can discover people based on their preferences.",
    },
    {
      question: "Is Vely free to download?",
      answer:
        "Yes. Vely is free to download on Android. Core discovery, matching, and messaging features are free, with optional premium features available.",
    },
  ],
  ctaHeading: "Get the Vely app on Android.",
  ctaText:
    "Download Vely from Google Play and start discovering open-minded singles and couples nearby.",
};

export default function VelyAppPage() {
  return <SeoPage config={config} />;
}
