import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Dating App in Pune — Meet People Near You on Vely",
  description:
    "Vely is the best dating app in Pune for singles and couples. Discover people nearby in Pune with mutual matching, real chat, and built-in safety. Free on Android.",
  keywords: [
    "best dating app in Pune",
    "dating app Pune",
    "Pune singles app",
    "meet people in Pune",
    "Pune dating",
    "Vely Pune",
    "social app Pune",
  ],
  alternates: { canonical: `${SITE_URL}/best-dating-app-in-pune` },
  openGraph: {
    title: "Best Dating App in Pune | Vely",
    description:
      "Meet singles and couples in Pune with Vely — India's social discovery app built right here in Pune. Download free on Android.",
    url: `${SITE_URL}/best-dating-app-in-pune`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Best Dating App in Pune",
  slug: "best-dating-app-in-pune",
  eyebrow: "MADE IN PUNE, FOR PUNE",
  heroHeading: "Pune's social discovery app —",
  heroHighlight: "built right here.",
  heroSubtitle:
    "Vely was built in Pune by a team that knows this city. Whether you're in Koregaon Park, Baner, Kothrud, or Wakad — find real connections with people who are actually nearby.",
  statValue: "Local",
  statLabel: "Built in Pune, India",
  whyHeading: "Why Vely is Pune's go-to connection app.",
  benefits: [
    {
      icon: "compass",
      title: "Discover people in your Pune neighbourhood",
      text: "Vely uses your location to surface profiles close to you — whether you're in FC Road, Viman Nagar, or Hinjewadi.",
    },
    {
      icon: "heart",
      title: "Singles and couples welcome",
      text: "Pune has one of India's youngest urban populations. Vely is designed for both singles exploring connections and couples looking to socialise with others.",
    },
    {
      icon: "spark",
      title: "Mutual matching, zero spam",
      text: "Unlike other apps, every conversation on Vely starts only when both sides are interested. No cold messages, no pressure.",
    },
  ],
  steps: [
    {
      title: "Download and set up in minutes",
      text: "Create your profile, add your interests, and set Pune as your location. It takes less than five minutes.",
    },
    {
      title: "Find people nearby",
      text: "Vely's discovery feed shows you real people in and around Pune. Use filters to refine by distance, age, and interests.",
    },
    {
      title: "Match and meet",
      text: "When there's mutual interest, start chatting inside the app. Move at your own pace — from online to a coffee in Pune when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Is Vely popular in Pune?",
      answer:
        "Vely is based in Pune and actively growing its user base across the city. As an early adopter, you'll be discovering real local connections from day one.",
    },
    {
      question: "Which areas of Pune can I find people in?",
      answer:
        "Vely works across all of Pune — including Koregaon Park, Baner, Hinjewadi, Kothrud, Wakad, Viman Nagar, Kharadi, Aundh, and surrounding areas.",
    },
    {
      question: "Is Vely free in Pune?",
      answer:
        "Yes. Vely is completely free to download on Android and the core features are free to use.",
    },
    {
      question: "Can I use Vely if I travel outside Pune?",
      answer:
        "Yes. Your location updates automatically when you travel, so you can discover people in any Indian city, not just Pune.",
    },
    {
      question: "Is the Vely team really from Pune?",
      answer:
        "Yes. Vely is built by MettaAi, a team based in Pune, India. The footer of this website says it clearly — made thoughtfully in Pune.",
    },
  ],
  ctaHeading: "Pune's social discovery app is live.",
  ctaText:
    "Download Vely free on Android and start meeting real people near you in Pune.",
};

export default function BestDatingAppInPunePage() {
  return <SeoPage config={config} />;
}
