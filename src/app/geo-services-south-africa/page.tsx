import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Layers,
  Globe,
  FileText,
  Target,
  Search,
  Zap,
  CheckCircle,
  ChevronDown,
  BarChart2,
  ShoppingBag,
  Briefcase,
  MapPin,
  Brain,
  Network,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation Services South Africa | Dino de Wet",
  description:
    "Improve AI search visibility in ChatGPT, Google AI Overviews, and Perplexity with Generative Engine Optimisation services in South Africa by Dino de Wet.",
  keywords: [
    "Generative Engine Optimisation South Africa",
    "GEO Services South Africa",
    "AI SEO Consultant South Africa",
    "Answer Engine Optimisation South Africa",
    "ChatGPT Visibility Services",
    "Google AI Overviews SEO",
    "AI Search Optimisation",
    "Semantic SEO South Africa",
    "Dino de Wet",
    "Cape Town SEO",
    "LLM Visibility",
    "AEO Services",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/geo-services-south-africa",
  },
  openGraph: {
    title: "Generative Engine Optimisation Services South Africa | Dino de Wet",
    description:
      "Improve AI search visibility in ChatGPT, Google AI Overviews, and Perplexity with Generative Engine Optimisation services in South Africa by Dino de Wet.",
    url: "https://dinodewet.co.za/geo-services-south-africa",
    images: [
      {
        url: "/images/geo-services-south-africa.png",
        width: 1200,
        height: 630,
        alt: "Generative Engine Optimisation Services South Africa — Dino de Wet",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/geo-services-south-africa#webpage",
      "url": "https://dinodewet.co.za/geo-services-south-africa",
      "name": "Generative Engine Optimisation Services South Africa | Dino de Wet",
      "description":
        "Improve AI search visibility in ChatGPT, Google AI Overviews, and Perplexity with Generative Engine Optimisation services in South Africa by Dino de Wet.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/geo-services-south-africa#service" },
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
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/geo-services-south-africa#service",
      "name": "Generative Engine Optimisation Services South Africa",
      "url": "https://dinodewet.co.za/geo-services-south-africa",
      "description":
        "GEO services helping South African businesses improve visibility in AI-driven search systems including ChatGPT, Google AI Overviews, Perplexity, and Gemini through semantic architecture, entity clarity, and topical authority.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": [
        {
          "@type": "Country",
          "name": "South Africa",
        },
        {
          "@type": "City",
          "name": "Cape Town",
        },
      ],
      "serviceType": "Generative Engine Optimisation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GEO Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GEO Strategy and Opportunity Mapping",
              "description":
                "AI visibility opportunity analysis, entity and topic mapping, commercial vs informational intent separation, and South African market relevance mapping.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Semantic Content Architecture",
              "description":
                "Content structures optimised for extractability, passage relevance, topical coverage, answer readiness, and citation-worthiness in AI search systems.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entity SEO and Brand Clarity",
              "description":
                "Author and brand entity clarity, service entity mapping, organisation and person-page relationships, and digital footprint alignment.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI-Ready Service Page Development",
              "description":
                "Commercial pages optimised for service intent, conversion intent, passage extraction, local relevance, and AI citation potential.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Topical Authority Development",
              "description":
                "Pillar page strategies, subtopic clusters, internal linking frameworks, and semantic expansion paths that demonstrate depth to AI retrieval systems.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Search Visibility Consulting",
              "description":
                "Strategic consulting on GEO, AEO, Google AI Overviews visibility, ChatGPT citation readiness, and content systems for AI retrieval.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/geo-services-south-africa#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Generative Engine Optimisation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Generative Engine Optimisation (GEO) is the practice of improving your website so AI-driven systems — such as ChatGPT, Google AI Overviews, Perplexity, and Gemini — can retrieve, interpret, trust, and cite your content in generated answers.",
          },
        },
        {
          "@type": "Question",
          "name": "Is GEO different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. SEO focuses heavily on ranking pages in search engines. GEO focuses on visibility inside AI-generated results and answer layers. The best strategy combines both — a site should rank in Google and be citation-ready for AI retrieval systems simultaneously.",
          },
        },
        {
          "@type": "Question",
          "name": "Can GEO help my business in South Africa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. South African businesses can benefit significantly from GEO by building authority early in a market where very few companies are actively optimising for AI retrieval. This is especially true in specialist, B2B, local service, and expert-driven industries.",
          },
        },
        {
          "@type": "Question",
          "name": "Which platforms does GEO help with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "GEO can improve your readiness for AI-driven platforms and interfaces including Google AI Overviews, ChatGPT, Perplexity, Gemini, and other AI-assisted search systems that retrieve and synthesise web content.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you guarantee citations in AI tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No ethical consultant can guarantee citations or rankings. What I provide is a structured strategy that improves your eligibility, clarity, and visibility for retrieval-based systems by building the semantic architecture, entity clarity, and topical depth that AI systems require.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need GEO if I already invest in SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Traditional SEO remains important, but it no longer covers the full visibility landscape. GEO bridges the gap between ranking in search engines and being retrieved and cited inside AI-generated answers — two different but complementary goals.",
          },
        },
        {
          "@type": "Question",
          "name": "Is GEO only for large companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. Smaller businesses often have a real advantage when they build focused topical authority and entity clarity within a narrow niche. The ability to be the most clearly defined entity in a specific topic space matters more than domain size.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer GEO strategy only, or implementation too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Both. I can provide consulting, content strategy, page planning, and hands-on optimisation depending on your needs and internal capacity.",
          },
        },
      ],
    },
  ],
};

