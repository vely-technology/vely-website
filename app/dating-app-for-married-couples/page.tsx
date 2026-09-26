import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dating App for Married Couples — Meet Other Couples Together | Vely",
  description:
    "Vely is the dating app for married couples. Create a joint profile, discover other married couples nearby, and connect through mutual matching. Free on Android.",
  keywords: [
    "dating app for married couples",
    "married couples dating app",
    "app for married couples to meet couples",
    "married couples meet other couples",
    "joint profile dating app",
    "married dating app for couples",
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
  ],
  ctaHeading: "Married couples — Vely is built for you.",
  ctaText:
    "Download Vely free on Android and discover other couples nearby who match your vibe.",
};

export default function DatingAppForMarriedCouplesPage() {
  return <SeoPage config={config} />;
}