import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safe Dating App in India — Vely Puts You in Control",
  description:
    "Vely is a safe dating app in India built on mutual matching, verification signals, in-app blocking, and clear community standards. Adults-only 18+. Free on Android.",
  keywords: [
    "safe dating app in India",
    "safe dating app",
    "trusted dating app India",
    "secure dating app India",
    "safe online dating India",
    "Vely safe",
  ],
  alternates: { canonical: `${SITE_URL}/safe-dating-app-in-india` },
  openGraph: {
    title: "Safe Dating App in India | Vely",
    description:
      "Vely is designed for safety from the ground up — mutual matching, verification, blocking, and adult-only community rules. Free on Android.",
    url: `${SITE_URL}/safe-dating-app-in-india`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Safe Dating App in India",
  slug: "safe-dating-app-in-india",
  eyebrow: "SAFETY FIRST",
  heroHeading: "A dating app that takes",
  heroHighlight: "your safety seriously.",
  heroSubtitle:
    "Vely is built around consent, mutual matching, and practical safety controls — because feeling safe online isn't optional. Adults-only, 18+, free on Android.",
  statValue: "18+",
  statLabel: "Adults-only, verified community",
  whyHeading: "How Vely keeps you safer than most apps.",
  benefits: [
    {
      icon: "shield",
      title: "Mutual matching only",
      text: "No one can message you unless you both expressed interest. This one rule eliminates almost all unsolicited contact.",
    },
    {
      icon: "check",
      title: "Verification signals",
      text: "Profiles that complete optional verification steps display a signal so you know more about who you're talking to.",
    },
    {
      icon: "chat",
      title: "Block and report in seconds",
      text: "See something wrong? Block or report a profile instantly from inside the app. Every report is reviewed under our community standards.",
    },
  ],
  steps: [
    {
      title: "Create a profile that shows who you are",
      text: "Your profile is yours to control. Add what you're comfortable sharing and adjust your visibility any time.",
    },
    {
      title: "Discover at your own pace",
      text: "Browse privately. No one knows you viewed their profile unless you choose to like them.",
    },
    {
      title: "Connect only when it's mutual",
      text: "Chat opens only after a mutual match. You stay in control of every conversation from start to finish.",
    },
  ],
  faqs: [
    {
      question: "How does Vely prevent harassment?",
      answer:
        "Vely uses mutual matching — messages can only be sent after both users express interest. Combined with blocking and reporting tools, this significantly reduces unwanted contact.",
    },
    {
      question: "Is my personal information safe on Vely?",
      answer:
        "Vely does not share your personal information with other users without your consent. Review our Privacy Policy for full details on data handling.",
    },
    {
      question: "Can I report fake profiles?",
      answer:
        "Yes. Any profile can be reported from the discovery feed or within a conversation. Reports are reviewed and actioned under our community guidelines.",
    },
    {
      question: "Is Vely moderated?",
      answer:
        "Yes. Vely has community standards that all users agree to, and reports are reviewed by the team. Content that violates these standards results in account action.",
    },
    {
      question: "What age restrictions does Vely have?",
      answer:
        "Vely is strictly for adults aged 18 and above. We do not permit minors on the platform, and accounts belonging to minors should be reported immediately.",
    },
  ],
  ctaHeading: "A safer way to connect in India.",
  ctaText:
    "Download Vely free on Android — where your safety comes first and connections start from mutual interest.",
};

export default function SafeDatingAppInIndiaPage() {
  return <SeoPage config={config} />;
}
