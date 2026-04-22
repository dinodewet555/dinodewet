import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dino de Wet | Semantic SEO Strategist & AI Architect",
  description:
    "Dino de Wet is a web developer, semantic SEO strategist, and AI architect based in Cape Town, South Africa. He builds digital systems that perform at the intersection of search intelligence, technical development, and AI.",
  alternates: {
    canonical: "https://dinodewet.tech/about",
  },
  openGraph: {
    title: "About Dino de Wet | Semantic SEO Strategist & AI Architect",
    description:
      "Dino de Wet is a web developer, semantic SEO strategist, and AI architect focused on building digital systems that perform at a higher level.",
    url: "https://dinodewet.tech/about",
    images: [
      {
        url: "/images/dino-portrait-about.jpg",
        width: 1200,
        height: 630,
        alt: "Dino de Wet — Semantic SEO Strategist & AI Architect",
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://dinodewet.tech/about#webpage",
      "url": "https://dinodewet.tech/about",
      "name": "About Dino de Wet | Semantic SEO Strategist & AI Architect",
      "description": "Dino de Wet is a web developer, semantic SEO strategist, and AI architect based in Cape Town, South Africa.",
      "isPartOf": { "@id": "https://dinodewet.tech/#website" },
      "about": { "@id": "https://dinodewet.tech/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.tech" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dinodewet.tech/about" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://dinodewet.tech/#person",
      "name": "Dino de Wet",
      "givenName": "Dino",
      "familyName": "de Wet",
      "url": "https://dinodewet.tech",
      "image": {
        "@type": "ImageObject",
        "url": "https://dinodewet.tech/images/dino-portrait-about.jpg",
        "caption": "Dino de Wet — Semantic SEO Strategist & AI Architect",
      },
      "jobTitle": "Semantic SEO Web Developer & AI Architect",
      "description": "Dino de Wet is a web developer, semantic SEO strategist, and AI architect focused on building digital systems that perform at a higher level. His work sits at the intersection of search understanding, technical implementation, and future-facing digital strategy.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "email": "hello@dinodewet.tech",
      "knowsAbout": [
        "Semantic SEO Strategy",
        "Next.js Development",
        "WordPress Architecture",
        "AI System Design",
        "LLM Workflow Integration",
        "Technical SEO Foundations",
        "Information Architecture",
        "Digital Strategy",
        "Entity-Based SEO",
        "Content Intelligence",
        "Conversion Architecture",
        "Site Performance",
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Semantic SEO Strategist",
          "occupationLocation": { "@type": "City", "name": "Cape Town" },
          "skills": "Semantic SEO, Entity-Based Optimisation, Topical Authority, Technical SEO, Information Architecture",
        },
        {
          "@type": "Occupation",
          "name": "AI Architect",
          "occupationLocation": { "@type": "City", "name": "Cape Town" },
          "skills": "AI System Design, LLM Workflows, Prompt Engineering, AI-Enhanced Web Experiences",
        },
        {
          "@type": "Occupation",
          "name": "Web Developer",
          "occupationLocation": { "@type": "City", "name": "Cape Town" },
          "skills": "Next.js, React, WordPress, TypeScript, Performance Optimisation",
        },
      ],
      "worksFor": { "@id": "https://dinodewet.tech/#business" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dinodewet.tech/about",
      },
    },
  ],
};

const beliefs = [
  {
    title: "What I Believe",
    body: "Websites should be strategically structured, technically sound, fast, discoverable, and built for long-term usefulness. A digital asset that does not communicate meaning clearly is a missed opportunity.",
  },
  {
    title: "How I Work",
    body: "I combine technical development, search intelligence, semantic structure, and AI system thinking to create digital foundations that support real business outcomes — not short-term vanity metrics.",
  },
  {
    title: "Who I Work With",
    body: "Businesses, founders, service providers, and brands that want more than a brochure website and are ready to invest in digital infrastructure built for growth, authority, and long-term visibility.",
  },
];

