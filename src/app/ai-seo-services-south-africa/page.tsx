import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Layers,
  Brain,
  FileText,
  Target,
  Globe,
  Zap,
  Cpu,
  CheckCircle,
  ChevronDown,
  BarChart2,
  ShoppingBag,
  Briefcase,
  MapPin,
  Network,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Services South Africa | AI SEO Consultant | Dino de Wet",
  description:
    "AI SEO services in South Africa for stronger search visibility, smarter content systems, and future-ready organic growth across traditional and AI-driven search.",
  keywords: [
    "AI SEO Services South Africa",
    "AI SEO Consultant South Africa",
    "AI SEO Cape Town",
    "AI SEO Agency South Africa",
    "AI-Powered SEO Services",
    "SEO for AI Search",
    "AI Search Optimisation South Africa",
    "Semantic AI SEO",
    "Dino de Wet",
    "AI SEO Strategy",
    "LLM Visibility SEO",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/ai-seo-services-south-africa",
  },
  openGraph: {
    title: "AI SEO Services South Africa | AI SEO Consultant | Dino de Wet",
    description:
      "AI SEO services in South Africa for stronger search visibility, smarter content systems, and future-ready organic growth across traditional and AI-driven search.",
    url: "https://dinodewet.co.za/ai-seo-services-south-africa",
    images: [
      {
        url: "/images/ai-seo-services-south-africa.png",
        width: 1200,
        height: 630,
        alt: "AI SEO Services South Africa — Dino de Wet",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/ai-seo-services-south-africa#webpage",
      "url": "https://dinodewet.co.za/ai-seo-services-south-africa",
      "name": "AI SEO Services South Africa | AI SEO Consultant | Dino de Wet",
      "description":
        "AI SEO services in South Africa for stronger search visibility, smarter content systems, and future-ready organic growth across traditional and AI-driven search.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/ai-seo-services-south-africa#service" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dinodewet.co.za",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "GEO Services South Africa",
            "item": "https://dinodewet.co.za/geo-services-south-africa",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI SEO Services South Africa",
            "item": "https://dinodewet.co.za/ai-seo-services-south-africa",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/ai-seo-services-south-africa#service",
      "name": "AI SEO Services South Africa",
      "url": "https://dinodewet.co.za/ai-seo-services-south-africa",
      "description":
        "AI SEO services combining semantic search optimisation, entity clarity, topical authority, and AI-assisted content systems to improve organic visibility across search engines and AI-driven discovery platforms in South Africa.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": [
        { "@type": "Country", "name": "South Africa" },
        { "@type": "City", "name": "Cape Town" },
      ],
      "serviceType": "AI SEO",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI SEO Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI SEO Strategy",
              "description":
                "Search opportunity analysis, topic and entity mapping, intent segmentation, commercial page planning, and AI search readiness assessment.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Semantic SEO and Topic Architecture",
              "description":
                "Topical maps, service-content relationships, supporting content clusters, semantic content networks, and internal linking systems.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI-Assisted Content Strategy",
              "description":
                "AI-guided keyword and topic expansion, query clustering, brief generation, content planning, and editorial consistency systems.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Page Optimisation",
              "description":
                "Service and conversion page optimisation for clear intent matching, stronger semantic structure, entity reinforcement, and improved retrieval compatibility.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entity SEO and Brand Positioning",
              "description":
                "Person and brand entity signals, service associations, trust and author signals, organisational consistency, and digital footprint alignment.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GEO and AI Search Visibility Alignment",
              "description":
                "Improving readiness for Google AI Overviews, AI-assisted source selection, retrieval-based content visibility, and answer-ready formatting.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/ai-seo-services-south-africa#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are AI SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AI SEO services help businesses improve organic visibility using AI-informed strategy, semantic optimisation, entity clarity, topical authority development, and stronger content systems aligned to both traditional search and AI-driven discovery platforms.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AI SEO just using ChatGPT to write blog posts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Real AI SEO is much broader. It includes research systems, semantic planning, topic architecture, content quality control, entity optimisation, AI search readiness, and structured workflows that maintain editorial standards.",
          },
        },
        {
          "@type": "Question",
          "name": "Can AI SEO help South African businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. South African businesses can benefit from AI SEO by improving both local organic visibility and future readiness for changing search behaviour — including the shift toward AI-mediated discovery.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AI SEO different from GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. AI SEO is broader in scope. GEO focuses specifically on visibility inside generative search and AI answer systems. AI SEO includes that, but also covers the larger search strategy including traditional rankings, semantic architecture, and content systems.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer AI SEO for service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. AI SEO works especially well for service-led businesses that need authority, trust, and high-intent search visibility across both traditional and AI-driven search environments.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you use AI to generate content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AI can be used inside the workflow for research, brief generation, and drafting, but content should always be guided by strategy, expertise, and editorial standards. The focus is on high-quality AI-assisted systems, not automation for its own sake.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AI SEO suitable for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Smaller businesses can benefit significantly when they focus on clear niche positioning, strong service pages, and tightly structured topical coverage — areas where AI SEO delivers measurable results.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I still need traditional SEO if I invest in AI SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Technical SEO, site quality, internal linking, and commercial relevance still matter. AI SEO works best when layered on top of strong SEO fundamentals, not as a replacement for them.",
          },
        },
      ],
    },
  ],
};

