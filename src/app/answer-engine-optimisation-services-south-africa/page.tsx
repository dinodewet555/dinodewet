import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Layers,
  FileText,
  Target,
  Globe,
  Bot,
  Brain,
  Zap,
  CheckCircle,
  ChevronDown,
  BarChart2,
  ShoppingBag,
  Briefcase,
  Network,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Answer Engine Optimisation Services South Africa | Dino de Wet",
  description:
    "Answer Engine Optimisation services in South Africa to improve visibility in AI answers, featured snippets, Google AI Overviews, and answer-first search experiences.",
  keywords: [
    "Answer Engine Optimisation South Africa",
    "AEO Services South Africa",
    "Answer Engine Optimisation Consultant",
    "AEO Consultant South Africa",
    "AI Answer Optimisation South Africa",
    "Featured Snippet Optimisation South Africa",
    "Google AI Overviews Optimisation",
    "Answer Engine SEO South Africa",
    "Dino de Wet",
    "Cape Town AEO",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa",
  },
  openGraph: {
    title: "Answer Engine Optimisation Services South Africa | Dino de Wet",
    description:
      "Answer Engine Optimisation services in South Africa to improve visibility in AI answers, featured snippets, Google AI Overviews, and answer-first search experiences.",
    url: "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa",
    images: [
      {
        url: "/images/answer-engine-optimisation-south-africa.png",
        width: 1200,
        height: 630,
        alt: "Answer Engine Optimisation Services South Africa — Dino de Wet",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa#webpage",
      "url": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa",
      "name": "Answer Engine Optimisation Services South Africa | Dino de Wet",
      "description":
        "Answer Engine Optimisation services in South Africa to improve visibility in AI answers, featured snippets, Google AI Overviews, and answer-first search experiences.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "about": { "@id": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa#service" },
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
            "name": "Answer Engine Optimisation Services South Africa",
            "item": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa#service",
      "name": "Answer Engine Optimisation Services South Africa",
      "url": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa",
      "description":
        "AEO services helping South African businesses improve visibility in Google AI Overviews, featured snippets, People Also Ask, and AI-driven answer systems through structured content, passage optimisation, and entity clarity.",
      "provider": { "@id": "https://dinodewet.co.za/#person" },
      "areaServed": [
        { "@type": "Country", "name": "South Africa" },
        { "@type": "City", "name": "Cape Town" },
      ],
      "serviceType": "Answer Engine Optimisation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AEO Service Catalogue",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Answer Opportunity Mapping",
              "description":
                "Question-intent mapping, answer-first keyword research, People Also Ask analysis, and AI Overview opportunity review.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Answer-Focused Content Architecture",
              "description":
                "Definition pages, service pages with direct answer sections, FAQ systems, process pages, and topical support clusters structured for answer visibility.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Passage and Section Optimisation",
              "description":
                "Directness, extractability, semantic clarity, stronger heading-to-answer relationships, and better answer placement near relevant headings.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Featured Snippet and AI Answer Readiness",
              "description":
                "Featured snippet optimisation, concise definitional responses, numbered processes, bulleted lists, comparison tables, and answer-first paragraph design.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "FAQ and Question Cluster Development",
              "description":
                "Structured FAQ blocks, query cluster maps, sub-question hierarchies, service-related question sets, and location-aware question opportunities.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AEO and GEO Alignment",
              "description":
                "Aligning content for Google AI Overviews, answer synthesis, citation-friendly extraction, and answer-layer visibility across multiple AI-driven systems.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/answer-engine-optimisation-services-south-africa#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Answer Engine Optimisation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Answer Engine Optimisation (AEO) is the practice of improving your website so search systems can extract and surface your content as direct answers in featured snippets, People Also Ask, Google AI Overviews, and other answer-first search features.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AEO different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. SEO focuses more broadly on ranking pages in search results. AEO focuses specifically on making your content more eligible to appear as a direct answer in search features and AI answer systems. The strongest strategy combines both.",
          },
        },
        {
          "@type": "Question",
          "name": "Can AEO help South African businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. South African businesses can use AEO to improve visibility for question-based searches, service education queries, and trust-building informational content that supports the research phase before conversion.",
          },
        },
        {
          "@type": "Question",
          "name": "Does AEO only apply to Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. While Google is a major focus, AEO also supports visibility in broader answer-first environments including ChatGPT, Perplexity, Gemini, and other AI search systems that retrieve and summarise web information.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AEO useful for service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Service businesses benefit strongly from AEO because users ask detailed questions before enquiring or buying. Being visible in the answer layer at the research stage builds trust before a prospect reaches your sales page.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need blog content for AEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Often yes, but not always in the traditional sense. What matters is building structured content that answers real questions and supports service visibility. Service pages with strong FAQ sections and answer-ready formatting can also earn answer layer visibility.",
          },
        },
        {
          "@type": "Question",
          "name": "Is AEO the same as GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. They overlap, but they are not identical. AEO focuses specifically on answer visibility across search features and answer engines. GEO focuses more broadly on visibility inside generative search and AI synthesis environments.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer both strategy and implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. I can help with consulting, planning, page drafting, content optimisation, and broader content architecture depending on your needs and internal capacity.",
          },
        },
      ],
    },
  ],
};

