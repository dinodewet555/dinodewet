// Single source of truth for blog article metadata.
//
// Every consumer — the /blog index (cards + JSON-LD Blog graph), the XML
// sitemap, and any related-post modules — reads from this list so the data
// can never drift across files. Adding an article = adding one entry here
// plus its page.tsx. The long-form body still lives in each route's page.tsx;
// only the metadata that multiple surfaces need is centralised here.

import { SITE_URL } from "@/lib/site";

export const SITE = SITE_URL;

export type PostCategory =
  | "Semantic SEO"
  | "Generative Engine Optimisation"
  | "Local SEO"
  | "Web Development"
  | "Content Marketing";

export type Post = {
  /** Path relative to /blog, e.g. "semantic-seo/semantic-seo-topical-map". */
  slug: string;
  /** Used as both the display title and the schema headline. */
  title: string;
  category: PostCategory;
  summary: string;
  /** ISO date for schema datePublished + sitemap lastModified. */
  publishedISO: string;
  /** ISO date for schema dateModified (defaults to publishedISO). */
  modifiedISO?: string;
  /** Human-readable date for cards, e.g. "3 May 2026". */
  dateDisplay: string;
  readTime: string;
  featured?: boolean;
  /** Sitemap priority (0–1). Defaults to 0.75. */
  priority?: number;
};