const coreServices = [
  {
    icon: Bot,
    title: "AI SEO Strategy",
    tag: "Strategy",
    description:
      "A clear strategy built around your market, services, competitors, topics, and organic growth priorities. This is where AI-informed analysis meets commercial intent — creating a roadmap that prioritises the actions with the highest search and revenue impact.",
    bullets: [
      "Search opportunity analysis",
      "Topic and entity mapping",
      "Intent segmentation",
      "Commercial page planning",
      "AI search readiness assessment",
    ],
  },
  {
    icon: Layers,
    title: "Semantic SEO and Topic Architecture",
    tag: "Architecture",
    description:
      "AI SEO works best when a website is structured around meaning, not just keywords. I develop semantic topic maps that connect your services, expertise, and content into a coherent architecture that search systems can interpret with confidence.",
    bullets: [
      "Topical maps and service-content relationships",
      "Supporting cluster and semantic content networks",
      "Hierarchy planning",
      "Internal linking systems",
      "Page-to-page contextual reinforcement",
    ],
  },
  {
    icon: Brain,
    title: "AI-Assisted Content Strategy",
    tag: "Content",
    description:
      "AI can accelerate research and production — but only when guided by clear strategy and editorial discipline. I help businesses build content systems that leverage AI for the right tasks while maintaining the expert-led quality that builds real authority.",
    bullets: [
      "Keyword and topic expansion",
      "Query clustering and intent grouping",
      "Brief generation and content planning",
      "Section mapping and FAQ development",
      "Editorial consistency frameworks",
    ],
  },
  {
    icon: FileText,
    title: "AI SEO Content Briefs and Writing Systems",
    tag: "Systems",
    description:
      "Strong results require strong inputs. I create content briefs that improve topical completeness, semantic relevance, and factual clarity — helping teams produce better content faster without sacrificing quality control or editorial standards.",
    bullets: [
      "Topical completeness and intent alignment",
      "Semantic relevance and factual clarity",
      "Section structure and passage extractability",
      "Conversion support frameworks",
    ],
  },
  {
    icon: Target,
    title: "Commercial Page Optimisation",
    tag: "Execution",
    description:
      "Your money pages should not be thin, generic, or underdeveloped. I optimise service and conversion pages for clear intent matching, stronger semantic structure, deeper informational support, and better compatibility with modern retrieval systems.",
    bullets: [
      "Clear intent matching",
      "Entity reinforcement",
      "Deeper informational support",
      "Improved conversion readiness",
      "Retrieval system compatibility",
    ],
  },
  {
    icon: Globe,
    title: "Entity SEO and Brand Positioning",
    tag: "Authority",
    description:
      "AI SEO is closely connected to entity clarity. Search systems need to understand who you are, what you do, and why your site should be trusted. I strengthen the entity signals that make your brand legible and credible across the web.",
    bullets: [
      "Person and brand entity signals",
      "Service and topical associations",
      "Trust and author signals",
      "Organisational consistency",
      "Digital footprint alignment",
    ],
  },
  {
    icon: Zap,
    title: "GEO and AI Search Visibility Alignment",
    tag: "Alignment",
    description:
      "AI SEO now overlaps significantly with Generative Engine Optimisation and Answer Engine Optimisation. I help businesses improve their content so it is more readable, more extractable, and more citation-ready across AI-driven search interfaces.",
    bullets: [
      "Google AI Overviews readiness",
      "AI-assisted source selection",
      "Retrieval-based content visibility",
      "Citation-friendly page structure",
      "Answer-ready formatting",
    ],
  },
  {
    icon: Cpu,
    title: "Technical and Structural SEO Support",
    tag: "Technical",
    description:
      "AI SEO still depends on strong technical foundations. I identify and address crawlability, indexation, rendering, and site structure issues that limit how well search systems can access and interpret your content.",
    bullets: [
      "Crawlability and indexation checks",
      "Site structure improvements",
      "Internal link refinement",
      "Content consolidation and page pruning",
      "Next.js and WordPress SEO architecture guidance",
    ],
  },
];

