import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes Content Citation-Ready for AI Search? | Dino de Wet",
  description:
    "Citation-ready content is structured so AI search systems can extract, attribute, and cite it in generated responses. Learn the seven structural properties that make content GEO-ready across Google AI Overviews, ChatGPT, and Perplexity.",
  keywords: [
    "citation-ready content",
    "GEO content structure",
    "AI search content optimisation",
    "content for AI Overviews",
    "how to get cited by AI",
    "AI citation signals",
    "GEO writing",
    "passage optimisation",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready",
  },
  openGraph: {
    title: "What Makes Content Citation-Ready for AI Search?",
    description:
      "The structural and semantic properties that make content extractable, trustworthy, and referable by AI-generated search responses.",
    url: "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "What Makes Content Citation-Ready for AI Search?",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready#article",
      "headline": "What Makes Content Citation-Ready for AI Search?",
      "description":
        "The structural and semantic properties — from definition-first sentences to FAQPage schema — that cause AI search systems to select your content as a citation source.",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.co.za/#person" },
      "publisher": { "@type": "Person", "@id": "https://dinodewet.co.za/#person", "name": "Dino de Wet", "url": "https://dinodewet.co.za" },
      "isPartOf": { "@id": "https://dinodewet.co.za/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready" },
      "about": [
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "Citation-Ready Content" },
        { "@type": "Thing", "name": "AI Search Optimisation" },
      ],
      "keywords": "citation-ready content, GEO content, AI search citations, passage optimisation, FAQPage schema, AI Overviews",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 2600,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready#webpage",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready",
      "name": "What Makes Content Citation-Ready for AI Search?",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "What Makes Content Citation-Ready for AI Search?", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/what-makes-content-citation-ready#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most important thing I can do to make my content citation-ready?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The single highest-impact change is rewriting your content so every paragraph is self-contained — meaning it delivers a complete, useful answer without relying on surrounding context. AI systems extract passages, not pages. A self-contained paragraph can be cited anywhere; a context-dependent paragraph cannot. Start with your FAQ sections: each answer should be a complete, standalone response.",
          },
        },
        {
          "@type": "Question",
          "name": "Does adding statistics really help with AI citations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. The original GEO research from Princeton, Georgia Tech, and IIT Delhi demonstrated that adding statistics to content increased AI citation rates by up to 40% compared to matched content without statistics. AI systems synthesise factual information, and specific data points (percentages, figures, dates, named sources) are inherently more usable for synthesis than general assertions.",
          },
        },
        {
          "@type": "Question",
          "name": "Does FAQPage schema guarantee AI citations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Schema markup improves the probability of AI citation by reducing retrieval cost and signalling content structure, but it does not guarantee citation. The underlying content still needs to be factually specific, self-contained, and semantically relevant to the queries it targets. Schema markup on vague or hedged content does not improve citation rates.",
          },
        },
        {
          "@type": "Question",
          "name": "How long should FAQ answers be for AI citation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The optimal FAQ answer for AI citation is 2–4 sentences: long enough to be complete and specific, short enough to be extractable without truncation. The first sentence should be a direct, definitional answer to the question. Subsequent sentences add specific supporting detail. FAQ answers longer than 6 sentences risk partial extraction, where the AI system only uses part of the answer.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "what-citation-ready-means", label: "What Citation-Ready Means" },
  { id: "property-1", label: "Property 1: Definitional First Sentences" },
  { id: "property-2", label: "Property 2: Self-Contained Passages" },
  { id: "property-3", label: "Property 3: Specific Factual Claims" },
  { id: "property-4", label: "Property 4: SPO Sentence Structure" },
  { id: "property-5", label: "Property 5: FAQ Sections with Schema" },
  { id: "property-6", label: "Property 6: Author Expertise Signals" },
  { id: "property-7", label: "Property 7: Structural Clarity" },
  { id: "audit-checklist", label: "Citation-Readiness Audit Checklist" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What is the most important thing I can do to make my content citation-ready?",
    answer:
      "The single highest-impact change is rewriting your content so every paragraph is self-contained — meaning it delivers a complete, useful answer without relying on surrounding context. AI systems extract passages, not pages. A self-contained paragraph can be cited anywhere; a context-dependent paragraph cannot. Start with your FAQ sections: each answer should be a complete, standalone response.",
  },
  {
    question: "Does adding statistics really help with AI citations?",
    answer:
      "Yes. The original GEO research from Princeton, Georgia Tech, and IIT Delhi demonstrated that adding statistics to content increased AI citation rates by up to 40% compared to matched content without statistics. AI systems synthesise factual information, and specific data points (percentages, figures, dates, named sources) are inherently more usable for synthesis than general assertions.",
  },
  {
    question: "Does FAQPage schema guarantee AI citations?",
    answer:
      "No. Schema markup improves the probability of AI citation by reducing retrieval cost and signalling content structure, but it does not guarantee citation. The underlying content still needs to be factually specific, self-contained, and semantically relevant to the queries it targets. Schema markup on vague or hedged content does not improve citation rates.",
  },
  {
    question: "How long should FAQ answers be for AI citation?",
    answer:
      "The optimal FAQ answer for AI citation is 2–4 sentences: long enough to be complete and specific, short enough to be extractable without truncation. The first sentence should be a direct, definitional answer to the question. Subsequent sentences add specific supporting detail. FAQ answers longer than 6 sentences risk partial extraction, where the AI system only uses part of the answer.",
  },
];

