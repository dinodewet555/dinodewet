import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Layers, Link2, FileText, Zap, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantic SEO Web Development | Dino de Wet",
  description:
    "Semantic SEO web development by Dino de Wet. Websites structured around meaning, topical relationships, search intent, and entity clarity for long-term organic visibility and topical authority.",
  keywords: [
    "Semantic SEO",
    "Semantic SEO Web Development",
    "Entity-Based SEO",
    "Topical Authority",
    "Technical SEO",
    "Next.js SEO",
    "WordPress SEO",
    "Structured Data",
    "Information Architecture",
    "Dino de Wet",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/semantic-seo",
  },
  openGraph: {
    title: "Semantic SEO Web Development | Dino de Wet",
    description:
      "Websites structured around meaning, topical relationships, search intent, and entity clarity for long-term organic visibility.",
    url: "https://dinodewet.co.za/semantic-seo",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Semantic SEO Web Development by Dino de Wet",
      },
    ],
  },
};

const semanticSeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/semantic-seo#webpage",
      "url": "https://dinodewet.co.za/semantic-seo",
      "name": "Semantic SEO Web Development | Dino de Wet",
      "description": "Semantic SEO web development by Dino de Wet. Websites structured around meaning, topical relationships, search intent, and entity clarity.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": {
        "@type": "Service",
        "@id": "https://dinodewet.co.za/semantic-seo#service",
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Semantic SEO", "item": "https://dinodewet.co.za/semantic-seo" },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/semantic-seo#service",
      "name": "Semantic SEO Web Development",
      "url": "https://dinodewet.co.za/semantic-seo",
      "description": "The practice of building websites structured around meaning, topical relationships, search intent, user pathways, and entity clarity — rather than isolated keywords alone. Every project is designed for long-term organic visibility.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": "Worldwide",
      "serviceType": "Semantic SEO Web Development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Semantic SEO Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semantic site planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Information architecture design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Topic clustering strategy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal linking frameworks" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Page hierarchy mapping" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js or WordPress development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO foundations" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schema markup strategy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entity clarity optimisation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Long-term visibility planning" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/semantic-seo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is semantic SEO web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Semantic SEO web development is the practice of building websites structured around meaning, topical relationships, search intent, user pathways, and entity clarity — rather than isolated keywords alone. Every page, link, and section is architected for search understanding.",
          },
        },
        {
          "@type": "Question",
          "name": "How does entity-based SEO differ from traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entity-based SEO focuses on establishing who you are, what you do, and how your business relates to key topics — helping search engines understand your brand as a recognised entity rather than just matching keywords. This drives long-term topical authority and organic visibility.",
          },
        },
        {
          "@type": "Question",
          "name": "What is included in a semantic SEO web development project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A complete semantic SEO engagement includes: semantic site planning, information architecture design, topic clustering strategy, internal linking frameworks, page hierarchy mapping, Next.js or WordPress development, technical SEO foundations, schema markup strategy, entity clarity optimisation, and long-term visibility planning.",
          },
        },
      ],
    },
  ],
};

const pillars = [
  {
    icon: Layers,
    title: "Development Beyond Design",
    description:
      "A good website is not only a visual interface — it is an organized information system. Each page, section, heading, relationship, and internal link helps search engines and users understand what the business is about.",
  },
  {
    icon: Search,
    title: "Search-Aware Architecture",
    description:
      "Every site is built with consideration for entity association, topic coverage, internal linking logic, crawl paths, structured hierarchy, content depth, page purpose, and conversion pathways.",
  },
  {
    icon: Target,
    title: "Semantic Structure",
    description:
      "Modern sites need clear topic clusters, supporting subtopics, aligned service pages, intent-focused page types, structured content relationships, schema-ready thinking, and user-focused flow.",
  },
  {
    icon: Zap,
    title: "Technology + SEO Together",
    description:
      "Many websites fail because development and SEO are separated. Dino integrates them from the beginning so structure, speed, content logic, and discoverability all support each other.",
  },
];

const includes = [
  "Semantic site planning",
  "Information architecture design",
  "Topic clustering strategy",
  "Internal linking frameworks",
  "Page hierarchy mapping",
  "Next.js or WordPress development",
  "Technical SEO foundations",
  "Content-aligned templates",
  "Conversion-aware page structures",
  "Schema markup strategy",
  "Entity clarity optimisation",
  "Long-term visibility planning",
];

