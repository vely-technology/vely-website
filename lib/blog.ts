import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostCategory =
  | "Couples"
  | "Singles"
  | "Safety"
  | "City Guides"
  | "Tips";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string, e.g. "2026-08-27"
  category: PostCategory;
  tags: string[];
  image: string;
  author: string;
  readingTime: number; // minutes
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function wordsPerMinute(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));

  const posts: PostMeta[] = files.map((filename) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const slug = slugFromFilename(filename);

    return {
      slug,
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      publishedAt: data.publishedAt ?? "2026-01-01",
      category: (data.category as PostCategory) ?? "Tips",
      tags: Array.isArray(data.tags) ? data.tags : [],
      image: data.image ?? "/blog/covers/default.jpg",
      author: data.author ?? "Vely Team",
      readingTime: wordsPerMinute(content),
    };
  });

  // Sort newest first
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const extensions = ["mdx", "md"];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const candidate = path.join(POSTS_DIR, `${slug}.${ext}`);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    publishedAt: data.publishedAt ?? "2026-01-01",
    category: (data.category as PostCategory) ?? "Tips",
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image ?? "/blog/covers/default.jpg",
    author: data.author ?? "Vely Team",
    readingTime: wordsPerMinute(content),
    contentHtml,
  };
}

export function getRelatedPosts(current: PostMeta, all: PostMeta[], limit = 3): PostMeta[] {
  return all
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      // Score by shared category + shared tags
      let score = 0;
      if (p.category === current.category) score += 3;
      current.tags.forEach((t) => { if (p.tags.includes(t)) score += 1; });
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
