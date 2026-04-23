import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantic SEO: What It Is and 10 Tips for Success | Dino de Wet",
  description:
    "Learn what semantic SEO is, why it matters, and 10 practical tips to improve topical authority, entity clarity, and search visibility with a modern semantic SEO strategy.",
  keywords: [
    "what is semantic SEO",
    "semantic SEO tips",
    "topical authority",
    "entity SEO",
    "semantic SEO strategy",
    "semantic SEO South Africa",
    "Dino de Wet semantic SEO",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo",
  },
  openGraph: {
    title: "Semantic SEO: What It Is and 10 Tips for Success",
    description:
      "Learn what semantic SEO is, why it matters, and 10 practical tips to improve topical authority, entity clarity, and search visibility with a modern semantic SEO strategy.",
    url: "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Semantic SEO: What It Is and 10 Tips for Success",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo#article",
      "headline": "Semantic SEO: What It Is and 10 Tips for Success",
      "description":
        "Semantic SEO is the practice of building content around entities, attributes, relationships, and search intent rather than isolated keyword strings. This guide explains what it is and how to implement it.",
      "url": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
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
        "@id": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo",
      },
      "about": [
        { "@type": "Thing", "name": "Semantic SEO" },
        { "@type": "Thing", "name": "Topical Authority" },
        { "@type": "Thing", "name": "Entity SEO" },
      ],
      "keywords": "semantic SEO, topical authority, entity SEO, search intent, semantic content strategy",
      "articleSection": "Semantic SEO",
      "wordCount": 4200,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo#webpage",
      "url": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo",
      "name": "Semantic SEO: What It Is and 10 Tips for Success",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Semantic SEO", "item": "https://dinodewet.co.za/blog/semantic-seo" },
          { "@type": "ListItem", "position": 4, "name": "What Is Semantic SEO?", "item": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/semantic-seo/what-is-semantic-seo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is semantic SEO in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Semantic SEO is the practice of optimising content for meaning, entities, and search intent rather than just keyword strings.",
          },
        },
        {
          "@type": "Question",
          "name": "Does semantic SEO replace technical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Semantic SEO and technical SEO work together. Technical SEO ensures crawlability and rendering. Semantic SEO ensures the content is understandable and topically strong.",
          },
        },
        {
          "@type": "Question",
          "name": "Is semantic SEO the same as NLP optimisation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. NLP optimisation is one part of semantic SEO. Semantic SEO is broader and also includes entity mapping, topical architecture, structured data, and internal linking systems.",
          },
        },
        {
          "@type": "Question",
          "name": "Why does semantic SEO improve rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because it improves topicality, strengthens contextual relevance, lowers cost of retrieval, and helps search engines parse and trust the content more efficiently.",
          },
        },
        {
          "@type": "Question",
          "name": "Does semantic SEO help with AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Semantic SEO aligns closely with AI search because AI systems also need entity-rich, structurally clear, extractable content.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "what-is", label: "What Is Semantic SEO?" },
  { id: "why-matters", label: "Why Semantic SEO Matters" },
  { id: "what-its-not", label: "What Semantic SEO Is Not" },
  { id: "how-it-works", label: "How Semantic SEO Works" },
  { id: "eeat", label: "The Role of E-E-A-T" },
  { id: "tips", label: "10 Semantic SEO Tips" },
  { id: "tip-1", label: "1. Build Around Entities" },
  { id: "tip-2", label: "2. Create a Topical Map" },
  { id: "tip-3", label: "3. Match Macro and Micro Context" },
  { id: "tip-4", label: "4. Use Natural Language" },
  { id: "tip-5", label: "5. Write Descriptive Subheadings" },
  { id: "tip-6", label: "6. Use Semantic Keywords" },
  { id: "tip-7", label: "7. Use BLUF Formatting" },
  { id: "tip-8", label: "8. Add Strategic Internal Links" },
  { id: "tip-9", label: "9. Use Structured Data" },
  { id: "tip-10", label: "10. Build for Topical Authority" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "approach", label: "How Dino de Wet Approaches Semantic SEO" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const tips = [
  {
    id: "tip-1",
    number: "01",
    title: "Build Around Entities, Not Just Keywords",
    body: "Start with the central entity and map the topic from there. If your page is about semantic SEO, the supporting entity set may include topical authority, Knowledge Graph, NLP, structured data, search intent, internal linking, E-E-A-T, information architecture, entity SEO, and AI search. This is stronger than simply repeating a keyword dozens of times. Search engines understand topics through connected entities and their relationships.",
  },
  {
    id: "tip-2",
    number: "02",
    title: "Create a Topical Map Before You Publish",
    body: "Do not publish disconnected articles. Organise the topic into a pillar page, supporting subtopics, related questions, and internal link paths before writing. That is how you avoid thin, repetitive content and keyword cannibalisation. The topical map defines the core and outer sections of a topic, while the semantic content network turns that map into a working architecture.",
  },
  {
    id: "tip-3",
    number: "03",
    title: "Match Macro Context and Micro Context Properly",
    body: "Every page needs a dominant context. The main content should handle the macro context: the primary intent and central entity. The supplementary content should handle supporting questions, side contexts, and related associations without diluting the main topic. That structure helps search systems understand both relevance and responsiveness.",
  },
  {
    id: "tip-4",
    number: "04",
    title: "Use Natural Language That Answers Real Questions",
    body: "Write in the language real users use, but answer with precision. Semantic SEO is not robotic writing. It is clear writing. That means headings and paragraphs should answer natural questions such as what is semantic SEO, why is semantic SEO important, and how does semantic SEO work. This aligns well with both traditional search and answer-driven AI retrieval because it improves extractability and directness.",
  },
  {
    id: "tip-5",
    number: "05",
    title: "Write Descriptive Subheadings That Carry Meaning",
    body: "Subheadings should not be vague. A heading like 'More Information' does very little. A heading like 'How Semantic SEO Builds Topical Authority' tells both users and search engines exactly what the section is about. In semantic SEO, headings are part of contextual flow and contextual hierarchy. They help determine what the page is processing, in what order, and at what weight.",
  },
  {
    id: "tip-6",
    number: "06",
    title: "Use Semantic Keywords and Related Attributes Naturally",
    body: "Semantic keywords are not random synonyms. They are contextually related terms that expand the topic in a meaningful way. For semantic SEO, those might include entity optimisation, topic clusters, search intent, structured data, semantic HTML, contextual relevance, topical coverage, and query semantics. The point is not to stuff variations — it is to deepen the topic with the right vocabulary, attributes, and contextual associations.",
  },
  {
    id: "tip-7",
    number: "07",
    title: "Use BLUF: Give the Main Answer Early",
    body: "BLUF means Bottom Line Up Front. Place the most important answer early in the article and early in each major section. This improves usability, reduces ambiguity, and increases the chance that the page can serve featured snippets, FAQs, and AI extraction surfaces. Direct answer placement, question-answer formatting, and extractable structure are all benefits of this approach.",
  },
  {
    id: "tip-8",
    number: "08",
    title: "Add Strategic Internal Links",
    body: "Internal linking in semantic SEO is not decorative. It is architectural. Link pages that truly reinforce each other: the semantic SEO pillar page, semantic SEO services, topical authority guides, entity SEO pages, AI SEO services, and GEO service pages. This helps distribute PageRank, strengthen context, and build a semantic content network rather than a loose blog.",
  },
  {
    id: "tip-9",
    number: "09",
    title: "Use Structured Data and Semantic HTML",
    body: "Structured data helps search engines understand what the page represents. Semantic HTML helps crawlers understand how the page is organised. That means using Article, FAQPage, BreadcrumbList, Person, and Organization schemas where appropriate, while also keeping the page structurally clear through headings, navigation, author references, and clean HTML.",
  },
  {
    id: "tip-10",
    number: "10",
    title: "Build for Topical Authority, Not Isolated Rankings",
    body: "Semantic SEO succeeds when a site becomes a recognised source for a topic, not when it temporarily ranks one article. That means publishing connected content, refreshing important pages, expanding coverage thoughtfully, keeping quality high, deepening the cluster over time, and maintaining entity consistency site-wide. Topical authority is a state created by semantically organised content networks, topical coverage, historical data, and lower retrieval cost.",
  },
];

export default function WhatIsSemanticSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link href="/blog" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Blog</Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Semantic SEO</span>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>What Is Semantic SEO?</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Semantic SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> 14 min read
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> 23 April 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Semantic SEO: What It Is and 10 Tips for Success
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Semantic SEO is the practice of building content around entities, attributes, relationships, and search intent rather than isolated keyword strings. Instead of asking how many times you mentioned the keyword, it asks whether you defined the topic clearly, connected the right entities, and answered the real intent behind the query.
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

                <section id="what-is" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Is Semantic SEO?
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Semantic SEO is the process of optimising a website so search engines can understand the meaning of the content, not just the words on the page. It focuses on how entities relate to one another, how queries express intent, and how content should be structured to answer those intents with clarity. Semantic SEO aligns content with the way modern search systems use Knowledge Graphs, entity recognition, natural language processing, and information extraction.
                    </p>
                    <p>
                      A keyword-first page might target one phrase and a few close variants. A semantic page goes further. It identifies the central entity, its attributes, its supporting entities, the likely questions users ask, the comparisons they make, and the related contexts search engines expect to see. That broader coverage is one reason semantic SEO contributes to topical authority.
                    </p>
                    <p>
                      For{" "}
                      <Link href="/about" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Dino de Wet
                      </Link>
                      , a{" "}
                      <Link href="/semantic-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        semantic SEO consultant in South Africa
                      </Link>
                      , this is the operating model: build websites that communicate expertise through semantic structure, topical authority, technical clarity, and entity-rich content.
                    </p>
                  </div>
                </section>

                <section id="why-matters" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Why Semantic SEO Matters
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Semantic SEO matters because search engines have evolved beyond exact-match keyword matching. A modern search system tries to understand the topic, the context, and the likely user need behind the query. A page can rank without repeating the exact phrase over and over, but it usually cannot rank strongly without demonstrating real topical understanding.
                    </p>
                    <p>
                      Semantic SEO also improves stability. When content is built around entity coverage, structured relationships, and topical depth, it becomes less fragile than pages written only to chase one phrase. Topical authority comes from topical coverage plus historical data, while retrieval performance improves when content lowers the cost of retrieval through clearer structure, better semantic HTML, and stronger topical alignment.
                    </p>
                    <p>
                      Semantic SEO is also closely related to{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation (GEO)
                      </Link>
                      . Both disciplines require entity-rich, structurally clear, extractable content that serves AI retrieval systems as well as traditional ranking algorithms.
                    </p>
                  </div>
                </section>

                <section id="what-its-not" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Semantic SEO Is Not
                  </h2>
                  <div className="mb-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>Semantic SEO is not:</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      "Keyword stuffing or repeating phrases at high density",
                      "Opening a new page for every minor keyword variation",
                      "Chasing tool-based keyword difficulty without understanding the topic",
                      "Publishing disconnected articles with no semantic relationship",
                      "Adding entities randomly without defining or connecting them properly",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    Topical coverage is not measured by the number of pages alone, and it is not increased by stuffing entities or attributes. Coverage improves when the website defines the right concepts, connects them meaningfully, and processes macro and micro contexts in a deliberate structure.
                  </p>
                </section>

                <section id="how-it-works" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How Semantic SEO Works
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>A semantic SEO strategy usually starts with four things:</p>
                  </div>
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Central entity", desc: "The main thing the page or website is about." },
                      { title: "Search intent", desc: "The actual need behind the query, not just the keyword." },
                      { title: "Entity relationships", desc: "The supporting people, brands, products, concepts, places, and attributes connected to that topic." },
                      { title: "Topical architecture", desc: "The way the site organises those topics into clusters, internal links, and content formats." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    In practice, this becomes a topical map and then a semantic content network. The topical map is the blueprint. The semantic content network is the implementation. The result is stronger topical authority when the site covers the topic completely and consistently over time.
                  </p>
                </section>

                <section id="eeat" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Role of E-E-A-T in Semantic SEO
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      E-E-A-T matters more when semantic SEO is done properly, not less. A page that demonstrates semantic understanding should also demonstrate real experience, subject knowledge, clear authorship, trustworthy sourcing, and topical consistency. That is why semantic SEO is not only a content tactic — it is also a credibility system.
                    </p>
                    <p>
                      A strong semantic page defines the topic clearly, but it also shows why the source deserves to be trusted on that topic. This is where author pages, business identity, structured data, About pages, service pages, and consistent entity references all strengthen performance together.
                    </p>
                  </div>
                </section>

                <section id="tips" className="mb-8">
                  <h2 className="font-heading font-bold text-white mb-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    10 Semantic SEO Tips for Success
                  </h2>
                </section>

                {tips.map((tip) => (
                  <section key={tip.id} id={tip.id} className="mb-12">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.5rem", color: "#1f1f1f", lineHeight: 1 }}>{tip.number}</span>
                      <h3 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", letterSpacing: "-0.02em", lineHeight: 1.2, paddingTop: "0.3rem" }}>
                        {tip.title}
                      </h3>
                    </div>
                    <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                      {tip.body}
                    </p>
                  </section>
                ))}

                <section id="mistakes" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Common Semantic SEO Mistakes
                  </h2>
                  <div className="flex flex-col gap-2">
                    {[
                      "Writing a separate page for every tiny keyword variation",
                      "Repeating entities without defining them",
                      "Using generic, vague headings that carry no contextual meaning",
                      "Publishing thin support articles without semantic connection to the pillar",
                      "Overusing internal links without semantic logic",
                      "Ignoring structured data and semantic HTML",
                      "Relying on keyword difficulty scores instead of quality thresholds",
                      "Treating NLP optimisation as the whole of semantic SEO",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    A semantic SEO strategy should be broader than on-page optimisation. It should include architecture, content hierarchy, entity clarity, and technical delivery.
                  </p>
                </section>

                <section id="approach" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How Dino de Wet Approaches Semantic SEO
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Dino de Wet approaches semantic SEO as a system, not a checklist. That means focusing on entity-first page planning, semantic service-page development, topical maps, semantic content networks, internal linking by contextual relevance, AI-ready extractable content, structured data and semantic HTML, and commercial intent aligned to topical authority.
                    </p>
                    <p>
                      For businesses in South Africa, this matters because many sites still optimise in an older keyword-first way. A better semantic structure creates a clearer path to authority, stronger content differentiation, and future resilience across both Google search and AI-driven search interfaces such as{" "}
                      <Link href="/blog/generative-engine-optimisation/google-ai-overviews-and-geo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Google AI Overviews
                      </Link>
                      .
                    </p>
                    <p>
                      Explore{" "}
                      <Link href="/semantic-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        semantic SEO web development services
                      </Link>{" "}
                      or{" "}
                      <Link href="/geo-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation services
                      </Link>{" "}
                      to build a stronger, more future-ready digital presence.
                    </p>
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: "What is semantic SEO in simple terms?", a: "Semantic SEO is the practice of optimising content for meaning, entities, and search intent rather than just keyword strings." },
                      { q: "Does semantic SEO replace technical SEO?", a: "No. Semantic SEO and technical SEO work together. Technical SEO ensures crawlability and rendering. Semantic SEO ensures the content is understandable and topically strong." },
                      { q: "Is semantic SEO the same as NLP optimisation?", a: "No. NLP optimisation is one part of semantic SEO. Semantic SEO is broader and also includes entity mapping, topical architecture, structured data, and internal linking systems." },
                      { q: "Why does semantic SEO improve rankings?", a: "Because it improves topicality, strengthens contextual relevance, lowers cost of retrieval, and helps search engines parse and trust the content more efficiently." },
                      { q: "Does semantic SEO help with AI search?", a: "Yes. Semantic SEO aligns closely with AI search because AI systems also need entity-rich, structurally clear, extractable content." },
                    ].map((item) => (
                      <div key={item.q} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}>{item.q}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Continue Reading
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Semantic SEO Web Development Services", href: "/semantic-seo", desc: "Websites built for topical depth, crawlability, entity clarity, and long-term visibility." },
                  { label: "What Is Generative Engine Optimisation?", href: "/blog/generative-engine-optimisation", desc: "How GEO extends semantic SEO into AI-driven search environments." },
                  { label: "SEO vs GEO: The Core Difference", href: "/blog/generative-engine-optimisation/geo-vs-seo", desc: "Why SEO drives clicks and GEO drives AI citation visibility." },
                  { label: "What Makes Content Citation-Ready for AI Search?", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "Seven structural properties for AI extractability." },
                  { label: "How Google AI Overviews Change SEO and GEO", href: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", desc: "How AI Overviews work and how to optimise for inclusion." },
                  { label: "AI SEO Services South Africa", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for South African brands." },
                  { label: "Home", href: "/", desc: "dinodewet.co.za — Semantic SEO, AI Architecture, and GEO services." },
                  { label: "About Dino de Wet", href: "/about", desc: "About the semantic SEO strategist and AI architect behind the work." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Build a Stronger Semantic Foundation</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    If you want stronger rankings, better content differentiation, and a site that performs across traditional and AI search, semantic SEO is one of the most important foundations you can build.
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Dino de Wet builds semantic SEO-driven websites and content systems that create authority, clarity, and long-term growth.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Strategy Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/semantic-seo" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      View Semantic SEO Services
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
