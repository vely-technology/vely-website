import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Married Dating App for Couples (Free): Meet Other Couples Together",
  description:
    "Vely is a free married dating app for couples who want to meet other couples and singles together. One joint profile, private likes, mutual matching, and safety tools. Android.",
  keywords: [
    "dating app for married couples",
    "married dating app",
    "married dating app free",
    "married couples dating sites",
    "dating site for married people",
    "app for married couples",
    "married couples meet other couples",
    "joint profile dating app",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-married-couples/` },
  openGraph: {
    title: "Dating App for Married Couples | Vely",
    description:
      "Meet other married couples with Vely. Joint profiles, mutual matching, GPS discovery. Free on Android.",
    url: `${SITE_URL}/dating-app-for-married-couples/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Dating App for Married Couples",
  slug: "dating-app-for-married-couples",
  eyebrow: "FOR MARRIED COUPLES",
  heroHeading: "Dating app built for",
  heroHighlight: "married couples.",
  heroSubtitle:
    "Vely is the only dating app designed for married couples who want to connect together. Create a joint profile, discover other couples nearby, and start conversations only when the interest is mutual.",
  statValue: "2-in-1",
  statLabel: "One joint profile for both partners",
  whyHeading: "Why married couples choose Vely over regular dating apps.",
  benefits: [
    {
      icon: "heart",
      title: "One profile for both of you",
      text: "Most dating apps force couples to choose one person's profile. Vely lets married couples create a single joint profile that represents both partners authentically.",
    },
    {
      icon: "compass",
      title: "Find other married couples nearby",
      text: "GPS-based discovery shows you other couples in your area. Filter by distance, interests, and relationship style to find couples who match your vibe.",
    },
    {
      icon: "shield",
      title: "Private, safe, and mutual",
      text: "Likes stay private until both couples match. Verified profiles, in-app blocking, and mutual matching keep every interaction safe and respectful.",
    },
  ],
  contentSections: [
    {
      heading: "Is Vely a married dating app, or a dating app for married couples?",
      paragraphs: [
        "Both phrases get searched, and they mean different things. A \"married dating app\" usually means an app for one married person to date on their own, often discreetly. A \"dating app for married couples\" means an app the two of you use together, as a couple, to meet other couples or singles. Vely is the second kind. Both partners are on one joint profile, both can see every like and every chat, and the people you meet know from the first look that they are talking to a couple.",
        "That makes Vely a poor fit for anyone looking for a secret affair, and a very good fit for married couples who want new couple friends, activity partners, an open or ethically non-monogamous arrangement they have agreed on together, or simply a social life that is not limited to the people they already know.",
      ],
    },
    {
      heading: "What married couples get on Vely",
      paragraphs: [
        "Free to download and free to use: creating a couple profile, discovering nearby couples and singles, liking and chatting after a match are all included. Premium adds unlimited likes and lets you see who liked you, but nothing you need to get started is behind a paywall.",
        "Discreet by design: nobody can message you until you have both liked each other, your likes stay private until then, and you can block or report any account in one tap. Couple profiles can also verify the partner, so other users know both people are real and on board.",
        "Built for real distance: Vely uses your location so the couples you see are actually near you, whether you are in Mumbai, Toronto, London, Sydney or Manila, and you set how far you are willing to travel.",
      ],
    },
  ],
  relatedLinks: [
    { href: "/blog/dating-apps-for-married-couples/", label: "Guide: what to look for in a dating app for married couples" },
    { href: "/dating-app-for-couples/", label: "Dating app for couples" },
    { href: "/blog/meeting-safely-couples/", label: "Meeting other couples safely" },
    { href: "/open-minded-dating-app/", label: "Open-minded dating app" },
  ],
  steps: [
    {
      title: "Create your joint couple profile",
      text: "Sign up together and build one shared profile. Add both partners' photos, interests, and what kind of connections you're looking for as a couple.",
    },
    {
      title: "Discover other couples nearby",
      text: "Browse couple profiles in your area. Use filters to find couples who share your interests, values, and relationship style.",
    },
    {
      title: "Match and connect on your terms",
      text: "When another couple likes you back, the chat opens. Move at your own pace — from a message to meeting in person when you both feel ready.",
    },
  ],
  faqs: [
    {
      question: "Is Vely for married couples looking for other couples?",
      answer:
        "Yes. Vely is designed for couples — including married couples — who want to meet other couples, make new friends, or explore social discovery together. M+F, M+M, and F+F couples are all supported.",
    },
    {
      question: "Can both partners use the same Vely account?",
      answer:
        "Yes. Vely is built for couples to share one joint account. Both partners can browse, like, and chat from the same profile — no need to switch between accounts.",
    },
    {
      question: "Is Vely only for open marriages or swingers?",
      answer:
        "No. Vely is for any couple who wants to connect with other couples. Some users are in open marriages, some want new friends, some want activity partners, and some are exploring. You decide what you're looking for on your profile.",
    },
    {
      question: "Is Vely discreet for married couples?",
      answer:
        "Yes. Likes are private until both sides match. You control your profile visibility and can block or report any user. No one sees your profile unless you match with them.",
    },
    {
      question: "Is Vely free for married couples?",
      answer:
        "Yes. Vely is free to download on Android. Core features including couple profile creation, discovery, and matching are free. Premium adds unlimited likes.",
    },
    {
      question: "Is Vely a married dating site for affairs?",
      answer:
        "No. Vely is for couples who join together on one shared profile, not for one partner dating in secret. If you are a married couple looking to meet other couples or singles as a pair, it is built for you.",
    },
    {
      question: "Can married couples meet singles on Vely too?",
      answer:
        "Yes. Set your discovery preferences to couples, singles, or both. Singles who use Vely choose whether they want to meet couples, so everyone you see has opted in.",
    },
  ],
  ctaHeading: "Married couples — Vely is built for you.",
  ctaText:
    "Download Vely free on Android and discover other couples nearby who match your vibe.",
};

export default function DatingAppForMarriedCouplesPage() {
  return <SeoPage config={config} />;
}