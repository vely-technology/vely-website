import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export const dynamic = "force-static";
const routes = ["", "/about", "/safety", "/support", "/privacy", "/terms", "/delete-account", "/child-safety"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date("2026-07-16"), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 })); }
