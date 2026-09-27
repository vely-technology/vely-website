"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { formatDate, type PostCategory, type PostMeta } from "@/lib/blog";

const categories: Array<"All" | PostCategory> = ["All", "Couples", "Singles", "Safety", "City Guides", "Tips"];

export function BlogBrowser({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | PostCategory>("All");
  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchable = `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [category, posts, query]);

  return (
    <>
      <div className="blog-controls" aria-label="Filter blog posts">
        <label className="blog-search">
          <span className="sr-only">Search articles</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dating, safety, or city guides" />
        </label>
        <div className="blog-filter-list" role="group" aria-label="Article category">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "blog-filter blog-filter--active" : "blog-filter"} onClick={() => setCategory(item)} aria-pressed={category === item}>
              {item}
            </button>
          ))}
        </div>
      </div>
      {filteredPosts.length === 0 ? (
        <p className="blog-empty">No articles match that search yet.</p>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <article key={post.slug} className={`blog-card${index === 0 && !query && category === "All" ? " blog-card--featured" : ""}`}>
              <div className="blog-card-cover" aria-hidden="true"><div className="blog-card-cover-inner"><span className="blog-card-category">{post.category}</span></div></div>
              <div className="blog-card-body">
                <div className="blog-card-meta"><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readingTime} min read</span></div>
                <h2 className="blog-card-title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p className="blog-card-desc">{post.description}</p>
                <Link className="text-link blog-card-link" href={`/blog/${post.slug}`}>Read article <Icon name="arrow" size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
