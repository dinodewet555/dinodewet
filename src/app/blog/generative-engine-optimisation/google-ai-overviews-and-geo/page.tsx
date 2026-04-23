import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Google AI Overviews Change SEO and GEO | Dino de Wet",
  description:
    "Google AI Overviews appear above all search results for millions of queries. Learn how they work, what content they surface, how they affect organic click-through rates, and the specific changes required to appear within them.",
  keywords: [
    "Google AI Overviews",
    "AI Overviews SEO",
    "AI Overviews GEO",
    "AI Overviews South Africa",
    "Search Generative Experience",
    "AI search SEO 2026",
    "Google AI Overviews optimisation",
  ],
  alternates: {
    canonical: "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo",
  },
  openGraph: {
    title: "How Google AI Overviews Change SEO and GEO",
    description:
      "How Google AI Overviews work, what content they surface, how they affect organic traffic, and what to do to appear within them.",
    url: "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo",
    type: "article",
    images: [{ url: "/images/semantic-seo-services.png", width: 1200, height: 630, alt: "How Google AI Overviews Change SEO and GEO" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo#article",
      "headline": "How Google AI Overviews Change SEO and GEO",
      "description": "How Google AI Overviews work, what content they surface, how they affect organic traffic patterns, and the practical implementation changes required to appear within them.",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.tech/#person" },
      "publisher": { "@type": "Person", "@id": "https://dinodewet.tech/#person", "name": "Dino de Wet", "url": "https://dinodewet.tech" },
      "isPartOf": { "@id": "https://dinodewet.tech/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo" },
      "about": [
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "Search Engine Optimisation" },
      ],
      "keywords": "Google AI Overviews, AI Overviews SEO, SGE, AI search 2026, GEO Google",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 2700,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo#webpage",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo",
      "name": "How Google AI Overviews Change SEO and GEO",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.tech/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.tech/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "How Google AI Overviews Change SEO and GEO", "item": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/google-ai-overviews-and-geo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do AI Overviews reduce organic website traffic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI Overviews have a mixed traffic impact. For informational queries where AI Overviews appear, zero-click searches increase — users get their answer without clicking through. However, for commercial and transactional queries, AI Overviews often include direct links to relevant pages, and appearing within an AI Overview can increase click-through rates for those specific links. The net effect depends on query type: informational traffic may decline while commercial traffic remains stable or improves.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I opt out of Google AI Overviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website owners can use the robots meta tag with the 'nosnippet' directive to prevent their content from appearing in AI-generated overviews and featured snippets. However, this typically results in lower overall search visibility. For most businesses, the better strategy is to optimise for AI Overview inclusion rather than exclude content from being cited — brand presence in AI responses builds awareness even when no click occurs.",
          },
        },
        {
          "@type": "Question",
          "name": "Does ranking in position 1 guarantee appearance in AI Overviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Google AI Overviews use a different source selection mechanism than the traditional ranking algorithm. A page ranked in position 1 for a query may not appear in the AI Overview if its passages are not extractable. Conversely, a page ranked in position 5 with well-structured, citation-ready content may be cited consistently in AI Overviews. AI Overview appearance requires passage-level optimisation, not just ranking optimisation.",
          },
        },
        {
          "@type": "Question",
          "name": "Are Google AI Overviews available in South Africa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google AI Overviews have been progressively rolling out globally since their full US launch in May 2024. South Africa is part of the global rollout, with AI Overviews appearing for an increasing percentage of queries as the rollout continues. South African businesses should begin GEO implementation now to establish citation presence before AI Overviews become a dominant feature of South African search results.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "what-are-ai-overviews", label: "What Are Google AI Overviews" },
  { id: "how-they-work", label: "How AI Overviews Work Technically" },
  { id: "traffic-impact", label: "Impact on Organic Traffic" },
  { id: "source-selection", label: "How Google Selects Sources for AI Overviews" },
  { id: "seo-changes", label: "What Changes for Traditional SEO" },
  { id: "geo-changes", label: "What GEO Requires for AI Overview Presence" },
  { id: "south-africa", label: "AI Overviews in South Africa" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "Do AI Overviews reduce organic website traffic?",
    answer: "AI Overviews have a mixed traffic impact. For informational queries where AI Overviews appear, zero-click searches increase — users get their answer without clicking through. However, for commercial and transactional queries, AI Overviews often include direct links to relevant pages, and appearing within an AI Overview can increase click-through rates for those specific links. The net effect depends on query type: informational traffic may decline while commercial traffic remains stable or improves.",
  },
  {
    question: "Can I opt out of Google AI Overviews?",
    answer: "Website owners can use the robots meta tag with the 'nosnippet' directive to prevent their content from appearing in AI-generated overviews and featured snippets. However, this typically results in lower overall search visibility. For most businesses, the better strategy is to optimise for AI Overview inclusion rather than exclude content from being cited — brand presence in AI responses builds awareness even when no click occurs.",
  },
  {
    question: "Does ranking in position 1 guarantee appearance in AI Overviews?",
    answer: "No. Google AI Overviews use a different source selection mechanism than the traditional ranking algorithm. A page ranked in position 1 for a query may not appear in the AI Overview if its passages are not extractable. Conversely, a page ranked in position 5 with well-structured, citation-ready content may be cited consistently in AI Overviews. AI Overview appearance requires passage-level optimisation, not just ranking optimisation.",
  },
  {
    question: "Are Google AI Overviews available in South Africa?",
    answer: "Google AI Overviews have been progressively rolling out globally since their full US launch in May 2024. South Africa is part of the global rollout, with AI Overviews appearing for an increasing percentage of queries as the rollout continues. South African businesses should begin GEO implementation now to establish citation presence before AI Overviews become a dominant feature of South African search results.",
  },
];

