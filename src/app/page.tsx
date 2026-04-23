import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SplitReveal from "@/components/SplitReveal";
import ImageReveal from "@/components/ImageReveal";
import TiltCard from "@/components/TiltCard";
import GSAPReveal from "@/components/GSAPReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Search, Code, Globe, Cpu, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Dino de Wet | Semantic SEO Web Developer & AI Architect",
  description:
    "Dino de Wet builds high-performance websites and intelligent digital systems combining semantic SEO, Next.js development, and AI architecture for authority, visibility, and growth.",
  alternates: {
    canonical: "https://dinodewet.co.za",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dinodewet.co.za/#website",
      "name": "Dino de Wet",
      "url": "https://dinodewet.co.za",
      "description": "High-performance websites and intelligent digital systems combining semantic SEO, Next.js development, and AI architecture.",
      "publisher": { "@id": "https://dinodewet.co.za/#person" },
      "inLanguage": "en-ZA",
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/#webpage",
      "url": "https://dinodewet.co.za",
      "name": "Dino de Wet | Semantic SEO Web Developer & AI Architect",
      "description": "Dino de Wet builds high-performance websites and intelligent digital systems combining semantic SEO, Next.js development, and AI architecture for authority, visibility, and growth.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://dinodewet.co.za/#person",
      "name": "Dino de Wet",
      "givenName": "Dino",
      "familyName": "de Wet",
      "url": "https://dinodewet.co.za",
      "image": {
        "@type": "ImageObject",
        "@id": "https://dinodewet.co.za/#personImage",
        "url": "https://dinodewet.co.za/images/dino-portrait-about.jpg",
        "caption": "Dino de Wet — Semantic SEO Web Developer & AI Architect",
      },
      "jobTitle": "Semantic SEO Web Developer & AI Architect",
      "description": "Dino de Wet is a web developer, semantic SEO strategist, and AI architect based in Cape Town, South Africa, building high-performance digital systems that combine search intelligence, technical development, and AI.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "email": "dinodewet555@gmail.com",
      "knowsAbout": [
        "Semantic SEO",
        "AI Architecture",
        "Next.js Development",
        "WordPress Development",
        "LLM Workflow Design",
        "Technical SEO",
        "Information Architecture",
        "Entity-Based SEO",
        "Topical Authority",
        "Digital Strategy",
        "Content Intelligence",
        "Structured Data",
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Web Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Cape Town",
        },
        "skills": "Semantic SEO, AI Architecture, Next.js, WordPress, LLM Integration, Structured Data",
        "description": "Builds high-performance websites and intelligent digital systems combining semantic SEO, AI architecture, and modern web development.",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dinodewet.co.za/about",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/#business",
      "name": "Dino de Wet",
      "alternateName": "dinodewet.co.za",
      "url": "https://dinodewet.co.za",
      "description": "Semantic SEO web development, AI architecture, and Next.js development services by Dino de Wet.",
      "founder": { "@id": "https://dinodewet.co.za/#person" },
      "employee": { "@id": "https://dinodewet.co.za/#person" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Semantic SEO Web Development",
        "AI Architecture",
        "Next.js Development",
        "WordPress Development",
        "Digital Strategy",
        "LLM Workflow Design",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services by Dino de Wet",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Semantic SEO Web Development",
              "url": "https://dinodewet.co.za/semantic-seo",
              "description": "Websites structured for topical depth, crawlability, entity clarity, and long-term organic visibility.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Architecture",
              "url": "https://dinodewet.co.za/ai-architect",
              "description": "Design and deploy practical AI systems, LLM workflows, and intelligent business solutions.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Modern Website Development",
              "description": "Fast, scalable websites in Next.js and WordPress with a focus on performance and business outcomes.",
            },
          },
        ],
      },
    },
  ],
};

