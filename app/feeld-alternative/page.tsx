import type { Metadata } from "next";
import { SeoPage } from "@/components/seo-page";
import { competitorPages } from "@/lib/competitor-pages";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = { title: "Feeld Alternative for Singles and Couples", description: "Looking for a Feeld alternative? Vely offers nearby discovery, couple and individual profiles, mutual matching, and safety controls. Free on Android.", keywords: ["Feeld alternative", "apps like Feeld", "Feeld alternative for couples"], alternates: { canonical: `${SITE_URL}/feeld-alternative/` } };
export default function Page() { return <SeoPage config={competitorPages.feeld} />; }
