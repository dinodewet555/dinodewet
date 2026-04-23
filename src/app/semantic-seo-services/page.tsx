import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Layers,
  Link2,
  FileText,
  Zap,
  Target,
  BarChart2,
  Globe,
  ShoppingBag,
  MapPin,
  Briefcase,
  Newspaper,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantic SEO Services | Topical Authority & Organic Traffic Growth",
  description:
    "Semantic SEO services that build topical authority, align content with search intent, and drive qualified organic traffic. Serving SaaS, ecommerce, local, B2B, and publishers.",
  keywords: [
    "Semantic SEO Services",
    "Topical Authority",
    "Entity SEO",
    "Semantic Content Optimization",
    "SEO Audit",
    "Internal Linking Strategy",
    "Schema Markup Services",
    "Keyword Topic Mapping",
    "B2B SEO",
    "SaaS SEO",
    "Ecommerce SEO",
    "Dino de Wet",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/semantic-seo-services",
  },
  openGraph: {
    title: "Semantic SEO Services | Topical Authority & Organic Traffic Growth",
    description:
      "Semantic SEO services that build topical authority, align content with search intent, and drive qualified organic traffic for SaaS, ecommerce, local, B2B, and publishers.",
    url: "https://dinodewet.co.za/semantic-seo-services",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Semantic SEO Services — Topical Authority & Organic Traffic Growth",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/semantic-seo-services#webpage",
      "url": "https://dinodewet.co.za/semantic-seo-services",
      "name": "Semantic SEO Services | Topical Authority & Organic Traffic Growth",
      "description":
        "Semantic SEO services that build topical authority, align content with search intent, and drive qualified organic traffic for SaaS, ecommerce, local, B2B, and publishers.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/semantic-seo-services#service" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dinodewet.co.za",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Semantic SEO Services",
            "item": "https://dinodewet.co.za/semantic-seo-services",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/semantic-seo-services#service",
      "name": "Semantic SEO Services",
      "url": "https://dinodewet.co.za/semantic-seo-services",
      "description":
        "End-to-end semantic SEO services including audits, keyword-to-topic mapping, topical authority strategy, content optimisation, entity SEO, internal linking architecture, and schema markup implementation.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": "Worldwide",
      "serviceType": "Semantic SEO",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Semantic SEO Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Semantic SEO Audit",
              "description":
                "Content gap analysis, entity analysis, internal link review, and search intent mismatch detection.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Keyword to Topic Mapping",
              "description":
                "Convert keywords into topic clusters, group queries by intent, and prioritise commercial opportunities.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Topical Authority Strategy",
              "description":
                "Pillar page planning, supporting cluster roadmap, and content expansion models.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Semantic Content Optimization",
              "description":
                "Rewrite thin pages, add missing subtopics, improve headings and answer structure, and optimise NLP relevance signals.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entity SEO Optimization",
              "description":
                "Brand entity strengthening, related entity inclusion, and schema implementation support.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal Linking Architecture",
              "description":
                "Contextual links, hub-and-spoke models, and crawl path improvement.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Schema Markup Services",
              "description":
                "Organisation, service, FAQ, and article schema markup implementation.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/semantic-seo-services#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in Semantic SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Semantic SEO services typically include a full content and entity audit, keyword-to-topic cluster mapping, topical authority strategy, content optimisation for NLP relevance, entity SEO implementation, internal linking architecture, and schema markup. The exact scope depends on your site's current state and growth objectives.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does Semantic SEO take to work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Initial ranking improvements often appear within 60–90 days for existing pages that are optimised. Building broader topical authority across a content cluster typically takes 4–9 months of consistent execution. The timeline depends on site age, existing authority, content volume, and competitive landscape.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Semantic SEO better than keyword SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Semantic SEO builds on keyword research rather than replacing it. Where keyword SEO targets individual terms, semantic SEO addresses entire topic spaces, entity relationships, and search intent patterns. This produces broader, more durable rankings that are less vulnerable to single-keyword algorithm shifts.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you rewrite existing content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Existing pages are audited for topic coverage gaps, heading structure, answer quality, NLP signals, and internal link context. Where pages are thin, misaligned with intent, or missing key subtopics, they are rewritten or significantly expanded as part of the optimisation process.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you help local businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Local businesses benefit from geo-entity optimisation, service area page architecture, and local schema markup. The strategy connects your brand entity to relevant geographic and service entities so search engines understand exactly where and what you serve.",
          },
        },
      ],
    },
  ],
};

