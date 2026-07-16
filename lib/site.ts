export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://joinvely.com";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.vely.app";
export const SUPPORT_EMAIL = "hello@joinvely.com";

export const navigation = [
  { href: "/#features", label: "Features" },
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
  { question: "Who is Vely for?", answer: "Vely is an adults-only social discovery app for singles and couples who want to meet people, build friendships, and explore meaningful social connections." },
  { question: "Is Vely available on iPhone?", answer: "Vely is currently available on Android through Google Play. An iOS version is planned, but we are not announcing a release date yet." },
  { question: "How do matches work?", answer: "You can discover profiles and express interest privately. When the interest is mutual, a match is created and both sides can chat." },
  { question: "Can I report or block someone?", answer: "Yes. Vely includes in-app reporting and blocking tools. Reports are reviewed under our community and safety policies." },
  { question: "How do I delete my account?", answer: "You can request deletion from the app or by contacting support. Our account deletion page explains the steps and what happens to your information." },
];
