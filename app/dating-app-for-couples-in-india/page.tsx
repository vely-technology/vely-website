import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Couples Dating App India — Meet Other Couples Nearby | Vely",
  description:
    "Vely is the couples dating app for India. Meet other couples nearby in Mumbai, Delhi, Bangalore, Hyderabad and beyond. Mutual matching, GPS discovery, and safety controls. Free on Android.",
  keywords: [
    "couples dating app India",
    "dating app for married couples India",
    "couples app India",
    "meet other couples India",
    "couples dating Mumbai",
    "couples dating Delhi",
    "couples dating Bangalore",
    "couples dating Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/dating-app-for-couples-in-india/` },
  openGraph: {
    title: "Couples Dating App India | Vely",
    description:
      "GPS dating for couples in India. Mumbai, Delhi, Bangalore, Hyderabad and beyond. Mutual matching. Free on Android.",
    url: `${SITE_URL}/dating-app-for-couples-in-india/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Couples Dating App India",
  slug: "dating-app-for-couples-in-india",
  eyebrow: "FOR INDIAN COUPLES",
  heroHeading: "Couples dating app for India",
  heroHighlight: "meet real couples nearby.",
  heroSubtitle:
    "Vely is the GPS-based dating app designed for couples in India. Find other couples in your city through mutual matching, chat when interest is mutual, and stay in control with built-in safety features.",
  statValue: "18+",
  statLabel: "Adults-only, safe community",
  whyHeading: "Why Indian couples choose Vely.",
  benefits: [
    {
      icon: "compass",
      title: "GPS discovery in Indian cities",
      text: "Find real couples near you in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and other major Indian cities — not people hundreds of kilometers away.",
    },
    {
      icon: "heart",
      title: "All couple types welcome in India",
      text: "M+F, M+M, F+F — every orientation is welcome on Vely. Whether you're looking for serious dating, friendship, or open-minded connections, you choose what works for you.",
    },
    {
      icon: "spark",
      title: "Mutual matching first",
      text: "Your likes are private until both sides are interested. No unsolicited messages, no spam, and no pressure — every conversation begins with genuine two-way interest.",
    },
  ],
  steps: [
    {
      title: "Create your couple profile",
      text: "Sign up free on Android. Build a joint couple profile together — add photos, interests, and what kind of connections you're seeking.",
    },
    {
      title: "Discover couples nearby in India",
      text: "Vely shows you real couple profiles in your Indian city. Use distance and interest filters to find couples who match your vibe.",
    },
    {
      title: "Match and start chatting",
      text: "When another couple likes you back, the chat opens. Take it at your own pace — from messaging to meeting in person when you're ready.",
    },
  ],
  faqs: [
    {
      question: "Is Vely available across India?",
      answer:
        "Yes. Vely is available on Android via Google Play across all Indian states and union territories. GPS-based discovery works in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Jaipur, Ahmedabad, Pune, Surat, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivali, Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Ranchi, Howrah, Coimbatore, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, Solapur, Hubli-Dharwad, Bareilly, Aligarh, Gurgaon, and every other Indian city.",
    },
    {
      question: "Is Vely free to use in India?",
      answer:
        "Yes. Vely is free to download on Android in India. Core features including profile creation, discovery, mutual matching, and messaging are free. Vely Premium unlocks unlimited likes and see who liked you.",
    },
    {
      question: "Can married couples use Vely in India?",
      answer:
        "Absolutely. Vely supports married couples (M+F, M+M, F+F) who want to meet other couples, make new friends, or explore open-minded connections together. Your joint profile represents both partners clearly.",
    },
    {
      question: "Is Vely safe for couples in India?",
      answer:
        "Yes. Vely includes mutual matching (no unsolicited messages), verification signals, in-app blocking and reporting, and adults-only (18+) community standards to help couples stay in control.",
    },
    {
      question: "What languages does Vely support in India?",
      answer:
        "Vely currently operates in English, which is widely understood across India for dating and social discovery. Additional Indian language support is planned for future updates.",
    },
  ],
  ctaHeading: "Indian couples — Vely is here.",
  ctaText:
    "Download Vely free on Android and discover other couples near you across India.",
};

export default function DatingAppForCouplesInIndiaPage() {
  return <SeoPage config={config} />;
}