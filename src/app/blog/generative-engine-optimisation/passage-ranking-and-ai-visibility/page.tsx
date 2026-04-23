import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Passage Ranking Affects AI Search Visibility | Dino de Wet",
  description:
    "Google's Passage Ranking indexes individual paragraphs for search — and the same mechanism powers AI retrieval. Learn how passage-level indexing works, why it matters for GEO, and how to structure content to benefit from it.",
  keywords: [
    "Passage Ranking SEO",
    "Google Passage Ranking",
    "passage ranking AI search",
    "passage ranking GEO",
    "AI passage retrieval",
    "passage indexing",
    "GEO content structure",
    "passage ranking South Africa",
  ],
  alternates: {
    canonical: "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility",
  },
  openGraph: {
    title: "How Passage Ranking Affects AI Search Visibility",
    description:
      "Passage Ranking extracts individual passages from pages to answer specific queries. It is the bridge between traditional search and AI retrieval — and understanding it is essential to GEO content structure.",
    url: "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility",
    type: "article",
    images: [{ url: "/images/semantic-seo-services.png", width: 1200, height: 630, alt: "How Passage Ranking Affects AI Search Visibility" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility#article",
      "headline": "How Passage Ranking Affects AI Search Visibility",
      "description": "Google Passage Ranking indexes individual paragraphs independently of overall page relevance, enabling specific passages to rank for specific queries. The same passage-level evaluation mechanism drives AI search retrieval.",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.tech/#person" },
      "publisher": { "@type": "Person", "@id": "https://dinodewet.tech/#person", "name": "Dino de Wet", "url": "https://dinodewet.tech" },
      "isPartOf": { "@id": "https://dinodewet.tech/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility" },
      "about": [
        { "@type": "Thing", "name": "Google Passage Ranking" },
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "AI Search Retrieval" },
      ],
      "keywords": "Passage Ranking, Google Passage Ranking, AI passage retrieval, GEO content structure, passage indexing SEO",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 2600,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility#webpage",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility",
      "name": "How Passage Ranking Affects AI Search Visibility",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.tech/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.tech/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "How Passage Ranking Affects AI Search Visibility", "item": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Google Passage Ranking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Passage Ranking is a search system introduced in 2021 that indexes individual passages within web pages independently of the page's overall topic relevance. It enables specific paragraphs to rank for highly specific queries even when the page as a whole is not the most relevant document for that query. Passage Ranking affects approximately 7% of search queries according to Google's initial announcement.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Passage Ranking differ from featured snippets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Featured snippets display an extracted passage prominently above search results with a direct link to the source. Passage Ranking is a ranking signal that can improve a page's position in standard search results based on the relevance of a specific passage — the passage does not need to appear as a featured snippet. Passage Ranking affects page ranking; featured snippets affect how a page's content is displayed once it ranks.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Passage Ranking the same as AI passage retrieval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passage Ranking and AI passage retrieval are related but distinct mechanisms. Passage Ranking is Google's traditional search ranking signal that considers individual passages when assigning search positions. AI passage retrieval is the mechanism AI search systems use to extract specific passages for inclusion in generated responses. Both evaluate passages at the individual paragraph level, and both benefit from the same content structure: self-contained passages with specific factual content and clear Subject-Predicate-Object sentences.",
          },
        },
        {
          "@type": "Question",
          "name": "Do short blog posts benefit from Passage Ranking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Short blog posts (under 500 words) have limited passage diversity — fewer passages means fewer opportunities for passage-level relevance matching. Passage Ranking benefits longer, well-structured content that covers a topic with multiple distinct, self-contained sections. A 2,000-word article with 8 clearly demarcated sections provides 8 extractable passages that can independently rank and be cited by AI systems.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "what-is-passage-ranking", label: "What Is Google Passage Ranking" },
  { id: "how-it-works", label: "How Passage Ranking Works" },
  { id: "passage-ranking-ai-connection", label: "The Connection to AI Retrieval" },
  { id: "dual-benefit-structure", label: "Content Structure That Serves Both" },
  { id: "passage-quality-signals", label: "Passage Quality Signals" },
  { id: "long-tail-advantage", label: "The Long-Tail Query Advantage" },
  { id: "audit-passages", label: "How to Audit Your Passages" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What is Google Passage Ranking?",
    answer: "Google Passage Ranking is a search system introduced in 2021 that indexes individual passages within web pages independently of the page's overall topic relevance. It enables specific paragraphs to rank for highly specific queries even when the page as a whole is not the most relevant document for that query. Passage Ranking affects approximately 7% of search queries according to Google's initial announcement.",
  },
  {
    question: "How does Passage Ranking differ from featured snippets?",
    answer: "Featured snippets display an extracted passage prominently above search results with a direct link to the source. Passage Ranking is a ranking signal that can improve a page's position in standard search results based on the relevance of a specific passage — the passage does not need to appear as a featured snippet. Passage Ranking affects page ranking; featured snippets affect how a page's content is displayed once it ranks.",
  },
  {
    question: "Is Passage Ranking the same as AI passage retrieval?",
    answer: "Passage Ranking and AI passage retrieval are related but distinct mechanisms. Passage Ranking is Google's traditional search ranking signal that considers individual passages when assigning search positions. AI passage retrieval is the mechanism AI search systems use to extract specific passages for inclusion in generated responses. Both evaluate passages at the individual paragraph level, and both benefit from the same content structure: self-contained passages with specific factual content and clear Subject-Predicate-Object sentences.",
  },
  {
    question: "Do short blog posts benefit from Passage Ranking?",
    answer: "Short blog posts (under 500 words) have limited passage diversity — fewer passages means fewer opportunities for passage-level relevance matching. Passage Ranking benefits longer, well-structured content that covers a topic with multiple distinct, self-contained sections. A 2,000-word article with 8 clearly demarcated sections provides 8 extractable passages that can independently rank and be cited by AI systems.",
  },
];