const coreServices = [
  {
    icon: Search,
    title: "Answer Opportunity Mapping",
    tag: "Research",
    description:
      "I identify where your website can win answer visibility based on your market, your services, and the types of questions your audience asks. This creates a prioritised map of answer opportunities across informational and commercial search paths.",
    bullets: [
      "Question-intent mapping",
      "Answer-first keyword research",
      "People Also Ask and snippet opportunity analysis",
      "AI Overview opportunity review",
      "Service-related question cluster planning",
    ],
  },
  {
    icon: Layers,
    title: "Answer-Focused Content Architecture",
    tag: "Architecture",
    description:
      "AEO works best when a website is structured to answer core questions clearly and comprehensively. I develop content structures that directly support answer-layer visibility across both informational and commercially oriented pages.",
    bullets: [
      "Definition pages and direct answer sections",
      "Comparison and process pages",
      "FAQ systems and commercial educational content",
      "Topical support clusters",
    ],
  },
  {
    icon: FileText,
    title: "Passage and Section Optimisation",
    tag: "Optimisation",
    description:
      "Answer engines often select passages, not entire pages. I optimise individual sections so they are direct, extractable, and semantically clear — with strong heading-to-answer relationships and reliable answer placement near relevant headings.",
    bullets: [
      "Directness and extractability improvement",
      "Semantic clarity and cleaner sentence structure",
      "Better paragraph formatting",
      "Stronger heading hierarchy",
    ],
  },
  {
    icon: Target,
    title: "Featured Snippet and AI Answer Readiness",
    tag: "Visibility",
    description:
      "Many answer-driven search features reward content that is structured clearly and written for fast interpretation. I improve pages for featured snippet potential, AI answer selection, and citation-friendly formatting across multiple answer surface types.",
    bullets: [
      "Concise definitional responses",
      "Numbered processes and bulleted lists",
      "Comparison tables and clear entity descriptions",
      "Answer-first paragraph design",
    ],
  },
  {
    icon: Globe,
    title: "Service Page AEO Integration",
    tag: "Commercial",
    description:
      "Commercial pages should also answer the user's research-stage questions. I optimise service pages so they support both direct informational questions and conversion intent — making pages more useful to answer engines and more persuasive to potential clients.",
    bullets: [
      "Informational and conversion question support",
      "Concern-resolution and trust-building content",
      "Cost and process clarification",
      "Better support for commercial answer paths",
    ],
  },
  {
    icon: Bot,
    title: "FAQ and Question Cluster Development",
    tag: "Content",
    description:
      "AEO depends on knowing how questions expand around a topic. I create structured FAQ blocks, query cluster maps, and sub-question hierarchies that systematically cover the question landscape your audience is exploring.",
    bullets: [
      "Structured FAQ blocks and schema",
      "Query cluster maps and sub-question hierarchies",
      "Service-related question sets",
      "Location-aware question opportunities",
    ],
  },
  {
    icon: Brain,
    title: "Entity and Trust Reinforcement",
    tag: "Authority",
    description:
      "Answer engines do not just look for matching words — they need confidence in the source. I strengthen brand and author clarity, topical consistency, and semantic connections between topics to improve source credibility and answer eligibility.",
    bullets: [
      "Brand and author clarity",
      "Topical consistency across pages",
      "Evidence-backed statement reinforcement",
      "Better internal reinforcement between service and supporting pages",
    ],
  },
  {
    icon: Zap,
    title: "AEO and GEO Alignment",
    tag: "Alignment",
    description:
      "AEO overlaps strongly with Generative Engine Optimisation. I help align your website so it is better prepared for Google AI Overviews, answer synthesis, citation-friendly content extraction, and answer-layer visibility across multiple AI-driven systems.",
    bullets: [
      "Google AI Overviews alignment",
      "Answer synthesis readiness",
      "Citation-friendly content extraction",
      "AI-assisted source selection readiness",
    ],
  },
];