const targetMarkets = [
  {
    icon: Briefcase,
    title: "Service Businesses",
    description:
      "Service businesses in South Africa rely on trust and expertise. AI SEO builds the semantic authority, clear entity signals, and topical depth that earn visibility in both search rankings and AI-mediated discovery.",
  },
  {
    icon: BarChart2,
    title: "B2B Companies",
    description:
      "B2B buyers conduct extensive research before engaging. AI SEO aligns your commercial pages and supporting content to the entire research journey — from awareness to decision-stage queries.",
  },
  {
    icon: MapPin,
    title: "Local Businesses",
    description:
      "Local businesses in Cape Town and across South Africa benefit from AI SEO by building geo-entity authority, strong service page architecture, and local relevance signals that improve discovery in local and AI-assisted search.",
  },
  {
    icon: Target,
    title: "Consultants and Founders",
    description:
      "Consultant-led and founder-led brands grow their authority through clear personal entity positioning, well-structured expertise pages, and content systems that establish topical credibility across their niche.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce Brands",
    description:
      "eCommerce brands benefit from AI SEO through stronger category architecture, product entity enrichment, and topic clusters that connect product pages to broader category authority.",
  },
  {
    icon: Network,
    title: "Agencies and In-House Teams",
    description:
      "Agencies and in-house SEO teams use AI SEO consulting and content systems to improve strategy quality, scale production without sacrificing depth, and align their workflows with modern search demands.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Search and Market Analysis",
    description:
      "I assess your current search presence, competitor positioning, topic coverage, and entity clarity. This establishes where you stand and where the highest-impact AI SEO opportunities exist in your market.",
    bullets: ["Current search presence audit", "Competitor topic analysis", "Entity and brand review"],
  },
  {
    step: "02",
    title: "Strategy and Topic Mapping",
    description:
      "I map your commercial priorities against the topic landscape, define the entity signals your brand needs, and build a prioritised roadmap of actions aligned to revenue outcomes.",
    bullets: ["Topic and entity mapping", "Commercial priority setting", "SEO + AI search roadmap"],
  },
  {
    step: "03",
    title: "Architecture and Page Planning",
    description:
      "I design the site and content architecture that serves both traditional rankings and AI retrieval. Every page has a defined intent, topic role, and relationship to the broader semantic structure.",
    bullets: ["Page structure design", "Pillar and cluster planning", "Internal link architecture"],
  },
  {
    step: "04",
    title: "Content Production and Optimisation",
    description:
      "I write or optimise pages using AI-assisted workflows guided by strategy, expertise, and editorial standards. Existing pages are upgraded; new pages are built to the specification the architecture requires.",
    bullets: ["Commercial page optimisation", "Semantic depth improvement", "AI-assisted brief and content production"],
  },
  {
    step: "05",
    title: "Measurement and Iteration",
    description:
      "AI SEO compounds over time. I monitor rankings, traffic quality, entity signals, and content performance — iterating the strategy as your authority grows and as search systems evolve.",
    bullets: ["Ranking and traffic monitoring", "Content gap identification", "Strategy iteration"],
  },
];

