import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Calendar,
  ChevronDown,
  Search,
  Tag,
  TrendingUp,
  Zap,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Growth Blog | Semantic SEO, Web Dev & Content Strategy",
  description:
    "Guides, tutorials, and frameworks covering semantic SEO, entity-based optimisation, web development, content strategy, and AI search. Practical insights for businesses, marketers, and SEO teams.",
  keywords: [
    "SEO Blog",
    "Semantic SEO Guide",
    "Entity SEO",
    "Topical Authority",
    "Web Development Blog",
    "Content Strategy",
    "AI Search",
    "NLP SEO",
    "Knowledge Graph SEO",
    "Dino de Wet Blog",
  ],
  alternates: {
    canonical: "https://dinodewet.tech/blog",
  },
  openGraph: {
    title: "SEO & Digital Growth Blog | Semantic SEO, Web Dev & Content Strategy",
    description:
      "Practical guides and frameworks covering semantic SEO, entity optimisation, web development, and AI search strategy.",
    url: "https://dinodewet.tech/blog",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "SEO & Digital Growth Blog by Dino de Wet",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://dinodewet.tech/blog#blog",
      "url": "https://dinodewet.tech/blog",
      "name": "SEO & Digital Growth Blog",
      "description":
        "Guides, tutorials, and frameworks covering semantic SEO, entity-based optimisation, web development, content strategy, and AI search.",
      "publisher": { "@id": "https://dinodewet.tech/#person" },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "@id": "https://dinodewet.tech/blog/what-is-semantic-seo#article",
          "headline": "What Is Semantic SEO? A Complete Guide",
          "url": "https://dinodewet.tech/blog/what-is-semantic-seo",
          "datePublished": "2026-04-22",
          "author": { "@id": "https://dinodewet.tech/#person" },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.tech/blog#webpage",
      "url": "https://dinodewet.tech/blog",
      "name": "SEO & Digital Growth Blog | Semantic SEO, Web Dev & Content Strategy",
      "description":
        "Practical guides and frameworks covering semantic SEO, entity optimisation, web development, and AI search strategy.",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.tech/blog" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.tech/blog#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often do you publish blog posts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New articles are published on a consistent schedule — typically two to four posts per month. The focus is depth over volume: every article is researched, entity-mapped, and structured to provide genuine practical value rather than surface-level coverage.",
          },
        },
        {
          "@type": "Question",
          "name": "Are your SEO guides beginner friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most guides are written to be accessible to marketers, business owners, and SEO practitioners at any level. Where technical depth is required, concepts are explained from first principles before moving into advanced implementation. Guides are categorised so readers can find content matched to their experience level.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I hire you after reading a post?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every article represents the same thinking applied in client engagements. If a guide addresses a problem your business faces and you want professional implementation rather than DIY execution, the contact page is the starting point for a discovery conversation.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you cover AI search topics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AI search — including Google AI Overviews, ChatGPT search, and Perplexity — is a core focus area. The blog covers how semantic SEO principles align with AI retrieval systems, how to structure content for passage-level extraction, and how entity-first architecture positions sites for visibility across both traditional and AI-driven search surfaces.",
          },
        },
      ],
    },
  ],
};

const posts = [
  {
    slug: "what-is-semantic-seo",
    title: "What Is Semantic SEO? A Complete Guide",
    category: "Semantic SEO",
    summary:
      "Semantic SEO builds search visibility around entities, attributes, and relationships rather than keywords. This guide explains how it works, why it outperforms traditional keyword SEO, and how to implement it using entity-first content architecture.",
    date: "22 April 2026",
    readTime: "12 min read",
    featured: true,
  },
];

const categories = [
  {
    name: "Semantic SEO",
    topics: ["Entity SEO", "Topical Authority", "NLP SEO", "Knowledge Graph SEO"],
  },
  {
    name: "Web Development",
    topics: ["Website Design", "UX", "Speed Optimisation", "CMS Guides"],
  },
  {
    name: "Local SEO",
    topics: ["Google Business Profile", "Maps Rankings", "Local Citations"],
  },
  {
    name: "Content Marketing",
    topics: ["Blog Strategy", "Conversion Copywriting", "Content Clusters"],
  },
  {
    name: "Ecommerce Growth",
    topics: ["Shopify SEO", "Product Page Optimisation", "CRO"],
  },
];