export default function CitationReadyContentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        trail={[
          { name: "Blog", href: "/blog" },
          { name: "Generative Engine Optimisation", href: "/blog/generative-engine-optimisation" },
          { name: "Citation-Ready Content", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready" },
        ]}
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
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Citation-Ready Content</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Clock size={12} /> 9 min read</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Calendar size={12} /> 23 April 2026</span>
            </div>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What Makes Content Citation-Ready for AI Search?
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Citation-ready content has specific structural and semantic properties that AI retrieval systems look for when selecting sources for generated responses. This guide covers the seven properties — and how to audit your existing content against each one.
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

                <section id="what-citation-ready-means" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Citation-Ready Means
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Citation-ready content is digital content structured so that AI-powered retrieval systems can select, extract, and attribute specific passages in generated responses without misrepresenting the source material or requiring surrounding context to make sense of the extracted passage.
                    </p>
                    <p>
                      The concept emerged from the research paper &ldquo;GEO: Generative Engine Optimisation&rdquo; (Princeton, Georgia Tech, IIT Delhi, 2023), which identified statistically significant differences in AI citation rates between content written with specific structural properties and matched content without those properties. The research demonstrated that content with statistics, quotations, citations, and fluent language structure received substantially more citations across AI search systems than content with identical keyword relevance but lacking those signals.
                    </p>
                    <p>
                      For the full context of why AI systems retrieve passages rather than full pages, read{" "}
                      <Link href="/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        How AI Search Engines Choose Sources
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {[
                  {
                    id: "property-1",
                    number: "01",
                    title: "Definitional First Sentences",
                    content: [
                      "The first sentence of every section is the highest-priority extraction point in a passage. AI retrieval models are designed to extract the most information-dense sentence from a passage, and the opening sentence of a well-structured section almost always contains the highest information density.",
                      "A definitional first sentence delivers a complete, standalone definition or statement of fact about the section's subject. It does not require context from a previous paragraph, does not rely on pronouns referring to previously introduced subjects, and does not begin with transitional language ('This means that...', 'As we explored above...').",
                      "Weak example: 'There are several important factors to consider here.' Strong example: 'Passage Ranking is a Google search system that indexes individual passages within pages independently of the page's overall topic relevance, enabling specific paragraphs to rank for highly specific queries.'",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-2",
                    number: "02",
                    title: "Self-Contained Passages",
                    content: [
                      "A self-contained passage delivers complete meaning within its own boundaries. Every sentence within the passage can be understood without reading what came before or after it.",
                      "Self-containment requires eliminating context-dependent references within passages. Pronouns that reference subjects introduced in previous paragraphs ('it', 'this approach', 'the method described above') break self-containment. The subject must be named explicitly in every passage intended for AI extraction.",
                      "Self-containment also means each passage must answer a complete question or deliver a complete piece of information. A passage that half-answers a question and directs the reader to 'continue reading for the full explanation' is not extraction-ready.",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-3",
                    number: "03",
                    title: "Specific Factual Claims",
                    content: [
                      "The 2023 GEO research demonstrated that adding statistics to content increased AI citation rates significantly compared to matched content with generalised claims. AI systems synthesise factual information — and specific data points are inherently more synthesisable than vague assertions.",
                      "Specific factual claims include: percentages and numerical data ('AI Overviews appear for approximately 12% of all Google searches in active rollout markets'), named entities with attributes ('Perplexity AI, founded in 2022, uses a RAG architecture that retrieves and cites up to eight sources per query'), and attributed research findings ('According to the Stanford HAI AI Index 2024, generative AI tool adoption grew 47% year-on-year among knowledge workers').",
                      "The specificity does not need to be industry-wide data — it can be internal data, case study results, or observation-based metrics — as long as it is specific and attributable rather than generic.",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-4",
                    number: "04",
                    title: "Subject-Predicate-Object Sentence Structure",
                    content: [
                      "Subject-Predicate-Object (SPO) sentence structure mirrors the triple-store format that AI knowledge systems use to represent facts. Content written in clear SPO triples aligns with the internal representation format of AI retrieval models, reducing the computational effort required to parse and store the information.",
                      "SPO structure means every sentence has an explicit named subject performing a specific action on a specific object: 'Google Passage Ranking (subject) indexes individual paragraphs (predicate) independently of overall page relevance (object).'",
                      "Passive voice, nominal constructions, and abstract subjects break SPO clarity. 'Significant improvements in citation rates were observed' tells an AI system nothing it can store as a fact. 'Adding statistics to a GEO-optimised page increases AI citation frequency by up to 40%' gives it a complete, attributable triple.",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-5",
                    number: "05",
                    title: "FAQ Sections with FAQPage Schema",
                    content: [
                      "FAQ sections are the highest-frequency citation format across all major AI search platforms. An FAQ answer is structurally ideal for AI retrieval: it is question-framed (directly matching query intent), self-contained (by definition, since it answers a single question completely), and specific enough to be synthesised without ambiguity.",
                      "The optimal FAQ answer for AI citation is 2–4 sentences. The first sentence directly answers the question with a definitive statement. Subsequent sentences add specific supporting detail, context, or qualification. Answers longer than 6 sentences risk partial extraction.",
                      "FAQPage schema markup signals to AI systems that the content has been deliberately structured as question-answer pairs, reducing retrieval cost and increasing extraction accuracy. Every commercial page and blog post should include a FAQ section with FAQPage schema.",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-6",
                    number: "06",
                    title: "Author Expertise Signals",
                    content: [
                      "AI retrieval systems evaluate source credibility at the author level as well as the domain level. Named authorship with verifiable professional credentials increases source trust scores, particularly for topics in YMYL (Your Money, Your Life) categories including health, finance, legal, and professional services.",
                      "Author expertise signals include: named author with full name (not 'by the editorial team'), linked author biography page, professional credentials mentioned in the bio, consistent authorship across a domain (indicating genuine subject expertise), and cross-references between the author's work and third-party sources.",
                      "Anonymous content — whether no attribution at all or attributed to a generic organisation name — consistently receives lower source credibility scores from AI retrieval systems than equivalent content with clear named authorship.",
                    ],
                    extra: null,
                  },
                  {
                    id: "property-7",
                    number: "07",
                    title: "Structural Clarity",
                    content: [
                      "Structural clarity refers to the overall organisation of content in a way that minimises the computational cost of segmenting it into retrievable passages. Clear heading hierarchy (H1 → H2 → H3), consistent section length, short paragraphs (3–5 sentences maximum), and use of structured HTML elements (lists, tables, definition elements) all reduce retrieval cost.",
                      "Article schema markup explicitly identifies the content type, author, publication date, and subject matter. BreadcrumbList schema establishes the content's position in the site architecture. Together, these structured data signals help AI systems classify and retrieve content with minimal computational overhead.",
                      "Content without structural clarity — long blocks of undivided prose, inconsistent heading usage, mixed topic paragraphs — is not uncitable, but it is retrieved less efficiently and less frequently than equivalent content with clear structural demarcation.",
                    ],
                    extra: null,
                  },
                ].map((prop) => (
                  <section key={prop.id} id={prop.id} className="mb-14">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="font-heading font-bold flex-shrink-0 mt-1" style={{ fontSize: "0.75rem", color: "#3a3a3a", letterSpacing: "0.1em", fontFamily: "var(--font-body)" }}>
                        {prop.number}
                      </span>
                      <h2 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                        {prop.title}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                      {prop.content.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                  </section>
                ))}

                <section id="audit-checklist" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Citation-Readiness Audit Checklist
                  </h2>
                  <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    Apply this checklist to any existing page to assess its citation-readiness and identify the highest-priority improvements.
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Does every H2 section open with a definitional first sentence that delivers complete meaning independently?",
                      "Can each paragraph be read and understood without reading the paragraph before it?",
                      "Does every paragraph contain at least one specific, named entity or attributable data point?",
                      "Are all key sentences structured in Subject-Predicate-Object form with explicit named subjects?",
                      "Does the page include an FAQ section with 4–8 questions and 2–4 sentence standalone answers?",
                      "Is FAQPage schema implemented and validated in Google's Rich Results Test?",
                      "Is there a named author with a linked bio page that includes professional credentials?",
                      "Are Article, BreadcrumbList, and datePublished/dateModified schema implemented?",
                      "Are all paragraphs 3–5 sentences maximum, with clear H2 and H3 heading hierarchy?",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-xl border p-4" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-4 h-4 rounded border flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    For how these properties interact with GEO vs traditional SEO goals, read{" "}
                    <Link href="/blog/generative-engine-optimisation/geo-vs-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                      GEO vs SEO: What Is the Difference?
                    </Link>
                  </p>
                </section>

                <section id="takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-7" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Key Takeaways
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Citation-ready content has seven structural properties: definitional first sentences, self-contained passages, specific factual claims, SPO sentence structure, FAQ sections with schema, author expertise signals, and structural clarity.",
                      "Research demonstrates that adding statistics to content increases AI citation rates significantly — AI systems synthesise factual information, making specific data inherently more useful than generalised assertions.",
                      "FAQ sections with FAQPage schema are the highest-frequency citation format across all AI platforms. The optimal answer length is 2–4 sentences: a direct answer plus specific supporting detail.",
                      "Self-containment is the most important structural property. Passages that require surrounding context to make sense cannot be cleanly extracted by AI retrieval systems.",
                      "Author expertise signals — named authorship, professional credentials, linked bio pages — increase source credibility scores at the author level, benefiting both GEO and E-E-A-T evaluation.",
                      "A citation-readiness audit applied to existing pages is typically the fastest GEO implementation path — restructuring existing content produces faster results than creating new pages from scratch.",
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
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "The retrieval signals that determine which sources AI systems select." },
                  { label: "How Passage Ranking Affects AI Visibility", href: "/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility", desc: "Passage-level indexing and its role in AI search." },
                  { label: "Answer Engine Optimisation Services", href: "/answer-engine-optimisation-services-south-africa", desc: "Professional AEO for South African businesses." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Apply This</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Need your content audited for citation-readiness?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    A professional citation-readiness audit identifies the highest-priority content changes and implements the seven structural properties across your most important pages.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book an Audit <ArrowRight size={14} />
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

      <RelatedServices
        heading="Build Your AI Search Visibility"
        links={[
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation services" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/llm-visibility", anchor: "LLM visibility" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/blog", anchor: "SEO blog" },
        ]}
      />
    </>
  );
}
