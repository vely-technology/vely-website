import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndexablePosts, categorySlug, formatDate } from "@/lib/blog";
import { Icon } from "@/components/icons";
import { StoreButton } from "@/components/store-button";
import { SITE_URL } from "@/lib/site";

const CATEGORY_COPY: Record<string, { title: string; description: string }> = {
  Couples: {
    title: "Dating Advice for Couples",
    description: "Guides for couples meeting other couples and singles together: joint profiles, boundaries, safety and where to go.",
  },
  Singles: {
    title: "Dating Advice for Singles",
    description: "Practical guides for singles who want real connections: profiles, first messages, meeting safely and finding your people.",
  },
  Safety: {
    title: "Dating Safety Guides",
    description: "How to stay safe on dating apps and in person: verification, privacy settings, video calls, meeting in public and reporting.",
  },
  "City Guides": {
    title: "City Dating Guides",
    description: "Where to meet people and plan dates in the cities where Vely is growing.",
  },
  Tips: {
    title: "Dating Tips",
    description: "Short, practical advice on profiles, conversations, dates and keeping dating enjoyable.",
  },
};

function categoriesInUse() {
  const posts = getIndexablePosts();
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function generateStaticParams() {
  return categoriesInUse().map((c) => ({ category: categorySlug(c) }));
}

function resolveCategory(slug: string): string | null {
  return categoriesInUse().find((c) => categorySlug(c) === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const name = resolveCategory(category);
  if (!name) return { title: "Category not found" };
  const copy = CATEGORY_COPY[name] ?? { title: `${name} articles`, description: `Vely blog articles about ${name.toLowerCase()}.` };
  return {
    title: `${copy.title} | Vely Blog`,
    description: copy.description,
    alternates: { canonical: `${SITE_URL}/blog/category/${category}/` },
    openGraph: { title: copy.title, description: copy.description, url: `${SITE_URL}/blog/category/${category}/` },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const name = resolveCategory(category);
  if (!name) notFound();
  const copy = CATEGORY_COPY[name] ?? { title: `${name} articles`, description: `Vely blog articles about ${name.toLowerCase()}.` };
  const posts = getIndexablePosts().filter((p) => p.category === name);
  const others = categoriesInUse().filter((c) => c !== name);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.title,
    url: `${SITE_URL}/blog/category/${category}/`,
    isPartOf: { "@type": "Blog", name: "Vely Blog", url: `${SITE_URL}/blog/` },
    hasPart: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}/`, datePublished: p.publishedAt })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: name, item: `${SITE_URL}/blog/category/${category}/` },
    ],
  };

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="shell narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span> <Link href="/blog/">Blog</Link> <span aria-hidden="true">›</span> <span>{name}</span>
          </nav>
          <span className="eyebrow">VELY BLOG · {name.toUpperCase()}</span>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="blog-filter-list" role="navigation" aria-label="Other categories">
            <Link className="blog-filter" href="/blog/">All</Link>
            {others.map((c) => (
              <Link key={c} className="blog-filter" href={`/blog/category/${categorySlug(c)}/`}>{c}</Link>
            ))}
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-cover" aria-hidden="true"><div className="blog-card-cover-inner"><span className="blog-card-category">{post.category}</span></div></div>
                <div className="blog-card-body">
                  <div className="blog-card-meta"><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readingTime} min read</span></div>
                  <h2 className="blog-card-title"><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h2>
                  <p className="blog-card-desc">{post.description}</p>
                  <Link className="text-link blog-card-link" href={`/blog/${post.slug}/`}>Read article <Icon name="arrow" size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="download-cta">
        <div className="shell cta-inner">
          <div>
            <span className="eyebrow eyebrow--light">GET STARTED FREE</span>
            <h2>Meet singles and couples near you.</h2>
            <p>Download Vely on Android. Private likes, mutual matching, chat in the app.</p>
          </div>
          <div>
            <StoreButton location={`blog_category_${category}`} />
            <span className="cta-note">Available on Android · iOS coming soon</span>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