const targetMarkets = [
  {
    icon: Briefcase,
    title: "Service Businesses",
    description:
      "Service businesses benefit strongly when their expertise and service detail is visible in the answer layer — building trust before a prospect even visits the website. AEO creates early-funnel authority for service categories.",
  },
  {
    icon: Globe,
    title: "Legal and Professional Firms",
    description:
      "Law firms, accountants, and professional consultants serve audiences that ask detailed questions before engaging. AEO positions these firms as the credible source answer engines return for high-trust queries in their field.",
  },
  {
    icon: Brain,
    title: "Healthcare and Specialist Providers",
    description:
      "Healthcare and specialist providers rely on trust and expertise. Structured, answer-ready content builds both patient trust and search system confidence — improving visibility for symptom, service, and treatment-related queries.",
  },
  {
    icon: BarChart2,
    title: "B2B Companies",
    description:
      "B2B buyers research extensively before engaging. AEO captures these research-stage searches by ensuring your expertise shows up when buyers are forming their decision criteria.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce Brands",
    description:
      "eCommerce brands with strong research-stage demand benefit from AEO by dominating the informational queries that precede purchase decisions — category questions, comparison queries, and how-to content.",
  },
  {
    icon: Network,
    title: "Publishers and Content Businesses",
    description:
      "Publishers and content-led businesses can improve answer visibility at scale by structuring content around question clusters, answer-first formatting, and strong definition pages that AI systems trust and cite.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Answer Opportunity Discovery",
    description:
      "I map the question landscape around your business — identifying where your audience asks questions, what formats those questions take, and where answer-layer visibility is most commercially valuable.",
    bullets: ["Question intent mapping", "People Also Ask research", "AI Overview gap analysis"],
  },
  {
    step: "02",
    title: "Content Architecture Planning",
    description:
      "I design the page and content structures that directly support answer visibility — definition pages, service pages with answer sections, FAQ clusters, and process pages built for extraction.",
    bullets: ["Page structure design", "FAQ and cluster planning", "Answer-first section mapping"],
  },
  {
    step: "03",
    title: "Passage and Section Optimisation",
    description:
      "I rewrite and restructure pages so individual sections are direct, extractable, and semantically aligned to the questions they answer. Heading structure, paragraph length, and answer placement are all optimised.",
    bullets: ["Heading-to-answer alignment", "Passage clarity improvement", "Schema implementation"],
  },
  {
    step: "04",
    title: "Commercial Page AEO Integration",
    description:
      "I integrate answer-layer signals into service and commercial pages so they support both rankings and answer visibility — without sacrificing conversion focus.",
    bullets: ["Service page AEO integration", "Trust and authority reinforcement", "Conversion-aware answer design"],
  },
  {
    step: "05",
    title: "Monitoring and Expansion",
    description:
      "AEO evolves as search behaviour and AI interfaces change. I monitor answer visibility, identify new question cluster opportunities, and expand the content system as your authority grows.",
    bullets: ["Answer visibility monitoring", "Question cluster expansion", "Content iteration"],
  },
];

const serviceOptions = [
  {
    title: "AEO Consulting",
    detail: "Strategy & guidance",
    description:
      "Strategy, audits, and answer opportunity guidance for businesses or in-house teams. Suitable for brands with internal content capacity that need a structured AEO roadmap.",
  },
  {
    title: "AEO Page Planning",
    detail: "Architecture",
    description:
      "Planning of service pages, question hubs, and answer-supporting content architecture. Designed for businesses ready to rebuild or expand their core pages with answer visibility built in.",
  },
  {
    title: "AEO Content Optimisation",
    detail: "Existing pages",
    description:
      "Rewriting and improving existing pages so they are more extractable and answer-ready. Focused on heading structure, passage clarity, FAQ sections, and answer-first formatting.",
  },
  {
    title: "AEO Content Systems",
    detail: "Scalable frameworks",
    description:
      "Building scalable question-cluster frameworks, FAQ systems, and supporting editorial processes for businesses that need to build and maintain AEO-ready content at scale.",
  },
  {
    title: "AEO Retainers",
    detail: "Ongoing growth",
    description:
      "Ongoing support to improve answer visibility over time as your content network expands, new questions emerge, and AI search interfaces evolve.",
  },
];

