import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vely App: What It Is, How It Works and Where to Download",
  description:
    "Vely is a free Android dating app for singles and couples. Learn what Vely is, how joint couple profiles and mutual matching work, and download it from Google Play.",
  keywords: [
    "Vely",
    "Vely app",
    "what is Vely",
    "download Vely app",
    "Vely dating app",
    "Vely dating",
    "join Vely",
    "joinvely",
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
  contentSections: [
    {
      heading: "What is Vely?",
      paragraphs: [
        "Vely is a dating and social discovery app for singles and couples, made by MettaAi and available on Android through Google Play (package name com.vely.app). It is free to download and free to use for discovery, matching and chat. The official website is joinvely.com, and the app is sometimes written as Vely Dating or Join Vely.",
        "What makes Vely different from a standard dating app is that it treats couples as first-class users. Two partners can create one joint profile, discover other couples or singles together, and chat from the same account. Singles choose whether they want to meet singles, couples or both, so everyone you see has opted in to the same kind of connection.",
      ],
    },
    {
      heading: "How Vely works",
      paragraphs: [
        "Discovery is location-based: you set a distance and Vely shows people inside it. Likes are private. A chat opens only when both sides have liked each other, which keeps unsolicited messages out of your inbox. Profiles are for adults only, couple profiles can verify the partner, and blocking and reporting are one tap away. An optional Premium subscription adds unlimited likes and lets you see who liked you.",
        "Vely is strongest today in India, the United States, Canada, the United Kingdom, Australia, the Philippines and Ghana, and works anywhere you can install it from Google Play. An iOS version is planned but not yet available.",
      ],
    },
  ],
  relatedLinks: [
    { href: "/dating-app-for-couples/", label: "Vely for couples" },
    { href: "/singles-and-couples-dating-app/", label: "Vely for singles and couples" },
    { href: "/safety/", label: "Safety on Vely" },
    { href: "/about/", label: "About Vely" },
    { href: "/support/", label: "Vely support" },
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
      question: "What is the Vely app?",
      answer:
        "Vely is a free Android dating app for singles and couples. It offers joint couple profiles, GPS-based discovery, private likes, chat after a mutual match, and built-in safety tools. It is made by MettaAi and its website is joinvely.com.",
    },
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
