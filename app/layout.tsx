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
import { GA_MEASUREMENT_ID, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Vely — Meet people who match your vibe", template: "%s | Vely" },
  description: "Vely is an adults-only social discovery app for singles and couples to meet people, make friends, and build meaningful connections nearby.",
  applicationName: "Vely",
  keywords: ["social discovery app", "meet people nearby", "friendship app", "singles and couples", "Vely"],
  alternates: { canonical: SITE_URL },
  openGraph: { type: "website", siteName: "Vely", title: "Meet people who match your vibe", description: "Social discovery for singles and couples.", url: SITE_URL, images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Vely — Meet people who match your vibe" }] },
  twitter: { card: "summary_large_image", title: "Vely — Meet people who match your vibe", description: "Social discovery for singles and couples.", images: [`${SITE_URL}/og-image.png`] },
  icons: { icon: `${SITE_URL}/app-icon.png`, apple: `${SITE_URL}/app-icon.png` },
};

export const viewport: Viewport = { themeColor: "#7A244F", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "MobileApplication", name: "Vely", operatingSystem: "Android", applicationCategory: "SocialNetworkingApplication", url: SITE_URL, downloadUrl: "https://play.google.com/store/apps/details?id=com.vely.app", audience: { "@type": "PeopleAudience", requiredMinAge: 18 } };
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /><GoogleAnalytics measurementId={GA_MEASUREMENT_ID} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
