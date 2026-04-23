import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Mail, MessageSquare, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dino de Wet | Start a Project",
  description:
    "Contact Dino de Wet to discuss your next high-performance website, semantic SEO strategy, or AI architecture project. Based in Cape Town, available worldwide.",
  alternates: {
    canonical: "https://dinodewet.co.za/contact",
  },
  openGraph: {
    title: "Contact Dino de Wet | Start a Project",
    description:
      "Contact Dino de Wet to discuss your next high-performance website, semantic SEO strategy, or AI architecture project.",
    url: "https://dinodewet.co.za/contact",
    images: [
      {
        url: "/images/dino-portrait-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dino de Wet — Available for Projects",
      },
    ],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://dinodewet.co.za/contact#webpage",
      "url": "https://dinodewet.co.za/contact",
      "name": "Contact Dino de Wet | Start a Project",
      "description": "Contact Dino de Wet to discuss your next high-performance website, semantic SEO strategy, or AI architecture project.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://dinodewet.co.za/contact" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://dinodewet.co.za/#person",
      "name": "Dino de Wet",
      "email": "dinodewet555@gmail.com",
      "url": "https://dinodewet.co.za",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Business Enquiries",
        "email": "dinodewet555@gmail.com",
        "url": "https://dinodewet.co.za/contact",
        "availableLanguage": "English",
        "areaServed": "Worldwide",
      },
    },
  ],
};

const contactPoints = [
  { icon: Globe, label: "Website", value: "dinodewet.co.za" },
  { icon: Mail, label: "Email", value: "dinodewet555@gmail.com" },
  { icon: MessageSquare, label: "Response Time", value: "Within 24 hours" },
];

const projectTypes = [
  "High-performance website in Next.js",
  "Structured WordPress platform",
  "Semantic SEO-led digital foundation",
  "AI systems designed for business use cases",
  "Digital strategy and architecture consultation",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Contact
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
              >
                Contact<br />Dino de Wet
              </h1>
              <p style={{ color: "#a1a1a1", maxWidth: "520px", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Whether you need a high-performance website, a semantic SEO-driven digital strategy, or AI architecture for your business — dinodewet.co.za is built to start meaningful digital projects with clarity and precision.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Section */}
      <section className="pb-28" style={{ background: "#050505" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              {/* Portrait */}
              <AnimatedSection direction="left">
                <div
                  className="relative rounded-xl overflow-hidden border"
                  style={{ borderColor: "#1f1f1f", aspectRatio: "3/4" }}
                >
                  <Image
                    src="/images/dino-portrait-hero.jpg"
                    alt="Dino de Wet — Available for Projects"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top"
                    style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.7)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 40%, transparent 70%)" }}
                  />
                  {/* Status overlay */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs mb-3"
                      style={{ borderColor: "#2a2a2a", background: "rgba(5,5,5,0.85)", color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "#ffffff" }} />
                      Available for new projects
                    </div>
                    <p className="font-heading font-bold text-white text-sm">Dino de Wet</p>
                    <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Cape Town, South Africa</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact info */}
              <AnimatedSection direction="left" delay={150}>
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Contact Info
                  </p>
                  <div className="flex flex-col gap-4">
                    {contactPoints.map((point) => {
                      const Icon = point.icon;
                      return (
                        <div key={point.label} className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0"
                            style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                          >
                            <Icon size={14} color="#a1a1a1" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{point.label}</p>
                            <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>{point.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>

              {/* Project types */}
              <AnimatedSection direction="left" delay={250}>
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Project Types
                  </p>
                  <div className="flex flex-col gap-3">
                    {projectTypes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#ffffff" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <AnimatedSection direction="right" delay={100}>
                <div
                  className="rounded-xl border p-8 md:p-10"
                  style={{ borderColor: "#1f1f1f", background: "#0d0d0d" }}
                >
                  <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Start a Project
                  </p>
                  <h2
                    className="font-heading font-bold text-white mb-3"
                    style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}
                  >
                    Tell me about your project
                  </h2>
                  <p className="text-sm mb-8" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                    Use the form below to outline your project, goals, and current challenges. From there, the conversation can move toward strategy, architecture, and implementation.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-16" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-heading font-bold text-white mb-1" style={{ fontSize: "1.1rem" }}>
                  Prefer a direct conversation?
                </p>
                <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                  Reach out directly at dinodewet555@gmail.com
                </p>
              </div>
              <Image
                src="/images/logo-dino-de-wet.png"
                alt="Dino de Wet — Semantic. Search. Sensory."
                width={140}
                height={50}
                style={{ filter: "brightness(0) invert(1)", opacity: 0.4 }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
