import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/safety",
  "/support",
  "/privacy",
  "/terms",
  "/delete-account",
  "/child-safety",
];

const seoRoutes = [
  "/dating-app-for-couples",
  "/dating-app-for-singles-in-india",
  "/safe-dating-app-in-india",
  "/dating-app-in-thailand",
  "/dating-app-in-bangkok",
  "/dating-app-in-pattaya",
  // New pages
  "/open-minded-dating-app",
  "/couples-dating-app",
  "/dating-app-for-couples-in-us",
  "/dating-app-for-couples-in-uk",
  "/singles-and-couples-dating-app",
  "/dating-app-in-singapore",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const static_: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const seo: MetadataRoute.Sitemap = seoRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Blog index
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-08-27"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Individual blog posts — dynamically sourced from content/blog/
  const posts = getAllPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...static_, ...seo, ...blogIndex, ...blogPosts];
}