const services = [
  {
    icon: Search,
    title: "Semantic SEO Web Development",
    description:
      "Websites structured for topical depth, crawlability, entity clarity, and long-term organic visibility. Every page, link, and section is architected for search understanding.",
    href: "/semantic-seo",
  },
  {
    icon: Brain,
    title: "AI Architecture",
    description:
      "Design and deploy practical AI systems, workflows, assistants, and LLM-based solutions tailored to real business needs and existing digital infrastructure.",
    href: "/ai-architect",
  },
  {
    icon: Code,
    title: "Modern Website Development",
    description:
      "Fast, scalable websites in Next.js and WordPress with a focus on performance, structural clarity, and measurable business outcomes.",
    href: "/contact",
  },
];

const outcomes = [
  { icon: Globe, label: "Technically stronger digital assets" },
  { icon: Search, label: "More discoverable in search" },
  { icon: LineChart, label: "Aligned with user intent and conversion" },
  { icon: Cpu, label: "Capable of supporting AI-driven growth" },
  { icon: Brain, label: "Built for topical authority" },
  { icon: Code, label: "Scalable, performant, modern infrastructure" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />

      {/* Positioning Statement */}
      <section
        className="py-24 relative"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SplitReveal direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Core Positioning
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                Modern businesses need more than a website. They need a digital foundation.
              </h2>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Dino de Wet operates at the intersection of search intelligence, technical development, and AI systems. He helps businesses build digital foundations that perform across search, content, user experience, and intelligent automation — not just visually, but structurally.
              </p>
            </SplitReveal>

            <GSAPReveal direction="right" delay={150}>
              <ImageReveal className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/nextjs-portrait.png"
                  alt="Dino de Wet — Next.js Web Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.3) 40%, transparent 70%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs"
                    style={{ borderColor: "#2a2a2a", background: "rgba(5,5,5,0.85)", color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    Next.js · WordPress · AI-Integrated Development
                  </div>
                </div>
              </ImageReveal>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SplitReveal>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Core Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              What Dino Builds
            </h2>
          </SplitReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <GSAPReveal key={service.title} delay={i * 130}>
                  <TiltCard className="h-full">
                    <Link href={service.href} className="block h-full">
                      <div
                        className="card-hover h-full p-8 rounded-xl border flex flex-col gap-6"
                        style={{ background: "#0d0d0d", borderColor: "#1f1f1f" }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center border"
                          style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                        >
                          <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3
                            className="font-heading font-semibold text-white mb-3"
                            style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center gap-2 text-sm" style={{ color: "#a1a1a1" }}>
                          <span style={{ fontFamily: "var(--font-body)" }}>Learn more</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </GSAPReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GEO Services */}
      <section className="py-28 relative" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SplitReveal>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Generative Engine Optimisation
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Get Found by AI Search — Not Just Google
            </h2>
            <p className="mb-10" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "640px" }}>
              AI-powered search engines like ChatGPT, Google AI Overviews, and Perplexity are changing how people discover businesses. Generative Engine Optimisation (GEO) ensures your content is structured to be retrieved, cited, and recommended by these systems.
            </p>
          </SplitReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GSAPReveal delay={0}>
              <Link href="/geo-services-south-africa" className="block h-full">
                <div className="card-hover h-full p-8 rounded-xl border flex flex-col gap-4" style={{ background: "#050505", borderColor: "#1f1f1f" }}>
                  <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    Generative Engine Optimisation Services
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                    Structure your content for AI citation, passage ranking, and entity recognition in generative search results.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm" style={{ color: "#a1a1a1" }}>
                    <span style={{ fontFamily: "var(--font-body)" }}>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </GSAPReveal>

            <GSAPReveal delay={130}>
              <Link href="/ai-seo-services-south-africa" className="block h-full">
                <div className="card-hover h-full p-8 rounded-xl border flex flex-col gap-4" style={{ background: "#050505", borderColor: "#1f1f1f" }}>
                  <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    AI SEO Services
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                    Optimise for AI-driven search visibility across large language models, retrieval systems, and generative answer engines.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm" style={{ color: "#a1a1a1" }}>
                    <span style={{ fontFamily: "var(--font-body)" }}>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </GSAPReveal>

            <GSAPReveal delay={260}>
              <Link href="/answer-engine-optimisation-services-south-africa" className="block h-full">
                <div className="card-hover h-full p-8 rounded-xl border flex flex-col gap-4" style={{ background: "#050505", borderColor: "#1f1f1f" }}>
                  <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    Answer Engine Optimisation Services
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                    Position your content to appear as the direct answer in featured snippets, AI Overviews, and voice search results.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm" style={{ color: "#a1a1a1" }}>
                    <span style={{ fontFamily: "var(--font-body)" }}>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Why This Approach */}
      <section
        className="py-28 relative"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SplitReveal>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Why This Approach Works
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                Rankings and conversions no longer come from isolated tactics.
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Search engines increasingly evaluate entities, relationships, structure, expertise, relevance, and satisfaction. Digital growth now depends on how well your website communicates meaning, trust, and usefulness.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Dino&apos;s approach brings together technical implementation and search intelligence — so businesses can compete with a stronger, more coherent digital presence.
              </p>

              <GSAPReveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {outcomes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-4 rounded-lg border"
                      style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                    >
                      <Icon size={15} color="#a1a1a1" strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                      <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </GSAPReveal>
            </SplitReveal>

            <GSAPReveal direction="right" delay={200}>
              <ImageReveal
                direction="top"
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: "#1f1f1f" }}
              >
                <Image
                  src="/images/dashboard-mockup.jpg"
                  alt="Performance dashboard — digital systems that track and drive results"
                  width={700}
                  height={500}
                  className="w-full"
                  style={{ filter: "grayscale(20%) brightness(0.85)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Digital systems built to perform, track, and scale.
                  </p>
                </div>
              </ImageReveal>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Semantic SEO Preview */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SplitReveal>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Semantic SEO
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                Web Development Built for Search Understanding
              </h2>
              <p className="mb-4" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Semantic SEO web development is the practice of building websites structured around meaning, topical relationships, search intent, user pathways, and entity clarity — rather than isolated keywords alone.
              </p>
              <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                From Next.js builds to WordPress architecture and LLM-powered solutions — every project is designed for visibility, authority, and long-term growth.
              </p>
              <Link
                href="/semantic-seo"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Explore Semantic SEO <ArrowRight size={14} />
              </Link>
            </SplitReveal>

            <GSAPReveal direction="right" delay={200}>
              <ImageReveal
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}
              >
                <Image
                  src="/images/semantic-seo-services.png"
                  alt="Complete Semantic SEO Services — Entity-Based Optimisation and Structured Data"
                  width={700}
                  height={520}
                  className="w-full"
                  style={{ filter: "brightness(0.88) saturate(0.7)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 60%)" }}
                />
              </ImageReveal>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* AI Architect Preview */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/ai-hands.jpg"
          alt="AI and human intelligence converging — AI architecture for modern business"
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "grayscale(100%) brightness(0.35) contrast(1.1)" }}
          data-speed="0.85"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.85) 100%)" }}
        />
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.4 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SplitReveal>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                AI Architecture
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                AI Systems Designed for Real Business Use
              </h2>
              <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                AI is no longer just a concept for experimentation. Dino works as an AI architect — helping businesses design practical AI-powered systems that support real workflows, user experiences, and digital growth strategies.
              </p>
              <Link
                href="/ai-architect"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Explore AI Architecture <ArrowRight size={14} />
              </Link>
            </SplitReveal>

            <GSAPReveal stagger direction="right" delay={150}>
              {[
                "LLM Workflow Design",
                "AI-Enhanced Websites",
                "Chatbot & Assistant Logic",
                "Content Intelligence",
                "Automation Architecture",
                "Semantic Search Layers",
                "Knowledge Base Systems",
                "Prompt Engineering",
              ].map((item) => (
                <div
                  key={item}
                  className="px-3 py-3 rounded-lg border text-xs mb-0"
                  style={{
                    borderColor: "#2a2a2a",
                    background: "rgba(5,5,5,0.7)",
                    color: "#a1a1a1",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item}
                </div>
              ))}
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        className="py-28 relative"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <GSAPReveal direction="left" className="lg:col-span-2">
              <ImageReveal className="relative rounded-2xl overflow-hidden border" style={{ borderColor: "#1f1f1f", aspectRatio: "3/4" }} direction="top">
                <Image
                  src="/images/dino-portrait-about.jpg"
                  alt="Dino de Wet — Digital Strategist and AI Architect"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  style={{ filter: "grayscale(15%) contrast(1.05) brightness(0.85)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <Image
                    src="/images/logo-dino-de-wet.png"
                    alt="Dino de Wet — Semantic. Search. Sensory."
                    width={180}
                    height={60}
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                  />
                </div>
              </ImageReveal>
            </GSAPReveal>

            <SplitReveal delay={150} className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                About Dino
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                Built at the intersection of search, systems, and architecture.
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Rather than treating websites as isolated design projects, Dino approaches them as structured digital assets that need to communicate meaning clearly to users, search engines, and intelligent systems alike.
              </p>
              <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                dinodewet.co.za is both a service platform and a digital authority hub — reflecting a modern approach where development, search strategy, and AI implementation work together instead of separately.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About Dino <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book a Call
                </Link>
              </div>
            </SplitReveal>
          </div>
        </div>
      </section>

      {/* GEO Blog Cluster */}
      <section className="py-28 relative" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SplitReveal>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              GEO Knowledge Base
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Learn Generative Engine Optimisation
            </h2>
            <p className="mb-12" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "560px" }}>
              A complete resource covering how AI search works, how to optimise for it, and what it means for South African businesses.
            </p>
          </SplitReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/blog/generative-engine-optimisation", title: "What Is Generative Engine Optimisation?", desc: "The complete guide to GEO — what it is, why it matters, and how to implement it." },
              { href: "/blog/generative-engine-optimisation/geo-vs-seo", title: "GEO vs SEO", desc: "How generative engine optimisation differs from traditional SEO in signals, goals, and measurement." },
              { href: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", title: "How AI Search Engines Choose Sources", desc: "The six signals AI systems use to select, rank, and cite content in generated answers." },
              { href: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", title: "What Makes Content Citation-Ready for AI Search?", desc: "Seven structural properties that make content retrievable and citable by AI search systems." },
              { href: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", title: "How Google AI Overviews Change SEO and GEO", desc: "How AI Overviews work, what content gets selected, and how to optimise for inclusion." },
              { href: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", title: "Generative Engine Optimisation for South African Businesses", desc: "Why GEO matters for SA businesses and how to implement it for local and international visibility." },
              { href: "/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility", title: "How Passage Ranking Affects AI Search Visibility", desc: "How Google's passage ranking connects to AI retrieval and what it means for content structure." },
            ].map((post, i) => (
              <GSAPReveal key={post.href} delay={i * 80}>
                <Link href={post.href} className="block h-full">
                  <div className="card-hover h-full p-6 rounded-xl border flex flex-col gap-3" style={{ background: "#050505", borderColor: "#1f1f1f" }}>
                    <h3 className="font-heading font-semibold text-white" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                      {post.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#a1a1a1" }}>
                      <span style={{ fontFamily: "var(--font-body)" }}>Read article</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SplitReveal>
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Start a Project
            </p>
            <h2
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              Ready to build something that performs?
            </h2>
            <p className="mx-auto mb-10" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "480px" }}>
              Whether it&apos;s a semantic SEO-driven website, Next.js build, or AI architecture — let&apos;s design a digital system that creates authority and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-3.5 rounded-lg font-medium text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Start a Project
              </Link>
              <Link href="/about" className="btn-secondary px-8 py-3.5 rounded-lg font-medium text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Learn More
              </Link>
            </div>
          </SplitReveal>
        </div>
      </section>
    </>
  );
}
