import type { Metadata } from "next";
import { SeoPage } from "@/components/seo-page";
import { competitorPages } from "@/lib/competitor-pages";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = { title: "3Fun Alternative for Singles and Couples", description: "Looking for a 3Fun alternative? Vely helps singles and couples discover nearby connections through mutual matching and clear profiles. Free on Android.", keywords: ["3Fun alternative", "apps like 3Fun", "3Fun alternative for couples"], alternates: { canonical: `${SITE_URL}/3fun-alternative/` } };
export default function Page() { return <SeoPage config={competitorPages.threefun} />; }
