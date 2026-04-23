import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Cpu, Workflow, MessageSquare, BarChart3, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Architect | Dino de Wet",
  description:
    "AI architecture services by Dino de Wet. Design and deploy practical AI systems, LLM workflows, intelligent web experiences, and business automation solutions tailored to real operational needs.",
  keywords: [
    "AI Architect",
    "AI Architecture",
    "LLM Workflows",
    "AI Systems Design",
    "Business Automation",
    "Intelligent Web Experiences",
    "AI Integration",
    "Prompt Engineering",
    "Next.js AI",
    "Dino de Wet",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/ai-architect",
  },
  openGraph: {
    title: "AI Architect | Dino de Wet",
    description:
      "Design and deploy practical AI systems, LLM workflows, intelligent web experiences, and business automation solutions.",
    url: "https://dinodewet.co.za/ai-architect",
    images: [
      {
        url: "/images/dino-portrait-about.jpg",
        width: 1200,
        height: 630,
        alt: "Dino de Wet — AI Architect",
      },
    ],
  },
};

const aiArchitectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/ai-architect#webpage",
      "url": "https://dinodewet.co.za/ai-architect",
      "name": "AI Architect | Dino de Wet",
      "description": "AI architecture services by Dino de Wet — design and deploy practical AI systems, LLM workflows, intelligent web experiences, and business automation solutions.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": {
        "@type": "Service",
        "@id": "https://dinodewet.co.za/ai-architect#service",
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "AI Architect", "item": "https://dinodewet.co.za/ai-architect" },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/ai-architect#service",
      "name": "AI Architecture",
      "url": "https://dinodewet.co.za/ai-architect",
      "description": "Practical AI systems designed for real business use — from LLM workflow design to AI-enhanced websites and intelligent business automation, built with architecture-first thinking.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": "Worldwide",
      "serviceType": "AI Architecture",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Architecture Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal Business Assistants" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflow Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Intelligence Systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semantic Search Layers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Knowledge Base Tools" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLM-Powered Websites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prompt Engineering Systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Enhanced Digital Experiences" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/ai-architect#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does an AI architect do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI architect designs the structure around AI tools — identifying use cases, mapping input/output logic, defining user interactions, and planning scalability. Rather than simply connecting tools, an AI architect creates a coherent system that supports performance, usability, and long-term value.",
          },
        },
        {
          "@type": "Question",
          "name": "How is strategic AI integration different from surface-level automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Surface-level automation involves generic tools like adding a chatbot widget. Strategic AI integration involves mapping AI systems to real business workflows, designing custom LLM solutions, integrating with web and search strategy, and building context-aware, scalable architectures with measurable outcomes.",
          },
        },
      ],
    },
  ],
};

const architectPillars = [
  {
    icon: Brain,
    title: "AI With Practical Application",
    description: "Dino focuses on real implementation — not empty hype. From LLM workflow design to AI-enhanced business systems, every solution is built around measurable, operational outcomes.",
  },
  {
    icon: Cpu,
    title: "Architecture Thinking",
    description: "An AI architect does more than connect tools. He designs the structure around them — identifying use cases, mapping input/output logic, defining user interactions, and planning scalability.",
  },
  {
    icon: Layers,
    title: "AI + Web + Search Integration",
    description: "AI becomes part of a broader digital ecosystem supporting search visibility, user experience, operational efficiency, and content intelligence — not a disconnected feature.",
  },
  {
    icon: Workflow,
    title: "Strategic Integration",
    description: "The real challenge with AI is not access to tools — it is knowing how to structure those tools into a coherent system that supports performance, usability, and long-term value.",
  },
];

const useCases = [
  { icon: MessageSquare, label: "Internal Business Assistants" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Brain, label: "Content Intelligence Systems" },
  { icon: Cpu, label: "Semantic Search Layers" },
  { icon: BarChart3, label: "Knowledge Base Tools" },
  { icon: Layers, label: "LLM-Powered Websites" },
  { icon: Brain, label: "Prompt Engineering Systems" },
  { icon: Workflow, label: "AI-Enhanced Digital Experiences" },
];

export default function AIArchitectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiArchitectSchema) }}
      />
      {/* Hero — full bleed AI visual */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden" style={{ background: "#050505" }}>
        <Image
          src="/images/ai-hands.jpg"
          alt="Human and AI intelligence converging — AI architecture for business systems"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "grayscale(100%) brightness(0.3) contrast(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.75) 40%, rgba(5,5,5,0.4) 100%)" }}
        />
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.35 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40 w-full">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Specialisation
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", letterSpacing: "-0.035em", lineHeight: 1.0 }}
              >
                AI Architect
              </h1>
              <p style={{ color: "#a1a1a1", maxWidth: "580px", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "2.5rem" }}>
                AI is no longer just a concept for experimentation. Dino de Wet helps businesses design practical AI-powered systems that support real workflows, user experiences, and digital growth strategies.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Explore AI Solutions <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              The Framework
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              AI Systems Designed for<br />Real Business Use
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectPillars.map((pillar, i) => {
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

      {/* Next.js + AI Integration — editorial portrait */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Differentiation
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                From LLM Workflows to Intelligent Web Experiences
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                What makes Dino&apos;s approach different is the ability to integrate AI architecture with semantic web strategy and modern development. Instead of treating AI as a disconnected feature, it becomes part of a broader digital ecosystem.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                This supports search visibility, user experience, operational efficiency, and content intelligence — all within a single, coherent digital strategy built on Next.js and structured data.
              </p>
            </AnimatedSection>

            {/* B&W code + portrait */}
            <AnimatedSection direction="right" delay={200}>
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: "#1f1f1f", aspectRatio: "1/1" }}
              >
                <Image
                  src="/images/nextjs-code-portrait.png"
                  alt="Next.js development integrated with AI architecture — Dino de Wet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.85)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.1) 50%, transparent 100%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs"
                    style={{ borderColor: "#2a2a2a", background: "rgba(5,5,5,0.85)", color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    AI + Next.js + Semantic Architecture
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strategic vs Surface-Level */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                The Difference
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Strategic AI Integration, Not Surface-Level Automation
              </h2>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                For businesses exploring AI, the real challenge is not access to tools. It is knowing how to structure those tools into a coherent system that supports performance, usability, and long-term value.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-xl border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Surface-Level</p>
                <div className="flex flex-col gap-3">
                  {["Add ChatGPT to a form", "Generic AI chatbot widget", "Disconnected automation tools", "One-size-fits-all solutions", "No strategic architecture"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#2a2a2a" }} />
                      <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)" }}>
                <p className="text-xs uppercase tracking-widest mb-6 text-white" style={{ fontFamily: "var(--font-body)" }}>Strategic Architecture</p>
                <div className="flex flex-col gap-3">
                  {["Mapped to real business workflows", "Custom LLM system design", "Integrated with web & search strategy", "Scalable, context-aware systems", "Architecture-first approach"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                      <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-28" style={{ background: "#050505" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Applications
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Use Cases & Possibilities
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={i * 70}>
                  <div
                    className="card-hover p-6 rounded-xl border flex flex-col items-start gap-4"
                    style={{ background: "#0d0d0d", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center border"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={16} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-medium text-white leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                      {item.label}
                    </p>
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
              Ready to architect an intelligent digital system?
            </h2>
            <p className="mb-8" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
              Let&apos;s design an AI architecture strategy tailored to your business workflows, goals, and digital ecosystem.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start the Conversation <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