export default function GoogleAIOverviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link href="/blog" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Blog</Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <Link href="/blog/generative-engine-optimisation" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Generative Engine Optimisation</Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Google AI Overviews</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Clock size={12} /> 10 min read</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Calendar size={12} /> 23 April 2026</span>
            </div>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              How Google AI Overviews Change SEO and GEO
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Google AI Overviews sit above all organic results for millions of queries. They change the economics of search traffic, the criteria for content visibility, and the relationship between ranking and brand discovery. This guide explains how they work and what to do about them.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

                <section id="what-are-ai-overviews" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Are Google AI Overviews
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google AI Overviews are AI-generated response panels that appear at the top of Google Search results pages, above all organic ranked links, for queries where Google determines a synthesised answer adds more value than a list of links. They were launched globally in May 2024 under the name &ldquo;AI Overviews&rdquo;, replacing the earlier Search Generative Experience (SGE) experimental format.
                    </p>
                    <p>
                      AI Overviews are generated using Google&apos;s Gemini model, drawing from Google&apos;s indexed web content, Knowledge Graph, and quality evaluation systems. A typical AI Overview presents a 2–5 paragraph synthesised answer with attribution links to 3–8 sources displayed on the side or beneath the response.
                    </p>
                    <p>
                      By April 2026, AI Overviews appear for approximately 12–15% of all Google searches in fully rolled-out markets, with the highest frequency on informational, definition, comparison, and how-to queries. Commercial and transactional queries show lower AI Overview frequency, as Google continues to be cautious about replacing commercial link results with AI-generated answers in e-commerce and service verticals.
                    </p>
                  </div>
                </section>

                <section id="how-they-work" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How AI Overviews Work Technically
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google AI Overviews operate through a Retrieval-Augmented Generation (RAG) pipeline. When a query triggers AI Overview generation, the Gemini model first retrieves relevant passages from Google&apos;s indexed content corpus, then synthesises those passages into a coherent response, then selects which source passages to attribute in the visible citations.
                    </p>
                    <p>
                      The retrieval step is informed by Google&apos;s existing quality systems — E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), Helpful Content evaluation, and spam detection. Sources that have already been assessed as high-quality for traditional search are more likely to be included in AI Overview source pools, but source selection within the pool is then determined by passage-level relevance and extractability.
                    </p>
                    <p>
                      Google&apos;s Knowledge Graph plays a direct role in AI Overview generation. For entity-rich queries, the Gemini model cross-references retrieved passages against Knowledge Graph facts to verify factual accuracy before including claims in the generated response. This means content that contradicts established Knowledge Graph facts is unlikely to be cited, even if it ranks well in traditional search.
                    </p>
                    <p>
                      For deeper analysis of how AI retrieval mechanics work across all platforms, read{" "}
                      <Link href="/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        How AI Search Engines Choose Sources
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="traffic-impact" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Impact on Organic Traffic
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      AI Overviews change the click economy of search in a way that is query-type dependent. For informational and definitional queries — &ldquo;what is GEO&rdquo;, &ldquo;how does passage ranking work&rdquo;, &ldquo;difference between GEO and SEO&rdquo; — AI Overviews have increased zero-click searches. Users receive an adequate answer from the AI Overview without clicking through to any source.
                    </p>
                    <p>
                      For commercial and transactional queries — &ldquo;GEO services South Africa&rdquo;, &ldquo;best AI SEO consultant Cape Town&rdquo; — AI Overviews appear less frequently, and when they do, they typically include direct links to relevant commercial pages. Appearing within these commercial AI Overviews can increase click volume for the cited pages, as the AI endorsement adds credibility.
                    </p>
                    <p>
                      The net strategic implication: informational content should be optimised for AI citation (brand awareness, zero-click presence) while commercial pages should continue to pursue traditional ranking alongside GEO optimisation. A site that appears in AI Overviews for informational queries and ranks highly for commercial queries achieves full-funnel search presence across both the AI and traditional search layers.
                    </p>
                  </div>
                </section>

                <section id="source-selection" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How Google Selects Sources for AI Overviews
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google AI Overview source selection is a two-stage process. The first stage applies traditional ranking quality signals to identify a candidate pool of high-quality, relevant sources. The second stage applies passage-level retrieval signals to identify which specific passages within those sources best address the query intent.
                    </p>
                    <p>
                      This means a page must clear two bars to appear in AI Overviews: it must first be assessed as a high-quality, relevant source by Google&apos;s ranking systems (traditional SEO), and it must contain passage-level content that is extractable and specifically relevant to the query (GEO). Ranking without passage quality fails the second bar. Passage quality without ranking fails the first.
                    </p>
                    <p>
                      The most consistently cited passage types in Google AI Overviews are: definition passages (opening sentences of sections that define a concept), comparison passages (clear comparisons between two entities or approaches), FAQ answers (complete standalone responses to specific questions), and data-backed claims (specific statistics with attribution).
                    </p>
                  </div>
                </section>

                <section id="seo-changes" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Changes for Traditional SEO
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      The core mechanics of traditional SEO — technical performance, backlink authority, on-page relevance, E-E-A-T signals, topical authority — remain the foundation for AI Overview eligibility. Nothing changes about these fundamentals.
                    </p>
                    <p>
                      What changes is the value distribution of search results. Position 1–3 in traditional search results still matters significantly for commercial queries where AI Overviews are rare. But for informational queries where AI Overviews are common, position 5 with AI Overview citation may deliver more brand impressions than position 1 without AI Overview citation, because the AI Overview sits above all ranked results and captures attention before users scan the link list.
                    </p>
                    <p>
                      SEO practitioners need to add an AI Overview monitoring layer to their performance tracking — measuring impressions through Search Console data for queries that trigger AI Overviews, tracking citation frequency, and distinguishing between traffic from ranked links and traffic from AI Overview attribution links.
                    </p>
                  </div>
                </section>

                <section id="geo-changes" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What GEO Requires for AI Overview Presence
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Appearing in Google AI Overviews specifically requires the same structural properties that drive AI citation across all platforms — with additional emphasis on Google-specific quality signals.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Passage-Level Extractability", detail: "Every section must open with a self-contained definition. Google&apos;s Gemini model extracts the first sentence of passages most frequently." },
                      { title: "E-E-A-T Alignment", detail: "Google&apos;s AI Overview source selection is heavily influenced by E-E-A-T signals. Named authorship, credentials, and demonstrated first-hand experience all increase selection probability." },
                      { title: "Factual Accuracy vs Knowledge Graph", detail: "Content that contradicts established Knowledge Graph facts will not be cited, even if it ranks. Factual accuracy is non-negotiable for AI Overview inclusion." },
                      { title: "Helpful Content Compliance", detail: "Pages that have been assessed negatively by Google&apos;s Helpful Content system are unlikely to appear in AI Overviews regardless of passage quality. Unhelpful content is excluded at the first selection stage." },
                      { title: "FAQPage Schema", detail: "FAQ sections with FAQPage schema are cited in AI Overviews at high frequency. Every commercial page and pillar blog post should include them." },
                      { title: "Fresh dateModified Signals", detail: "Keeping dateModified current through schema signals that content is actively maintained, which influences freshness scoring in the AI Overview source selection process." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    For the specific content properties that enable extraction, read{" "}
                    <Link href="/blog/generative-engine-optimisation/what-makes-content-citation-ready" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                      What Makes Content Citation-Ready for AI Search?
                    </Link>
                  </p>
                </section>

                <section id="south-africa" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    AI Overviews in South Africa
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google AI Overviews are rolling out progressively to South African search users as part of Google&apos;s global expansion of the feature. South African users are seeing AI Overviews for an increasing percentage of queries, with the rollout accelerating through 2025 and 2026.
                    </p>
                    <p>
                      The early-mover opportunity for South African businesses is significant. Because most local brands are not yet aware of or implementing GEO, the citation landscape for South African-specific queries — particularly in professional services, financial services, legal, health, e-commerce, and B2B verticals — is largely unclaimed.
                    </p>
                    <p>
                      South African businesses that implement GEO now will establish AI Overview citation presence in their categories before competitors respond. This is a time-limited first-mover advantage. For a full guide to South African GEO strategy, read{" "}
                      <Link href="/blog/generative-engine-optimisation/geo-for-south-african-businesses" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation for South African Businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-7" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Key Takeaways</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Google AI Overviews appear at the top of search results for 12–15% of queries in fully rolled-out markets, above all organic links, generating zero-click brand impressions for cited sources.",
                      "AI Overviews use a two-stage source selection: first, traditional ranking quality signals identify a candidate pool; second, passage-level extractability determines which specific passages appear in the response.",
                      "Ranking in position 1 does not guarantee AI Overview citation. Passage-level GEO optimisation is required separately from traditional ranking optimisation.",
                      "AI Overviews affect traffic differently by query type: informational queries see more zero-click behaviour; commercial queries maintain click value and can benefit from AI endorsement of cited pages.",
                      "Google's E-E-A-T, Helpful Content, and Knowledge Graph consistency requirements mean AI Overview eligibility is more demanding than featured snippet eligibility.",
                      "South African businesses have an early-mover window to establish AI Overview citation presence before local competitors implement GEO.",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                          <span className="text-xs font-heading font-bold text-white">{i + 1}</span>
                        </div>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none" style={{ userSelect: "none" }}>
                          <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}>{faq.question}</h3>
                          <ChevronDown size={16} color="#a1a1a1" className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{faq.answer}</p>
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

      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Continue Reading</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "What Is GEO? A Complete Guide", href: "/blog/generative-engine-optimisation", desc: "The full pillar guide to Generative Engine Optimisation." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "The seven structural properties for AI extractability." },
                  { label: "GEO for South African Businesses", href: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", desc: "How SA brands can implement GEO and capture early-mover advantage." },
                  { label: "GEO Services South Africa", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "AI SEO Services", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for modern search engines." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Act Now</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Capture your AI Overview presence before competitors do
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    The window for establishing first-mover AI Overview citation presence in South African verticals is open now. Professional GEO implementation delivers faster, measurable results.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Strategy Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/geo-services-south-africa" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      GEO Services
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