const coreServices = [
  {
    icon: Bot,
    title: "GEO Strategy and Opportunity Mapping",
    tag: "Strategy",
    description:
      "I identify where your brand can gain visibility across generative search environments and where traditional SEO alone is no longer sufficient. This creates a clear action map aligned to your commercial priorities and South African market context.",
    bullets: [
      "AI visibility opportunity analysis",
      "Entity and topic mapping",
      "Commercial vs informational intent separation",
      "Brand mention and citation potential analysis",
      "South African market relevance mapping",
    ],
  },
  {
    icon: Layers,
    title: "Semantic Content Architecture",
    tag: "Architecture",
    description:
      "AI systems retrieve entities, facts, passages, definitions, relationships, and semantically connected sections — not just keyword-matched pages. I develop content structures engineered for extractability, passage relevance, and citation-worthiness.",
    bullets: [
      "Extractability and passage relevance",
      "Topical coverage and answer readiness",
      "Contextual depth and citation-worthiness",
      "Service, cluster, and semantic section planning",
    ],
  },
  {
    icon: Brain,
    title: "Entity SEO and Brand Clarity",
    tag: "Authority",
    description:
      "A strong GEO strategy requires your brand to be interpreted as a reliable, well-defined entity — not just a website with pages. I strengthen the signals that AI systems use to understand, trust, and surface your brand.",
    bullets: [
      "Author and brand entity clarity",
      "Service entity mapping",
      "Organisation and person-page relationships",
      "Semantic consistency across the site",
      "Digital footprint alignment",
    ],
  },
  {
    icon: FileText,
    title: "AI-Ready Service Page Development",
    tag: "Execution",
    description:
      "Commercial pages should not be thin sales pages. They need to rank, convert, and provide enough structured information for retrieval systems to trust and cite them. I build or optimise pages that satisfy all three requirements simultaneously.",
    bullets: [
      "Service and conversion intent alignment",
      "Passage extraction and local relevance",
      "Semantic completeness",
      "AI citation potential",
    ],
  },
  {
    icon: Network,
    title: "Topical Authority Development",
    tag: "Depth",
    description:
      "To earn visibility in AI search, isolated pages are not enough. Your site needs clusters that demonstrate depth, breadth, and expertise within a topic. I develop the pillar and cluster infrastructure that signals category ownership to AI retrieval systems.",
    bullets: [
      "Pillar page strategies",
      "Subtopic cluster development",
      "Internal linking frameworks",
      "Semantic expansion paths",
    ],
  },
  {
    icon: Search,
    title: "GEO Content Optimisation",
    tag: "Optimisation",
    description:
      "Improving existing content so it is more useful to search systems and AI retrieval layers. This involves rewriting, restructuring, and enriching pages so they communicate facts, definitions, and relationships with the clarity AI systems require.",
    bullets: [
      "Stronger definitions and direct answers",
      "Fact-rich rewriting and statistics integration",
      "Clearer contextual flow and sentence structure",
      "Stronger query-response alignment",
    ],
  },
  {
    icon: Zap,
    title: "AI Search Visibility Consulting",
    tag: "Consulting",
    description:
      "For brands, internal teams, or agencies that need strategic direction rather than done-for-you execution. I provide consulting focused on GEO strategy, AEO, AI SEO roadmaps, and practical systems for improving AI retrieval readiness.",
    bullets: [
      "GEO and AEO strategy",
      "Google AI Overviews visibility",
      "ChatGPT and Perplexity citation readiness",
      "Content systems for AI retrieval",
    ],
  },
];