const expertise = [
  "Semantic SEO Strategy",
  "Next.js Development",
  "WordPress Architecture",
  "AI System Design",
  "LLM Workflow Integration",
  "Technical SEO Foundations",
  "Information Architecture",
  "Digital Strategy",
  "Entity-Based SEO",
  "Content Intelligence",
  "Conversion Architecture",
  "Site Performance",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero — editorial triple portrait */}
      <section className="relative pt-36 pb-0 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Text */}
            <AnimatedSection className="pb-16">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Entity
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", letterSpacing: "-0.035em", lineHeight: 1.0 }}
              >
                About<br />Dino<br />de Wet
              </h1>
              <p style={{ color: "#a1a1a1", maxWidth: "440px", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Web developer, semantic SEO strategist, and AI architect. Building digital systems that perform at a higher level — at the intersection of search understanding, technical implementation, and future-facing digital strategy.
              </p>
            </AnimatedSection>

            {/* Portrait trio */}
            <AnimatedSection direction="right" delay={200} className="relative pb-0">
              <div className="grid grid-cols-3 gap-2 items-end">
                {/* Left — editorial B&W portrait */}
                <div
                  className="relative rounded-t-xl overflow-hidden border-t border-l border-r"
                  style={{ borderColor: "#1f1f1f", aspectRatio: "2/3", marginTop: "3rem" }}
                >
                  <Image
                    src="/images/dino-portrait-editorial.jpg"
                    alt="Dino de Wet — B&W editorial portrait"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                    style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)" }} />
                </div>

                {/* Centre — main portrait, tallest */}
                <div
                  className="relative rounded-t-xl overflow-hidden border-t border-l border-r"
                  style={{ borderColor: "#1f1f1f", aspectRatio: "2/3.5" }}
                >
                  <Image
                    src="/images/dino-portrait-about.jpg"
                    alt="Dino de Wet — Semantic SEO and AI Architect"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                    style={{ filter: "grayscale(20%) contrast(1.05) brightness(0.8)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)" }} />
                  {/* Name tag */}
                  <div className="absolute bottom-4 left-3 right-3">
                    <p className="text-xs font-heading font-bold text-white leading-tight" style={{ fontSize: "0.6rem", letterSpacing: "0.05em" }}>
                      DINO DE WET
                    </p>
                    <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", fontSize: "0.55rem" }}>
                      Semantic SEO · AI Architect
                    </p>
                  </div>
                </div>

                {/* Right — B&W dramatic close-up */}
                <div
                  className="relative rounded-t-xl overflow-hidden border-t border-l border-r"
                  style={{ borderColor: "#1f1f1f", aspectRatio: "2/3", marginTop: "2rem" }}
                >
                  <Image
                    src="/images/dino-portrait-bw.jpg"
                    alt="Dino de Wet — AI SEO Expert"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                    style={{ filter: "grayscale(100%) contrast(1.15) brightness(0.75)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)" }} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bio + Expertise */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Background
              </p>
              <h2
                className="font-heading font-bold text-white mb-8"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                The mind behind the work.
              </h2>
              <div className="flex flex-col gap-5" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                <p>
                  Dino de Wet is a web developer, semantic SEO strategist, and AI architect focused on building digital systems that perform at a higher level. His work sits at the intersection of search understanding, technical implementation, and future-facing digital strategy.
                </p>
                <p>
                  Rather than treating websites as isolated design projects, Dino approaches them as structured digital assets that need to communicate meaning clearly to users, search engines, and intelligent systems. This perspective shapes everything from information architecture and content frameworks to front-end development and AI integration.
                </p>
                <p>
                  With a strong focus on Next.js, WordPress, semantic site structure, and AI-enhanced digital workflows, Dino helps businesses move beyond outdated web models and toward platforms that are faster, smarter, and more aligned with how digital discovery now works.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div
                className="rounded-xl border p-8 mb-6"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                  Areas of Expertise
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                      <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                  Mission
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#ffffff", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                  Build modern digital systems that create authority, clarity, and growth — where development, search strategy, and AI implementation work together instead of separately.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Principles
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Belief, Method, and Focus
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div
                  className="card-hover h-full p-8 rounded-xl border"
                  style={{ background: "#0d0d0d", borderColor: "#1f1f1f" }}
                >
                  <h3 className="font-heading font-semibold text-white mb-4" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement — logo mark prominent */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-2xl border p-10 md:p-16 relative overflow-hidden"
              style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.015)" }}
            >
              {/* Ambient glow top right */}
              <div
                className="absolute -top-40 -right-40 w-96 h-96 opacity-5 pointer-events-none rounded-full"
                style={{ background: "radial-gradient(circle, white, transparent)" }}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-12">
                  {/* Logo mark */}
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-xl border p-6 inline-block"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Image
                        src="/images/logo-dino-de-wet.png"
                        alt="Dino de Wet — DW Manifesto — Semantic. Search. Sensory."
                        width={200}
                        height={80}
                        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      Brand Statement
                    </p>
                    <blockquote
                      className="font-heading font-bold text-white"
                      style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.3 }}
                    >
                      &ldquo;dinodewet.tech is the digital authority platform of Dino de Wet, combining semantic SEO, modern web development, and AI architecture to build websites and systems designed for visibility, performance, and long-term growth.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#050505" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Let&apos;s build something exceptional together.
            </h2>
            <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
              If you need a high-performance website, a semantic SEO strategy, or AI architecture for your business — this is the place to start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
              <Link
                href="/semantic-seo"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