const services = [
  { label: "Semantic SEO Services", href: "/semantic-seo-services" },
  { label: "Web Development Services", href: "/web-development-services" },
  { label: "Semantic SEO", href: "/semantic-seo" },
];

const whyRead = [
  {
    icon: BookOpen,
    title: "Expert-Led Content",
    description:
      "Every article is written from direct experience — not rephrased documentation or recycled listicles. The frameworks, methodologies, and implementation steps reflect what is actually applied in client engagements.",
  },
  {
    icon: Zap,
    title: "Actionable Guides",
    description:
      "Concepts are always paired with implementation. Every guide ends with steps a reader can execute — whether they are running a campaign themselves or briefing a team. Real use cases replace generic advice.",
  },
  {
    icon: RefreshCw,
    title: "Updated Strategies",
    description:
      "Search is not static. As Google's systems evolve, AI search surfaces expand, and ranking signals shift, the content reflects what is current — not what worked in 2019. Algorithm changes are covered as they affect real strategy.",
  },
];

const faqs = [
  {
    question: "How often do you publish blog posts?",
    answer:
      "New articles are published on a consistent schedule — typically two to four posts per month. The focus is depth over volume: every article is researched, entity-mapped, and structured to provide genuine practical value rather than surface-level coverage.",
  },
  {
    question: "Are your SEO guides beginner friendly?",
    answer:
      "Most guides are written to be accessible to marketers, business owners, and SEO practitioners at any level. Where technical depth is required, concepts are explained from first principles before moving into advanced implementation. Guides are categorised so readers can find content matched to their experience level.",
  },
  {
    question: "Can I hire you after reading a post?",
    answer:
      "Yes. Every article represents the same thinking applied in client engagements. If a guide addresses a problem your business faces and you want professional implementation rather than DIY execution, the contact page is the starting point for a discovery conversation.",
  },
  {
    question: "Do you cover AI search topics?",
    answer:
      "Yes. AI search — including Google AI Overviews, ChatGPT search, and Perplexity — is a core focus area. The blog covers how semantic SEO principles align with AI retrieval systems, how to structure content for passage-level extraction, and how entity-first architecture positions sites for visibility across both traditional and AI-driven search surfaces.",
  },
];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const latestPosts = posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Knowledge
            </p>
            <h1
              className="font-heading font-bold text-white mb-6"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                letterSpacing: "-0.035em",
                lineHeight: 1.0,
                maxWidth: "900px",
              }}
            >
              SEO &amp; Digital Growth Blog
            </h1>
            <p
              style={{
                color: "#a1a1a1",
                maxWidth: "580px",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Guides, tutorials, case studies, and frameworks covering semantic SEO, entity-based optimisation, web development, content strategy, and AI search. Practical insights for businesses, marketers, and SEO teams who want to understand how modern search actually works — and how to build for it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section
          className="py-28"
          style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-10"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Featured Article
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div
                className="rounded-2xl border p-10 md:p-14 relative overflow-hidden"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.015)" }}
              >
                <div
                  className="absolute -top-40 -right-40 w-96 h-96 opacity-5 pointer-events-none rounded-full"
                  style={{ background: "radial-gradient(circle, white, transparent)" }}
                />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded border"
                        style={{
                          color: "#a1a1a1",
                          borderColor: "#2a2a2a",
                          background: "rgba(255,255,255,0.03)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        <Clock size={12} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2
                      className="font-heading font-bold text-white mb-5"
                      style={{
                        fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                      }}
                    >
                      {featuredPost.title}
                    </h2>
                    <p
                      className="mb-8"
                      style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                    >
                      {featuredPost.summary}
                    </p>
                    <div className="flex items-center gap-6">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Read Full Article <ArrowRight size={14} />
                      </Link>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        <Calendar size={12} />
                        {featuredPost.date}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Covers", value: "Knowledge Graphs" },
                      { label: "Method", value: "Entity-First" },
                      { label: "For", value: "Marketers & SEOs" },
                      { label: "Depth", value: "Complete Guide" },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        className="rounded-xl border p-5"
                        style={{
                          borderColor: "#1f1f1f",
                          background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                        }}
                      >
                        <p
                          className="font-heading font-semibold text-white mb-1"
                          style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}
                        >
                          {item.value}
                        </p>
                        <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Latest
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Latest Blog Posts
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 80}>
                <div
                  className="card-hover rounded-xl border h-full flex flex-col overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  {/* Category bar */}
                  <div
                    className="px-6 pt-6 pb-0"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                        style={{
                          color: "#a1a1a1",
                          borderColor: "#2a2a2a",
                          background: "rgba(255,255,255,0.03)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex flex-col flex-1">
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 1.35 }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm mb-5 flex-1"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #1f1f1f" }}>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Read More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Browse
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Blog Categories
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 70}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={13} color="#a1a1a1" />
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}
                    >
                      {cat.name}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {cat.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#3a3a3a" }} />
                        <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {topic}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Reads */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Popular
            </p>
            <h2
              className="font-heading font-bold text-white mb-12"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Popular Reads
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-3">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`}>
                  <div
                    className="card-hover flex items-center justify-between gap-6 rounded-xl border px-6 py-5"
                    style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className="font-heading font-bold flex-shrink-0"
                        style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.08)", letterSpacing: "-0.04em" }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <p
                          className="font-heading font-semibold text-white mb-1"
                          style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                        >
                          {post.title}
                        </p>
                        <div className="flex items-center gap-4">
                          <span
                            className="text-xs px-2 py-0.5 rounded border"
                            style={{
                              color: "#a1a1a1",
                              borderColor: "#2a2a2a",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                            <Clock size={10} /> {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={16} color="#a1a1a1" className="flex-shrink-0" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Search
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Find Topics Fast
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              Browse by keyword, filter by category, or sort by date to find exactly what you need.
            </p>

            {/* Search bar */}
            <div
              className="flex items-center gap-3 rounded-xl border px-5 py-4 mb-6"
              style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
            >
              <Search size={16} color="#a1a1a1" className="flex-shrink-0" />
              <p className="text-sm" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
                Search articles — semantic SEO, web development, entity optimisation...
              </p>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Filter by category", placeholder: "All Categories" },
                { label: "Filter by service type", placeholder: "All Services" },
                { label: "Sort by", placeholder: "Newest First" },
              ].map((filter) => (
                <div
                  key={filter.label}
                  className="flex items-center justify-between gap-2 rounded-lg border px-4 py-3"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <p className="text-xs" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
                    {filter.placeholder}
                  </p>
                  <ChevronDown size={13} color="#3a3a3a" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Read */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Why This Blog
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Why Read Our Blog?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyRead.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 100}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Subscribe
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Get New SEO &amp; Web Growth Tips
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              Monthly updates covering new guides, strategy shifts, and practical frameworks. No filler content, no spam — only articles worth reading.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div
                className="flex-1 rounded-lg border px-5 py-3.5 text-left"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-sm" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
                  your@email.com
                </p>
              </div>
              <button
                type="button"
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium flex-shrink-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
            <p className="mt-4 text-xs" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)" }}>
              Monthly updates only. Unsubscribe any time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Internal Links to Services */}
      <section className="py-24 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-10"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Ready to apply what you&apos;ve read?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.label} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              FAQ
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <details
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <summary
                    className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none"
                    style={{ userSelect: "none" }}
                  >
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={16}
                      color="#a1a1a1"
                      className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Work Together
            </p>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Need Help Growing Your Website?
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              The frameworks covered in this blog are the same ones applied in every client engagement. If you want professional implementation rather than self-service execution, a discovery conversation is the place to start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Request a Strategy Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