const targetMarkets = [
  {
    icon: Briefcase,
    title: "Service Businesses",
    description:
      "Service businesses in South Africa depend on trust and expertise. GEO helps establish your brand as the clearly defined authority in your niche so AI systems surface you when clients are researching complex, high-value decisions.",
  },
  {
    icon: BarChart2,
    title: "B2B Companies",
    description:
      "B2B buyers use AI tools extensively in the research phase. Building entity clarity, topical depth, and citation-ready content positions your brand as the credible answer before a prospect even reaches your website.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce Brands",
    description:
      "AI search surfaces category-level and comparison content. eCommerce brands with strong topical authority and well-structured product and category entities are far better positioned to earn AI-assisted discovery.",
  },
  {
    icon: Globe,
    title: "Specialist and Healthcare Providers",
    description:
      "High-trust industries benefit most from the entity clarity and source credibility that GEO builds. Law firms, healthcare providers, and specialist consultants gain a structural advantage when their expertise is well-defined to AI systems.",
  },
  {
    icon: MapPin,
    title: "Local and Cape Town Businesses",
    description:
      "Local businesses in Cape Town and across South Africa can build geo-entity authority early. Local market dynamics, location intent, and service area context all factor into how AI systems retrieve and present local service providers.",
  },
  {
    icon: Target,
    title: "Founders and Personal Brands",
    description:
      "Founders and expert-led businesses building a strong personal or brand entity are among the best candidates for GEO. A well-defined person-entity reinforces topical authority, credibility, and AI citation potential simultaneously.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "I assess your current website, brand entity signals, content structure, topical coverage, and AI visibility readiness. This creates a baseline understanding of where you stand and where the highest-value opportunities exist.",
    bullets: ["Website and entity assessment", "Content coverage review", "AI visibility baseline"],
  },
  {
    step: "02",
    title: "Entity and Topic Mapping",
    description:
      "I define the core topics, entities, commercial priorities, and search pathways your site needs to own. This map becomes the foundation for every content and architecture decision that follows.",
    bullets: ["Core entity definition", "Topic and query mapping", "Commercial priority setting"],
  },
  {
    step: "03",
    title: "Architecture and Page Planning",
    description:
      "I create a page structure that supports both conversion and retrieval visibility. Every page has a defined role — whether it anchors authority, supports a cluster, or satisfies a specific commercial or informational intent.",
    bullets: ["Page structure design", "Pillar and cluster planning", "Intent alignment framework"],
  },
  {
    step: "04",
    title: "Content and Optimisation",
    description:
      "I write or optimise priority pages so they are semantically stronger, structurally clearer, and more citation-ready. Existing pages are upgraded; new pages are built to the specification the strategy requires.",
    bullets: ["Content writing and rewriting", "Semantic depth improvement", "Citation readiness optimisation"],
  },
  {
    step: "05",
    title: "Authority Reinforcement",
    description:
      "I strengthen internal linking, contextual consistency, brand clarity, and supporting assets to reinforce topical authority across the site. Each signal layer compounds the visibility of the pages built around it.",
    bullets: ["Internal linking architecture", "Brand and entity signal reinforcement", "Supporting asset development"],
  },
  {
    step: "06",
    title: "Iteration and Expansion",
    description:
      "GEO is not static. As AI search evolves, the site should continue expanding its entity confidence, topic depth, and retrieval footprint. I monitor, adapt, and build on what is working.",
    bullets: ["Ongoing monitoring and adaptation", "Topic expansion", "AI search evolution tracking"],
  },
];