// Ordered newest-first for display. The /blog index renders this order directly.
export const posts: Post[] = [
  {
    slug: "semantic-seo/entity-seo-knowledge-graph",
    title: "Entity SEO and the Knowledge Graph: How to Optimise for Entities in 2026",
    category: "Semantic SEO",
    summary:
      "Entity SEO optimises content for the things search engines understand — people, places, products, and concepts — rather than keyword strings. This guide explains entities, the entity-attribute-value model, how Google's Knowledge Graph works, and the practical signals that make your entities unambiguous to search and AI systems.",
    publishedISO: "2026-06-21",
    dateDisplay: "21 June 2026",
    readTime: "13 min read",
    priority: 0.8,
  },
  {
    slug: "semantic-seo/semantic-seo-topical-map",
    title: "Semantic SEO Topical Map: The Complete 2026 Blueprint for Topical Authority",
    category: "Semantic SEO",
    summary:
      "A semantic SEO topical map organises a website around entities and their relationships rather than keywords. This 2026 blueprint covers the anatomy, the four-step build process, schema strategy, and the difference between a topical map and a content silo.",
    publishedISO: "2026-05-03",
    dateDisplay: "3 May 2026",
    readTime: "13 min read",
    priority: 0.8,
  },
  {
    slug: "semantic-seo/semantic-seo-vs-traditional-seo",
    title: "Semantic SEO vs. Traditional SEO: What Actually Changed in 2026",
    category: "Semantic SEO",
    summary:
      "Traditional SEO targets exact-match keywords and accumulates backlinks by volume. Semantic SEO focuses on meaning, context, and topical authority — the signals AI-powered search engines now use. Learn why old tactics are losing traction and how to build a hybrid strategy.",
    publishedISO: "2026-05-03",
    dateDisplay: "3 May 2026",
    readTime: "11 min read",
    priority: 0.8,
  },
  {
    slug: "local-seo/seo-audit-checklist-cape-town",
    title: "SEO Audit Checklist for Cape Town Businesses (2026)",
    category: "Local SEO",
    summary:
      "An SEO audit for Cape Town businesses examines technical health, on-page content, Google Business Profile, and local citation consistency. This checklist covers the factors that kill rankings in 2026 — with step-by-step fixes.",
    publishedISO: "2026-05-03",
    dateDisplay: "3 May 2026",
    readTime: "12 min read",
    priority: 0.8,
  },
  {
    slug: "generative-engine-optimisation",
    title: "What Is Generative Engine Optimisation? A Complete Guide",
    category: "Generative Engine Optimisation",
    summary:
      "Generative Engine Optimisation (GEO) is the practice of structuring content so AI-powered search engines cite, quote, and recommend your brand. This guide covers the full framework — from AI retrieval mechanics to citation-ready content and passage ranking.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "14 min read",
    priority: 0.85,
  },
  {
    slug: "generative-engine-optimisation/geo-vs-seo",
    title: "SEO vs GEO: The Core Difference",
    category: "Generative Engine Optimisation",
    summary:
      "SEO relies on ranking signals to place pages in search results. GEO relies on content quality, structure, and extractability to determine whether content appears in AI-generated answers. Learn the core difference and why businesses need both.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "12 min read",
  },
  {
    slug: "generative-engine-optimisation/how-ai-search-engines-choose-sources",
    title: "How AI Search Engines Choose Sources",
    category: "Generative Engine Optimisation",
    summary:
      "AI search engines like ChatGPT, Perplexity, and Google AI Overviews apply specific retrieval models to select citation sources. Learn the six core signals and how to optimise for each.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "10 min read",
  },
  {
    slug: "generative-engine-optimisation/what-makes-content-citation-ready",
    title: "What Makes Content Citation-Ready for AI Search?",
    category: "Generative Engine Optimisation",
    summary:
      "Citation-ready content has seven structural properties that AI retrieval systems look for. Learn each property, how to apply it, and how to audit your existing content against the full checklist.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "9 min read",
  },
  {
    slug: "generative-engine-optimisation/google-ai-overviews-and-geo",
    title: "How Google AI Overviews Change SEO and GEO",
    category: "Generative Engine Optimisation",
    summary:
      "Google AI Overviews appear above all organic results for millions of queries. Learn how they work, how they affect traffic, and the specific optimisation changes required to earn AI Overview citation.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "10 min read",
  },
  {
    slug: "generative-engine-optimisation/geo-for-south-african-businesses",
    title: "Generative Engine Optimisation for South African Businesses",
    category: "Generative Engine Optimisation",
    summary:
      "Most South African businesses are not yet implementing GEO. Learn how to build local entity signals, target South African-specific queries, and capture first-mover AI citation advantage.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "9 min read",
  },
  {
    slug: "generative-engine-optimisation/passage-ranking-and-ai-visibility",
    title: "How Passage Ranking Affects AI Search Visibility",
    category: "Generative Engine Optimisation",
    summary:
      "Google Passage Ranking indexes individual paragraphs independently — and the same mechanism powers AI retrieval. Learn how to structure content that benefits from both simultaneously.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "9 min read",
  },
  {
    slug: "generative-engine-optimisation/benefits-of-generative-engine-optimisation",
    title: "The Benefits of Generative Engine Optimisation (GEO)",
    category: "Generative Engine Optimisation",
    summary:
      "GEO helps businesses improve visibility in AI-generated answers, strengthen authority in emerging search environments, and compete more effectively for high-intent discovery. A complete guide to the ten core benefits.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "11 min read",
  },
  {
    slug: "generative-engine-optimisation/ai-overview-brand-visibility-factors",
    title: "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal",
    category: "Generative Engine Optimisation",
    summary:
      "Based on an analysis of 75,000 brands, the strongest factor behind AI Overview brand mentions was branded web mentions — not backlinks or ad spend. Learn the findings and what businesses should do.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "11 min read",
  },
  {
    slug: "semantic-seo/what-is-semantic-seo",
    title: "Semantic SEO: What It Is and 10 Tips for Success",
    category: "Semantic SEO",
    summary:
      "Semantic SEO builds content around entities, attributes, relationships, and search intent. This guide explains what it is, why it matters, and 10 practical tips to improve topical authority, entity clarity, and search visibility.",
    publishedISO: "2026-04-23",
    dateDisplay: "23 April 2026",
    readTime: "14 min read",
    featured: true,
    priority: 0.8,
  },
];

/** Full canonical URL for a post. */
export function postUrl(slug: string): string {
  return `${SITE}/blog/${slug}`;
}

/** The single featured post (or undefined). */
export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured);
}

/** BlogPosting nodes for the /blog JSON-LD @graph. */
export function blogPostingNodes() {
  return posts.map((p) => ({
    "@type": "BlogPosting" as const,
    "@id": `${postUrl(p.slug)}#article`,
    headline: p.title,
    url: postUrl(p.slug),
    datePublished: p.publishedISO,
    author: { "@id": `${SITE}/#person` },
  }));
}