const faqs = [
  {
    question: "What is Answer Engine Optimisation?",
    answer:
      "Answer Engine Optimisation (AEO) is the practice of improving your website so search systems can extract and surface your content as direct answers in featured snippets, People Also Ask, Google AI Overviews, and other answer-first search features.",
  },
  {
    question: "Is AEO different from SEO?",
    answer:
      "Yes. SEO focuses more broadly on ranking pages in search results. AEO focuses specifically on making your content more eligible to appear as a direct answer in search features and AI answer systems. The strongest strategy combines both.",
  },
  {
    question: "Can AEO help South African businesses?",
    answer:
      "Yes. South African businesses can use AEO to improve visibility for question-based searches, service education queries, and trust-building informational content that supports the research phase before conversion.",
  },
  {
    question: "Does AEO only apply to Google?",
    answer:
      "No. While Google is a major focus, AEO also supports visibility in broader answer-first environments including ChatGPT, Perplexity, Gemini, and other AI search systems that retrieve and summarise web information.",
  },
  {
    question: "Is AEO useful for service businesses?",
    answer:
      "Yes. Service businesses benefit strongly from AEO because users ask detailed questions before enquiring or buying. Being visible in the answer layer at the research stage builds trust before a prospect reaches your sales page.",
  },
  {
    question: "Do I need blog content for AEO?",
    answer:
      "Often yes, but not always in the traditional sense. What matters is building structured content that answers real questions and supports service visibility. Service pages with strong FAQ sections and answer-ready formatting can also earn answer layer visibility.",
  },
  {
    question: "Is AEO the same as GEO?",
    answer:
      "No. They overlap, but they are not identical. AEO focuses specifically on answer visibility across search features and answer engines. GEO focuses more broadly on visibility inside generative search and AI synthesis environments.",
  },
  {
    question: "Do you offer both strategy and implementation?",
    answer:
      "Yes. I can help with consulting, planning, page drafting, content optimisation, and broader content architecture depending on your needs and internal capacity.",
  },
];

const relatedServices = [
  { label: "Home", href: "/" },
  { label: "About Dino de Wet", href: "/about" },
  { label: "GEO Services South Africa", href: "/geo-services-south-africa" },
  { label: "AI SEO Services", href: "/ai-seo-services-south-africa" },
  { label: "Semantic SEO Web Development", href: "/semantic-seo" },
  { label: "Web Development Services", href: "/web-development-services" },
];

export default function AEOServicesSouthAfricaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Breadcrumbs trail={[{ name: "Answer Engine Optimisation Services", href: "/answer-engine-optimisation-services-south-africa" }]} />

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
                Answer Engine Optimisation Services in South Africa
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
                Get your brand selected when search engines and AI systems generate answers. AEO helps your business become more visible in Google AI Overviews, featured snippets, People Also Ask, and AI-driven answer systems — building answer-ready content and stronger semantic structure so your site is chosen as the source.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book an AEO Consultation <ArrowRight size={14} />
                </Link>
                <Link
                  href="#aeo-services"
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
                  { label: "Visibility Focus", value: "Answer Layers" },
                  { label: "Platforms Targeted", value: "Google, AI Overviews, Snippets" },
                  { label: "Market Context", value: "South Africa" },
                  { label: "Approach", value: "AEO + SEO Combined" },
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

      {/* What Is AEO */}
      <section
        className="py-28"
        style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                Foundation
              </p>
              <h2
                className="font-heading font-bold text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                What Is Answer Engine Optimisation?
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Answer Engine Optimisation is the process of improving your website so search systems can extract, trust, and surface your content as direct answers. Traditional SEO focuses heavily on ranking pages. AEO focuses on improving your eligibility to become the answer source.
              </p>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                That means your content should be built to support direct answers, passage extraction, strong semantic relevance, and structured query-response alignment — formatted for fast interpretation by search systems and AI interfaces alike.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                AEO is especially important now that users increasingly receive answers before they ever click a result — and AI interfaces synthesise responses from multiple sources rather than returning a list of links.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <h3 className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    What AEO content supports
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Direct answers to clear questions",
                      "Passage extraction and selection",
                      "Strong semantic relevance",
                      "Structured query-response alignment",
                      "Definition clarity and list formatting",
                      "Trusted factual presentation",
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
                    Why AEO matters for South African businesses
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Improve visibility when informational queries are answered on-platform",
                      "Build trust by appearing as a direct answer source",
                      "Strengthen service discovery before the decision stage",
                      "Perform across both search engines and AI answer environments",
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
              Who AEO Services Are For
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "560px" }}>
              Answer Engine Optimisation is particularly valuable for businesses whose audience asks detailed questions before converting — industries where trust, expertise, and education drive the path to purchase.
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
        id="aeo-services"
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
              What My AEO Services Include
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "560px" }}>
              A complete AEO service suite covering every layer of answer visibility — from opportunity mapping and content architecture through to passage optimisation, FAQ systems, and entity trust reinforcement.
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

      {/* AEO vs SEO */}
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
                What Makes AEO Different From Traditional SEO?
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                Traditional SEO asks whether a page can rank. AEO asks whether a page can answer. That means going deeper into how questions are phrased, how answers are structured, how passages are extracted, and how likely a system is to trust and reuse your content.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                The strongest modern search strategy is not SEO or AEO — it is SEO with AEO layered into the content system. Your pages should compete for rankings and compete for answer visibility simultaneously.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    Traditional SEO asks
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {["Can this page rank?", "Does it target the right keyword?", "Does it have enough authority?"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#a1a1a1" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    AEO also asks
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Can this page answer the question directly?",
                      "Can this passage be selected and extracted?",
                      "Is the heading structure aligned to user intent?",
                      "Are definitions, steps, and comparisons clearly presented?",
                      "Is this source likely to be trusted and cited?",
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
                My Approach to Answer Engine Optimisation
              </h2>
              <p className="mb-6" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                I treat AEO as a structural discipline, not a surface-level content trick. The work is grounded in direct answer placement, strong heading hierarchies, contextual completeness, and conversion-aware information design.
              </p>
              <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                The goal is to create pages that are easier to extract, easier to trust, and easier to connect to real user intent — serving both the human reader and the search systems that mediate discovery.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    What I do not rely on
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Bloated FAQ spam",
                      "Weak AI-generated filler",
                      "Repetitive question stuffing",
                      "Thin informational articles with no commercial purpose",
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
                      "Direct answer placement and strong heading hierarchies",
                      "Contextual completeness and semantic clarity",
                      "Question clustering and sub-topic coverage",
                      "Conversion-aware information design",
                      "Entity and topic reinforcement",
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
              My AEO Process
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "540px" }}>
              A structured five-step system from answer opportunity discovery to ongoing visibility expansion. Each phase builds a more comprehensive and trustworthy answer architecture.
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

      {/* Why Dino + What AEO Helps Improve */}
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
              Based in Cape Town, South Africa. I specialise in semantic SEO, topical authority, AI SEO, GEO, and search systems built around meaning rather than keyword matching. My AEO approach is grounded in structure, context, entity clarity, and commercial relevance.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Featured snippets and People Also Ask results",
              "AI-generated answer environments",
              "Question-based organic queries",
              "Research-stage service discovery",
              "Informational-commercial content bridges",
              "Passage extraction opportunities",
            ].map((item, i) => (
              <AnimatedSection key={item} delay={i * 60}>
                <div className="rounded-xl border p-5 h-full" style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}>
                  <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    AEO improves
                  </p>
                  <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="rounded-xl border p-8" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                AEO services for South African markets
              </p>
              <p className="text-sm mb-5" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7, maxWidth: "680px" }}>
                My AEO services are tailored for businesses targeting Cape Town, Johannesburg, Durban, national South African demand, and specialist professional niches — whether you want stronger local service visibility or broader authority across your niche.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {["Cape Town", "Johannesburg", "Durban", "National SA demand", "Specialist professional niches", "Local + international visibility"].map((item) => (
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
              AEO Service Options
            </h2>
            <p className="mb-16" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)", maxWidth: "520px" }}>
              AEO work can be delivered in different formats depending on your goals, internal capacity, and growth stage.
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
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
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
              Book an AEO Strategy Consultation
            </h2>
            <p className="mb-10" style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
              If your audience is asking questions before they buy, your website should be built to answer them clearly. I help South African businesses improve answer visibility through structured content, better passage design, stronger semantic architecture, and service pages that support both rankings and answer extraction.
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
        intro="Answer engine optimisation is one layer of a coherent AI search programme — pair it with the disciplines below for compounding results."
        links={[
          { href: "/ai-seo", anchor: "AI SEO strategy" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/llm-visibility", anchor: "LLM visibility consulting" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/contact", anchor: "book an answer engine optimisation consultation" },
        ]}
      />
    </>
  );
}
