import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Search Engines Choose Sources | Dino de Wet",
  description:
    "AI search engines like ChatGPT, Perplexity, and Google AI Overviews use specific signals to select which sources to cite. Learn what those signals are and how to optimise your content to become a preferred AI citation source.",
  keywords: [
    "How AI search engines choose sources",
    "AI search citation signals",
    "GEO source selection",
    "AI search source ranking",
    "ChatGPT sources",
    "Perplexity sources",
    "Google AI Overview sources",
    "GEO South Africa",
  ],
  alternates: {
    canonical: "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources",
  },
  openGraph: {
    title: "How AI Search Engines Choose Sources",
    description:
      "The signals AI systems use to select content for citation — and how to structure your content to become a preferred source across Google, ChatGPT, and Perplexity.",
    url: "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "How AI Search Engines Choose Sources",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources#article",
      "headline": "How AI Search Engines Choose Sources",
      "description":
        "The specific signals AI-powered search systems use to select citation sources — and the content strategies that increase the probability of your brand being selected.",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.tech/#person" },
      "publisher": { "@type": "Person", "@id": "https://dinodewet.tech/#person", "name": "Dino de Wet", "url": "https://dinodewet.tech" },
      "isPartOf": { "@id": "https://dinodewet.tech/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" },
      "about": [
        { "@type": "Thing", "name": "AI Search Engines" },
        { "@type": "Thing", "name": "Retrieval-Augmented Generation" },
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
      ],
      "keywords": "AI search sources, GEO citation signals, RAG retrieval, AI source selection, Perplexity ChatGPT sources",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 2700,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources#webpage",
      "url": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources",
      "name": "How AI Search Engines Choose Sources",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.tech/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.tech/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "How AI Search Engines Choose Sources", "item": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.tech/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do AI search engines use the same sources as Google's ranked results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Not necessarily. AI search systems and traditional ranking systems use different source selection criteria. A page ranked in position 1 for a query may not be cited in an AI Overview if its passages are not extractable, while a page ranked in position 8 with well-structured, self-contained passages may be cited frequently. AI source selection is passage-level, not page-level.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes a source 'trustworthy' to an AI system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AI systems evaluate trustworthiness through multiple signals: domain-level authority (established website with consistent topical focus), content-level accuracy (factual claims that can be cross-referenced against knowledge bases), author expertise signals (named authors with professional credentials), structured data that identifies content type and authorship, and consistency between content claims and Knowledge Graph facts.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a small website be cited by AI search engines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. AI retrieval is more democratic than traditional link-based ranking. A small website with highly specific, factually accurate, well-structured content on a narrow topic can achieve consistent AI citation frequency ahead of large, general websites that cover the same topic superficially. Depth and specificity within a defined domain matter more than domain size.",
          },
        },
        {
          "@type": "Question",
          "name": "Does being cited in AI search drive traffic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AI citations drive two types of value: direct traffic when users click attribution links beneath AI-generated answers, and zero-click brand awareness when users see your brand name in the AI response without clicking. Zero-click brand awareness builds trust and future search intent — users who see your brand consistently in AI responses are more likely to search for you directly or seek you out when ready to purchase.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "rag-explained", label: "How RAG-Based Retrieval Works" },
  { id: "passage-selection", label: "Passage-Level Source Selection" },
  { id: "source-signals", label: "The Six Core Source Selection Signals" },
  { id: "platform-differences", label: "Differences Between AI Platforms" },
  { id: "content-strategy", label: "Content Strategy for AI Source Selection" },
  { id: "common-mistakes", label: "Common Mistakes That Prevent Citation" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "Do AI search engines use the same sources as Google's ranked results?",
    answer:
      "Not necessarily. AI search systems and traditional ranking systems use different source selection criteria. A page ranked in position 1 for a query may not be cited in an AI Overview if its passages are not extractable, while a page ranked in position 8 with well-structured, self-contained passages may be cited frequently. AI source selection is passage-level, not page-level.",
  },
  {
    question: "What makes a source 'trustworthy' to an AI system?",
    answer:
      "AI systems evaluate trustworthiness through multiple signals: domain-level authority (established website with consistent topical focus), content-level accuracy (factual claims that can be cross-referenced against knowledge bases), author expertise signals (named authors with professional credentials), structured data that identifies content type and authorship, and consistency between content claims and Knowledge Graph facts.",
  },
  {
    question: "Can a small website be cited by AI search engines?",
    answer:
      "Yes. AI retrieval is more democratic than traditional link-based ranking. A small website with highly specific, factually accurate, well-structured content on a narrow topic can achieve consistent AI citation frequency ahead of large, general websites that cover the same topic superficially. Depth and specificity within a defined domain matter more than domain size.",
  },
  {
    question: "Does being cited in AI search drive traffic?",
    answer:
      "AI citations drive two types of value: direct traffic when users click attribution links beneath AI-generated answers, and zero-click brand awareness when users see your brand name in the AI response without clicking. Zero-click brand awareness builds trust and future search intent — users who see your brand consistently in AI responses are more likely to search for you directly or seek you out when ready to purchase.",
  },
];

