export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://joinvely.com";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.vely.app";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const SUPPORT_EMAIL = "hello@joinvely.com";

export const navigation = [
  { href: "/#features", label: "Features" },
  { href: "/vely-app", label: "Vely App" },
  { href: "/blog", label: "Blog" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export const features = [
  { icon: "compass", title: "Discover your kind of people", text: "Explore nearby singles and couples using preferences that keep discovery relevant to you." },
  { icon: "spark", title: "Choose who connects", text: "Send a like, pass privately, and start a conversation only after the interest is mutual." },
  { icon: "chat", title: "Chat when you match", text: "Keep the conversation going in one place with direct, real-time messaging." },
  { icon: "shield", title: "Controls that put you first", text: "Verification signals, reporting, blocking, and clear community rules help you stay in control." },
];

export const faqs = [
  {
    question: "Who is Vely for?",
    answer:
      "Vely is an open-minded dating app for singles and couples aged 18+. Whether you're a single looking to meet couples, a couple looking to meet other couples, or anything in between — Vely is built for you.",
  },
  {
    question: "Can couples use Vely together?",
    answer:
      "Yes. Vely supports joint couple profiles (M+F, M+M, F+F). Both partners share one profile and discover together.",
  },
  {
    question: "Is Vely available on iPhone?",
    answer:
      "Vely is currently available on Android through Google Play. An iOS version is planned.",
  },
  {
    question: "How do matches work?",
    answer:
      "You discover profiles and express interest privately. A match is created only when both sides are interested — then you can chat.",
  },
  {
    question: "Is Vely free?",
    answer:
      "Yes, Vely is free to download. Core features including discovery, matching, and messaging are free. Vely Premium unlocks unlimited likes, see who liked you, and priority matching.",
  },
  {
    question: "Can I report or block someone?",
    answer:
      "Yes. Vely includes in-app reporting and blocking tools reviewed under our community and safety policies.",
  },
];