const coreServices = [
  {
    icon: Search,
    title: "Semantic SEO Audit",
    tag: "Foundation",
    description:
      "A full diagnostic of your site's semantic health. We identify content gaps against competitor topic coverage, analyse which entities are present or missing, audit internal link distribution, and flag pages misaligned with the search intent they're targeting.",
    bullets: [
      "Content gap analysis",
      "Entity analysis",
      "Internal link review",
      "Search intent mismatch detection",
    ],
  },
  {
    icon: Layers,
    title: "Keyword to Topic Mapping",
    tag: "Strategy",
    description:
      "Raw keyword lists don't drive topical authority — organised topic clusters do. We convert your keyword data into structured clusters grouped by search intent, then prioritise which commercial opportunities to pursue first.",
    bullets: [
      "Convert keywords into topic clusters",
      "Group queries by intent",
      "Prioritise commercial opportunities",
    ],
  },
  {
    icon: Target,
    title: "Topical Authority Strategy",
    tag: "Architecture",
    description:
      "A roadmap for owning your niche in search. We design pillar pages that anchor your authority, map out the supporting cluster pages that build depth, and model how to expand content coverage systematically over time.",
    bullets: [
      "Pillar page planning",
      "Supporting cluster roadmap",
      "Content expansion models",
    ],
  },
  {
    icon: FileText,
    title: "Semantic Content Optimisation",
    tag: "Execution",
    description:
      "Thin, keyword-stuffed, or structurally weak pages hold entire domains back. We rewrite underperforming content, inject missing subtopics, restructure headings for answer-first clarity, and optimise each page's NLP relevance signals.",
    bullets: [
      "Rewrite thin pages",
      "Add missing subtopics",
      "Improve headings and answer structure",
      "Optimise NLP relevance signals",
    ],
  },
  {
    icon: Globe,
    title: "Entity SEO Optimisation",
    tag: "Authority",
    description:
      "Search engines rank entities, not just pages. We strengthen your brand entity through consistent co-citation signals, weave in contextually related entities your content should reference, and support schema implementation to make entity relationships machine-readable.",
    bullets: [
      "Brand entity strengthening",
      "Related entity inclusion",
      "Schema implementation support",
    ],
  },
  {
    icon: Link2,
    title: "Internal Linking Architecture",
    tag: "Structure",
    description:
      "Internal links are how authority flows through a site and how search engines understand topic relationships. We build contextual link maps, implement hub-and-spoke models that signal topic depth, and improve crawl paths so every page earns the equity it deserves.",
    bullets: [
      "Contextual links",
      "Hub-and-spoke models",
      "Crawl path improvement",
    ],
  },
  {
    icon: Zap,
    title: "Schema Markup Services",
    tag: "Technical",
    description:
      "Structured data makes your content machine-readable and eligible for rich results. We implement the schema types most relevant to your business — from organisation and service schemas to FAQ and article markup — ensuring correct syntax and full entity alignment.",
    bullets: [
      "Organisation schema",
      "Service schema",
      "FAQ schema",
      "Article schema",
    ],
  },
];

