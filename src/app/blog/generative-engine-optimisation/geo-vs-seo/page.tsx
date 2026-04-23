import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO vs GEO: The Core Difference | Dino de Wet",
  description:
    "Learn the core difference between SEO and GEO, why SEO drives clicks, why GEO drives AI citation visibility, and why businesses now need both.",
  keywords: [
    "SEO vs GEO",
    "GEO vs SEO",
    "Generative Engine Optimisation difference",
    "AI SEO",
    "Answer Engine Optimisation",
    "AI search visibility",
    "GEO South Africa",
  ],
  alternates: {
    canonical: "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo",
  },
  openGraph: {
    title: "SEO vs GEO: The Core Difference",
    description:
      "Learn the core difference between SEO and GEO, why SEO drives clicks, why GEO drives AI citation visibility, and why businesses now need both.",
    url: "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "SEO vs GEO: The Core Difference",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo#article",
      "headline": "SEO vs GEO: The Core Difference",
      "description":
        "The core difference between SEO and GEO — why SEO drives clicks, why GEO drives AI citation visibility, and why businesses now need both.",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.tech/#person" },
      "publisher": {
        "@type": "Person",
        "@id": "https://dinodewet.tech/#person",
        "name": "Dino de Wet",
        "url": "https://dinodewet.tech",
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://dinodewet.tech/images/semantic-seo-services.png",
        "width": 1200,
        "height": 630,
      },
      "isPartOf": { "@id": "https://dinodewet.tech/blog#blog" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo",
      },
      "about": [
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "Search Engine Optimisation" },
        { "@type": "Thing", "name": "AI Search" },
      ],
      "keywords": "SEO vs GEO, Generative Engine Optimisation, AI Search visibility, search strategy",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 3200,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo#webpage",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo",
      "name": "SEO vs GEO: The Core Difference",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.tech/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.tech/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "SEO vs GEO: The Core Difference", "item": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/geo-vs-seo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the main difference between SEO and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO focuses on ranking pages in search results. GEO focuses on making content usable inside AI-generated answers.",
          },
        },
        {
          "@type": "Question",
          "name": "Does GEO replace SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. GEO builds on SEO. Strong retrieval and ranking still matter.",
          },
        },
        {
          "@type": "Question",
          "name": "Why is GEO becoming more important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because users increasingly see AI-generated summaries and answer layers before clicking through to websites.",
          },
        },
        {
          "@type": "Question",
          "name": "What does SEO still do better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO remains the core system for earning ranked visibility, impressions, and organic clicks.",
          },
        },
        {
          "@type": "Question",
          "name": "What does GEO add?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO adds citation visibility, passage influence, and answer-layer presence in generative search.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "what-seo-is", label: "What SEO Is" },
  { id: "what-geo-is", label: "What GEO Is" },
  { id: "core-difference", label: "The Core Difference" },
  { id: "how-seo-works", label: "How SEO Works" },
  { id: "how-geo-works", label: "How GEO Works" },
  { id: "seo-gets-clicks", label: "SEO Gets Clicks. GEO Builds Influence." },
  { id: "both-needed", label: "Why Businesses Need Both" },
  { id: "south-africa", label: "South African Opportunity" },
  { id: "final-answer", label: "Final Answer" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function SEOvsGEOPage() {
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
              <Link href="/blog/generative-engine-optimisation" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>SEO vs GEO</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> 12 min read
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> 23 April 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              SEO vs GEO: The Core Difference
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              SEO and GEO are connected, but they do not work in the same way. SEO relies on ranking signals. GEO relies on content quality, structure, and extractability. That is the core difference — and why modern businesses need both.
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

                <section id="what-seo-is" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What SEO Is
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      SEO is the process of improving a website so it can rank in search engines for relevant queries. The goal is straightforward: the page should rank as highly as possible so users can find it and click through. In simple terms, SEO wins visibility in the list of links.
                    </p>
                    <p>SEO focuses on:</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {["Crawlability and indexation", "Keyword relevance", "Internal linking", "Domain and page authority", "Topical coverage", "Page quality and search intent alignment"].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="what-geo-is" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What GEO Is
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation (GEO)
                      </Link>{" "}
                      is the process of improving content so it can be selected, cited, and reused in AI-generated search experiences. The goal is different from SEO. The page is not only trying to rank — it is trying to become part of the answer. In simple terms, GEO wins visibility inside the answer layer.
                    </p>
                    <p>GEO focuses on:</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {["Passage clarity and structure", "Factual density", "Semantic relevance", "Extractable answers", "Citation readiness", "Entity clarity", "Trust and usability inside AI summaries"].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="core-difference" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Core Difference Between SEO and GEO
                  </h2>
                  <div className="flex flex-col gap-4 mb-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>The clearest distinction is this:</p>
                    <p>
                      SEO determines whether your page can appear in search results. GEO influences whether your content can appear inside AI&apos;s synthesised answers. That difference changes how content should be written, structured, and connected across a site.
                    </p>
                  </div>
                  <div className="rounded-xl border p-6 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>SEO helps a search engine decide</p>
                      <p className="text-sm font-heading font-semibold text-white" style={{ lineHeight: 1.4 }}>Which page should appear first?</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}>GEO helps a generative system decide</p>
                      <p className="text-sm font-heading font-semibold text-white" style={{ lineHeight: 1.4 }}>Which content should be used in the answer?</p>
                    </div>
                  </div>
                </section>

                <section id="how-seo-works" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How SEO Works
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      SEO works through ranking signals. Search engines look at relevance to the query, page quality, internal and external authority, semantic depth, user usefulness, and technical accessibility. Those signals determine where a page appears in the SERP.
                    </p>
                    <p>
                      This is why SEO remains critical. Without visibility in retrieval and rankings, most pages never get a chance to compete at all. SEO still provides the foundation for modern search visibility. A page must be discoverable and rankable before it can do anything else.
                    </p>
                  </div>
                </section>

                <section id="how-geo-works" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How GEO Works
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      GEO works through retrieval usefulness. Generative systems still need to retrieve pages, but they then apply another layer of selection. They look for content that is directly useful, clearly structured, easy to extract, semantically aligned, and trustworthy enough to cite.
                    </p>
                    <p>
                      That means GEO depends less on positional ranking and more on answer usefulness. A passage can become highly visible in AI search because it is well structured and highly quotable, even if the page itself is not the strongest-looking result in a classic list of links. To understand{" "}
                      <Link href="/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        how AI search engines choose sources
                      </Link>
                      , the selection signals differ meaningfully from traditional ranking.
                    </p>
                    <p>
                      Understanding{" "}
                      <Link href="/blog/generative-engine-optimisation/what-makes-content-citation-ready" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        what makes content citation-ready
                      </Link>{" "}
                      is a core part of implementing GEO effectively.
                    </p>
                  </div>
                </section>

                <section id="seo-gets-clicks" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    SEO Gets Clicks. GEO Builds Influence.
                  </h2>
                  <div className="flex flex-col gap-4 mb-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      This is one of the most useful ways to understand the difference. SEO gets you clicks through ranked search results. GEO gives you influence by helping your content appear inside AI-generated answers. Both matter because search is no longer only a blue-link environment.
                    </p>
                    <p>
                      Users increasingly see the answer before they choose a link. A business that wins only rankings may still lose influence if AI systems use someone else&apos;s content to form the answer. That&apos;s why{" "}
                      <Link href="/blog/generative-engine-optimisation/google-ai-overviews-and-geo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Google AI Overviews
                      </Link>{" "}
                      change the equation for any business relying purely on traditional SEO.
                    </p>
                  </div>
                  <div className="rounded-xl border p-6 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                    {[
                      { label: "SEO is", values: ["Click visibility", "List placement", "Ranking-driven"] },
                      { label: "GEO is", values: ["Citation visibility", "Answer inclusion", "Influence-driven"] },
                    ].map((col) => (
                      <div key={col.label}>
                        <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{col.label}</p>
                        {col.values.map((v) => (
                          <div key={v} className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-1 rounded-full" style={{ background: "#3a3a3a" }} />
                            <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>{v}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>

                <section id="both-needed" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Why Businesses Need Both
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Businesses now need both because search has split into two layers. The first layer is traditional search visibility. The second layer is answer-layer visibility. If you only focus on SEO, you may rank but still lose influence in AI search. If you only focus on GEO, you may write answer-friendly content that never gets retrieved strongly enough to matter.
                    </p>
                    <p>
                      The best strategy is to build strong SEO foundations and strong GEO usability. That combination gives you reach and influence. SEO helps your pages rank today. GEO helps your content stay visible in AI-driven search tomorrow. Together they help a business rank in classic search, support passage extraction, improve citation visibility, strengthen topical authority, and build a more future-ready content system.
                    </p>
                    <p>
                      Explore{" "}
                      <Link href="/geo-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation services
                      </Link>
                      ,{" "}
                      <Link href="/ai-seo-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        AI SEO services
                      </Link>
                      , and{" "}
                      <Link href="/answer-engine-optimisation-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Answer Engine Optimisation services
                      </Link>{" "}
                      to build both layers.
                    </p>
                  </div>
                </section>

                <section id="south-africa" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What This Means for South African Businesses
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      For South African businesses, this shift creates an early opportunity. Many businesses still optimise only for traditional rankings. That means there is space for brands that start building stronger service pages, stronger topical clusters, clearer semantic structures, citation-ready content, and better answer blocks.
                    </p>
                    <p>
                      A business that combines SEO and GEO early can become more visible in both local search and AI-assisted discovery environments. That matters especially in consulting, law, healthcare, finance, B2B services, and specialist service industries where decision-making is research-led.
                    </p>
                  </div>
                </section>

                <section id="final-answer" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Final Answer: SEO vs GEO
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>SEO and GEO are not the same.</p>
                    <p>SEO relies on ranking signals to place your pages in search results. GEO relies on content quality, structure, and answer usability to determine whether your content can be included in AI-generated answers.</p>
                    <p>SEO wins clicks. GEO wins influence. Businesses that want durable visibility need both.</p>
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: "What is the main difference between SEO and GEO?", a: "SEO focuses on ranking pages in search results. GEO focuses on making content usable inside AI-generated answers." },
                      { q: "Does GEO replace SEO?", a: "No. GEO builds on SEO. Strong retrieval and ranking still matter. Both are required for full search visibility." },
                      { q: "Why is GEO becoming more important?", a: "Because users increasingly see AI-generated summaries and answer layers before clicking through to websites." },
                      { q: "What does SEO still do better?", a: "SEO remains the core system for earning ranked visibility, impressions, and organic clicks." },
                      { q: "What does GEO add?", a: "GEO adds citation visibility, passage influence, and answer-layer presence in generative search." },
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
                  { label: "What Is GEO? A Complete Guide", href: "/blog/generative-engine-optimisation", desc: "The full pillar guide to Generative Engine Optimisation." },
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "The signals AI systems use to select and cite content." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "Structural properties for AI extractability." },
                  { label: "How Google AI Overviews Change SEO and GEO", href: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", desc: "How AI Overviews work and how to optimise for them." },
                  { label: "Generative Engine Optimisation Services", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "Home", href: "/", desc: "dinodewet.tech — Semantic SEO, AI Architecture, and GEO services." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Build for Rankings and AI Visibility</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    If you want visibility across both traditional search and AI-driven search, you need more than rankings alone.
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Building a strategy that covers both SEO and GEO requires semantic architecture, passage design, and citation signal injection applied systematically. Professional implementation delivers faster, measurable results.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Strategy Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/geo-services-south-africa" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      View GEO Services
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
