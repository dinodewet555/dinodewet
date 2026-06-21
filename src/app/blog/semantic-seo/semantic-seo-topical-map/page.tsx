import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

const URL = "https://dinodewet.co.za/blog/semantic-seo/semantic-seo-topical-map";

export const metadata: Metadata = {
  title: "Semantic SEO Topical Map: Build Topical Authority in 2026",
  description:
    "Learn how to build a semantic SEO topical map in 2026. Step-by-step guide covering entity extraction, schema markup, intent mapping, and topical authority strategies that AI systems cite.",
  keywords: [
    "semantic SEO topical map",
    "topical map 2026",
    "topical authority",
    "entity SEO",
    "knowledge graph SEO",
    "semantic content network",
    "entity extraction",
    "topic clusters",
    "schema markup",
    "AI search citations",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Semantic SEO Topical Map: Build Topical Authority in 2026",
    description:
      "A 2026 blueprint for building a semantic SEO topical map — entity extraction, intent mapping, schema, and the architecture AI search engines cite.",
    url: URL,
    type: "article",
    images: [
      {
        url: "/images/seo-framework.png",
        width: 1200,
        height: 630,
        alt: "Semantic SEO Topical Map blueprint",
      },
    ],
  },
};

const PUBLISHED = "2026-05-03";

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      "headline": "Semantic SEO Topical Map: The Complete 2026 Blueprint for Topical Authority",
      "description":
        "A semantic SEO topical map is a structured content blueprint that organises a website around entities and their relationships rather than individual keywords. This guide covers the anatomy, the four-step build process, and the difference between a topical map and a content silo.",
      "url": URL,
      "datePublished": PUBLISHED,
      "dateModified": PUBLISHED,
      "author": { "@id": "https://dinodewet.co.za/#person" },
      "publisher": {
        "@type": "Person",
        "@id": "https://dinodewet.co.za/#person",
        "name": "Dino de Wet",
        "url": "https://dinodewet.co.za",
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://dinodewet.co.za/images/seo-framework.png",
        "width": 1200,
        "height": 630,
      },
      "isPartOf": { "@id": "https://dinodewet.co.za/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": URL },
      "about": [
        { "@type": "Thing", "name": "Topical Map" },
        { "@type": "Thing", "name": "Topical Authority" },
        { "@type": "Thing", "name": "Semantic SEO" },
        { "@type": "Thing", "name": "Knowledge Graph" },
        { "@type": "Thing", "name": "Entity Extraction" },
      ],
      "keywords":
        "semantic SEO topical map, topical authority, entity SEO, knowledge graph, semantic content network, schema markup, topic clusters",
      "articleSection": "Semantic SEO",
      "wordCount": 2300,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3"],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      "url": URL,
      "name": "Semantic SEO Topical Map: Build Topical Authority in 2026",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
        { "@type": "ListItem", "position": 3, "name": "Semantic SEO", "item": "https://dinodewet.co.za/blog/semantic-seo" },
        { "@type": "ListItem", "position": 4, "name": "Semantic SEO Topical Map", "item": URL },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${URL}#howto`,
      "name": "How to Build a Semantic SEO Topical Map",
      "description":
        "A four-step process for building a semantic SEO topical map: identify the core entity, extract attributes and related entities, map queries to intent buckets, then assign URLs and define the hierarchy.",
      "totalTime": "PT8H",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Identify your core entity",
          "text":
            "Define the single concept your entire site claims authority over. This is not your broadest keyword — it is a defensibly scoped entity such as \"Semantic SEO for South African service businesses.\"",
          "url": `${URL}#step-1`,
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Extract attributes and related entities",
          "text":
            "Identify every person, concept, tool, process, and related subject within your niche using Google's People Also Ask, related searches, the Knowledge Graph API, and competitor SERP analysis.",
          "url": `${URL}#step-2`,
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Map queries to intent buckets",
          "text":
            "Sort each query into informational, navigational, commercial, or transactional intent. This determines what type of content you create — definition pages, comparisons, service pages — not just what topic you cover.",
          "url": `${URL}#step-3`,
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Assign URLs and define the hierarchy",
          "text":
            "Give every entity and subtopic a URL that mirrors the topical hierarchy. Apply Article, HowTo, FAQPage, and BreadcrumbList schema at each level to make the structure machine-readable.",
          "url": `${URL}#step-4`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see results from a topical map?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Topical authority typically takes 3 to 6 months to manifest in measurable rankings. Unlike single-page ranking, authority requires search engines to crawl your entire Semantic Content Network and validate the depth of your entity coverage before rewarding the cluster.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I build a topical map for a local business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. For local SEO, your core entity is your service combined with your location — for example, \"SEO Agency in Cape Town.\" Your topical map must include local neighbourhood entities, regional service attributes, and location-specific queries. This creates a Geographic Entity tie-in that positions you as the definitive expert for your local market.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need expensive tools to find entities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. You can build a solid entity map using Google's People Also Ask, related searches, and the Knowledge Graph API — all free. Paid tools like InLinks, Surfer SEO, and MarketMuse accelerate the process and add NLP scoring, but they are not required to start.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Entity-Attribute-Value (EAV) model in semantic SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The EAV model describes how search engines store information: an Entity (e.g., Topical Map) has Attributes (e.g., construction time) with Values (e.g., 3 to 6 months). Building content around this model ensures you are answering the specific attribute-level questions that search engines and AI systems are evaluating.",
          },
        },
        {
          "@type": "Question",
          "name": "How does passage-level ranking affect my topical map?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Individual sections within a page can rank independently in search results. A well-structured H2 or H3 section on a pillar page can surface for a specific query even if the full page does not rank for it. Clear subheadings and self-contained paragraphs create multiple ranking entry points from a single URL.",
          },
        },
        {
          "@type": "Question",
          "name": "What schema markup should I use for a topical map?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Use Article schema on informational content, HowTo schema on step-by-step process pages, FAQPage schema on question-and-answer sections, and BreadcrumbList schema to reinforce URL hierarchy. Each schema type communicates a different entity relationship to search engines and AI crawlers.",
          },
        },
        {
          "@type": "Question",
          "name": "How do AI systems like Perplexity decide what to cite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Generative engines evaluate contextual depth, co-occurrence patterns, and internal linking structure rather than keyword density. They look for sources with clear heading hierarchies, self-contained passages, and structured data that makes content easy to extract and attribute.",
          },
        },
        {
          "@type": "Question",
          "name": "Is a topical map the same as a content calendar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. A content calendar schedules when to publish. A topical map defines what to publish, why it belongs in your entity ecosystem, and how it connects to every other piece of content. A content calendar without a topical map is a schedule for publishing isolated pages.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "why-replaced", label: "Why Topical Maps Replaced Keywords" },
  { id: "anatomy", label: "Anatomy of a Topical Map" },
  { id: "build", label: "How to Build One Step by Step" },
  { id: "step-1", label: "Step 1 — Core Entity" },
  { id: "step-2", label: "Step 2 — Extract Attributes" },
  { id: "step-3", label: "Step 3 — Intent Buckets" },
  { id: "step-4", label: "Step 4 — URLs & Hierarchy" },
  { id: "vs-silo", label: "Topical Map vs. Content Silo" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const keyTakeaways = [
  "A semantic SEO topical map treats your website as a Semantic Content Network, not a collection of keyword pages.",
  "Search engines have fully shifted from matching keyword strings to evaluating entities, context, and relationships.",
  "Building a topical map requires defining your core entity, extracting attributes, mapping intent, and assigning a URL hierarchy — before you publish.",
  "Entity coverage now matters more than keyword volume; comprehensive coverage of an entity's attributes signals authority.",
  "Schema markup (JSON-LD) is no longer optional — it is the machine-readable layer that connects content to the Knowledge Graph.",
  "Page sections can rank independently through passage-level ranking, so clear H2/H3 structure creates multiple entry points from one page.",
  "Generative engines like Perplexity and Gemini cite sources based on contextual depth and co-occurrence, not keyword density.",
  "Long-tail, high-intent queries now outperform generic high-volume keywords because they match specific entity attributes.",
  "InLinks, Surfer SEO, MarketMuse, and Schema App are the current industry tooling for semantic SEO at scale.",
  "You can start mapping entities manually using People Also Ask, related searches, and the Knowledge Graph API — no paid tool required.",
];

const anatomyTable = [
  { level: "Core entity (parent)", example: "Semantic SEO" },
  { level: "Subtopic (attribute)", example: "Topical maps, entity extraction, schema markup" },
  { level: "Supporting content", example: "How-to guides, comparisons, local applications" },
  { level: "Internal link target", example: "/semantic-seo-services, /blog/semantic-seo/what-is-semantic-seo" },
];

const intentBuckets = [
  { intent: "Informational", desc: "Definition pages, explainers, \"what is\" articles" },
  { intent: "Navigational", desc: "Brand and service pages with clear entity signals" },
  { intent: "Commercial", desc: "Comparisons, tool reviews, \"best X for Y\" content" },
  { intent: "Transactional", desc: "Service pages, contact pages, pricing pages" },
];

const siloVsMap = [
  { dim: "Organising principle", silo: "Category / topic folder", map: "Entity and attribute coverage" },
  { dim: "Internal linking rule", silo: "Links stay within the silo", map: "Links follow semantic relationships" },
  { dim: "Goal", silo: "Site structure and UX", map: "Knowledge Graph authority" },
  { dim: "Keyword logic", silo: "Target one keyword per page", map: "Cover all attributes of an entity" },
  { dim: "AI citation potential", silo: "Low (thin context)", map: "High (deep contextual signals)" },
  { dim: "Schema dependency", silo: "Optional", map: "Essential infrastructure" },
];

const mistakes = [
  {
    title: "Publishing without a map",
    desc: "Writing articles based on keyword volume without a pre-defined entity structure means content never accumulates into authority — it just exists as isolated pages.",
  },
  {
    title: "Ignoring co-occurrence",
    desc: "Repeating your primary keyword without surrounding it with related entities produces thin semantic context. AI rerankers and NLP scoring systems penalise this.",
  },
  {
    title: "Skipping schema markup",
    desc: "In 2026, schema is infrastructure, not enhancement. Without JSON-LD, search engines and generative AI cannot reliably connect your content to recognised Knowledge Graph concepts.",
  },
  {
    title: "Treating internal links as navigation only",
    desc: "Every internal link is a semantic signal. Linking from a supporting article to your pillar page tells crawlers these pages share entity context — not just that they are on the same site.",
  },
  {
    title: "Measuring only traditional rankings",
    desc: "Modern dashboards track when Gemini, Perplexity, or Bing Copilot cite your content and in what context. If you are only watching Google rankings, you are missing half the visibility picture in 2026.",
  },
  {
    title: "Confusing breadth with depth",
    desc: "Publishing 50 thin articles on loosely related topics does not build authority. Publishing 15 comprehensive articles that cover every attribute of one entity does.",
  },
];

const urlExample = `/semantic-seo/                        (core entity — pillar page)
/semantic-seo/topical-map/            (primary attribute)
/semantic-seo/topical-map/how-to-build (supporting detail)
/semantic-seo/schema-markup/          (parallel attribute)`;

const faqItems = [
  {
    q: "How long does it take to see results from a topical map?",
    a: "Topical authority typically takes 3 to 6 months to manifest in measurable rankings. Unlike single-page ranking, authority requires search engines to crawl your entire Semantic Content Network and validate the depth of your entity coverage before rewarding the cluster.",
  },
  {
    q: "Can I build a topical map for a local business?",
    a: "Yes. For local SEO, your core entity is your service combined with your location — for example, \"SEO Agency in Cape Town.\" Your topical map must include local neighbourhood entities, regional service attributes, and location-specific queries. This creates a Geographic Entity tie-in that positions you as the definitive expert for your local market.",
  },
  {
    q: "Do I need expensive tools to find entities?",
    a: "No. You can build a solid entity map using Google's People Also Ask, related searches, and the Knowledge Graph API — all free. Paid tools like InLinks, Surfer SEO, and MarketMuse accelerate the process and add NLP scoring, but they are not required to start.",
  },
  {
    q: "What is the Entity-Attribute-Value (EAV) model in semantic SEO?",
    a: "The EAV model describes how search engines store information: an Entity (e.g., \"Topical Map\") has Attributes (e.g., \"construction time\") with Values (e.g., \"3 to 6 months\"). Building content around this model ensures you are answering the specific attribute-level questions that search engines and AI systems evaluate.",
  },
  {
    q: "How does passage-level ranking affect my topical map?",
    a: "Individual sections within a page can rank independently in search results. A well-structured H2 or H3 section on a pillar page can surface for a specific query even if the full page does not rank for it. Clear subheadings and self-contained paragraphs create multiple ranking entry points from a single URL.",
  },
  {
    q: "What schema markup should I use for a topical map?",
    a: "Use Article schema on informational content, HowTo schema on step-by-step process pages, FAQPage schema on question-and-answer sections, and BreadcrumbList schema to reinforce URL hierarchy. Each schema type communicates a different entity relationship to search engines and AI crawlers.",
  },
  {
    q: "How do AI systems like Perplexity decide what to cite?",
    a: "Generative engines evaluate contextual depth, co-occurrence patterns, and internal linking structure rather than keyword density. They look for sources with clear heading hierarchies, self-contained passages, and structured data that makes content easy to extract and attribute.",
  },
  {
    q: "Is a topical map the same as a content calendar?",
    a: "No. A content calendar schedules when to publish. A topical map defines what to publish, why it belongs in your entity ecosystem, and how it connects to every other piece of content. A content calendar without a topical map is a schedule for publishing isolated pages.",
  },
];

const bodyTextStyle = {
  color: "#a1a1a1",
  lineHeight: 1.85,
  fontSize: "1rem",
  fontFamily: "var(--font-body)",
} as const;

const h2Style = {
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
} as const;

const h3Style = {
  fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
} as const;

export default function SemanticSEOTopicalMapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        trail={[
          { name: "Blog", href: "/blog" },
          { name: "Semantic SEO", href: "/blog/semantic-seo" },
          { name: "Semantic SEO Topical Map", href: "/blog/semantic-seo/semantic-seo-topical-map" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Semantic SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> 13 min read
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> 3 May 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Semantic SEO Topical Map: The Complete 2026 Blueprint for Topical Authority
            </h1>
            <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "680px" }}>
              A semantic SEO topical map is a structured content blueprint that organises your website around entities and their relationships rather than individual keywords. It tells search engines that your site comprehensively covers a subject — which is what builds topical authority.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <aside className="lg:col-span-1">
              <AnimatedSection direction="left">
                <div className="rounded-xl border p-6 lg:sticky lg:top-28" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen size={14} color="#a1a1a1" />
                    <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Contents</p>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-2">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="flex items-start gap-2 text-xs leading-relaxed transition-colors hover:text-white" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                            <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </AnimatedSection>
            </aside>

            <article className="lg:col-span-3">
              <AnimatedSection>
                {/* Quick Answer */}
                <section id="quick-answer" className="mb-14">
                  <blockquote className="rounded-xl border-l-4 p-6" style={{ borderLeftColor: "#2563eb", background: "rgba(37,99,235,0.05)", borderTopColor: "#1f1f1f", borderRightColor: "#1f1f1f", borderBottomColor: "#1f1f1f", borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopStyle: "solid", borderRightStyle: "solid", borderBottomStyle: "solid" }}>
                    <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Answer</p>
                    <p style={bodyTextStyle}>
                      A semantic SEO topical map is a structured content blueprint that organises your website around entities and their relationships rather than individual keywords. It tells search engines that your site comprehensively covers a subject, which builds the topical authority needed to rank consistently. In 2026, both traditional search engines and generative AI systems use these signals to decide which sources to cite and rank.
                    </p>
                  </blockquote>
                </section>

                {/* Key Takeaways */}
                <section id="key-takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Key Takeaways</h2>
                  <div className="flex flex-col gap-2">
                    {keyTakeaways.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Replaced */}
                <section id="why-replaced" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Why Topical Maps Replaced Keyword Targeting</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      <strong className="text-white">The core shift is simple: search engines no longer match a searcher&apos;s string of text to a page&apos;s text. They match entities — concepts, brands, and people — to sources that have proven authority over those entities.</strong>
                    </p>
                    <p>
                      Think of it this way. A keyword is the phrase &quot;how to build a topical map.&quot; An entity is the concept of <em>Topical Authority</em> itself. When Google evaluates your site, it is not counting how many times you wrote &quot;topical map.&quot; It is asking: <em>does this site cover every meaningful attribute of the entity called Topical Authority?</em>
                    </p>
                    <p>
                      This distinction — often called <strong className="text-white">&quot;Strings vs. Things&quot;</strong> — has been central to how Google&apos;s Knowledge Graph operates since the Hummingbird update. In 2026 it is the dominant ranking logic across all major search and AI systems.
                    </p>
                    <p>Why this matters for your content strategy:</p>
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {[
                      "A page optimised for a single keyword competes with thousands of similar pages.",
                      "A content network that covers every attribute of an entity becomes the reference point for that entity.",
                      "AI systems like Gemini and Perplexity specifically evaluate contextual depth and co-occurrence patterns when deciding what to cite.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-6 pl-5 border-l-2" style={{ borderLeftColor: "#3a3a3a" }}>
                    <p className="italic" style={{ ...bodyTextStyle, color: "#cfcfcf" }}>
                      &quot;Topical maps are now the standard structured SEO framework that organises content around entities, semantic relationships, and strategic internal linking to build real topical authority.&quot;
                    </p>
                  </blockquote>
                  <p className="mt-4" style={bodyTextStyle}>
                    Random article publishing no longer works. Pre-publication planning — defining your authority theme, mapping entities, and designing internal linking before writing a single word — is now mandatory.
                  </p>
                </section>

                {/* Anatomy */}
                <section id="anatomy" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>The Anatomy of a Semantic SEO Topical Map</h2>
                  <p style={bodyTextStyle}>
                    <strong className="text-white">A topical map has three structural layers:</strong> parent topics, entity relationships, and content types mapped to search intent. Understanding each layer is what separates a real semantic content architecture from a glorified content calendar.
                  </p>

                  <div className="my-8 rounded-xl overflow-hidden border" style={{ borderColor: "#1f1f1f" }}>
                    <Image
                      src="/images/seo-framework.png"
                      alt="Semantic SEO topical map architecture: parent entity, subtopic attributes, and supporting content layers"
                      width={1200}
                      height={630}
                      className="w-full h-auto"
                    />
                  </div>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Parent Topics and Subtopics</h3>
                  <p style={bodyTextStyle}>
                    The parent topic is your <strong className="text-white">core entity</strong> — the primary subject your site claims authority over. Every subtopic is an attribute or related concept that a comprehensive source would be expected to cover. For an SEO consultancy, the structure might look like this:
                  </p>
                  <div className="mt-4 overflow-x-auto rounded-xl border" style={{ borderColor: "#1f1f1f" }}>
                    <table className="w-full" style={{ borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
                      <thead>
                        <tr style={{ background: "rgba(37,99,235,0.08)" }}>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Level</th>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        {anatomyTable.map((row, i) => (
                          <tr key={row.level} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                            <td className="p-3 text-sm" style={{ color: "#cfcfcf", borderBottom: i === anatomyTable.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.level}</td>
                            <td className="p-3 text-sm" style={{ color: "#a1a1a1", borderBottom: i === anatomyTable.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4" style={bodyTextStyle}>
                    Each subtopic becomes a page or cluster of pages. The internal links between them are not decorative — they are signals that tell crawlers your content belongs to the same expert ecosystem.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Entity Relationships and Attribute Coverage</h3>
                  <p style={bodyTextStyle}>
                    Entities have attributes. The entity &quot;Topical Map&quot; has attributes like <em>construction process</em>, <em>tools required</em>, <em>time to results</em>, <em>comparison to content silos</em>, and <em>local SEO applications</em>. <strong className="text-white">Covering every attribute is what creates the perception of authority.</strong>
                  </p>
                  <p className="mt-3" style={bodyTextStyle}>
                    Search engines now prioritise entity coverage over keyword volume. The goal is not to rank for the most searches — it is to leave no meaningful question about your entity unanswered.
                  </p>
                  <p className="mt-3" style={bodyTextStyle}>
                    <strong className="text-white">Co-occurrence matters here.</strong> Instead of repeating &quot;semantic SEO topical map&quot; throughout a page, you naturally place related entities — Knowledge Graph, entity extraction, passage ranking, NLP scoring — alongside your primary topic. This co-occurrence pattern strengthens topic clarity for both crawlers and AI rerankers.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Content Types and Search Intent Mapping</h3>
                  <p style={bodyTextStyle}>
                    Not every attribute maps to the same content type. A well-built topical map assigns the right format to the right intent:
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {intentBuckets.map((b) => (
                      <div key={b.intent} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>{b.intent} intent</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{b.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5" style={bodyTextStyle}>
                    Matching content type to intent is not just good UX — it is a direct ranking signal.
                  </p>
                </section>

                {/* Build steps */}
                <section id="build" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>How to Build a Semantic SEO Topical Map Step by Step</h2>
                  <p style={bodyTextStyle}>
                    <strong className="text-white">Building a topical map is a four-step process</strong> — identify your core entity, extract attributes and related entities, map queries to intent buckets, then assign URLs and define the hierarchy. Complete these steps before publishing any content.
                  </p>

                  <section id="step-1" className="mt-10">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.2rem", color: "#1f1f1f", lineHeight: 1 }}>01</span>
                      <h3 className="font-heading font-bold text-white" style={{ ...h3Style, paddingTop: "0.25rem" }}>
                        Identify Your Core Entity
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3" style={bodyTextStyle}>
                      <p><strong className="text-white">Your core entity is the single concept your entire site claims authority over.</strong></p>
                      <p>
                        Do not confuse this with your broadest keyword. &quot;SEO&quot; is too broad for most sites. &quot;Semantic SEO for South African service businesses&quot; is a core entity with a defensible scope.
                      </p>
                      <p>
                        Ask yourself: <em>What is the one concept that, if Google fully understood my site, would make me the go-to source?</em> That is your core entity.
                      </p>
                    </div>
                  </section>

                  <section id="step-2" className="mt-10">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.2rem", color: "#1f1f1f", lineHeight: 1 }}>02</span>
                      <h3 className="font-heading font-bold text-white" style={{ ...h3Style, paddingTop: "0.25rem" }}>
                        Extract Attributes and Related Entities
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3" style={bodyTextStyle}>
                      <p>
                        <strong className="text-white">Entity extraction means identifying every person, concept, tool, process, and related subject within your niche</strong> — not just keywords.
                      </p>
                      <p>Use these free methods to extract entities:</p>
                    </div>
                    <ol className="mt-3 flex flex-col gap-2 list-decimal pl-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      <li className="text-sm" style={{ lineHeight: 1.6 }}>Google&apos;s &quot;People Also Ask&quot; boxes for your core entity.</li>
                      <li className="text-sm" style={{ lineHeight: 1.6 }}>Related searches at the bottom of the SERP.</li>
                      <li className="text-sm" style={{ lineHeight: 1.6 }}>Google&apos;s Knowledge Graph API (free tier available).</li>
                      <li className="text-sm" style={{ lineHeight: 1.6 }}>Competitor content gap analysis using the SERP itself.</li>
                    </ol>
                    <p className="mt-4" style={bodyTextStyle}>
                      Modern semantic SEO requires identifying people, concepts, tools, and related subjects through SERP analysis and semantic tools — not just keyword research software. Paid tools like InLinks (entity and Knowledge Graph mapping) and MarketMuse (topical gap analysis) accelerate this, but they are not required to start.
                    </p>
                  </section>

                  <section id="step-3" className="mt-10">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.2rem", color: "#1f1f1f", lineHeight: 1 }}>03</span>
                      <h3 className="font-heading font-bold text-white" style={{ ...h3Style, paddingTop: "0.25rem" }}>
                        Map Queries to Intent Buckets
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3" style={bodyTextStyle}>
                      <p>
                        <strong className="text-white">Every query your entity generates belongs to one of four intent buckets:</strong> informational, navigational, commercial, or transactional.
                      </p>
                      <p>
                        Sort your extracted entities and their associated queries into these buckets. This step determines what type of content you create, not just what topic you cover.
                      </p>
                      <p>
                        Long-tail queries with specific intent — for example, &quot;how to build a topical map for a local SEO agency in Cape Town&quot; — now outperform high-volume generic queries because they match specific entity attributes with precision. The same logic applies to{" "}
                        <Link href="/blog/local-seo/seo-audit-checklist-cape-town" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                          a Cape Town SEO audit
                        </Link>
                        : long-tail, neighbourhood-specific queries are where the wins are now.
                      </p>
                    </div>
                  </section>

                  <section id="step-4" className="mt-10">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.2rem", color: "#1f1f1f", lineHeight: 1 }}>04</span>
                      <h3 className="font-heading font-bold text-white" style={{ ...h3Style, paddingTop: "0.25rem" }}>
                        Assign URLs and Define the Hierarchy
                      </h3>
                    </div>
                    <div className="flex flex-col gap-3" style={bodyTextStyle}>
                      <p>
                        <strong className="text-white">Every entity and subtopic gets a URL. The URL structure should mirror the topical hierarchy.</strong>
                      </p>
                      <p>A clean example:</p>
                    </div>
                    <pre className="mt-4 rounded-xl border p-5 overflow-x-auto" style={{ borderColor: "#1f1f1f", background: "#0a0a0a", fontSize: "0.8rem", lineHeight: 1.6 }}>
                      <code style={{ color: "#cfcfcf", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{urlExample}</code>
                    </pre>
                    <p className="mt-4" style={bodyTextStyle}>
                      Internal links flow from supporting pages up to the pillar and across to related attributes. Schema markup is then applied at each level — Article schema on blog posts, HowTo schema on process pages, FAQPage schema on Q&amp;A sections. This is the machine-readable layer that connects your content to the Knowledge Graph.
                    </p>
                  </section>
                </section>

                {/* Vs Silo */}
                <section id="vs-silo" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Topical Map vs. Content Silo: What Is the Difference?</h2>
                  <p style={bodyTextStyle}>
                    <strong className="text-white">A content silo organises pages by category for navigational clarity. A topical map organises content by entity relationships for semantic authority.</strong> They look similar on the surface but operate on different logic.
                  </p>
                  <div className="mt-5 overflow-x-auto rounded-xl border" style={{ borderColor: "#1f1f1f" }}>
                    <table className="w-full" style={{ borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
                      <thead>
                        <tr style={{ background: "rgba(37,99,235,0.08)" }}>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Dimension</th>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Content silo</th>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Semantic topical map</th>
                        </tr>
                      </thead>
                      <tbody>
                        {siloVsMap.map((row, i) => (
                          <tr key={row.dim} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                            <td className="p-3 text-sm" style={{ color: "#cfcfcf", borderBottom: i === siloVsMap.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.dim}</td>
                            <td className="p-3 text-sm" style={{ color: "#a1a1a1", borderBottom: i === siloVsMap.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.silo}</td>
                            <td className="p-3 text-sm" style={{ color: "#a1a1a1", borderBottom: i === siloVsMap.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.map}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-5" style={bodyTextStyle}>
                    The practical difference: a silo can be built after publishing. A topical map must be designed before publishing because it determines what you write, not just where you put it.
                  </p>
                </section>

                {/* Mistakes */}
                <section id="mistakes" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Common Mistakes That Kill Topical Authority</h2>
                  <p style={bodyTextStyle}>
                    Even well-intentioned content strategies fail at the entity level. The mistakes that matter most:
                  </p>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mistakes.map((m) => (
                      <div key={m.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>{m.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={h2Style}>Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-4">
                    {faqItems.map((item) => (
                      <div key={item.q} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}>{item.q}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Conclusion</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      A semantic SEO topical map is not a content tactic — it is the architectural foundation that determines whether your website accumulates authority or just accumulates pages. In 2026, both traditional search engines and generative AI systems evaluate entity coverage, co-occurrence depth, and structured data signals before deciding which sources to rank or cite. For the underlying theory, see{" "}
                      <Link href="/blog/semantic-seo/what-is-semantic-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        what semantic SEO is
                      </Link>
                      {" "}and{" "}
                      <Link href="/blog/semantic-seo/semantic-seo-vs-traditional-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        how it differs from traditional SEO
                      </Link>
                      .
                    </p>
                    <p>Your actionable next steps:</p>
                    <ol className="flex flex-col gap-2 list-decimal pl-5">
                      <li>Define your core entity this week — one concept your site will claim authority over.</li>
                      <li>Extract attributes using Google&apos;s People Also Ask and related searches before spending on tools.</li>
                      <li>Map your existing content to the four intent buckets and identify the gaps.</li>
                      <li>Add JSON-LD schema to your highest-traffic pages as immediate infrastructure.</li>
                      <li>Build your pillar page first, then create supporting content that links back to it.</li>
                      <li>Track AI citations alongside traditional rankings — both matter for visibility in 2026.</li>
                    </ol>
                    <p>
                      The sites that win in semantic search are not the ones with the most content. They are the ones that have left no meaningful question about their core entity unanswered.
                    </p>
                  </div>
                </section>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Continue Reading</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Semantic SEO: What It Is and 10 Tips", href: "/blog/semantic-seo/what-is-semantic-seo", desc: "Entities, topical authority, and how semantic SEO actually works." },
                  { label: "Semantic SEO vs. Traditional SEO", href: "/blog/semantic-seo/semantic-seo-vs-traditional-seo", desc: "What changed in 2026 and how to build a hybrid strategy." },
                  { label: "Semantic SEO Services", href: "/semantic-seo-services", desc: "Topic clusters, schema, and entity strategy executed end-to-end." },
                  { label: "SEO Audit Checklist for Cape Town Businesses", href: "/blog/local-seo/seo-audit-checklist-cape-town", desc: "Apply semantic principles to a local audit — technical, on-page, and GBP." },
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "Why semantic depth determines AI citation visibility." },
                  { label: "What Makes Content Citation-Ready for AI", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "Seven structural properties for AI extractability." },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="card-hover rounded-xl border p-5 flex items-center justify-between gap-4" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                      <div>
                        <p className="font-heading font-semibold text-white mb-1" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{link.label}</p>
                        <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{link.desc}</p>
                      </div>
                      <ArrowRight size={16} color="#a1a1a1" className="flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="rounded-2xl border p-10 relative overflow-hidden" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.015)" }}>
                <div className="absolute -top-20 -right-20 w-64 h-64 opacity-5 pointer-events-none rounded-full" style={{ background: "radial-gradient(circle, white, transparent)" }} />
                <div className="relative z-10">
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Build a Real Topical Map</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Want a topical map designed for your business — entity-mapped, intent-bucketed, and schema-ready?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Pillar architecture, cluster pages, schema, and internal linking executed for South African brands serious about long-term topical authority.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Strategy Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/semantic-seo-services" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      View Semantic SEO Services
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/semantic-seo", anchor: "semantic SEO consulting" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/blog", anchor: "SEO blog" },
        ]}
      />
    </>
  );
}
