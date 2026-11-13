import type { Metadata, Viewport } from "next";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Header } from "@/components/header";
import { GA_MEASUREMENT_ID, PLAY_STORE_URL, SITE_URL, SOCIAL_LINKS, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vely App - Open-Minded Dating for Singles & Couples",
    template: "%s | Vely",
  },
  description:
    "Vely is the open-minded dating app for singles and couples. GPS-based matching, verified profiles, mutual likes only. Free on Android.",
  applicationName: "Vely",
  keywords: [
    "open minded dating app",
    "dating app for couples",
    "singles and couples dating",
    "couples dating app",
    "meet couples nearby",
    "open relationship app",
    "couple friendly dating app",
    "GPS dating app",
    "Vely app",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "Vely",
    title: "Vely App - Open-Minded Dating for Singles & Couples",
    description:
      "GPS-based dating for singles and couples. Mutual matching, verified profiles, all orientations welcome. Free on Android.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vely App - Open-Minded Dating for Singles & Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vely App - Open-Minded Dating for Singles & Couples",
    description:
      "GPS dating for singles and couples. Mutual matching. Free on Android.",
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: `${SITE_URL}/app-icon.png`,
    apple: `${SITE_URL}/app-icon.png`,
  },
};

export const viewport: Viewport = { themeColor: "#7A244F", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = [PLAY_STORE_URL, ...SOCIAL_LINKS.map(({ href }) => href)];
  const organizationId = `${SITE_URL}/#organization`;
  // Organization + WebSite entities tell Google that "Vely" is a brand with this
  // site as its home, which is what the brand-name query needs to rank #1.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Vely",
        alternateName: ["Vely Dating", "Vely app", "Join Vely"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/app-icon.png`,
        },
        email: SUPPORT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SUPPORT_EMAIL,
          url: `${SITE_URL}/support/`,
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Vely",
        alternateName: "Join Vely",
        url: SITE_URL,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Vely: Couples & Singles Dating",
        alternateName: ["Vely", "Vely app", "Vely dating app"],
        description:
          "Open-minded dating app for singles and couples. GPS-based matching, verified profiles, mutual matching only. All orientations welcome.",
        operatingSystem: "Android",
        applicationCategory: "SocialNetworkingApplication",
        url: SITE_URL,
        downloadUrl: PLAY_STORE_URL,
        installUrl: PLAY_STORE_URL,
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        sameAs,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        audience: {
          "@type": "PeopleAudience",
          requiredMinAge: 18,
        },
      },
    ],
  };
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /><GoogleAnalytics measurementId={GA_MEASUREMENT_ID} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