export default function HowAIChoosesSourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>How AI Chooses Sources</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Clock size={12} /> 10 min read</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Calendar size={12} /> 23 April 2026</span>
            </div>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              How AI Search Engines Choose Sources
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              AI-powered search systems — including Google AI Overviews, ChatGPT search, and Perplexity — do not select sources randomly. They apply specific retrieval models that score passages across multiple dimensions. Understanding these signals is the foundation of effective Generative Engine Optimisation.
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

                <section id="rag-explained" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    How RAG-Based Retrieval Works
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Modern AI search systems use an architecture called Retrieval-Augmented Generation (RAG). When a user submits a query, the system performs a two-stage process: first, it retrieves relevant passages from an indexed content corpus; second, it uses a language model to synthesise those passages into a coherent response.
                    </p>
                    <p>
                      The retrieval stage is where source selection occurs. The system embeds the query as a vector — a mathematical representation of its meaning — and compares that vector against embeddings of indexed passages to identify the most semantically similar content. This semantic similarity search is more sophisticated than keyword matching: two passages can be retrieved as relevant even if they share no keywords with the query, as long as their semantic content addresses the same intent.
                    </p>
                    <p>
                      After initial semantic retrieval, a re-ranking stage applies additional quality signals to filter and prioritise the retrieved passages. It is at this re-ranking stage that signals like factual specificity, source credibility, passage clarity, and structural quality determine which passages are ultimately included in the generated response.
                    </p>
                    <p>
                      For the full GEO context, return to the{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        complete GEO guide
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="passage-selection" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Passage-Level Source Selection
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      The most important concept in understanding AI source selection is that AI systems retrieve passages, not pages. A single page on your website might contain 20 passages. The AI system evaluates each passage independently and selects the passage most relevant to the query — regardless of what the rest of the page says.
                    </p>
                    <p>
                      This has two significant implications. First, a page with one excellent passage and nineteen weak ones can still earn AI citations for the topic addressed by that excellent passage. Second, a page that is topically comprehensive but lacks any self-contained, extractable passages may rank highly in traditional search while earning zero AI citations.
                    </p>
                    <p>
                      This is precisely why GEO requires a different content architecture from pure SEO. The goal is not just to build comprehensive pages — it is to build pages where every paragraph is independently valuable and extractable.
                    </p>
                    <p>
                      This passage-level retrieval mechanism is also the basis of Google&apos;s Passage Ranking system, which indexes individual passages for traditional search. Read{" "}
                      <Link href="/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        How Passage Ranking Affects AI Search Visibility
                      </Link>{" "}
                      for a detailed analysis of how passage ranking and AI retrieval interact.
                    </p>
                  </div>
                </section>

                <section id="source-signals" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Six Core Source Selection Signals
                  </h2>
                  <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    Research into RAG systems and analysis of AI search behaviour across Google AI Overviews, Perplexity, and ChatGPT identifies six primary signals that determine source selection.
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        title: "Semantic Relevance",
                        detail: "The passage must address the specific query intent at a semantic level — not just share keywords. Semantic relevance is determined by vector similarity between the query embedding and the passage embedding. Content that accurately addresses the meaning of a question scores higher than content that uses the same keywords in an unrelated context.",
                      },
                      {
                        title: "Factual Specificity",
                        detail: "Passages with specific, verifiable claims — named entities, dates, percentages, attributed quotes, referenced studies — score higher than passages with generalised assertions. AI systems are designed to synthesise factual information, and passages that provide clear, attributable facts are more useful for synthesis than vague, hedged content.",
                      },
                      {
                        title: "Passage Extractability",
                        detail: "A passage is extractable if it can stand alone as a complete answer to a question without requiring context from surrounding paragraphs. Extractable passages have clear subject-predicate-object structure, contain no context-dependent pronoun references, and deliver a complete factual statement within the passage boundaries.",
                      },
                      {
                        title: "Source Credibility",
                        detail: "AI systems assign credibility scores to domains and authors based on signals including: topical consistency (does this site consistently cover this topic?), backlink authority from credible referring domains, structured data indicating authorship and expertise, named author with verifiable credentials, and consistency between content claims and established knowledge.",
                      },
                      {
                        title: "Content Freshness",
                        detail: "Recency signals influence source selection for time-sensitive topics. AI systems track publication and modification dates through schema markup (datePublished, dateModified), URL structures, and internal content signals. Pages with regularly updated content — indicated through clear modification timestamps — are preferred for topics where information changes over time.",
                      },
                      {
                        title: "Structural Quality",
                        detail: "Content with clear heading hierarchy, schema markup, semantic HTML, and well-defined sections has lower computational retrieval cost for AI systems. Structured content reduces the effort required to segment, index, and retrieve relevant passages. FAQPage and Article schema in particular signal to AI systems that the content has been formally segmented for machine parsing.",
                      },
                    ].map((signal, i) => (
                      <div key={signal.title} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                            <span className="text-xs font-heading font-bold text-white">{i + 1}</span>
                          </div>
                          <div>
                            <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{signal.title}</p>
                            <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{signal.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="platform-differences" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Differences Between AI Platforms
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      While all major AI search systems use RAG-based retrieval with similar core signals, they differ in their source corpora, re-ranking priorities, and citation display behaviour.
                    </p>
                    <p>
                      <strong className="text-white">Google AI Overviews</strong> draw from Google&apos;s indexed web corpus with direct influence from Google&apos;s Knowledge Graph and quality systems (E-E-A-T, Helpful Content). Pages that already rank well in Google Search are more likely to appear in AI Overviews, but ranking is not sufficient — passage extractability remains the deciding factor for inclusion.
                    </p>
                    <p>
                      <strong className="text-white">Perplexity</strong> uses a real-time web search layer combined with RAG. Its source selection is more transparent — it cites sources inline and gives users direct access to attribution. Perplexity prioritises recent content and tends to favour pages with clear authorship, specific data points, and well-structured information over long-form content without clear passage demarcation.
                    </p>
                    <p>
                      <strong className="text-white">ChatGPT Search</strong> (via Bing integration) applies Microsoft&apos;s index with OpenAI&apos;s language model layer. It tends to favour established domains and authoritative sources on specific topics. Its citation behaviour is less consistent than Perplexity, but it responds to the same core GEO signals: specificity, structure, and source credibility.
                    </p>
                    <p>
                      A unified GEO strategy that applies the six core signals — semantic relevance, factual specificity, extractability, source credibility, freshness, and structural quality — performs across all three platforms simultaneously.
                    </p>
                  </div>
                </section>

                <section id="content-strategy" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Content Strategy for AI Source Selection
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Knowing the source selection signals enables a targeted content strategy for improving AI citation frequency.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Write definition-first", detail: "Open every section with a complete, standalone definition. The first sentence of a passage is the highest-priority extraction point for AI systems." },
                      { title: "Include specific data points", detail: "Replace vague claims with specific figures, dates, named entities, and attributable statistics. Every paragraph should contain at least one verifiable fact." },
                      { title: "Eliminate context dependence", detail: "Rewrite any sentence that requires the reader to have read the previous paragraph to understand it. Each passage must work as a standalone unit." },
                      { title: "Add FAQ sections", detail: "FAQ sections with complete answers are the most consistently cited passage format across all AI platforms. Every commercial page and blog post should include an FAQ with standalone answers and FAQPage schema." },
                      { title: "Update publication dates", detail: "Keep dateModified current using schema markup. Fresh content signals are especially important for topics where information changes over time." },
                      { title: "Strengthen topical authority", detail: "Build complete topic coverage through cluster architecture. AI systems prefer sources that demonstrate consistent, deep expertise over sources with isolated high-quality pages." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    For the specific structural properties that produce citation-ready content, read{" "}
                    <Link href="/blog/generative-engine-optimisation/what-makes-content-citation-ready" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                      What Makes Content Citation-Ready for AI Search?
                    </Link>
                  </p>
                </section>

                <section id="common-mistakes" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Common Mistakes That Prevent Citation
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { title: "Hedged and vague language", detail: "Phrases like 'results may vary', 'experts disagree', and 'many businesses find' are deprioritised by AI retrieval models. Specific, attributable claims replace hedged generalisations in GEO-optimised content." },
                      { title: "Context-dependent paragraphs", detail: "Paragraphs that begin with 'This means that...' or 'As we discussed above...' are not extractable without surrounding context. Every paragraph should open with its own complete subject." },
                      { title: "Wall-of-text formatting", detail: "Long blocks of unsegmented text are difficult for AI systems to parse into discrete passages. Clear headings, short paragraphs, and structured lists improve extraction efficiency." },
                      { title: "Missing schema markup", detail: "Pages without Article, FAQPage, or BreadcrumbList schema lose structural context that helps AI systems categorise and retrieve content correctly. Schema is a GEO prerequisite, not an optional enhancement." },
                      { title: "No author credentials", detail: "Anonymous content without named authorship, professional credentials, or linked author profiles receives lower source credibility scores. Named authorship is a trust signal that benefits both GEO and E-E-A-T evaluation." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-7" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Key Takeaways
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "AI search systems use RAG (Retrieval-Augmented Generation) — a two-stage process of passage retrieval followed by language model synthesis. Source selection happens at the retrieval stage, not after.",
                      "AI systems retrieve passages, not pages. Each paragraph is evaluated independently. A page can earn AI citations for specific passages even if the overall page is not the top-ranked result.",
                      "The six core source selection signals are: semantic relevance, factual specificity, passage extractability, source credibility, content freshness, and structural quality.",
                      "Different AI platforms (Google AI Overviews, Perplexity, ChatGPT) use similar core signals but differ in corpus, re-ranking priorities, and citation display. A unified GEO strategy performs across all three.",
                      "The most common mistake preventing AI citation is context-dependent paragraphs that cannot stand alone as extractable answers.",
                      "FAQ sections with FAQPage schema are the highest-frequency citation format across all AI platforms. Every commercial page should include them.",
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
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Frequently Asked Questions
                  </h2>
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
                  { label: "GEO vs SEO: What Is the Difference?", href: "/blog/generative-engine-optimisation/geo-vs-seo", desc: "How GEO and SEO differ in goals, signals, and success metrics." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "The structural properties AI systems look for in extractable content." },
                  { label: "How Passage Ranking Affects AI Visibility", href: "/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility", desc: "The connection between passage-level indexing and AI retrieval." },
                  { label: "GEO Services South Africa", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
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
                    Ready to become a preferred AI citation source?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Implementing the six source selection signals across your content requires a systematic audit and restructuring of passage architecture. Professional GEO services deliver this at scale.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Get a Strategy <ArrowRight size={14} />
                    </Link>
                    <Link href="/ai-seo-services-south-africa" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      AI SEO Services
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
