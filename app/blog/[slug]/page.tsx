import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";
import { Icon } from "@/components/icons";
import { StoreButton } from "@/components/store-button";
import { SITE_URL } from "@/lib/site";

// Required for static export — tells Next which slugs to pre-render
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image
        ? [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = getRelatedPosts(post, allPosts);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Vely",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand-mark.png` },
    },
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <main id="main-content">
      {/* ── Post header ── */}
      <header className="post-header">
        <div className="shell post-header-inner">
          {/* Breadcrumb */}
          <nav className="post-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="arrow" size={13} />
            <Link href="/blog">Blog</Link>
            <Icon name="arrow" size={13} />
            <span>{post.category}</span>
          </nav>

          <span className="post-category-badge">{post.category}</span>

          <h1>{post.title}</h1>

          <div className="post-byline">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="shell post-layout">
        {/* Main content */}
        <article className="post-content">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mid-article CTA */}
          <aside className="post-cta-inline">
            <div>
              <strong>Try Vely free on Android</strong>
              <p>
                Social discovery for singles and couples. Mutual matching, safety
                controls, and real connections nearby.
              </p>
            </div>
            <StoreButton location={`blog_inline_${post.slug}`} compact />
          </aside>
        </article>

        {/* Sidebar */}
        <aside className="post-sidebar">
          <div className="post-sidebar-card">
            <strong>Download Vely</strong>
            <p>
              The social discovery app for singles and couples. Free on Android.
            </p>
            <StoreButton location={`blog_sidebar_${post.slug}`} compact />
          </div>

          {related.length > 0 && (
            <div className="post-sidebar-card">
              <strong>Related articles</strong>
              <ul className="post-related-list">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                    <span>{r.readingTime} min</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="section section--tinted">
          <div className="shell">
            <div className="section-heading section-heading--left">
              <span className="eyebrow">READ NEXT</span>
              <h2>More from the blog.</h2>
            </div>
            <div className="blog-grid blog-grid--compact">
              {related.map((r) => (
                <article className="blog-card" key={r.slug}>
                  <div className="blog-card-cover" aria-hidden="true">
                    <div className="blog-card-cover-inner">
                      <span className="blog-card-category">{r.category}</span>
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{formatDate(r.publishedAt)}</span>
                      <span>·</span>
                      <span>{r.readingTime} min read</span>
                    </div>
                    <h3 className="blog-card-title">
                      <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                    </h3>
                    <p className="blog-card-desc">{r.description}</p>
                    <Link className="text-link blog-card-link" href={`/blog/${r.slug}`}>
                      Read article <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="download-cta">
        <div className="shell cta-inner">
          <div>
            <span className="eyebrow eyebrow--light">GET STARTED FREE</span>
            <h2>Your next connection is nearby.</h2>
            <p>Download Vely and discover people who match your vibe.</p>
          </div>
          <div>
            <StoreButton location={`blog_footer_${post.slug}`} />
            <span className="cta-note">Available on Android · iOS coming soon</span>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