const serviceOptions = [
  {
    title: "AI SEO Consulting",
    detail: "Strategy & guidance",
    description:
      "Strategy, audits, and guidance for businesses or in-house teams that need direction without full implementation. Suitable for brands with internal resources that need a clear AI SEO roadmap.",
  },
  {
    title: "AI SEO Page Planning",
    detail: "Architecture",
    description:
      "Service page architecture, cluster planning, and commercial topic mapping. Ideal for businesses ready to build or rebuild their core pages with AI search readiness baked in from the start.",
  },
  {
    title: "AI SEO Content Systems",
    detail: "Production workflows",
    description:
      "Brief creation, content workflow design, and semantic production systems. Designed for businesses that want to scale content quality without losing editorial control or strategic alignment.",
  },
  {
    title: "AI SEO Implementation",
    detail: "Hands-on optimisation",
    description:
      "Hands-on optimisation of pages, site structure, and supporting content. Full execution across commercial pages, topic clusters, entity signals, and AI search readiness improvements.",
  },
  {
    title: "AI SEO Retainers",
    detail: "Ongoing growth",
    description:
      "Ongoing strategic support for businesses that want sustained organic growth. Retainers combine strategy, content production, optimisation, and iteration into a compounding monthly system.",
  },
];

const faqs = [
  {
    question: "What are AI SEO services?",
    answer:
      "AI SEO services help businesses improve organic visibility using AI-informed strategy, semantic optimisation, entity clarity, topical authority development, and stronger content systems aligned to both traditional search and AI-driven discovery platforms.",
  },
  {
    question: "Is AI SEO just using ChatGPT to write blog posts?",
    answer:
      "No. Real AI SEO is much broader. It includes research systems, semantic planning, topic architecture, content quality control, entity optimisation, AI search readiness, and structured workflows that maintain editorial standards.",
  },
  {
    question: "Can AI SEO help South African businesses?",
    answer:
      "Yes. South African businesses can benefit from AI SEO by improving both local organic visibility and future readiness for changing search behaviour — including the shift toward AI-mediated discovery.",
  },
  {
    question: "Is AI SEO different from GEO?",
    answer:
      "Yes. AI SEO is broader in scope. GEO focuses specifically on visibility inside generative search and AI answer systems. AI SEO includes that, but also covers the larger search strategy including traditional rankings, semantic architecture, and content systems.",
  },
  {
    question: "Do you offer AI SEO for service businesses?",
    answer:
      "Yes. AI SEO works especially well for service-led businesses that need authority, trust, and high-intent search visibility across both traditional and AI-driven search environments.",
  },
  {
    question: "Do you use AI to generate content?",
    answer:
      "AI can be used inside the workflow for research, brief generation, and drafting, but content should always be guided by strategy, expertise, and editorial standards. The focus is on high-quality AI-assisted systems, not automation for its own sake.",
  },
  {
    question: "Is AI SEO suitable for small businesses?",
    answer:
      "Yes. Smaller businesses can benefit significantly when they focus on clear niche positioning, strong service pages, and tightly structured topical coverage — areas where AI SEO delivers measurable results.",
  },
  {
    question: "Do I still need traditional SEO if I invest in AI SEO?",
    answer:
      "Yes. Technical SEO, site quality, internal linking, and commercial relevance still matter. AI SEO works best when layered on top of strong SEO fundamentals, not as a replacement for them.",
  },
];

const relatedServices = [
  { label: "Home", href: "/" },
  { label: "About Dino de Wet", href: "/about" },
  { label: "GEO Services South Africa", href: "/geo-services-south-africa" },
  { label: "Answer Engine Optimisation", href: "/answer-engine-optimisation-services-south-africa" },
  { label: "Semantic SEO Web Development", href: "/semantic-seo" },
  { label: "Web Development Services", href: "/web-development-services" },
];

export default function AISEOServicesSouthAfricaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Breadcrumbs trail={[{ name: "AI SEO Services South Africa", href: "/ai-seo-services-south-africa" }]} />

      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
            <AnimatedSection className="pb-20">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-6"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Service — Generative Engine Optimisation
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                AI SEO Services in South Africa
              </h1>
              <p
                style={{
                  color: "#a1a1a1",
                  maxWidth: "520px",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  marginBottom: "2.5rem",
                }}
              >
                Build stronger organic visibility with AI-informed SEO strategy. AI SEO combines semantic search principles, entity-based optimisation, topical authority, and modern content systems to improve how your business performs across search engines — and across AI-driven discovery platforms like Google AI Overviews, ChatGPT, and Perplexity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book an AI SEO Consultation <ArrowRight size={14} />
                </Link>
                <Link
                  href="#ai-seo-services"
                  className="btn-secondary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="relative pb-20">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Strategy Focus", value: "Semantic + AI Systems" },
                  { label: "Search Targets", value: "Google, AI Overviews, LLMs" },
                  { label: "Market Context", value: "South Africa" },
                  { label: "Approach", value: "SEO + GEO + AEO" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border p-6"
                    style={{
                      borderColor: "#1f1f1f",
                      background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                    }}
                  >
                    <p
                      className="font-heading font-bold text-white mb-1"
                      style={{ fontSize: "1rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Is AI SEO */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Foundation
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                What Is AI SEO?
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                AI SEO is the strategic use of artificial intelligence, semantic SEO principles, structured content systems, and search intelligence to improve organic visibility. It is not about publishing low-quality automated content or replacing strategy with shortcuts.
              </p>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                The goal is to build a website that is easier for search systems to understand, easier for users to trust, and better positioned to compete in both classic rankings and AI-mediated search environments.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                For South African businesses, AI SEO creates an early opportunity — most companies are still using an older search model focused on isolated keywords and disconnected pages. The businesses that adapt early will have a structural advantage in both traditional search and AI search.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    What AI SEO combines
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Traditional SEO fundamentals",
                      "Semantic search optimisation",
                      "Topical authority development",
                      "Entity SEO",
                      "AI-assisted research and workflow acceleration",
                      "Preparation for AI-driven search experiences",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    What AI SEO improves for SA brands
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Authority in emerging search categories",
                      "Local and national organic visibility",
                      "Content quality at scale",
                      "Visibility across AI-mediated discovery platforms",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Who It&apos;s For
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Who AI SEO Services Are For
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "560px" }}>
              AI SEO is a strong fit for businesses whose market depends on being found for high-intent searches, category terms, service queries, or expert-led questions in South Africa and beyond.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 80}>
                  <div className="card-hover p-8 rounded-xl border h-full" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section
        id="ai-seo-services"
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              What My AI SEO Services Include
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "560px" }}>
              A complete service suite covering every layer of AI-informed search — from strategy and semantic architecture through to content systems, commercial page optimisation, and technical foundations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 80}>
                  <div className="card-hover p-8 rounded-xl border h-full" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                        <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                        style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                          <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{b}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI SEO vs Traditional SEO */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Comparison
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                What Makes AI SEO Different From Traditional SEO?
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Traditional SEO often focuses on rankings, links, and keywords in isolation. AI SEO takes a broader view — it asks whether the site has clear semantic structure, whether topics are connected properly, whether content explains subjects deeply enough, and whether modern systems can extract useful facts and relationships.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                AI SEO does not replace traditional SEO. It improves it. The strongest modern approach combines technical SEO, semantic SEO, entity SEO, topical authority, AI-assisted workflow design, and AI search visibility readiness into one coherent system.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Traditional SEO asks
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Can this page rank?",
                      "Does it target the right keyword?",
                      "Does it have enough backlinks?",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#a1a1a1" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    AI SEO also asks
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Does the site have clear semantic structure?",
                      "Are topics connected and covered with depth?",
                      "Can modern systems extract useful facts and relationships?",
                      "Is the brand understood as a reliable entity?",
                      "Can this content be retrieved and cited in AI-generated answers?",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Approach
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                My Approach to AI SEO
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                I treat AI SEO as a serious evolution of search strategy, not a shortcut. That means the work is grounded in structure, semantic depth, commercial relevance, and long-term authority — not automation for its own sake.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                The goal is to build a website that performs better in search today and is structurally ready for the direction search is heading — toward AI-mediated discovery, entity-based retrieval, and answer-layer visibility.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    What I do not build campaigns around
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Mass low-quality AI content",
                      "Generic prompts with no editorial control",
                      "Thin pages designed only for volume",
                      "Keyword-stuffed copy",
                      "Automation without strategy",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#a1a1a1" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    What I focus on
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Entity-first architecture",
                      "Strong commercial page development",
                      "Semantic depth and topical ownership",
                      "High-quality AI-assisted workflows",
                      "Better retrieval and citation potential",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Process
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              My AI SEO Process
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "540px" }}>
              A structured five-step system from market analysis to measurable organic growth. Each phase builds on the last to create a compounding, strategy-led AI SEO system.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 80}>
                <div className="rounded-xl border p-8" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div>
                      <p className="font-heading font-bold mb-2" style={{ fontSize: "3rem", color: "rgba(255,255,255,0.08)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                        {step.step}
                      </p>
                      <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                        Step {step.step}: {step.title}
                      </h3>
                    </div>
                    <p className="text-sm lg:col-span-1" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ffffff" }} />
                          <p className="text-xs font-medium" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{b}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dino + Results */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Why Work With Me
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Why Work With Dino de Wet
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "600px" }}>
              Based in Cape Town, South Africa. I specialise in semantic SEO, topical authority, entity SEO, AI SEO, and modern search strategy. My approach is built for businesses that want more than surface-level optimisation — focused on the structural side of visibility.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              {
                title: "What results AI SEO aims to improve",
                items: [
                  "Rankings for core service and commercial terms",
                  "Topical authority around your niche",
                  "Better internal content alignment",
                  "More scalable content operations",
                  "Improved organic traffic quality",
                  "Better extractability for AI-driven search",
                ],
              },
            ].map((group) =>
              group.items.map((item, i) => (
                <AnimatedSection key={item} delay={i * 60}>
                  <div className="rounded-xl border p-5 h-full" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>

          <AnimatedSection delay={500}>
            <div className="rounded-xl border p-8" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                AI SEO services for South African markets
              </p>
              <p className="text-sm mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7, maxWidth: "680px" }}>
                My AI SEO services are tailored for brands targeting Cape Town, Johannesburg, Durban, national South African visibility, and specialist industry niches — whether you want to dominate a South African service category or build broader digital authority.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {["Cape Town", "Johannesburg", "Durban", "National SA visibility", "Local industry niches", "Local + international demand"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={13} color="#ffffff" className="flex-shrink-0" />
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Engagement
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              AI SEO Service Options
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "520px" }}>
              AI SEO work can be delivered in different ways depending on your business needs, internal capacity, and growth stage.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOptions.map((option, i) => (
              <AnimatedSection key={option.title} delay={i * 100}>
                <div className="card-hover p-8 rounded-xl border h-full" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                      {option.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded border"
                      style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}
                    >
                      {option.detail}
                    </span>
                  </div>
                  <p className="text-sm mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                    {option.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Enquire <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section
        className="py-24"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Related Services
            </p>
            <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              You May Also Need
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service, i) => (
              <AnimatedSection key={service.label} delay={i * 60}>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm transition-colors duration-150 hover:text-white"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)", color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                >
                  {service.label}
                  <ArrowRight size={12} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              FAQ
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <details
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none" style={{ userSelect: "none" }}>
                    <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}>
                      {faq.question}
                    </h3>
                    <ChevronDown size={16} color="#a1a1a1" className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Get Started
            </p>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Book an AI SEO Strategy Consultation
            </h2>
            <p className="mb-10" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
              If you want to build a stronger organic growth system for the next phase of search, AI SEO should be part of your strategy. I help South African businesses build smarter SEO systems through semantic architecture, commercial page development, topic authority, AI-assisted workflows, and future-facing search optimisation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Contact Dino de Wet
              </Link>
            </div>
            <p className="mt-8 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Strategy consultations are focused on your specific market, industry, and current search presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices
        heading="Build Your AI Search Visibility"
        intro="AI SEO performs best when paired with the foundational and complementary disciplines that feed the same retrieval and answer surfaces."
        links={[
          { href: "/ai-seo", anchor: "AI SEO" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/llm-visibility", anchor: "LLM visibility strategy" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
        ]}
      />
    </>
  );
}
