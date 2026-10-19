import type { Metadata } from "next";
import { SeoPage } from "@/components/seo-page";
import { competitorPages } from "@/lib/competitor-pages";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = { title: "Nymph Alternative for Non-Monogamous Dating", description: "Looking for a Nymph alternative? Vely supports singles and couples with nearby discovery, mutual matching, and clear social connection goals. Free on Android.", keywords: ["Nymph alternative", "apps like Nymph", "non-monogamy dating app"], alternates: { canonical: `${SITE_URL}/nymph-alternative/` } };
export default function Page() { return <SeoPage config={competitorPages.nymph} />; }
