import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate, type PostCategory } from "@/lib/blog";
import { Icon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Dating Tips, Safety Guides & City Stories",
  description:
    "Advice, guides, and stories for singles and couples — from safety tips to city date ideas. The Vely blog covers connection, safety, and social discovery in India and beyond.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: "Vely Blog — Tips for Singles & Couples",
    description: "Dating tips, safety guides, city stories, and more from the team behind Vely.",
    url: `${SITE_URL}/blog/`,
  },
};

const CATEGORIES: PostCategory[] = ["Couples", "Singles", "Safety", "City Guides", "Tips"];

const CATEGORY_DESCRIPTIONS: Record<PostCategory, string> = {
  Couples: "For couples exploring social discovery together",
  Singles: "For singles looking for real connections",
  Safety: "Staying safe online and in person",
  "City Guides": "Local guides for Indian cities",
  Tips: "Practical advice for better connections",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Vely Blog",
    description: "Dating tips, safety guides, and city stories from the Vely team.",
    url: `${SITE_URL}/blog/`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      author: { "@type": "Organization", name: p.author },
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  };

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="shell narrow">
          <span className="eyebrow">VELY BLOG</span>
          <h1>Connection, safety, and city life.</h1>
          <p>
            Guides for singles and couples navigating social discovery in India
            and beyond — from choosing a safe app to the best date spots in your city.
          </p>
        </div>
      </section>

      {/* ── Category strips ── */}
      <section className="section">
        <div className="shell">
          {/* Category pills */}
          <div className="blog-category-strip">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="blog-category-pill">
                {cat}
              </span>
            ))}
          </div>

          {/* Post grid */}
          {posts.length === 0 ? (
            <p className="blog-empty">No posts yet — check back soon.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className={`blog-card${i === 0 ? " blog-card--featured" : ""}`}
                >
                  <div className="blog-card-cover" aria-hidden="true">
                    <div className="blog-card-cover-inner">
                      <span className="blog-card-category">{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="blog-card-desc">{post.description}</p>
                    <Link className="text-link blog-card-link" href={`/blog/${post.slug}`}>
                      Read article <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Category overview ── */}
      <section className="section section--tinted">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE COVER</span>
            <h2>Something for every reader.</h2>
          </div>
          <div className="blog-topics-grid">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="blog-topic-card">
                <strong>{cat}</strong>
                <p>{CATEGORY_DESCRIPTIONS[cat]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
    </main>
  );
}

