import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Semantic SEO? A Complete Guide | Dino de Wet",
  description:
    "Semantic SEO builds search visibility around entities, attributes, and relationships — not just keywords. Learn how Knowledge Graphs, NLP, topical authority, and entity-attribute-value mapping work together to produce durable organic rankings.",
  keywords: [
    "What is Semantic SEO",
    "Semantic SEO Guide",
    "Entity SEO",
    "Knowledge Graph SEO",
    "Topical Authority",
    "NLP SEO",
    "Entity Attribute Value",
    "Subject Predicate Object",
    "Semantic Content Network",
    "AI Search SEO",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/what-is-semantic-seo",
  },
  openGraph: {
    title: "What Is Semantic SEO? A Complete Guide",
    description:
      "Semantic SEO builds search visibility around entities, attributes, and relationships rather than keywords. A complete guide to entity-first content architecture, Knowledge Graphs, and topical authority.",
    url: "https://dinodewet.co.za/blog/what-is-semantic-seo",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "What Is Semantic SEO? A Complete Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/what-is-semantic-seo#article",
      "headline": "What Is Semantic SEO? A Complete Guide",
      "description":
        "Semantic SEO builds search visibility around entities, attributes, and relationships rather than keywords. This guide explains how it works, why it outperforms traditional keyword SEO, and how to implement it using entity-first content architecture.",
      "url": "https://dinodewet.co.za/blog/what-is-semantic-seo",
      "datePublished": "2026-04-22",
      "dateModified": "2026-04-22",
      "author": { "@id": "https://dinodewet.co.za/#person" },
      "publisher": {
        "@type": "Person",
        "@id": "https://dinodewet.co.za/#person",
        "name": "Dino de Wet",
        "url": "https://dinodewet.co.za",
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://dinodewet.co.za/images/semantic-seo-services.png",
        "width": 1200,
        "height": 630,
      },
      "isPartOf": { "@id": "https://dinodewet.co.za/blog#blog" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dinodewet.co.za/blog/what-is-semantic-seo",
      },
      "about": [
        { "@type": "Thing", "name": "Semantic SEO" },
        { "@type": "Thing", "name": "Entity SEO" },
        { "@type": "Thing", "name": "Knowledge Graph" },
        { "@type": "Thing", "name": "Topical Authority" },
        { "@type": "Thing", "name": "Natural Language Processing" },
      ],
      "keywords":
        "Semantic SEO, Entity SEO, Knowledge Graph, Topical Authority, NLP SEO, Entity Attribute Value, Subject Predicate Object",
      "articleSection": "Semantic SEO",
      "wordCount": 3400,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3"],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/what-is-semantic-seo#webpage",
      "url": "https://dinodewet.co.za/blog/what-is-semantic-seo",
      "name": "What Is Semantic SEO? A Complete Guide",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Is Semantic SEO? A Complete Guide",
            "item": "https://dinodewet.co.za/blog/what-is-semantic-seo",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/what-is-semantic-seo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is semantic SEO in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Semantic SEO is a methodology that optimises content for meaning rather than keywords. Instead of targeting specific keyword phrases, semantic SEO builds content around entities — real-world things like brands, products, concepts, and places — and their attributes and relationships. Search engines use this entity-level understanding to determine which pages demonstrate genuine expertise on a topic.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you start implementing semantic SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Implementation begins with domain intelligence: extracting the complete terminology map of your topic to identify every relevant entity, concept, and predicate. This is followed by topical architecture (organising terms into a content map), entity-attribute-value mapping (profiling key entities), and content creation using entity-first writing principles. The process is systematic and sequential, with each phase producing outputs that feed the next.",
          },
        },
        {
          "@type": "Question",
          "name": "Does semantic SEO replace technical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Semantic SEO and technical SEO are complementary. Technical SEO ensures search engines can crawl, render, and index content efficiently. Semantic SEO ensures that once search engines access the content, they can understand its meaning, map its entities, and assess its topical authority. Semantic HTML, structured data (JSON-LD), and clean site architecture are areas where technical and semantic SEO overlap directly.",
          },
        },
        {
          "@type": "Question",
          "name": "What tools are used for semantic SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Semantic SEO uses a combination of traditional SEO tools — Ahrefs, Semrush, Screaming Frog, Google Search Console — for data analysis and technical auditing, plus specialised semantic tools including entity extraction agents, EAV profiling tools, topicality scorers, and NLP analysis tools.",
          },
        },
        {
          "@type": "Question",
          "name": "Is semantic SEO only for large websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Semantic SEO principles apply to websites of any size. A 10-page website benefits from entity-rich content, clear SPO structure, and topical completeness within its scope just as much as a 10,000-page website. The difference is scale, not methodology. Smaller websites can often achieve topical authority faster within a narrow domain because they have fewer pages competing for internal PageRank distribution.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does semantic SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Semantic SEO builds compounding authority over time. Initial improvements in content clarity and entity coverage can produce ranking changes within weeks. Full topical authority, which requires complete domain coverage and consistent historical data, typically develops over 3 to 6 months. The advantage is that semantic SEO results are more stable than keyword-focused results because they are built on topical depth rather than individual page optimisation.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "vs-traditional", label: "How It Differs From Traditional SEO" },
  { id: "why-semantic", label: "Why Search Engines Need Semantic Understanding" },
  { id: "entities", label: "What Are Entities in SEO" },
  { id: "knowledge-graph", label: "What Is a Knowledge Graph" },
  { id: "eav", label: "Entity-Attribute-Value Mapping" },
  { id: "spo", label: "Subject-Predicate-Object Triples" },
  { id: "topical-authority", label: "Topical Authority" },
  { id: "rankings", label: "How Semantic SEO Affects Rankings" },
  { id: "implementation", label: "Implementing Semantic SEO" },
  { id: "nlp", label: "Semantic SEO vs NLP Optimisation" },
  { id: "ai-search", label: "Does Semantic SEO Work for AI Search" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What is semantic SEO in simple terms?",
    answer:
      "Semantic SEO is a methodology that optimises content for meaning rather than keywords. Instead of targeting specific keyword phrases, semantic SEO builds content around entities — real-world things like brands, products, concepts, and places — and their attributes and relationships. Search engines use this entity-level understanding to determine which pages demonstrate genuine expertise on a topic.",
  },
  {
    question: "How do you start implementing semantic SEO?",
    answer:
      "Implementation begins with domain intelligence: extracting the complete terminology map of your topic to identify every relevant entity, concept, and predicate. This is followed by topical architecture (organising terms into a content map), entity-attribute-value mapping (profiling key entities), and content creation using entity-first writing principles. The process is systematic and sequential, with each phase producing outputs that feed the next.",
  },
  {
    question: "Does semantic SEO replace technical SEO?",
    answer:
      "No. Semantic SEO and technical SEO are complementary. Technical SEO ensures search engines can crawl, render, and index content efficiently. Semantic SEO ensures that once search engines access the content, they can understand its meaning, map its entities, and assess its topical authority. Semantic HTML, structured data (JSON-LD), and clean site architecture are areas where technical and semantic SEO overlap directly.",
  },
  {
    question: "What tools are used for semantic SEO?",
    answer:
      "Semantic SEO uses a combination of traditional SEO tools — Ahrefs, Semrush, Screaming Frog, Google Search Console — for data analysis and technical auditing, plus specialised semantic tools including entity extraction agents, EAV profiling tools, topicality scorers, and NLP analysis tools.",
  },
  {
    question: "Is semantic SEO only for large websites?",
    answer:
      "No. Semantic SEO principles apply to websites of any size. A 10-page website benefits from entity-rich content, clear SPO structure, and topical completeness within its scope just as much as a 10,000-page website. The difference is scale, not methodology. Smaller websites can often achieve topical authority faster within a narrow domain because they have fewer pages competing for internal PageRank distribution.",
  },
  {
    question: "How long does semantic SEO take to show results?",
    answer:
      "Semantic SEO builds compounding authority over time. Initial improvements in content clarity and entity coverage can produce ranking changes within weeks. Full topical authority, which requires complete domain coverage and consistent historical data, typically develops over 3 to 6 months. The advantage is that semantic SEO results are more stable than keyword-focused results because they are built on topical depth rather than individual page optimisation.",
  },
];