const whyDino = [
  {
    title: "Specialist in Semantic and AI Search",
    description:
      "I specialise in semantic SEO, topical authority, entity SEO, and modern search architecture. GEO is an extension of these disciplines — not a separate practice. The structural knowledge required for AI retrieval is the same knowledge that drives strong traditional rankings.",
  },
  {
    title: "South African Market Context",
    description:
      "South African businesses need more than imported strategies. Local market dynamics, industry context, location intent, and commercial search patterns all shape what GEO looks like in practice here. I build with that context built in.",
  },
  {
    title: "Commercial-First, Not Buzzword-Led",
    description:
      "GEO is not approached here as a trend to sell. It is approached as a structural problem: how does a business become visible, trusted, and cited in the systems that are now influencing how people find services and make decisions.",
  },
  {
    title: "SEO Plus GEO as a Combined System",
    description:
      "The strongest strategy is SEO plus GEO. I build sites and content that can rank in Google, support passage extraction, reinforce entity understanding, and provide clear facts AI systems can use. Both systems are served by the same disciplined architecture.",
  },
];

const faqs = [
  {
    question: "What is Generative Engine Optimisation?",
    answer:
      "Generative Engine Optimisation (GEO) is the practice of improving your website so AI-driven systems — such as ChatGPT, Google AI Overviews, Perplexity, and Gemini — can retrieve, interpret, trust, and cite your content in generated answers.",
  },
  {
    question: "Is GEO different from SEO?",
    answer:
      "Yes. SEO focuses heavily on ranking pages in search engines. GEO focuses on visibility inside AI-generated results and answer layers. The best strategy combines both — a site should rank in Google and be citation-ready for AI retrieval systems simultaneously.",
  },
  {
    question: "Can GEO help my business in South Africa?",
    answer:
      "Yes. South African businesses can benefit significantly from GEO by building authority early in a market where very few companies are actively optimising for AI retrieval. This is especially true in specialist, B2B, local service, and expert-driven industries.",
  },
  {
    question: "Which platforms does GEO help with?",
    answer:
      "GEO can improve your readiness for AI-driven platforms and interfaces including Google AI Overviews, ChatGPT, Perplexity, Gemini, and other AI-assisted search systems that retrieve and synthesise web content.",
  },
  {
    question: "Do you guarantee citations in AI tools?",
    answer:
      "No ethical consultant can guarantee citations or rankings. What I provide is a structured strategy that improves your eligibility, clarity, and visibility for retrieval-based systems by building the semantic architecture, entity clarity, and topical depth that AI systems require.",
  },
  {
    question: "Do I need GEO if I already invest in SEO?",
    answer:
      "Yes. Traditional SEO remains important, but it no longer covers the full visibility landscape. GEO bridges the gap between ranking in search engines and being retrieved and cited inside AI-generated answers — two different but complementary goals.",
  },
  {
    question: "Is GEO only for large companies?",
    answer:
      "No. Smaller businesses often have a real advantage when they build focused topical authority and entity clarity within a narrow niche. The ability to be the most clearly defined entity in a specific topic space matters more than domain size.",
  },
  {
    question: "Do you offer GEO strategy only, or implementation too?",
    answer:
      "Both. I can provide consulting, content strategy, page planning, and hands-on optimisation depending on your needs and internal capacity.",
  },
];

const relatedServices = [
  { label: "Home", href: "/" },
  { label: "About Dino de Wet", href: "/about" },
  { label: "Answer Engine Optimisation Services", href: "/answer-engine-optimisation-services-south-africa" },
  { label: "AI SEO Services", href: "/ai-seo-services-south-africa" },
  { label: "Semantic SEO Web Development", href: "/semantic-seo" },
  { label: "Web Development Services", href: "/web-development-services" },
];

export default function GEOServicesSouthAfricaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Breadcrumbs trail={[{ name: "GEO Services South Africa", href: "/geo-services-south-africa" }]} />

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
                Service — South Africa
              </p>
              <h1
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Generative Engine Optimisation Services in South Africa
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
                Get your brand discovered in the next generation of search. GEO helps South African businesses become more visible in AI-driven search environments — ChatGPT, Google AI Overviews, Perplexity, Gemini — by building the semantic authority, entity clarity, and citation readiness that AI retrieval systems require.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book a GEO Consultation <ArrowRight size={14} />
                </Link>
                <Link
                  href="#geo-services"
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
                  { label: "AI Platforms Targeted", value: "ChatGPT, Gemini, Perplexity" },
                  { label: "Strategy Focus", value: "Citation Readiness" },
                  { label: "Market Context", value: "South Africa" },
                  { label: "Approach", value: "SEO + GEO Combined" },
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

      {/* What Is GEO */}
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
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                What Is Generative Engine Optimisation?
              </h2>
              <p
                className="mb-6"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Generative Engine Optimisation is the process of improving your website so AI-driven search systems can retrieve, interpret, trust, and cite your content more effectively.
              </p>
              <p
                className="mb-6"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Instead of only competing for ten blue links, your brand now needs to compete for inclusion inside generated answers. That requires more than keyword targeting — it requires clear entity definition, structured topical coverage, extractable facts, semantic relationships, source trust, and commercially aligned content architecture.
              </p>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                For South African businesses, this creates an early opportunity. Most companies are still focused only on traditional SEO. Very few are actively building for AI retrieval, answer synthesis, and brand mention visibility.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    What traditional SEO asks
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {["Can this page rank?", "Does this target the right keyword?", "Does this page have enough backlinks?"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    What GEO also asks
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Can this page be understood by AI systems?",
                      "Can this passage be selected and extracted?",
                      "Can this statement be trusted as a citable source?",
                      "Can this brand be identified as a reliable entity?",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why GEO Matters for SA */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Why It Matters
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Why GEO Matters for South African Brands
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "600px",
              }}
            >
              Search behaviour is changing fast. Informational searches are increasingly being answered directly by AI interfaces before a user clicks through to a website. Brands that are not structurally visible to AI systems risk losing attention, trust, and future market share — often without noticing it happening.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Increase AI Citation Chances",
                detail: "Improve the structural eligibility of your content to be selected, quoted, and cited inside AI-generated answers to high-value queries.",
              },
              {
                title: "Strengthen Commercial Visibility",
                detail: "Build authority around the service, product, and category queries that carry real commercial intent — where decisions and purchases are made.",
              },
              {
                title: "Build Entity Authority",
                detail: "Create a stronger digital entity that AI systems can interpret correctly — one that is associated with specific services, locations, and expertise.",
              },
              {
                title: "Dominate a Less Saturated Market",
                detail: "Most South African businesses have not yet built for AI retrieval. Early movers who establish topical authority now will be significantly harder to displace later.",
              },
              {
                title: "Future-Proof Organic Strategy",
                detail: "GEO extends your organic strategy beyond traditional rankings. As search interfaces evolve, your visibility does not depend on one single channel.",
              },
              {
                title: "Serve High-Trust Industries",
                detail: "Law, healthcare, finance, and expert consulting rely on trust. GEO builds the entity clarity and source credibility those industries require to win in AI-assisted search.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div
                  className="rounded-xl border p-6 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <p
                    className="font-heading font-semibold text-white mb-2"
                    style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                  >
                    {item.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Who It&apos;s For
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Who GEO Services Are For
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              My GEO services are suited to businesses that want to lead in AI-era search visibility — especially those whose market depends on being understood, trusted, and surfaced for complex, high-intent queries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 80}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5"
                      style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
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
      <section id="geo-services" className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              What My GEO Services Include
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "560px",
              }}
            >
              A complete service suite covering every layer of AI search visibility — from strategy and entity architecture through to content optimisation and consulting.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 80}>
                  <div
                    className="card-hover p-8 rounded-xl border h-full"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border"
                        style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}
                      >
                        <Icon size={18} color="#ffffff" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                        style={{
                          color: "#a1a1a1",
                          borderColor: "#2a2a2a",
                          background: "rgba(255,255,255,0.03)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <h3
                      className="font-heading font-semibold text-white mb-3"
                      style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm mb-5"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#ffffff" }}
                          />
                          <p
                            className="text-xs"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            {b}
                          </p>
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

      {/* GEO vs SEO */}
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
                Comparison
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                What Makes GEO Different From Traditional SEO?
              </h2>
              <p
                className="mb-6"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Traditional SEO mainly focuses on ranking pages in search engine results. GEO focuses on making your content retrievable, extractable, and trustworthy enough to be used inside AI-generated answers — a different goal that requires different structural decisions.
              </p>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                The strongest strategy is not SEO versus GEO — it is SEO plus GEO. A well-built site should be able to rank in Google, support passage extraction, reinforce entity understanding, answer multi-intent queries, and provide clear facts AI systems can use confidently.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    Traditional SEO focus
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Ranking in search engine results pages",
                      "Keyword targeting and density",
                      "Backlink acquisition",
                      "Click-through from ten blue links",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#a1a1a1" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-widest mb-4"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                  >
                    GEO adds
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Retrievability and passage extractability",
                      "Entity clarity and semantic relationships",
                      "Source credibility and citation readiness",
                      "Topical depth that AI systems trust",
                      "Brand visibility inside generated answers",
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
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Process
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              My GEO Process
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "540px",
              }}
            >
              A structured six-phase system from discovery through to ongoing iteration. Each phase builds the foundation the next one requires.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 80}>
                <div
                  className="rounded-xl border p-8"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div>
                      <p
                        className="font-heading font-bold mb-2"
                        style={{ fontSize: "3rem", color: "rgba(255,255,255,0.08)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        {step.step}
                      </p>
                      <h3
                        className="font-heading font-semibold text-white"
                        style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                      >
                        Phase {step.step}: {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm lg:col-span-1"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#ffffff" }}
                          />
                          <p
                            className="text-xs font-medium"
                            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                          >
                            {b}
                          </p>
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

      {/* Why Dino */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Why Work With Me
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Why Work With Dino de Wet
            </h2>
            <p
              className="mb-16"
              style={{
                color: "#a1a1a1",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                maxWidth: "580px",
              }}
            >
              Based in Cape Town, South Africa. Specialising in semantic SEO, topical authority, entity SEO, AI SEO, and modern search architecture. My approach treats GEO as an extension of retrieval, ranking, passage selection, and entity-based visibility — not as a separate trend.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {whyDino.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div
                  className="card-hover p-8 rounded-xl border h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
                >
                  <h3
                    className="font-heading font-semibold text-white mb-3"
                    style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div
              className="rounded-xl border p-8"
              style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
            >
              <p
                className="text-xs font-medium uppercase tracking-widest mb-5"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Built for visibility beyond blue links
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Based in Cape Town, South Africa",
                  "Semantic SEO and AI SEO specialist",
                  "Strategy built around topical authority and entity clarity",
                  "Suitable for brands, service businesses, and expert-led companies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GEO for South African Businesses */}
      <section className="py-28 relative" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                Local Focus
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                GEO Services for South African Businesses
              </h2>
              <p
                className="mb-6"
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                South African businesses need more than imported SEO strategies. Local market dynamics, industry context, language variations, location intent, and commercial search patterns all shape what effective GEO looks like in this market.
              </p>
              <p
                style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
              >
                Whether you want to build local authority first or expand into broader international AI visibility, the foundation starts with strong entity architecture and commercially aligned topical depth — built with South African search behaviour in mind.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div
                className="rounded-xl border p-8"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-5"
                  style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                >
                  Targeting
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "South African search visibility and AI discoverability",
                    "Cape Town and national service demand",
                    "Local plus international authority building",
                    "AI-era content discoverability",
                    "B2B and expert-led South African markets",
                    "High-trust industries requiring source credibility",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} color="#ffffff" className="mt-0.5 flex-shrink-0" />
                      <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
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
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Related Services
            </p>
            <h2
              className="font-heading font-bold text-white mb-8"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              You May Also Need
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service, i) => (
              <AnimatedSection key={service.label} delay={i * 60}>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm transition-colors duration-150 hover:text-white"
                  style={{
                    borderColor: "#1f1f1f",
                    background: "rgba(255,255,255,0.02)",
                    color: "#a1a1a1",
                    fontFamily: "var(--font-body)",
                  }}
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
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              FAQ
            </p>
            <h2
              className="font-heading font-bold text-white mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
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
                  <summary
                    className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none"
                    style={{ userSelect: "none" }}
                  >
                    <h3
                      className="font-heading font-semibold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={16}
                      color="#a1a1a1"
                      className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p
                      className="text-sm"
                      style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                    >
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
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Get Started
            </p>
            <h2
              className="font-heading font-bold text-white mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Book a GEO Strategy Consultation
            </h2>
            <p
              className="mb-10"
              style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}
            >
              If your business wants to compete in the next stage of search, now is the time to build for AI visibility. I help South African brands improve their presence across search engines and generative engines through clear semantic architecture, stronger entity signals, AI-ready service pages, and topical authority systems built for modern retrieval.
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
            <p
              className="mt-8 text-xs"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Strategy consultations are focused on your specific market, industry, and current search presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices
        heading="Build Your AI Search Visibility"
        intro="GEO connects directly to the broader AI search programme — extend it through these focused engagements."
        links={[
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation strategy" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/llm-visibility", anchor: "LLM visibility" },
          { href: "/blog/generative-engine-optimisation", anchor: "complete GEO guide" },
        ]}
      />
    </>
  );
}
