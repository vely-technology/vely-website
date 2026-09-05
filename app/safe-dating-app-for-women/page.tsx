import type { Metadata } from "next";
import { SeoPage, type SeoPageConfig } from "@/components/seo-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safe Dating App for Women - Mutual Matching & Control",
  description:
    "Vely is a safer dating app for women who want more control: mutual matching, private likes, blocking, reporting, and adults-only community rules.",
  keywords: [
    "safe dating app for women",
    "dating app for women",
    "safe dating app India women",
    "online dating safety women",
    "women friendly dating app",
  ],
  alternates: { canonical: `${SITE_URL}/safe-dating-app-for-women/` },
  openGraph: {
    title: "Safe Dating App for Women | Vely",
    description:
      "Meet people nearby with mutual matching, private likes, reporting, blocking, and safety-first controls.",
    url: `${SITE_URL}/safe-dating-app-for-women/`,
  },
};

const config: SeoPageConfig = {
  breadcrumb: "Safe Dating App for Women",
  slug: "safe-dating-app-for-women",
  eyebrow: "SAFER DATING",
  heroHeading: "A dating app where women",
  heroHighlight: "stay in control.",
  heroSubtitle:
    "Vely is built around private likes, mutual matching, in-app reporting, blocking, and adults-only standards so women can explore dating with more confidence.",
  statValue: "Mutual",
  statLabel: "Chats open only after both sides match",
  whyHeading: "Safety features that matter before the first message.",
  benefits: [
    {
      icon: "shield",
      title: "No unsolicited chat",
      text: "Messages open only after mutual interest, reducing random first messages and unwanted contact.",
    },
    {
      icon: "check",
      title: "Private discovery",
      text: "You can browse and like profiles privately until both people choose to match.",
    },
    {
      icon: "chat",
      title: "Report and block",
      text: "If someone behaves badly, you can block or report them from inside the app.",
    },
  ],
  contentSections: [
    {
      heading: "What women should look for in a dating app",
      paragraphs: [
        "A safe dating app for women should do more than publish safety tips. Safety has to be part of the product design. If anyone can send a message to anyone, women often carry the cost of filtering unwanted attention. If reporting tools are hidden, people do not use them when they need them. If the app pushes users to leave the platform too quickly, early conversations lose the protection of in-app moderation and blocking.",
        "Vely is designed to reduce those risks at the interaction level. Likes are private, chats open after mutual matching, and users can block or report accounts that violate community standards. These features do not remove every risk from online dating, but they make the first steps calmer, more deliberate, and easier to manage.",
      ],
    },
    {
      heading: "Mutual matching helps reduce pressure",
      paragraphs: [
        "For many women, the first problem on dating apps is volume. A flood of low-quality messages makes it difficult to find serious or respectful people. Mutual matching changes the order of interaction. Instead of receiving messages first and deciding whether to respond, you decide privately who you are interested in. A conversation begins only when both sides have shown interest.",
        "That design is useful for women in India and globally. It gives users room to read a profile, consider the context, and move at their own pace. It also encourages better behavior because a match is not guaranteed and attention cannot be forced through direct messages.",
      ],
    },
    {
      heading: "Safer habits still matter",
      paragraphs: [
        "Even with better product controls, safe dating habits matter. Keep early conversations inside the app. Avoid sharing your home address, workplace, financial details, identification documents, or private photos with someone you just met. When meeting in person, choose a public place, arrange your own transport, and tell someone you trust where you are going.",
        "Vely gives women more control over discovery and chat, but the best experience comes from combining those controls with clear personal boundaries. A respectful match will not pressure you to move faster than you want.",
      ],
    },
  ],
  steps: [
    {
      title: "Create your profile",
      text: "Add only what you are comfortable sharing and adjust your discovery preferences.",
    },
    {
      title: "Browse privately",
      text: "Review profiles and like only the people who feel relevant and respectful.",
    },
    {
      title: "Chat after a mutual match",
      text: "Keep early conversations in the app and use block or report whenever needed.",
    },
  ],
  faqs: [
    {
      question: "Is Vely a safe dating app for women?",
      answer:
        "Vely is designed with safety controls that help women stay in control, including mutual matching, private likes, blocking, reporting, and adults-only standards.",
    },
    {
      question: "Can people message me without matching?",
      answer:
        "No. Vely opens chat only after both sides express interest.",
    },
    {
      question: "Can I block someone on Vely?",
      answer:
        "Yes. Vely includes in-app blocking and reporting tools.",
    },
    {
      question: "Should I move to WhatsApp immediately?",
      answer:
        "It is safer to keep early conversations inside the dating app until you have built trust.",
    },
    {
      question: "Is Vely only for women?",
      answer:
        "No. Vely is for adults 18+, including singles and couples, but its matching model gives women stronger control over who can contact them.",
    },
  ],
  ctaHeading: "Date with more control.",
  ctaText:
    "Download Vely free on Android and discover nearby matches on your terms.",
};

export default function SafeDatingAppForWomenPage() {
  return <SeoPage config={config} />;
}