export default function WhatIsSemanticSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
              <Link
                href="/blog"
                className="text-xs"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Blog
              </Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span
                className="text-xs"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Semantic SEO
              </span>
            </nav>

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
                Semantic SEO
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                <Clock size={12} /> 12 min read
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                <Calendar size={12} /> 22 April 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              What Is Semantic SEO? A Complete Guide
            </h1>
            <p
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                fontFamily: "var(--font-body)",
                maxWidth: "680px",
              }}
            >
              Semantic SEO is a methodology that builds search visibility around entities, attributes, and relationships rather than keywords. This guide explains how it works, why it outperforms traditional keyword SEO, and how to implement it using entity-first content architecture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section
        className="py-16"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

            {/* Table of Contents — sticky sidebar */}
            <aside className="lg:col-span-1">
              <AnimatedSection direction="left">
                <div
                  className="rounded-xl border p-6 lg:sticky lg:top-28"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen size={14} color="#a1a1a1" />
                    <p
                      className="text-xs font-medium uppercase tracking-widest"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                    >
                      Contents
                    </p>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-2">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-start gap-2 text-xs leading-relaxed transition-colors hover:text-white"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            <div
                              className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                              style={{ background: "#3a3a3a" }}
                            />
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </AnimatedSection>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3">
              <AnimatedSection>
                {/* --- How Semantic SEO Differs --- */}
                <section id="vs-traditional" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    How Semantic SEO Differs From Traditional SEO
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Traditional SEO operates on a straightforward model. A practitioner researches keywords by search volume, writes pages targeting those keywords, optimises title tags and meta descriptions, builds backlinks, and tracks rankings. The content is structured around what people type into search engines.
                    </p>
                    <p>
                      Semantic SEO operates on a fundamentally different model. A practitioner identifies the entities within a topic, extracts their attributes, maps how those entities relate to each other, and builds content that expresses those relationships in a structure search engines can parse directly. The content is structured around what search engines need to understand about a topic.
                    </p>
                    <p>
                      The difference is not cosmetic. It reflects a shift in how search engines themselves have evolved.
                    </p>
                    <p>
                      In the keyword era, Google matched the words in a query against the words on a page. Pages that contained the exact keyword phrase, appeared on sites with strong backlink profiles, and met basic technical requirements ranked highest. The algorithm was essentially a pattern matcher.
                    </p>
                    <p>
                      In the semantic era, Google constructs a Knowledge Graph that maps how entities relate to each other. BERT and subsequent language models parse sentences for meaning, not just keyword occurrence. The algorithm understands that &ldquo;Bassani headers improve V-twin torque&rdquo; and &ldquo;Bassani exhaust systems increase mid-range pulling power on Harley-Davidson engines&rdquo; express the same underlying relationship, even though they share very few keywords.
                    </p>
                    <p>
                      This means content optimised purely for keyword strings is increasingly insufficient. Search engines reward content that demonstrates genuine understanding of a topic through entity coverage, attribute depth, and structural clarity.
                    </p>
                  </div>
                </section>

                {/* Comparison callout */}
                <div
                  className="rounded-xl border p-6 mb-14 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-widest mb-3"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                    >
                      Traditional SEO
                    </p>
                    {["Keyword matching", "Backlink volume", "Page-level optimisation", "Ranks individual terms"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 mb-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-widest mb-3"
                      style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
                    >
                      Semantic SEO
                    </p>
                    {["Entity and meaning understanding", "Topical authority signals", "Topic cluster architecture", "Ranks entire subject spaces"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 mb-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- Why Search Engines Need Semantic Understanding --- */}
                <section id="why-semantic" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Why Search Engines Need Semantic Understanding
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Search engines serve a single purpose: returning the most relevant, accurate, and useful response to a query. To do this reliably, they must understand what a query means, not just what words it contains.
                    </p>
                    <p>
                      Consider the query &ldquo;apple.&rdquo; Without semantic understanding, a search engine cannot determine whether the user wants information about the fruit, the technology company, or the record label. With semantic understanding, the search engine evaluates the query context, the user&apos;s search history, and the Knowledge Graph relationships around each entity named &ldquo;Apple&rdquo; to serve the correct result.
                    </p>
                    <p>
                      This extends far beyond disambiguation. When a user searches &ldquo;best exhaust for Street Glide,&rdquo; the search engine must understand that Street Glide is a Harley-Davidson Touring model, that it uses the Milwaukee-Eight engine platform, that aftermarket exhaust systems for this motorcycle come from brands like Vance and Hines, Bassani, Rinehart Racing, and TAB Performance, and that &ldquo;best&rdquo; implies a comparison across performance, sound, and value criteria.
                    </p>
                    <p>
                      A page that simply contains the keyword phrase &ldquo;best exhaust for Street Glide&rdquo; but lacks these entity relationships will be outranked by a page that demonstrates genuine understanding of the topic through entity coverage, even if the second page never uses the exact keyword phrase.
                    </p>
                    <p>
                      Google&apos;s Knowledge Graph now contains billions of entity relationships. Every query is parsed against this graph to determine what information the user needs and which pages demonstrate the deepest, most accurate understanding of the relevant entities.
                    </p>
                  </div>
                </section>

                {/* --- What Are Entities in SEO --- */}
                <section id="entities" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    What Are Entities in SEO
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      An entity is a thing that exists in the real world: a person, a place, a brand, a product, a concept, an organisation, or a standard. Entities are not keywords. The keyword &ldquo;motorcycle exhausts&rdquo; is a string of characters. The entity &ldquo;motorcycle exhaust system&rdquo; is a concept that has attributes (material, weight, sound profile, fitment compatibility), relationships to other entities (connects to cylinder head, reduces backpressure, improves horsepower), and a position within a Knowledge Graph.
                    </p>
                    <p>
                      Search engines identify entities in content through Named Entity Recognition (NER), a natural language processing technique that detects and classifies mentions of real-world things. When Google crawls a page and identifies entities like &ldquo;Vance and Hines,&rdquo; &ldquo;Milwaukee-Eight engine,&rdquo; and &ldquo;Harley-Davidson Street Glide,&rdquo; it maps those entities against its Knowledge Graph to assess whether the page demonstrates genuine topical understanding.
                    </p>
                    <p>
                      <strong className="text-white">Entity density matters.</strong> Pages where every paragraph contains at least one identifiable named entity score higher for topical relevance than pages filled with generic language. The sentence &ldquo;this exhaust is good for your bike&rdquo; contains zero parseable entities. The sentence &ldquo;Vance and Hines full exhaust systems deliver measurable horsepower gains on Milwaukee-Eight powered Harley-Davidson Touring models&rdquo; contains four.
                    </p>
                    <p>
                      <strong className="text-white">Entity relationships matter more.</strong> Search engines do not just count entities. They evaluate how entities connect to each other. Content that expresses clear Subject-Predicate-Object relationships between entities gives search engines structured knowledge they can parse directly. This reduces what Koray Tugberk GUBUR calls the Cost of Retrieval: the effort a search engine must expend to extract meaning from content.
                    </p>
                  </div>
                </section>

                {/* --- What Is a Knowledge Graph --- */}
                <section id="knowledge-graph" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    What Is a Knowledge Graph
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      A Knowledge Graph is a structured database that maps entities and their relationships. Google&apos;s Knowledge Graph, launched in 2012, contains billions of facts about entities and how they connect to each other.
                    </p>
                    <p>
                      When you search for a well-known entity and see a Knowledge Panel on the right side of the search results, that information is pulled from the Knowledge Graph. But the Knowledge Graph does far more than power Knowledge Panels. It underpins how Google understands queries, evaluates content relevance, and determines which pages demonstrate genuine expertise on a topic.
                    </p>
                    <p>
                      The Knowledge Graph stores information as triples: Subject, Predicate, Object. For example: &ldquo;Harley-Davidson&rdquo; (subject) &ldquo;manufactures&rdquo; (predicate) &ldquo;Street Glide&rdquo; (object). These triples form a web of interconnected facts that Google uses to understand the world.
                    </p>
                    <p>
                      Semantic SEO aligns content with this structure. When your content expresses clear triples that match or extend the Knowledge Graph, Google can parse your content more efficiently and recognise it as a relevant, authoritative source on the topic.
                    </p>
                  </div>
                </section>

                {/* --- EAV Mapping --- */}
                <section id="eav" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Entity-Attribute-Value Mapping: The Core of Semantic SEO
                  </h2>
                  <div
                    className="flex flex-col gap-4 mb-8"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Entity-Attribute-Value (EAV) mapping is the methodology at the heart of semantic SEO implementation. EAV extracts three layers of attributes for every important entity in a domain.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                      {
                        type: "Root Attributes",
                        definition: "What the entity fundamentally is.",
                        detail: "Foundational characteristics shared with other entities of the same type. Feed schema markup and foundational page copy.",
                        example: "Performance motorcycle exhaust manufacturer, multi-segment coverage, full system engineering.",
                      },
                      {
                        type: "Rare Attributes",
                        definition: "Uncommon distinguishing features.",
                        detail: "Features that differentiate the entity from most competitors but may be shared with a small number. Become blog content angles and deep-dive topics.",
                        example: "Adventure touring durability, broad platform fitment range, BMW GS platform compatibility.",
                      },
                      {
                        type: "Unique Attributes",
                        definition: "Features only this entity possesses.",
                        detail: "Characteristics that make content genuinely different from any competitor. Become conversion copy differentiators.",
                        example: "Dual-segment engineering philosophy, high-performance-to-adventure continuum, single ecosystem coverage.",
                      },
                    ].map((attr) => (
                      <div
                        key={attr.type}
                        className="rounded-xl border p-6"
                        style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                      >
                        <p
                          className="font-heading font-semibold text-white mb-2"
                          style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}
                        >
                          {attr.type}
                        </p>
                        <p
                          className="text-xs mb-3 font-medium"
                          style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
                        >
                          {attr.definition}
                        </p>
                        <p className="text-xs mb-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                          {attr.detail}
                        </p>
                        <p className="text-xs italic" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                          e.g. {attr.example}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    Content built from EAV profiles produces differentiation that competitors cannot replicate by copying keywords, because the differentiation comes from the entity&apos;s own characteristics. A competitor would need to perform the same level of entity analysis on their own entities to achieve equivalent depth.
                  </p>
                </section>

                {/* --- SPO Triples --- */}
                <section id="spo" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Subject-Predicate-Object Triples: How to Structure Content for Search Engines
                  </h2>
                  <div
                    className="flex flex-col gap-4 mb-8"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Subject-Predicate-Object (SPO) triples are the fundamental unit of meaning that search engines parse from content. Every piece of information in a Knowledge Graph is stored as a triple. Content that naturally expresses clear triples is easier for search engines to process, index, and rank.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div
                      className="rounded-xl border p-6"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <p
                        className="text-xs font-medium uppercase tracking-widest mb-3"
                        style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                      >
                        Weak sentence
                      </p>
                      <p className="text-sm italic" style={{ color: "#3a3a3a", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                        &ldquo;This product is really great for performance.&rdquo;
                      </p>
                      <p className="text-xs mt-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        No entity subject. No specific predicate. No measurable object. Zero parseable structure.
                      </p>
                    </div>
                    <div
                      className="rounded-xl border p-6"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <p
                        className="text-xs font-medium uppercase tracking-widest mb-3"
                        style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
                      >
                        Strong SPO sentence
                      </p>
                      <p className="text-sm italic" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                        &ldquo;Bassani Road Rage 2-into-1 exhaust systems improve mid-range torque delivery across Harley-Davidson Softail models equipped with Milwaukee-Eight engines.&rdquo;
                      </p>
                      <p className="text-xs mt-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                        Specific product entity subject. Measurable relationship predicate. Target entity and context object.
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Writing in triples does not mean writing in an unnatural or robotic style. It means ensuring that every claim in your content has a clear subject doing something specific to or for a clear object. This is how expert humans naturally communicate technical information.
                    </p>
                    <p>
                      SPO triples differ from EAV triples in function. EAV triples describe an entity&apos;s characteristics. SPO triples describe relationships between entities. Both are essential. EAV builds entity profiles. SPO builds the relationship web between entities. Together they create the semantic architecture of your content.
                    </p>
                  </div>
                </section>

                {/* --- Topical Authority --- */}
                <section id="topical-authority" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    What Is Topical Authority and How Does It Relate
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Topical authority is a concept formalised by Koray Tugberk GUBUR that describes a website&apos;s recognised expertise on a specific subject. The formula is:
                    </p>
                    <div
                      className="rounded-xl border p-6 text-center"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <p
                        className="font-heading font-bold text-white"
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}
                      >
                        Topical Authority = Topical Coverage + Historical Data
                      </p>
                    </div>
                    <p>
                      <strong className="text-white">Topical Coverage</strong> means covering all subtopics, related queries, edge cases, and entity relationships within a domain. A website about motorcycle exhausts that only covers Harley-Davidson slip-ons has narrow topical coverage. A website that covers every exhaust type, every motorcycle segment, every relevant brand, every engineering concept, and every buyer intent has complete topical coverage.
                    </p>
                    <p>
                      <strong className="text-white">Historical Data</strong> means building this coverage consistently over time. Search engines track when content was published, how frequently a site adds new content within its topic, and how the content evolves. A site that published 36 pages in a single week and then never updated again has weaker historical data than a site that built the same coverage progressively over months while continuously refreshing existing content.
                    </p>
                    <p>
                      Topical authority is the outcome of semantic SEO done correctly. When you extract domain terms, cluster them into a topical map, build a Semantic Content Network with strategic internal linking, and populate each node with entity-rich content, you are building topical authority. The topical map is the blueprint. The Semantic Content Network is the implementation. Topical authority is the result.
                    </p>
                  </div>
                </section>

                {/* --- Rankings --- */}
                <section id="rankings" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    How Semantic SEO Affects Rankings
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Search engines rank pages using the interaction of multiple signals, not individual ranking factors in isolation. Koray Tugberk GUBUR identifies six fundamental ranking signals: Topicality, PageRank, Canonicalization, Consolidation, Popularity, and Cost of Retrieval.
                    </p>
                    <p>
                      These signals combine to produce compound ranking effects. Topicality combined with PageRank creates Topic-Sensitive PageRank, which prioritises pages based on relevance to a specific topic rather than raw link authority. Topicality combined with Popularity and PageRank creates NavBoost, which improves navigational searches by emphasising pages that are both authoritative and topically relevant. Topicality combined with Consolidation creates Representative Sources, identifying the single most authoritative page for a topic within a content cluster.
                    </p>
                    <p>
                      Semantic SEO directly strengthens the Topicality signal by ensuring content covers a topic completely at the entity level. It strengthens internal PageRank distribution through strategic Semantic Content Network architecture. And it reduces Cost of Retrieval by structuring content with clean heading hierarchy, SPO triples, consistent entity references, and semantic HTML that minimises the parsing effort search engines need to understand and rank the content.
                    </p>
                    <p>
                      The combined effect is that semantically optimised content ranks more consistently, survives algorithm updates more reliably, and performs across both traditional search results and AI-driven search surfaces.
                    </p>
                  </div>
                </section>

                {/* --- Implementation --- */}
                <section id="implementation" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Implementing Semantic SEO: A Practical Framework
                  </h2>
                  <p
                    className="mb-8"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    Implementing semantic SEO follows a structured pipeline. Each phase produces outputs that feed the next.
                  </p>

                  <div className="flex flex-col gap-4">
                    {[
                      {
                        phase: "Phase 1",
                        title: "Domain Intelligence",
                        detail:
                          "Before writing any content, extract the complete terminology map of the domain. Identify every relevant term, concept, entity, and predicate. This is macro-level semantic analysis that establishes the vocabulary and conceptual boundaries of the topic.",
                      },
                      {
                        phase: "Phase 2",
                        title: "Topical Architecture",
                        detail:
                          "Organise the extracted terms into semantic clusters. Each cluster becomes a page or section in the Semantic Content Network. Identify bridge topics that connect clusters and prevent content silos. Apply Implicit Question Query Identification (IQQI) to extract every hidden question within the topic.",
                      },
                      {
                        phase: "Phase 3",
                        title: "Entity and Attribute Mapping",
                        detail:
                          "Extract Root, Rare, and Unique attributes for every important entity using EAV methodology. Generate SPO triples that form the semantic skeleton of each content piece. Audit existing content for irrelevant attributes that dilute topical focus.",
                      },
                      {
                        phase: "Phase 4",
                        title: "Content Creation",
                        detail:
                          "Write content using entity-first principles. Every piece follows specific standards: the first sentence provides a standalone definition (serving as an AEO trigger for AI answer extraction), every paragraph contains at least one named entity, all claims use SPO structure, unique attributes appear in the first 200 words.",
                      },
                      {
                        phase: "Phase 5",
                        title: "Content Optimisation",
                        detail:
                          "Refine content at the NLP level through semantic emphasis, frame semantics analysis, n-gram verification, vocabulary richness auditing, and metadiscourse integration.",
                      },
                      {
                        phase: "Phase 6",
                        title: "Quality Validation",
                        detail:
                          "Validate against algorithmic quality systems including Helpful Content compliance, algorithmic authorship patterns, topicality scoring, and title-query ratio optimisation.",
                      },
                      {
                        phase: "Phase 7",
                        title: "Technical and Competitive Intelligence",
                        detail:
                          "Monitor performance through competitive analysis, crawl budget optimisation, and search performance data science.",
                      },
                    ].map((item) => (
                      <div
                        key={item.phase}
                        className="rounded-xl border p-6"
                        style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="font-heading font-bold flex-shrink-0"
                            style={{ fontSize: "0.75rem", color: "#a1a1a1", letterSpacing: "0.05em", fontFamily: "var(--font-body)", marginTop: "2px" }}
                          >
                            {item.phase}
                          </span>
                          <div>
                            <p
                              className="font-heading font-semibold text-white mb-2"
                              style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                            >
                              {item.title}
                            </p>
                            <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* --- NLP --- */}
                <section id="nlp" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Is Semantic SEO the Same as NLP Optimisation?
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      No. NLP optimisation is one component within semantic SEO, but semantic SEO is substantially broader.
                    </p>
                    <p>
                      NLP (Natural Language Processing) optimisation focuses on how algorithms parse language at the sentence and word level. This includes n-gram patterns, semantic role labelling, syntax tree clarity, tokenisation, lemmatisation, and vocabulary diversity. These are important signals that affect how efficiently search engines can process content.
                    </p>
                    <p>
                      Semantic SEO encompasses NLP optimisation but also includes macro-level domain intelligence, topical architecture, entity-attribute-value mapping, Knowledge Graph alignment, internal linking topology, structured data implementation, and competitive positioning. NLP optimisation is the micro layer. Semantic SEO operates across all layers from macro domain mapping to micro linguistic refinement.
                    </p>
                    <p>
                      A page can be NLP-optimised — clean sentences, good vocabulary, proper syntax — but still fail at semantic SEO if it lacks entity depth, topical completeness, or structural architecture. The strongest results come from operating across all semantic layers simultaneously.
                    </p>
                  </div>
                </section>

                {/* --- AI Search --- */}
                <section id="ai-search" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-5"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Does Semantic SEO Work for AI Search?
                  </h2>
                  <div
                    className="flex flex-col gap-4"
                    style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}
                  >
                    <p>
                      Yes. Semantic SEO is the methodology most naturally aligned with AI-driven search surfaces including Google AI Overviews, ChatGPT search, and Perplexity.
                    </p>
                    <p>
                      AI search systems extract information from web content using passage-level retrieval. They identify the most relevant passage within a document, extract the key facts, and present them as an answer. Content that is structured with clear entity definitions, self-contained factual statements, and SPO triples gives AI systems exactly what they need: parseable, extraction-ready information.
                    </p>
                    <p>
                      The same principles that make content rank well in traditional Google search also make content extractable by AI systems. First sentences that serve as complete definitions. FAQ answers that are self-contained without requiring surrounding context. Comparison tables structured for direct parsing. Factual claims that follow Subject-Predicate-Object structure.
                    </p>
                    <p>
                      This is not a coincidence. Both traditional search algorithms and AI retrieval systems are solving the same fundamental problem: understanding what content means and matching it to what users need. Semantic SEO addresses that problem at the source by building content around meaning rather than keywords.
                    </p>
                    <p>
                      Content built with entity clarity, structural precision, and topical completeness will perform across every search surface that emerges, because every surface will need to extract meaning from content. The format may change. The underlying need for semantic clarity will not.
                    </p>
                  </div>
                </section>

                {/* --- Key Takeaways --- */}
                <section id="takeaways" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-7"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Key Takeaways
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Semantic SEO builds search visibility around entities, attributes, and relationships rather than keyword strings. Search engines have evolved from keyword matchers to meaning-understanding systems powered by Knowledge Graphs and language models.",
                      "Entity-Attribute-Value mapping extracts the root, rare, and unique characteristics of entities, producing content differentiation that competitors cannot replicate by copying keywords.",
                      "Subject-Predicate-Object triples structure content as parseable facts that search engines can extract directly into knowledge, reducing the Cost of Retrieval.",
                      "Topical authority requires complete coverage of all subtopics and entity relationships within a domain, built consistently over time through a Semantic Content Network.",
                      "Semantic SEO operates across multiple layers: macro domain intelligence, entity semantics, semantic triples, query semantics, lexical semantics, frame semantics, micro NLP optimisation, and discourse semantics.",
                      "The same methodology that drives traditional Google rankings also drives performance in AI search surfaces including AI Overviews, because both systems need semantically clear, entity-rich, structurally parseable content.",
                    ].map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-xl border p-5"
                        style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                      >
                        <div
                          className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                        >
                          <span className="text-xs font-heading font-bold text-white">{i + 1}</span>
                        </div>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* --- FAQ --- */}
                <section id="faq" className="mb-14">
                  <h2
                    className="font-heading font-bold text-white mb-8"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Frequently Asked Questions About Semantic SEO
                  </h2>
                  <div className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                      <details
                        key={faq.question}
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
                          <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Post footer — related links + CTA */}
      <section
        className="py-28"
        style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Related */}
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-6"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Related Services
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Semantic SEO Services", href: "/semantic-seo-services", desc: "Full-service semantic SEO implementation — audit, strategy, and execution." },
                  { label: "Semantic SEO Web Development", href: "/semantic-seo", desc: "Websites built with semantic structure from the ground up." },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div
                      className="card-hover rounded-xl border p-5 flex items-center justify-between gap-4"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <div>
                        <p
                          className="font-heading font-semibold text-white mb-1"
                          style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                        >
                          {link.label}
                        </p>
                        <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {link.desc}
                        </p>
                      </div>
                      <ArrowRight size={16} color="#a1a1a1" className="flex-shrink-0" />
                    </div>
                  </Link>
                ))}
                <Link href="/blog">
                  <div
                    className="card-hover rounded-xl border p-5 flex items-center justify-between gap-4"
                    style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                  >
                    <p
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                    >
                      Back to Blog
                    </p>
                    <ArrowRight size={16} color="#a1a1a1" className="flex-shrink-0" />
                  </div>
                </Link>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection direction="right" delay={200}>
              <div
                className="rounded-2xl border p-10 relative overflow-hidden"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.015)" }}
              >
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 opacity-5 pointer-events-none rounded-full"
                  style={{ background: "radial-gradient(circle, white, transparent)" }}
                />
                <div className="relative z-10">
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    Apply This Framework
                  </p>
                  <h2
                    className="font-heading font-bold text-white mb-4"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    Ready to implement semantic SEO for your business?
                  </h2>
                  <p
                    className="mb-8 text-sm"
                    style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}
                  >
                    Understanding the methodology is the first step. Professional implementation — entity mapping, topical architecture, content networks — is what converts the theory into measurable organic growth.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Get a Strategy <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/semantic-seo-services"
                      className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