export default function SemanticSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(semanticSeoSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
            <AnimatedSection className="pb-20">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Service
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
              >
                Semantic SEO Web Development
              </h1>
              <p style={{ color: "#a1a1a1", maxWidth: "520px", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "2.5rem" }}>
                The practice of building websites structured around meaning, topical relationships, search intent, user pathways, and entity clarity — rather than isolated keywords alone. Every project is designed for long-term organic visibility.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start a Project <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            {/* Hero infographic — semantic services */}
            <AnimatedSection direction="right" delay={200} className="relative">
              <div
                className="relative rounded-t-2xl overflow-hidden border-t border-l border-r"
                style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}
              >
                <Image
                  src="/images/semantic-seo-services.png"
                  alt="Complete Semantic SEO Services — Entity-Based Optimisation & Structured Data"
                  width={680}
                  height={500}
                  className="w-full"
                  style={{ filter: "brightness(0.82) saturate(0.6)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.5) 100%)" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              The Approach
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Web Development Built for<br />Search Understanding
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={i * 100}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-6"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                      {pillar.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dino's SEO Framework — full infographic */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                The Framework
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                The Dino de Wet Semantic SEO Framework
              </h2>
              <p className="mb-4" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Mastering topical authority through vastness, depth, and momentum. The framework integrates entity-attribute-value (EAV) modelling, macro and micro semantics, and foundational topical coverage to create sites search engines trust and retrieve.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Authority is earned through complete topical coverage and the quality of historical user engagement — not shortcuts or keyword stuffing.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}
              >
                <Image
                  src="/images/seo-framework.png"
                  alt="The Dino de Wet Semantic SEO Framework — Mastering Topical Authority"
                  width={680}
                  height={480}
                  className="w-full"
                  style={{ filter: "brightness(0.85) saturate(0.65)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.4) 0%, transparent 60%)" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Evolution of SEO — full width visual */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <AnimatedSection direction="left" delay={100}>
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: "#1f1f1f", background: "#050505" }}
              >
                <Image
                  src="/images/seo-evolution.png"
                  alt="The Evolution of Semantic SEO — from ranking pages to being retrieved, cited, and remembered"
                  width={680}
                  height={520}
                  className="w-full"
                  style={{ filter: "brightness(0.82) saturate(0.6)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.4) 0%, transparent 70%)" }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                The Shift
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                From Ranking Pages to Being Retrieved, Cited, and Remembered
              </h2>
              <p className="mb-4" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                The old model was rank a page, win a click. The new model demands: be understood, be retrieved, be cited. Entity authority, topical depth, passage-level content, semantic HTML, and trusted sources are now the foundations.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Semantic SEO web development is ideal for businesses that want to move beyond outdated keyword-first websites and build a stronger digital presence rooted in structure, authority, and relevance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI + SEO Technology Stack */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              The Technology Stack
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Advanced Semantic SEO & AI Technology Stack
            </h2>
            <p className="mb-12" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "580px" }}>
              A holistic toolset combining semantic SEO agents, leading SEO platforms, AI & automation systems, and modern development frameworks — all working together for optimised organic visibility.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}
            >
              <Image
                src="/images/ai-seo-stack.png"
                alt="Advanced Semantic SEO & AI Technology Stack — Tools and Systems for Holistic Search Excellence"
                width={1200}
                height={520}
                className="w-full"
                style={{ filter: "brightness(0.85) saturate(0.65)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(5,5,5,0.35) 0%, transparent 60%)" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What This Includes */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Scope
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                What This Includes
              </h2>
              <p className="mb-4" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                A complete semantic SEO web development engagement covers every layer of the digital asset — from strategic planning through to technical delivery.
              </p>
              <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                This is not a template project. Every site is architected for its specific business context, search environment, and growth objectives.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Discuss Your Project <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border"
                    style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why It Matters — 3 cards */}
      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Link2, title: "Entity-Based Recognition", desc: "Help search engines understand who you are, what you do, and how your business relates to the topics that matter most." },
              { icon: FileText, title: "Topical Authority", desc: "Establish depth across subject areas so your site earns trust as a comprehensive, credible resource — not just a keyword page." },
              { icon: Target, title: "Long-Term Organic Growth", desc: "Build a foundation that compounds over time — not dependent on short-term tactics or algorithm shortcuts." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 120}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "#0d0d0d", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-6"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1rem" }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Ready to build a search-smart digital foundation?
            </h2>
            <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
              Let&apos;s design a semantic SEO strategy and web development plan that creates long-term authority for your business.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start a Project <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