export default function PassageRankingPage() {
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
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Passage Ranking</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Clock size={12} /> 9 min read</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Calendar size={12} /> 23 April 2026</span>
            </div>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              How Passage Ranking Affects AI Search Visibility
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Google&apos;s Passage Ranking system indexes individual paragraphs independently of overall page relevance. It is the bridge between traditional keyword search and AI retrieval — and the same content structure that benefits passage ranking also maximises AI citation frequency.
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

                <section id="what-is-passage-ranking" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Is Google Passage Ranking
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google Passage Ranking is a search indexing and ranking system introduced by Google in February 2021 that enables individual passages within a web page to be indexed and evaluated independently of the page&apos;s overall topical relevance. Before Passage Ranking, Google evaluated an entire page&apos;s content to determine its relevance to a query. With Passage Ranking, Google can identify a specific paragraph on a page that directly addresses a very specific query, even if the rest of the page covers broader or different topics.
                    </p>
                    <p>
                      Google stated at launch that Passage Ranking affects approximately 7% of search queries globally — a significant volume representing hundreds of millions of queries per day. The system is particularly impactful for long-tail, specific, and niche queries where a comprehensive page might address the exact question in one paragraph while the overall page covers a broader subject.
                    </p>
                    <p>
                      The practical implication: a well-structured 3,000-word article covering a complex topic does not need to be entirely about one narrow query to rank for it. If one passage in the article directly and specifically addresses the narrow query, Passage Ranking can surface that page for that query based on the relevance of the passage alone.
                    </p>
                    <p>
                      For the broader GEO framework within which passage ranking operates, read the{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        complete GEO guide
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="how-it-works" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How Passage Ranking Works
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google&apos;s Passage Ranking system uses natural language processing to segment web page content into discrete passages during indexing. Each passage is evaluated independently for semantic relevance, content quality, and query-matching potential. This segmentation is not based purely on paragraph breaks — Google&apos;s NLP systems assess semantic boundaries within content.
                    </p>
                    <p>
                      When a query is submitted, Google evaluates both the overall page relevance and the passage-level relevance of indexed passages. For highly specific queries — particularly question-format queries, definition queries, and technical how-to queries — passage relevance can be a dominant ranking signal, potentially surfacing a page that would not otherwise rank based on page-level relevance alone.
                    </p>
                    <p>
                      Passage Ranking does not extract passages for display as featured snippets in every case — it is primarily a ranking signal. However, passages that rank a page through Passage Ranking are also strong featured snippet candidates, and they are evaluated by the same systems that determine AI Overview source selection.
                    </p>
                    <p>
                      Importantly, Passage Ranking does not override core quality signals. Spam pages, thin content, and pages assessed poorly by Helpful Content evaluation do not benefit from Passage Ranking regardless of whether they contain one high-quality passage. The system rewards quality comprehensiveness, not isolated passage quality within otherwise weak content.
                    </p>
                  </div>
                </section>

                <section id="passage-ranking-ai-connection" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Connection to AI Retrieval
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Passage Ranking is the structural bridge between traditional search and AI retrieval. The same passage-level indexing that enables a specific paragraph to influence page ranking in traditional Google Search is the mechanism that enables AI retrieval systems to extract specific passages for inclusion in AI-generated responses.
                    </p>
                    <p>
                      Both systems operate on the same fundamental principle: evaluating individual passages independently of the overall document. Both systems reward the same content properties: semantic clarity, self-containment, factual specificity, and direct query relevance. Content optimised for Passage Ranking is simultaneously optimised for AI retrieval — there is no tension between the two objectives.
                    </p>
                    <p>
                      This is why GEO and traditional SEO are not separate disciplines that require separate content strategies. Passage-level content architecture — clear sections, self-contained paragraphs, definition-first headings — is the optimal structure for both traditional Passage Ranking and AI Overview citation. A single content investment serves both channels simultaneously.
                    </p>
                    <p>
                      For how AI systems specifically evaluate and select passages for citation, read{" "}
                      <Link href="/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        How AI Search Engines Choose Sources
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="dual-benefit-structure" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Content Structure That Serves Both Passage Ranking and AI Retrieval
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      The content structure that maximises both Passage Ranking benefit and AI retrieval frequency is defined by five architectural principles.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        title: "Clear Semantic Section Boundaries",
                        detail: "Each H2 and H3 section should address a single, distinct sub-topic. Mixing multiple topics within a single section reduces both Passage Ranking effectiveness (the system struggles to segment mixed-topic passages) and AI retrieval precision (the passage cannot cleanly answer a single query).",
                      },
                      {
                        title: "Definition-First Section Openings",
                        detail: "The first sentence of every section is the primary extraction candidate for both Passage Ranking and AI retrieval. Opening each section with a complete, standalone definition of the section's subject maximises extraction accuracy across both channels simultaneously.",
                      },
                      {
                        title: "Short, Self-Contained Paragraphs",
                        detail: "Paragraphs of 3–5 sentences that each address one complete idea are indexed as cleaner passages than long, multi-idea paragraphs. Short paragraphs produce more discrete, independently retrievable passages per page — increasing the number of queries a single page can rank for and be cited in.",
                      },
                      {
                        title: "Consistent Heading Hierarchy",
                        detail: "H1 → H2 → H3 hierarchy without level skipping provides structural signals that help both Google's passage segmentation algorithm and AI retrieval systems identify the scope and relationship of each section. Inconsistent heading usage confuses semantic boundary detection.",
                      },
                      {
                        title: "Named Entity Density Per Passage",
                        detail: "Each passage should contain at least one named entity that is the specific subject of the passage. Generic passages without named entity subjects are harder to match to specific queries for both Passage Ranking and AI retrieval.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="passage-quality-signals" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Passage Quality Signals
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Google evaluates passage quality through the same systems that evaluate overall content quality — but applied at the passage level. A high-quality passage demonstrates the following properties.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      { title: "Factual completeness", detail: "The passage delivers a complete fact, definition, or answer within its boundaries. Incomplete facts that require additional context to be meaningful score lower." },
                      { title: "Specificity over generality", detail: "Passages with specific named entities, figures, and attributable claims score higher than passages with generalised language. 'Most businesses benefit' is weaker than 'South African SMEs with fewer than 50 employees benefit from...'." },
                      { title: "No spam signals", detail: "Passages that contain keyword stuffing, excessive repetition, or manipulative anchor text are demoted regardless of factual content. Clean, natural language is required." },
                      { title: "Accurate entity relationships", detail: "Passages that correctly describe entity relationships — consistent with Google's Knowledge Graph facts — are preferred over passages that contain factual errors or inaccurate entity associations." },
                      { title: "Reader utility", detail: "Passages are evaluated for user utility: does this passage genuinely help someone who asked the target query? Content that answers adjacent questions or padded content that does not directly address the query intent scores lower." },
                      { title: "Semantic coherence", detail: "Each sentence within a passage should relate directly to the passage's central subject. Mixed-topic passages — where sentences address different subjects without clear linking — are harder to retrieve accurately." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    For the full set of citation-ready content properties, read{" "}
                    <Link href="/blog/generative-engine-optimisation/what-makes-content-citation-ready" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                      What Makes Content Citation-Ready for AI Search?
                    </Link>
                  </p>
                </section>

                <section id="long-tail-advantage" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Long-Tail Query Advantage
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Passage Ranking provides the greatest advantage for long-tail and specific queries — the queries that are hardest to target through traditional page-level SEO because building a dedicated page for each specific question is neither practical nor efficient.
                    </p>
                    <p>
                      A single well-structured pillar page covering GEO comprehensively — like the{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        GEO pillar guide
                      </Link>{" "}
                      — can contain 20+ extractable passages that each independently rank and are cited for different specific queries. Without Passage Ranking, the page would rank primarily for broad head terms. With Passage Ranking, it can rank and be cited for dozens of specific long-tail queries through individual passage relevance.
                    </p>
                    <p>
                      This is the practical case for comprehensive, passage-rich pillar content over collections of thin pages targeting individual keywords. One well-structured 4,000-word page with 20 extractable passages outperforms 20 thin 200-word pages in both Passage Ranking and AI retrieval performance — because the single comprehensive page also signals topical authority to Google&apos;s overall quality systems, which the thin pages individually do not.
                    </p>
                    <p>
                      The long-tail advantage is particularly significant in South Africa, where{" "}
                      <Link href="/blog/generative-engine-optimisation/geo-for-south-african-businesses" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        South African-specific long-tail queries
                      </Link>{" "}
                      are underserved by existing content and the GEO citation landscape is largely unclaimed.
                    </p>
                  </div>
                </section>

                <section id="audit-passages" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How to Audit Your Passages
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      A passage audit evaluates existing content against the structural and quality properties required for Passage Ranking and AI retrieval benefit.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      "For each H2 section: does the opening sentence deliver a complete, standalone definition of the section's subject?",
                      "Are all paragraphs 3–5 sentences maximum, each addressing a single distinct idea?",
                      "Does each paragraph contain at least one named entity as its explicit subject?",
                      "Are there any paragraphs that begin with 'This means...', 'As noted above...', or pronouns referring to previously-introduced subjects? These are not extractable and need rewriting.",
                      "Does the page have an FAQ section with questions that match long-tail query patterns your audience uses?",
                      "Are H2 headings written as complete descriptive phrases rather than single-word labels? ('How Passage Ranking Works' vs 'Mechanism')",
                      "Is the heading hierarchy consistent: H1 → H2 → H3 without skipped levels?",
                      "Does each section address exactly one sub-topic, or do sections mix multiple related ideas without clear sub-section separation?",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-xl border p-4" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-4 h-4 rounded border flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-7" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Key Takeaways</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Google Passage Ranking indexes individual passages independently of overall page relevance, enabling specific paragraphs to influence search rankings for highly specific queries — affecting approximately 7% of all searches.",
                      "Passage Ranking is the bridge between traditional search and AI retrieval. Both systems evaluate passages at the individual paragraph level, and both benefit from the same content structure.",
                      "Content optimised for Passage Ranking is simultaneously optimised for AI retrieval. There is no tension between the two — a single passage-level content architecture serves both channels.",
                      "The five structural principles for dual Passage Ranking and AI retrieval benefit are: clear semantic section boundaries, definition-first openings, short self-contained paragraphs, consistent heading hierarchy, and named entity density per passage.",
                      "Passage Ranking provides the greatest advantage for long-tail and specific queries — enabling comprehensive pillar pages to rank and be cited for dozens of specific sub-queries through individual passage relevance.",
                      "A passage audit — evaluating each paragraph for self-containment, entity presence, opening sentence quality, and heading precision — is the fastest way to improve both Passage Ranking performance and AI citation frequency simultaneously.",
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
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "The retrieval signals that determine which sources AI systems select." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "The seven structural properties for AI extractability." },
                  { label: "GEO vs SEO: What Is the Difference?", href: "/blog/generative-engine-optimisation/geo-vs-seo", desc: "How GEO and SEO differ in goals, signals, and success metrics." },
                  { label: "GEO Services South Africa", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "AI SEO Services South Africa", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for South African brands." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Apply This</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Need your content structured for passage ranking and AI retrieval?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    A professional passage audit and restructure optimises your existing content for both traditional Passage Ranking and AI citation simultaneously — without starting from scratch.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Passage Audit <ArrowRight size={14} />
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