const industries = [
  {
    icon: BarChart2,
    industry: "SaaS SEO",
    description:
      "SaaS businesses compete for high-intent queries from buyers at every funnel stage. We build product-led topic clusters that capture comparison, alternative, and use-case queries — and develop bottom-funnel pages engineered to convert informed searchers.",
    bullets: ["Product-led topic clusters", "Bottom-funnel pages"],
  },
  {
    icon: ShoppingBag,
    industry: "Ecommerce SEO",
    description:
      "Category pages and product listings need semantic depth to outrank thin competitors. We optimise category architectures around semantic themes, enrich product entities with relevant attributes, and connect product pages to topically authoritative cluster content.",
    bullets: ["Category semantic optimisation", "Product entity relevance"],
  },
  {
    icon: MapPin,
    industry: "Local Business SEO",
    description:
      "Local visibility depends on how clearly your business is understood as an entity connected to specific geographies and services. We build geo-entity structures, develop service area pages that expand local coverage, and implement local schema that confirms your relevance to place.",
    bullets: ["Geo-entity optimisation", "Service area pages"],
  },
  {
    icon: Briefcase,
    industry: "B2B SEO",
    description:
      "B2B buyers conduct extensive research before engaging sales. We create high-intent content that captures decision-stage queries, and authority-building resources — guides, comparisons, and data-backed explainers — that position your brand as the credible choice.",
    bullets: ["High-intent lead generation content", "Authority-building resources"],
  },
  {
    icon: Newspaper,
    industry: "Publishers and Media",
    description:
      "Large publishing sites need semantic structure at scale. We optimise content taxonomies so topic relationships are clear to search engines, build evergreen cluster frameworks that sustain long-term traffic, and identify coverage gaps across entire topic verticals.",
    bullets: ["Large-scale taxonomy optimisation", "Evergreen topic clusters"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Business and Audience Analysis",
    description:
      "We map your core offers against buyer journey stages to identify which pages drive revenue and which gaps are costing you qualified traffic. Understanding what you sell — and to whom — shapes every subsequent strategy decision.",
    bullets: ["Offers", "Buyer journey", "Revenue pages"],
  },
  {
    step: "02",
    title: "Search Intent Research",
    description:
      "Every query has a purpose. We segment the full query landscape around your business into informational, commercial, and transactional intent categories — building a clear picture of where users are in the decision process when they search.",
    bullets: ["Informational", "Commercial", "Transactional"],
  },
  {
    step: "03",
    title: "Entity and Topic Mapping",
    description:
      "We define the core entities your brand must be associated with, surface the related entities that build contextual relevance, and map the subtopics that need to be covered for complete topic authority.",
    bullets: ["Core entities", "Related entities", "Subtopics"],
  },
  {
    step: "04",
    title: "Content Production and Optimisation",
    description:
      "With the map defined, we execute. Existing pages are upgraded for semantic depth, NLP alignment, and intent fit. New cluster pages are produced to fill the topical gaps that are limiting your authority.",
    bullets: ["Existing page upgrades", "New cluster pages"],
  },
  {
    step: "05",
    title: "Measurement and Iteration",
    description:
      "Semantic SEO is a compounding system, not a one-time project. We track ranking movements, organic traffic shifts, conversion performance, and emerging content gaps — iterating the strategy as your authority grows.",
    bullets: ["Rankings", "Traffic", "Conversions", "Content gaps"],
  },
];

const whyUs = [
  {
    title: "Data-Driven Strategy",
    description:
      "Every recommendation is grounded in query data, SERP analysis, and competitor benchmarking. Intuition is a starting point — decisions require evidence.",
  },
  {
    title: "Revenue Focus",
    description:
      "Rankings are a means, not an end. We tie organic growth to leads and sales by prioritising pages that sit at the intersection of search intent and buying intent.",
  },
  {
    title: "Scalable Systems",
    description:
      "Whether you have 50 pages or 50,000, the semantic architecture we build scales with your site. Topic clusters, internal link frameworks, and content templates are designed for sustainable growth.",
  },
  {
    title: "Human + AI Workflow",
    description:
      "AI accelerates research, gap analysis, and content drafting. Human expertise ensures strategic accuracy, brand alignment, and quality that earns real authority — not just volume.",
  },
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Ahrefs / Semrush",
  "Screaming Frog",
  "NLP content tools",
  "Schema markup validators",
];

const pricing = [
  {
    title: "Monthly Retainer",
    description:
      "Ongoing semantic SEO optimisation, content production, entity management, and strategy iteration. Suited for growing sites that need consistent, compounding progress.",
    detail: "Ongoing optimisation",
  },
  {
    title: "Project-Based Engagement",
    description:
      "A defined scope covering a full semantic audit and a prioritised roadmap. Ideal for businesses that want a clear strategic foundation before committing to execution.",
    detail: "Audit + roadmap",
  },
  {
    title: "Content Sprint",
    description:
      "A rapid-execution model focused on building out a specific topic cluster fast — producing pillar pages, supporting articles, and internal link structures in a compressed timeline.",
    detail: "Rapid cluster creation",
  },
  {
    title: "Enterprise Custom Plan",
    description:
      "Fully bespoke strategy and execution for complex multi-site environments, large publishing platforms, or enterprise SaaS with extensive content libraries and multiple markets.",
    detail: "Multi-site support",
  },
];

const faqs = [
  {
    question: "What is included in Semantic SEO services?",
    answer:
      "Semantic SEO services typically include a full content and entity audit, keyword-to-topic cluster mapping, topical authority strategy, content optimisation for NLP relevance, entity SEO implementation, internal linking architecture, and schema markup. The exact scope depends on your site's current state and growth objectives.",
  },
  {
    question: "How long does Semantic SEO take to work?",
    answer:
      "Initial ranking improvements often appear within 60–90 days for existing pages that are optimised. Building broader topical authority across a content cluster typically takes 4–9 months of consistent execution. The timeline depends on site age, existing authority, content volume, and competitive landscape.",
  },
  {
    question: "Is Semantic SEO better than keyword SEO?",
    answer:
      "Semantic SEO builds on keyword research rather than replacing it. Where keyword SEO targets individual terms, semantic SEO addresses entire topic spaces, entity relationships, and search intent patterns. This produces broader, more durable rankings that are less vulnerable to single-keyword algorithm shifts.",
  },
  {
    question: "Do you rewrite existing content?",
    answer:
      "Yes. Existing pages are audited for topic coverage gaps, heading structure, answer quality, NLP signals, and internal link context. Where pages are thin, misaligned with intent, or missing key subtopics, they are rewritten or significantly expanded as part of the optimisation process.",
  },
  {
    question: "Can you help local businesses?",
    answer:
      "Yes. Local businesses benefit from geo-entity optimisation, service area page architecture, and local schema markup. The strategy connects your brand entity to relevant geographic and service entities so search engines understand exactly where and what you serve.",
  },
];

export default function SemanticSEOServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
            <AnimatedSection className="pb-20">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-6"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Service
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Semantic SEO Services That Increase Topical Authority and Organic Traffic
              </h1>
              <p
                style={{
                  color: "#a1a1a1",
                  maxWidth: "520px",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  marginBottom: "2.5rem",
                }}
              >
                Search engines no longer rank pages — they retrieve the most authoritative, semantically complete answer to a query. Semantic SEO services build the topic coverage, entity clarity, and content depth your site needs to be that answer. Built for SaaS, ecommerce, local businesses, publishers, and B2B.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get a Strategy <ArrowRight size={14} />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="relative pb-20">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Topic Coverage", value: "Full-funnel" },
                  { label: "Entity Relevance", value: "Brand + Context" },
                  { label: "Search Intent", value: "Aligned" },
                  { label: "Internal Linking", value: "Architected" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border p-6"
                    style={{
                      borderColor: "#1f1f1f",
                      background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                    }}
                  >
                    <p
                      className="font-heading font-bold text-white mb-1"
                      style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Are Semantic SEO Services */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Foundation
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                What Are Semantic SEO Services?
              </h2>
              <p
                className="mb-6"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Semantic SEO services are a set of strategic and technical practices designed to help websites rank for entire topic spaces — not just isolated keywords. The goal is to make your site the most relevant, authoritative, and complete resource in your niche from a search engine's perspective.
              </p>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                The business outcome is measurable: stronger rankings, broader query visibility, qualified traffic that converts, and an organic presence that compounds over time rather than decaying with algorithm updates.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    How do Semantic SEO services work?
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Improve topic coverage across the full niche",
                      "Align pages precisely with search intent",
                      "Build entity relevance for brand and context",
                      "Strengthen internal linking to signal topic depth",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    Why do businesses need Semantic SEO services?
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Traditional keyword SEO misses context and topic relationships",
                      "Search engines now rank meaning, authority, and completeness",
                      "Broad query visibility grows faster with semantic coverage",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-28 relative" style={{ background: "#050505" }}>
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
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Our Semantic SEO Services
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              A complete service suite covering every layer of semantic search — from initial audit through to ongoing optimisation and structured data implementation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 80}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border"
                        style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                      >
                        <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                        style={{
                          color: "#a1a1a1",
                          borderColor: "#2a2a2a",
                          background: "rgba(255,255,255,0.03)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#ffffff" }}
                          />
                          <p
                            className="text-xs"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              Industries
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Industries We Serve
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              Semantic SEO principles apply across verticals. Each industry has unique topic structures, buyer journeys, and entity relationships that require a tailored strategy.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.industry} delay={i * 80}>
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
                      {item.industry}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#ffffff" }}
                          />
                          <p
                            className="text-xs"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Process
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Our Semantic SEO Process
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              A structured five-step system from business analysis to measurable organic growth. Each phase builds on the last.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 80}>
                <div
                  className="rounded-xl border p-8"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div>
                      <p
                        className="font-heading font-bold mb-2"
                        style={{ fontSize: "3rem", color: "rgba(255,255,255,0.08)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        {step.step}
                      </p>
                      <h3
                        className="font-heading font-semibold text-white"
                        style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                      >
                        Step {step.step}: {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm lg:col-span-1"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#ffffff" }}
                          />
                          <p
                            className="text-xs font-medium"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            {b}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Us
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Why Choose Our Semantic SEO Agency?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div
                  className="card-hover p-8 rounded-xl border h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
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
            ))}
          </div>
        </div>
      </section>

      {/* Results You Can Expect */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Outcomes
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Results You Can Expect
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                result: "Growth in non-branded traffic",
                detail:
                  "Expand your visibility beyond brand queries to capture category-level and problem-aware searches.",
              },
              {
                result: "Rankings for broader query sets",
                detail:
                  "Move from ranking for 10 keywords to owning entire topic clusters across the buyer journey.",
              },
              {
                result: "Better conversion paths",
                detail:
                  "Semantically aligned content matches intent at every funnel stage — reducing friction, increasing action.",
              },
              {
                result: "Increased authority in niche topics",
                detail:
                  "Build the kind of deep topical trust that makes search engines repeatedly retrieve your site for high-value queries.",
              },
              {
                result: "Higher CTR from stronger relevance",
                detail:
                  "When your content genuinely matches the query, both the ranking and the click rate improve together.",
              },
              {
                result: "Compounding organic growth",
                detail:
                  "Semantic architecture compounds: every new cluster page and entity signal strengthens the pages around it.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.result} delay={i * 80}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <p
                    className="font-heading font-semibold text-white mb-2"
                    style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                  >
                    {item.result}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                  >
                    {item.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        className="py-24"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Stack
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Tools and Technologies We Use
              </h2>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Every recommendation is backed by platform data, not assumption. The tool stack covers crawl analysis, rank tracking, NLP signals, structured data validation, and traffic measurement — giving every strategy decision an evidence base.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border"
                    style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#ffffff" }}
                    />
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                    >
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Pricing
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Pricing Models
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "520px",
              }}
            >
              Every business is at a different stage. Pricing structures are designed to match where you are and what outcome you need most right now.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.map((plan, i) => (
              <AnimatedSection key={plan.title} delay={i * 100}>
                <div
                  className="card-hover p-8 rounded-xl border h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                    >
                      {plan.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded border"
                      style={{
                        color: "#a1a1a1",
                        borderColor: "#2a2a2a",
                        background: "rgba(255,255,255,0.03)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {plan.detail}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                  >
                    {plan.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Enquire <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
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
              Proof
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Results and Case Studies
            </h2>
            <p
              className="mb-12"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              Specific results — including traffic growth percentages, lead volume improvements, and ranking movements for topic clusters — are shared directly during the discovery process to match relevant case work to your industry and goal.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: "Organic Traffic",
                outcome: "Consistent non-branded growth across pillar and cluster pages",
                context: "B2B SaaS — 6-month engagement",
              },
              {
                metric: "Lead Growth",
                outcome: "Increase in qualified contact form and demo page conversions",
                context: "Professional services — ongoing retainer",
              },
              {
                metric: "Topic Cluster Rankings",
                outcome: "First-page presence across full informational and commercial query sets",
                context: "Ecommerce — audit + content sprint",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.metric} delay={i * 100}>
                <div
                  className="rounded-xl border p-8 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    {item.metric}
                  </p>
                  <p
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1rem", lineHeight: 1.4, letterSpacing: "-0.01em" }}
                  >
                    {item.outcome}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    {item.context}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
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
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Get Started
            </p>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Get a Custom Semantic SEO Strategy
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              Every engagement starts with a discovery conversation to understand your business, your current search presence, and the growth outcomes you need. From there, a strategy is built around your specific topic landscape — not a generic template.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Discovery Call <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Request an Audit
              </Link>
            </div>
            <p
              className="mt-8 text-xs"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Discovery calls are free. You will receive a growth roadmap based on your site&apos;s current opportunity.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
