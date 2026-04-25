import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal | Dino de Wet",
  description:
    "Learn which factors correlate most strongly with AI Overview brand visibility, based on a 75,000-brand analysis, and what businesses should do to improve mentions.",
  keywords: [
    "AI Overview brand visibility",
    "AI Overview factors",
    "branded web mentions SEO",
    "GEO visibility factors",
    "AI search brand mentions",
    "Google AI Overviews brand",
    "GEO South Africa",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors",
  },
  openGraph: {
    title: "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal",
    description:
      "Learn which factors correlate most strongly with AI Overview brand visibility, based on a 75,000-brand analysis, and what businesses should do to improve mentions.",
    url: "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors",
    type: "article",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors#article",
      "headline": "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal",
      "description":
        "Based on a 75,000-brand analysis, the strongest factor behind AI Overview brand visibility was branded web mentions — not backlinks or ad spend. This article breaks down the findings and what businesses should do.",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors",
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
        "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors",
      },
      "about": [
        { "@type": "Thing", "name": "Google AI Overviews" },
        { "@type": "Thing", "name": "Brand Visibility" },
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
      ],
      "keywords": "AI Overview brand visibility, branded web mentions, GEO, AI search visibility factors",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 3600,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors#webpage",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors",
      "name": "AI Overview Brand Visibility Factors: What 75,000 Brands Reveal",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "AI Overview Brand Visibility Factors", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What was the strongest factor in the 75,000-brand analysis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The strongest reported factor was branded web mentions, with a Spearman correlation of 0.664.",
          },
        },
        {
          "@type": "Question",
          "name": "Were backlinks the strongest signal for AI Overview visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Brand mentions and branded anchors were much stronger signals than backlinks (0.218) in the analysis.",
          },
        },
        {
          "@type": "Question",
          "name": "Do ads improve AI Overview brand visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The data suggests only a weak relationship between ad traffic or ad cost and AI Overview mentions, with correlations around 0.215.",
          },
        },
        {
          "@type": "Question",
          "name": "Why do brand mentions matter so much for AI Overview visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because repeated mentions across the web likely strengthen brand recognition, entity clarity, and reuse potential in AI-generated answers.",
          },
        },
        {
          "@type": "Question",
          "name": "Is this relevant for South African businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. South African businesses can benefit by building both strong websites and stronger off-site brand visibility while the field is still early.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "main-finding", label: "The Main Finding: Brand Mentions Matter Most" },
  { id: "correlation-factors", label: "Factors with Strongest Correlation" },
  { id: "what-this-suggests", label: "What This Suggests" },
  { id: "brand-mentions", label: "Why Brand Mentions Outperformed" },
  { id: "branded-anchors", label: "Branded Anchors Also Matter" },
  { id: "branded-search", label: "Branded Search Demand" },
  { id: "link-metrics", label: "Link Metrics Were Less Powerful" },
  { id: "paid-media", label: "Paid Media Signals Were Weak" },
  { id: "winner-takes-all", label: "Winner-Takes-All Distribution" },
  { id: "what-to-do", label: "What Businesses Should Do" },
  { id: "south-africa", label: "South African Businesses" },
  { id: "final-answer", label: "Final Answer" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const correlationData = [
  { factor: "Branded web mentions", correlation: "0.664" },
  { factor: "Branded anchors", correlation: "0.527" },
  { factor: "Branded search volume", correlation: "0.392" },
  { factor: "Domain Rating (DR)", correlation: "0.326" },
  { factor: "Referring domains", correlation: "0.295" },
  { factor: "Branded traffic", correlation: "0.274" },
  { factor: "Number of backlinks", correlation: "0.218" },
  { factor: "Ad traffic", correlation: "0.216" },
  { factor: "Ad cost", correlation: "0.215" },
  { factor: "URL Rating", correlation: "0.180" },
  { factor: "Number of site pages", correlation: "0.170" },
];

export default function AIOverviewBrandVisibilityPage() {
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
          { name: "AI Overview Brand Visibility Factors", href: "/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors" },
        ]}
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
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>AI Overview Brand Visibility Factors</span>
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
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              AI Overview Brand Visibility Factors: What 75,000 Brands Reveal
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Based on an analysis of 75,000 brands, the strongest factor behind AI Overview brand mentions was not backlinks or ad spend. It was branded web mentions. That changes how brands should think about AI search visibility.
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

                <section id="main-finding" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Main Finding: Brand Mentions Matter Most
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      <Link href="/blog/generative-engine-optimisation/google-ai-overviews-and-geo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        AI Overview visibility
                      </Link>{" "}
                      is starting to look like a new layer of search competition. Based on an Ahrefs analysis of 75,000 brands, the strongest correlating factor behind AI Overview brand mentions was branded web mentions, with a reported Spearman correlation of 0.664. That is the clearest signal in the dataset.
                    </p>
                    <p>
                      It suggests that when a brand is mentioned more often across the web, it is also more likely to appear in AI Overviews. This relationship was stronger than branded anchors, branded search demand, domain authority-style metrics, backlinks, ad traffic, or ad cost.
                    </p>
                    <p>
                      This is important because it reinforces a broader{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        GEO principle
                      </Link>
                      : AI visibility depends heavily on whether your brand is part of the wider information environment, not only whether your pages have strong traditional SEO signals. You can also explore the{" "}
                      <Link href="/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        benefits of GEO
                      </Link>{" "}
                      for more on why this matters strategically.
                    </p>
                  </div>
                </section>

                <section id="correlation-factors" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The Factors with the Strongest Correlation
                  </h2>
                  <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    The pattern is clear. Text-based brand signals correlated more strongly than classic link volume and much more strongly than paid media indicators.
                  </p>
                  <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#1f1f1f" }}>
                    <div className="grid grid-cols-2 p-4 border-b" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Factor</p>
                      <p className="text-xs font-medium uppercase tracking-widest text-right" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Correlation (ρ)</p>
                    </div>
                    {correlationData.map((row, i) => (
                      <div key={row.factor} className="grid grid-cols-2 p-4 border-b last:border-0" style={{ borderColor: "#1f1f1f", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                        <p className="text-sm" style={{ color: i < 3 ? "#ffffff" : "#a1a1a1", fontFamily: "var(--font-body)" }}>{row.factor}</p>
                        <p className="text-sm text-right font-heading font-semibold" style={{ color: i < 3 ? "#ffffff" : "#a1a1a1" }}>{row.correlation}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="what-this-suggests" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What This Suggests About AI Overview Visibility
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Traditional SEO has long rewarded authority through links, referring domains, and strong site-level signals. AI Overviews may still inherit some of those signals indirectly, but this analysis suggests that brand presence in the broader web conversation may matter more than many SEOs expected.
                    </p>
                    <p>
                      A system generating an answer may be more likely to mention a brand that appears repeatedly across editorial articles, reviews, commentary, interviews, comparison content, industry discussions, niche community references, and trusted publications. A brand that is frequently discussed may be easier for AI systems to recognise, trust, and reuse.
                    </p>
                  </div>
                </section>

                <section id="brand-mentions" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Branded Web Mentions Were the Strongest Signal
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Unlinked mentions have historically been much weaker in classic SEO than backlinks. In AI Overview visibility, however, the analysis suggests that mentions may have substantially more value. This supports a broader GEO and entity-SEO view of the web: links still matter, rankings still matter, but mentions, recognition, and repeated semantic association may matter more than many brands realise in AI search.
                    </p>
                    <p>
                      If a brand is repeatedly mentioned in relevant contexts, it becomes more legible as an entity. That increases the odds of reuse.
                    </p>
                  </div>
                </section>

                <section id="branded-anchors" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Branded Anchors Also Matter More Than Many Expect
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      The second-strongest factor was branded anchors, with a reported correlation of 0.527. A generic anchor such as &ldquo;click here&rdquo; does little to reinforce entity recognition. A branded anchor explicitly ties the brand name to the destination and to the surrounding context. That helps create stronger semantic reinforcement across the web. So if a business earns mentions, it should also care about the form of those mentions. Clear brand naming matters.
                    </p>
                  </div>
                </section>

                <section id="branded-search" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Branded Search Demand Still Matters
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Branded search volume showed a reported correlation of 0.392. When more people search for a brand by name, that brand is also more likely to appear in AI Overviews. Search demand can act as a proxy for awareness, familiarity, market recognition, and offline and online brand strength. A brand that people actively search for is more likely to be treated as a known entity.
                    </p>
                  </div>
                </section>

                <section id="link-metrics" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Traditional Link Metrics Were Less Powerful Than Expected
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Domain Rating was 0.326, referring domains were 0.295, number of backlinks was 0.218, and URL Rating was 0.180. Those are not meaningless correlations, but they are clearly weaker than brand-mention signals. That does not mean backlinks no longer matter — it means that for AI Overview brand mentions specifically, being talked about may matter more than being linked to at scale.
                    </p>
                    <p>
                      Brands that focus only on backlinks may miss the wider opportunity to increase visibility through brand presence, PR, and market conversation. Understanding{" "}
                      <Link href="/blog/generative-engine-optimisation/what-makes-content-citation-ready" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        what makes content citation-ready
                      </Link>{" "}
                      is a complementary layer on top of brand visibility.
                    </p>
                  </div>
                </section>

                <section id="paid-media" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Paid Media Signals Were Weak
                  </h2>
                  <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    Ad traffic and ad cost were both around 0.215. This suggests that paid media does not strongly influence whether a brand appears in AI Overviews. AI Overview visibility is not simply a reflection of paid spend — it looks more like a brand-recognition and information-environment problem than an advertising problem. Spending more on ads does not automatically make your brand more visible in AI-generated answers.
                  </p>
                </section>

                <section id="winner-takes-all" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    AI Overview Visibility Looks Like a Winner-Takes-All Market
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      One of the most important findings in the analysis was the quartile split. Brands in the top 25% by web mentions averaged 169 AI mentions, while the next quartile averaged only 14. And 26% of brands had zero mentions in AI Overviews. That suggests an uneven, concentrated environment where some brands are becoming highly visible, many brands are barely visible at all, and a large group is completely absent.
                    </p>
                    <p>
                      This is exactly the kind of distribution that rewards early and deliberate brand building. In AI search, invisibility may not be gradual. It may be steep.
                    </p>
                  </div>
                </section>

                <section id="what-to-do" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    What Businesses Should Do to Improve AI Overview Visibility
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>The most actionable steps from this analysis are:</p>
                  </div>
                  <div className="mt-5 flex flex-col gap-3">
                    {[
                      { title: "Increase branded web mentions", desc: "Through digital PR, thought leadership, guest appearances, interviews, commentary, partnerships, expert contributions, and brand-led research. The goal is meaningful brand presence across relevant contexts." },
                      { title: "Encourage branded anchors", desc: "Where links do happen, brand-led anchor text appears more helpful than generic anchors. That reinforces recognition more clearly." },
                      { title: "Increase branded search demand", desc: "Strong campaigns that make people search for your brand directly can strengthen entity visibility and awareness." },
                      { title: "Build for the top quartile, not the median", desc: "If visibility is concentrated, modest effort may not be enough. The goal should be strong competitive presence." },
                      { title: "Treat AI visibility as a brand problem, not only a ranking problem", desc: "If mentions matter most, then GEO must extend beyond pages and into the wider web environment." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "1rem" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="south-africa" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Why This Matters for South African Businesses
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Many local brands still focus too narrowly on classic SEO. That creates an opening. A South African business that combines strong on-site semantic SEO, clear service pages, topic clusters, thought leadership, digital PR, broader web mentions, and brand-driven search demand can build a stronger AI Overview footprint before the market becomes more competitive.
                    </p>
                    <p>
                      This is especially relevant for agencies, consultants, law firms, financial brands, healthcare providers, B2B service companies, and specialist authority brands. For more context on local opportunity, read{" "}
                      <Link href="/blog/generative-engine-optimisation/geo-for-south-african-businesses" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        GEO for South African businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="final-answer" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Final Answer: What Drives AI Overview Brand Visibility?
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Based on the 75,000-brand analysis, the strongest observed factor behind AI Overview brand visibility was branded web mentions. That suggests AI Overview visibility depends heavily on whether a brand is present in the broader web conversation, not only on backlinks or ad spend.
                    </p>
                    <p>
                      The practical takeaway: brands that want more visibility in AI search should build more than pages. They should build broader brand presence, stronger semantic recognition, and stronger off-site mention signals.
                    </p>
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: "What was the strongest factor in the 75,000-brand analysis?", a: "The strongest reported factor was branded web mentions, with a Spearman correlation of 0.664." },
                      { q: "Were backlinks the strongest signal for AI Overview visibility?", a: "No. Brand mentions and branded anchors were much stronger signals than backlinks (0.218) in the analysis." },
                      { q: "Do ads improve AI Overview brand visibility?", a: "The data suggests only a weak relationship between ad traffic or ad cost and AI Overview mentions, with correlations around 0.215." },
                      { q: "Why do brand mentions matter so much for AI Overview visibility?", a: "Because repeated mentions across the web likely strengthen brand recognition, entity clarity, and reuse potential in AI-generated answers." },
                      { q: "Is this relevant for South African businesses?", a: "Yes. South African businesses can benefit by building both strong websites and stronger off-site brand visibility while the field is still early." },
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
                  { label: "How Google AI Overviews Change SEO and GEO", href: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", desc: "How AI Overviews work and what to do to appear within them." },
                  { label: "The Benefits of Generative Engine Optimisation", href: "/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation", desc: "Ten reasons GEO matters for modern search strategy." },
                  { label: "What Makes Content Citation-Ready", href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", desc: "Seven structural properties for AI extractability." },
                  { label: "GEO for South African Businesses", href: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", desc: "How SA brands can implement GEO and capture early-mover advantage." },
                  { label: "Generative Engine Optimisation Services", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "AI SEO Services", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for South African brands." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Want Stronger Brand Visibility in AI Search?</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    If you want your brand to appear more often in AI-driven search environments, you need more than rankings.
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    You need stronger mentions, stronger entity signals, and stronger content architecture. Professional GEO implementation builds all three.
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

      <RelatedServices
        heading="Build Your AI Search Visibility"
        links={[
          { href: "/ai-seo", anchor: "AI SEO" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/llm-visibility", anchor: "LLM visibility" },
          { href: "/semantic-seo", anchor: "semantic SEO" },
          { href: "/blog", anchor: "SEO blog" },
        ]}
      />
    </>
  );
}
