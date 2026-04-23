import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Benefits of Generative Engine Optimisation (GEO) | Dino de Wet",
  description:
    "Learn the main benefits of Generative Engine Optimisation, from stronger AI visibility and higher-intent discovery to trust, authority, and competitive advantage.",
  keywords: [
    "benefits of GEO",
    "Generative Engine Optimisation benefits",
    "GEO advantages",
    "AI search visibility",
    "GEO South Africa",
    "AI SEO benefits",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation",
  },
  openGraph: {
    title: "The Benefits of Generative Engine Optimisation (GEO)",
    description:
      "Learn the main benefits of Generative Engine Optimisation, from stronger AI visibility and higher-intent discovery to trust, authority, and competitive advantage.",
    url: "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "The Benefits of Generative Engine Optimisation (GEO)",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation#article",
      "headline": "The Benefits of Generative Engine Optimisation (GEO)",
      "description":
        "The main benefits of Generative Engine Optimisation — stronger AI visibility, better access to high-intent users, improved competitiveness, stronger trust, and a more future-ready search strategy.",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation",
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
        "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation",
      },
      "about": [
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "AI Search Visibility" },
        { "@type": "Thing", "name": "Content Strategy" },
      ],
      "keywords": "benefits of GEO, Generative Engine Optimisation, AI visibility, citation readiness",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 3400,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation#webpage",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation",
      "name": "The Benefits of Generative Engine Optimisation (GEO)",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "The Benefits of Generative Engine Optimisation", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the biggest benefit of GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The biggest benefit is that GEO improves visibility inside AI-generated answers, not just in traditional rankings.",
          },
        },
        {
          "@type": "Question",
          "name": "Can GEO help smaller businesses compete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. GEO research found that lower-ranked sources could gain significantly from GEO-style improvements because generative systems reward clear structure and passage quality, not just domain authority.",
          },
        },
        {
          "@type": "Question",
          "name": "Does GEO replace SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. GEO builds on SEO. Retrieval still comes first, then passage selection, then answer generation. Strong SEO foundations are still required.",
          },
        },
        {
          "@type": "Question",
          "name": "Why does GEO improve trust?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because repeated citation and stronger semantic clarity help brands appear more authoritative and reliable in AI answer environments, building trust before the click.",
          },
        },
        {
          "@type": "Question",
          "name": "Is GEO relevant for South African businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. South African businesses can gain an early-mover advantage while many competitors are still focused only on older SEO models.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "intro", label: "Why GEO Matters Now" },
  { id: "high-intent", label: "1. Visibility with High-Intent Customers" },
  { id: "smaller-brands", label: "2. Smaller Brands Can Compete" },
  { id: "early-mover", label: "3. Early-Mover Advantage" },
  { id: "visit-value", label: "4. Increased Visit Value" },
  { id: "roi", label: "5. Improved Content ROI" },
  { id: "reputation", label: "6. Brand Reputation Protection" },
  { id: "trust", label: "7. Building Trust in the AI Era" },
  { id: "content-quality", label: "8. Better Content Quality" },
  { id: "topical-authority", label: "9. Stronger Topical Authority" },
  { id: "future-ready", label: "10. More Future-Ready Strategy" },
  { id: "final-answer", label: "Final Answer" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const benefits = [
  {
    id: "high-intent",
    number: "01",
    title: "GEO Improves Visibility with High-Intent Customers",
    body: "One of the biggest benefits of GEO is that it places your brand closer to decision-stage queries. Users increasingly ask AI systems practical questions such as which option is best, what service do I need, or which provider is right for this use case. Many of these queries sit close to evaluation and buying intent. If your brand is cited or used inside that answer layer, you gain visibility at a moment when the user is actively comparing options. That is strategically stronger than being one more link in a results page.",
  },
  {
    id: "smaller-brands",
    number: "02",
    title: "GEO Helps Smaller Brands Compete with Larger Players",
    body: "Traditional SEO often favours larger brands because they have stronger domain authority, more backlinks, and longer-established search footprints. GEO does not eliminate those advantages, but it does create another path into visibility. The GEO research paper found that some of the strongest GEO methods benefited lower-ranked sources significantly — in some cases the visibility improvement for lower-ranked results was much greater than for top-ranked sources. That matters because generative systems reward clearer passages, better factual support, stronger structure, and quotable content — not just raw domain strength.",
  },
  {
    id: "early-mover",
    number: "03",
    title: "GEO Creates an Early-Mover Advantage",
    body: "GEO is still early enough that most businesses have not fully adapted to it. Many companies still publish for classic rankings only. They are not yet building answer-ready content blocks, citation-friendly passages, topic clusters designed for generative retrieval, or stronger semantic structures for AI reuse. That creates a window for brands that act now. A business that becomes a consistent source in an emerging answer environment can build familiarity, authority, and repeated selection patterns before the field becomes crowded.",
  },
  {
    id: "visit-value",
    number: "04",
    title: "GEO Can Increase the Value of Each Visit",
    body: "Generative search may reduce some low-value clicks, but GEO can improve the quality of the visits that still come through. If a user has already seen your brand cited in an AI answer, they arrive with more context than a cold click from a generic ranking alone. In many cases, they already know your brand is relevant, your content was useful enough to be surfaced, and your site may have the answer or solution they need. That can improve visit quality, conversion alignment, and brand recognition at the moment of arrival.",
  },
  {
    id: "roi",
    number: "05",
    title: "GEO Can Improve ROI by Making Content More Reusable",
    body: "When content is structured for generative retrieval, it becomes more reusable across multiple environments: search snippets, AI answers, summaries, FAQs, and passage extraction surfaces. The same structural improvements that help generative visibility also tend to improve content quality more generally. Adding statistics, quotations, citations, and fluency improvements — core GEO methods — makes content more visible in generative outputs and more useful overall. One good piece of content can support rankings, passage visibility, answer generation, trust-building, and future content reuse simultaneously.",
  },
  {
    id: "reputation",
    number: "06",
    title: "GEO Helps Protect Brand Reputation in AI Search",
    body: "As AI systems increasingly summarise brands, products, and services, the way they frame your business starts to matter more. If the system finds weak, outdated, or misleading information first, that can shape perception before a user ever reaches your site. GEO reduces that risk by encouraging a business to publish clearer definitions, better factual support, stronger entity framing, more current topic coverage, and more trustworthy supporting content. In practical terms, GEO helps you shape what AI systems are more likely to say about you.",
  },
  {
    id: "trust",
    number: "07",
    title: "GEO Helps Build Trust in the AI Era",
    body: "Trust is increasingly being formed before the click. When AI systems repeatedly use your content, quote your passages, or surface your brand in answer contexts, that creates a trust signal in the user's mind. It suggests that your site is not just available, but useful enough to be chosen. Over time, that compounds. The business gains stronger perceived authority, more confidence at the research stage, better brand recall, and higher trust before conversion.",
  },
  {
    id: "content-quality",
    number: "08",
    title: "GEO Encourages Better Content Quality",
    body: "A less obvious benefit of GEO is that it pushes businesses toward better content discipline. Weak content habits do not tend to perform well in generative environments. GEO research showed that keyword stuffing underperformed, while evidence-backed and clarity-driven improvements performed much better. That encourages clearer writing, stronger passage design, more factual support, better source use, and less filler. In that sense, GEO is not only a visibility strategy. It is a quality strategy.",
  },
  {
    id: "topical-authority",
    number: "09",
    title: "GEO Strengthens Topical Authority",
    body: "A business rarely wins generative visibility with a single isolated page. GEO works best when pages sit inside a coherent content system: service pages, pillar pages, supporting subtopic articles, FAQs, comparisons, and process pages. That means another benefit of GEO is that it naturally strengthens topical authority. It encourages businesses to build topic ecosystems rather than fragmented articles — which in turn improves the relationship between content and entity recognition in AI retrieval systems.",
  },
  {
    id: "future-ready",
    number: "10",
    title: "GEO Makes Your Search Strategy More Future-Ready",
    body: "Search is moving toward more synthesis, more conversational retrieval, more passage-level evaluation, more answer-layer competition, and more AI-assisted discovery. A business that builds for GEO now is preparing for that future instead of reacting to it later. That does not mean abandoning SEO. It means evolving SEO into a broader visibility strategy that includes rankings, passage quality, citations, answer inclusion, semantic trust, and AI-ready content architecture.",
  },
];

export default function BenefitsOfGEOPage() {
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
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Benefits of GEO</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> 11 min read
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> 23 April 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              The Benefits of Generative Engine Optimisation (GEO)
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              GEO helps businesses improve visibility in AI-generated answers, strengthen authority in emerging search environments, and compete more effectively for high-intent discovery. Here are the ten core benefits.
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

                <section id="intro" className="mb-14">
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Traditional SEO helps a page rank in a list of results.{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        GEO
                      </Link>{" "}
                      helps content become more visible inside generative answer systems that retrieve documents, evaluate passages, and synthesise responses. Visibility in AI-driven search depends on the sequence of document retrieval, passage ranking, and generated answer construction. If a document is not retrieved and a passage is not selected, the brand will not appear in the answer layer.
                    </p>
                    <p>
                      That is why GEO matters now. It gives businesses a way to compete not only for rankings, but also for influence inside AI search. The ten benefits below cover the full scope of why GEO is becoming an essential part of a modern search strategy. For an introduction to the discipline, read the{" "}
                      <Link href="/blog/generative-engine-optimisation/geo-vs-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        SEO vs GEO comparison
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {benefits.map((benefit) => (
                  <section key={benefit.id} id={benefit.id} className="mb-14">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="font-heading font-bold flex-shrink-0" style={{ fontSize: "2.5rem", color: "#1f1f1f", lineHeight: 1 }}>{benefit.number}</span>
                      <h2 className="font-heading font-bold text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", letterSpacing: "-0.02em", lineHeight: 1.2, paddingTop: "0.3rem" }}>
                        {benefit.title}
                      </h2>
                    </div>
                    <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                      {benefit.body}
                    </p>
                  </section>
                ))}

                <section id="final-answer" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Final Answer: What Are the Benefits of Generative Engine Optimisation?
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      The main benefits of Generative Engine Optimisation are stronger AI visibility, better access to high-intent users, improved competitiveness against larger players, stronger trust, better topical authority, and a more future-ready search strategy.
                    </p>
                    <p>GEO helps a brand do more than rank. It helps a brand become a source. That is why GEO is becoming one of the most important extensions of modern SEO.</p>
                    <p>
                      Explore{" "}
                      <Link href="/geo-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Generative Engine Optimisation services
                      </Link>{" "}
                      or{" "}
                      <Link href="/ai-seo-services-south-africa" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        AI SEO services
                      </Link>{" "}
                      to build both layers of search visibility.
                    </p>
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: "What is the biggest benefit of GEO?", a: "The biggest benefit is that GEO improves visibility inside AI-generated answers, not just in traditional rankings." },
                      { q: "Can GEO help smaller businesses compete?", a: "Yes. GEO research found that lower-ranked sources could gain significantly from GEO-style improvements because generative systems reward clear structure and passage quality, not just domain authority." },
                      { q: "Does GEO replace SEO?", a: "No. GEO builds on SEO. Retrieval still comes first, then passage selection, then answer generation. Strong SEO foundations are still required." },
                      { q: "Why does GEO improve trust?", a: "Because repeated citation and stronger semantic clarity help brands appear more authoritative and reliable in AI answer environments, building trust before the click." },
                      { q: "Is GEO relevant for South African businesses?", a: "Yes. South African businesses can gain an early-mover advantage while many competitors are still focused only on older SEO models." },
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
                  { label: "SEO vs GEO: The Core Difference", href: "/blog/generative-engine-optimisation/geo-vs-seo", desc: "Why SEO drives clicks and GEO drives AI citation visibility." },
                  { label: "How AI Search Engines Choose Sources", href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", desc: "The retrieval signals that determine which sources AI systems select." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "Seven structural properties for AI extractability." },
                  { label: "GEO for South African Businesses", href: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", desc: "How SA brands can implement GEO and capture early-mover advantage." },
                  { label: "Generative Engine Optimisation Services", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "AI SEO Services", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for modern search engines." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Want the Benefits of GEO on Your Site?</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    If you want stronger AI visibility, better-qualified discovery, and a more future-ready search presence, GEO should be part of your strategy.
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Professional GEO implementation delivers structured content, passage architecture, entity clarity, and citation signals systematically across your site.
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
