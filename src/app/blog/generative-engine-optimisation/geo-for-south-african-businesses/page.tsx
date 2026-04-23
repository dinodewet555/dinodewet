import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronDown, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation for South African Businesses | Dino de Wet",
  description:
    "South African businesses have a first-mover advantage in GEO. Learn how to implement Generative Engine Optimisation for the South African market — including local entity optimisation, industry-specific strategy, and why now is the right time to start.",
  keywords: [
    "GEO South Africa",
    "Generative Engine Optimisation South Africa",
    "AI search South Africa",
    "AI SEO South Africa",
    "GEO Cape Town",
    "GEO Johannesburg",
    "South Africa AI search",
    "first mover GEO",
  ],
  alternates: {
    canonical: "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses",
  },
  openGraph: {
    title: "Generative Engine Optimisation for South African Businesses",
    description:
      "How South African brands can implement GEO to earn citations in AI-generated search responses — and why the early-mover window is open now.",
    url: "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses",
    type: "article",
    images: [{ url: "/images/semantic-seo-services.png", width: 1200, height: 630, alt: "Generative Engine Optimisation for South African Businesses" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses#article",
      "headline": "Generative Engine Optimisation for South African Businesses",
      "description": "How South African brands can implement GEO to earn citations in AI-generated search responses — including local entity optimisation, industry-specific strategy, and the early-mover advantage.",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses",
      "datePublished": "2026-04-23",
      "dateModified": "2026-04-23",
      "author": { "@id": "https://dinodewet.co.za/#person" },
      "publisher": { "@type": "Person", "@id": "https://dinodewet.co.za/#person", "name": "Dino de Wet", "url": "https://dinodewet.co.za" },
      "isPartOf": { "@id": "https://dinodewet.co.za/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses" },
      "about": [
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Place", "name": "South Africa" },
        { "@type": "Thing", "name": "AI Search" },
      ],
      "keywords": "GEO South Africa, AI search South Africa, GEO Cape Town, local GEO, South African AI SEO",
      "articleSection": "Generative Engine Optimisation",
      "wordCount": 2700,
    },
    {
      "@type": "WebPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses#webpage",
      "url": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses",
      "name": "Generative Engine Optimisation for South African Businesses",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Generative Engine Optimisation", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation" },
          { "@type": "ListItem", "position": 4, "name": "GEO for South African Businesses", "item": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dinodewet.co.za/blog/generative-engine-optimisation/geo-for-south-african-businesses#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is GEO relevant for South African businesses in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Google AI Overviews are rolling out to South African search users, and South African consumers increasingly use AI-assisted tools for discovery, comparison, and decision-making. Businesses that implement GEO now have a first-mover advantage — most South African competitors are not yet aware of GEO as a discipline, meaning the citation landscape for local queries is largely unclaimed.",
          },
        },
        {
          "@type": "Question",
          "name": "What industries in South Africa benefit most from GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The industries that benefit most from GEO in South Africa are those where purchase decisions are research-driven and AI search is used for comparison and information gathering: financial services, legal, healthcare, professional B2B services, education, e-commerce, property, and travel. These verticals generate high volumes of informational queries that trigger AI Overviews, making GEO citation presence commercially valuable.",
          },
        },
        {
          "@type": "Question",
          "name": "Does GEO require different content for South African audiences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local GEO requires incorporating South Africa-specific entity signals: city entities (Cape Town, Johannesburg, Durban, Pretoria), local regulatory bodies, industry associations, South African market data, and locally relevant case studies. Content that demonstrates awareness of the South African market context — local regulations, market dynamics, currency, and consumer behaviour — is more likely to be cited for South Africa-specific queries.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does GEO take to produce results for a South African business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial GEO results — particularly for AI citation of FAQ sections and specific factual passages — can appear within 4–8 weeks of implementation. Consistent AI Overview appearances for target queries typically build over 2–4 months. Because the South African GEO landscape is less competitive than US and UK markets, citation presence can be established faster with a focused, well-implemented strategy.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "sa-opportunity", label: "The South African GEO Opportunity" },
  { id: "ai-search-sa", label: "AI Search Adoption in South Africa" },
  { id: "local-entity-geo", label: "Local Entity GEO for South Africa" },
  { id: "industry-strategy", label: "Industry-Specific GEO Strategy" },
  { id: "sa-geo-implementation", label: "GEO Implementation for SA Businesses" },
  { id: "early-mover", label: "The First-Mover Advantage Window" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "Is GEO relevant for South African businesses in 2026?",
    answer: "Yes. Google AI Overviews are rolling out to South African search users, and South African consumers increasingly use AI-assisted tools for discovery, comparison, and decision-making. Businesses that implement GEO now have a first-mover advantage — most South African competitors are not yet aware of GEO as a discipline, meaning the citation landscape for local queries is largely unclaimed.",
  },
  {
    question: "What industries in South Africa benefit most from GEO?",
    answer: "The industries that benefit most from GEO in South Africa are those where purchase decisions are research-driven and AI search is used for comparison and information gathering: financial services, legal, healthcare, professional B2B services, education, e-commerce, property, and travel. These verticals generate high volumes of informational queries that trigger AI Overviews, making GEO citation presence commercially valuable.",
  },
  {
    question: "Does GEO require different content for South African audiences?",
    answer: "Local GEO requires incorporating South Africa-specific entity signals: city entities (Cape Town, Johannesburg, Durban, Pretoria), local regulatory bodies, industry associations, South African market data, and locally relevant case studies. Content that demonstrates awareness of the South African market context — local regulations, market dynamics, currency, and consumer behaviour — is more likely to be cited for South Africa-specific queries.",
  },
  {
    question: "How long does GEO take to produce results for a South African business?",
    answer: "Initial GEO results — particularly for AI citation of FAQ sections and specific factual passages — can appear within 4–8 weeks of implementation. Consistent AI Overview appearances for target queries typically build over 2–4 months. Because the South African GEO landscape is less competitive than US and UK markets, citation presence can be established faster with a focused, well-implemented strategy.",
  },
];

export default function GEOForSouthAfricaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav className="flex items-center gap-2 mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link href="/blog" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Blog</Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <Link href="/blog/generative-engine-optimisation" className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Generative Engine Optimisation</Link>
              <span className="text-xs" style={{ color: "#3a3a3a" }}>/</span>
              <span className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>GEO for SA Businesses</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Generative Engine Optimisation
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Clock size={12} /> 9 min read</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}><Calendar size={12} /> 23 April 2026</span>
            </div>

            <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Generative Engine Optimisation for South African Businesses
            </h1>
            <p style={{ color: "#a1a1a1", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)", maxWidth: "680px" }}>
              Most South African businesses are not yet implementing GEO. That creates a first-mover window for brands that act now — the opportunity to establish AI citation presence in their category before local competitors respond. This guide covers how to do it specifically for the South African market.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

                <section id="sa-opportunity" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The South African GEO Opportunity
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Generative Engine Optimisation in South Africa is at the same stage that traditional SEO was in approximately 2010 — technically viable, commercially impactful, but largely unknown among local businesses. The brands that recognised early SEO as a strategic channel in 2010 held dominant positions for over a decade. The GEO opportunity follows the same pattern.
                    </p>
                    <p>
                      The citation landscape for South African-specific queries across Google AI Overviews, Perplexity, and ChatGPT is currently dominated by global publications and international news sources. Local business content is largely absent. This means that South African companies with well-implemented GEO strategies can establish citation presence in their categories with less competition than equivalent efforts in US or UK markets.
                    </p>
                    <p>
                      The full GEO framework is covered in the{" "}
                      <Link href="/blog/generative-engine-optimisation" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        complete GEO guide
                      </Link>
                      . This article focuses specifically on the South African implementation context.
                    </p>
                  </div>
                </section>

                <section id="ai-search-sa" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    AI Search Adoption in South Africa
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      South African consumers and business professionals are adopting AI-assisted tools at an accelerating rate. ChatGPT reached over 2 million monthly active South African users by 2025 according to industry estimates. Perplexity&apos;s South African user base grew significantly through 2024–2025 as the platform expanded its mobile accessibility. Google AI Overviews are now visible to South African users for an increasing percentage of queries.
                    </p>
                    <p>
                      Mobile-first search behaviour in South Africa — where a significant majority of searches are conducted on mobile devices — means AI-generated answers, which are particularly well-suited to mobile screens, will capture a growing share of South African search interactions.
                    </p>
                    <p>
                      The professional services sector is among the highest AI search users in South Africa. Legal research, financial services comparison, healthcare queries, and B2B vendor discovery are all categories where South African professionals increasingly use AI search tools before traditional research methods. These are precisely the categories where GEO citation presence is most commercially valuable.
                    </p>
                  </div>
                </section>

                <section id="local-entity-geo" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Local Entity GEO for South Africa
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Local GEO requires building content that incorporates South African entity signals specifically — so that AI retrieval systems associate your content with South African queries and contexts.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "City and Region Entities", detail: "Reference Cape Town, Johannesburg, Durban, Pretoria, and other relevant South African cities explicitly in content. AI systems use geographic entity associations to match content to location-specific queries." },
                      { title: "Local Regulatory Bodies", detail: "Reference relevant South African regulatory entities: FSCA (Financial Sector Conduct Authority), HPCSA (Health Professions Council of SA), Law Society of SA, CIDB (Construction Industry Development Board). These entity associations signal local expertise." },
                      { title: "South African Market Data", detail: "Include South African-specific statistics, market figures, and data points rather than globally-sourced data alone. Local data increases relevance scoring for South African queries and demonstrates genuine local market knowledge." },
                      { title: "Local Industry Associations", detail: "Reference industry association memberships and accreditations relevant to the South African market. These entity relationships increase source credibility for local queries and establish professional legitimacy." },
                      { title: "ZAR Pricing and Local Context", detail: "Content that references South African pricing in ZAR, local market conditions, and South African consumer behaviour is more relevant to South African queries than globally-oriented content." },
                      { title: "Bilingual Considerations", detail: "South Africa has 11 official languages, with English and Afrikaans dominant in digital search. Content addressing bilingual audiences or including Afrikaans entity names for specific markets broadens AI retrieval reach across South African query patterns." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="industry-strategy" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Industry-Specific GEO Strategy for South Africa
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      Different South African industries face different GEO priorities based on query volume, AI Overview frequency, and competitive landscape in the local citation space.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      { sector: "Financial Services", detail: "South African financial services queries — investment platforms, insurance comparison, tax advice, retirement planning — generate high AI Overview frequency. FSP-licensed advisors and regulated institutions that build citation-ready content around specific South African financial products and FSCA regulations establish strong AI citation presence with little local competition currently." },
                      { sector: "Legal Services", detail: "South African legal queries — property transfers, contract law, labour law, immigration — are heavily researched using AI tools. Law firms that create specific, factual content about South African legal procedures, citing relevant legislation (e.g., Companies Act 71 of 2008, National Credit Act), earn citations for high-intent legal queries." },
                      { sector: "Healthcare", detail: "Healthcare queries in South Africa — medical aid comparison, specialist referrals, procedure costs — are increasingly answered by AI search. Medical practices and healthcare providers that build factual, citation-ready content about specific conditions, treatments, and South African healthcare funding structures are well-positioned for GEO." },
                      { sector: "E-commerce and Retail", detail: "South African e-commerce brands targeting comparison and product research queries benefit from GEO through product-specific FAQ content, comparison guides, and local pricing data. AI Overviews for product comparison queries cite specific, factual product content over generic category pages." },
                      { sector: "B2B Professional Services", detail: "South African B2B service providers — accounting firms, IT services, marketing agencies — operate in a query space where AI search adoption among decision-makers is high. Authoritative thought leadership content targeting industry-specific queries earns AI citations that position the brand before a prospective client makes contact." },
                    ].map((item) => (
                      <div key={item.sector} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{item.sector}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="sa-geo-implementation" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    GEO Implementation for South African Businesses
                  </h2>
                  <div className="flex flex-col gap-4 mb-8" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      A practical GEO implementation sequence for a South African business follows the same structural framework as global GEO, with local entity signals layered in at the content level.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      { step: "1", title: "Audit Existing Content for Citation-Readiness", detail: "Identify which existing pages already have high relevance for South African-specific queries. Apply the citation-readiness audit — checking for self-contained passages, definition-first headings, specific factual claims, and FAQ sections. Prioritise pages targeting high-intent, high-AI-Overview-frequency queries for restructuring." },
                      { step: "2", title: "Build Local Entity Content", detail: "Create content that explicitly references South African entities: regulatory bodies, local market data, South African industry associations, city entities. These local entity associations signal relevance to South African-specific queries across all AI retrieval systems." },
                      { step: "3", title: "Implement FAQ Sections with Local Focus", detail: "Add FAQ sections to all commercial pages and pillar blog posts. Include questions that South African customers specifically ask: pricing in ZAR, compliance with South African regulations, local delivery/service areas, BBBEE status, and local case studies." },
                      { step: "4", title: "Add FAQPage and Article Schema", detail: "Implement structured data markup across all GEO-targeted pages. FAQPage schema on FAQ sections, Article schema on blog content, LocalBusiness schema on commercial pages. Schema markup reduces retrieval cost for AI systems and increases citation probability." },
                      { step: "5", title: "Monitor AI Citation Performance", detail: "Set up Google Search Console monitoring for queries that trigger AI Overviews. Manually monitor brand mentions in Perplexity and ChatGPT for key query categories. Track the queries where you appear in AI responses and optimise passages that receive partial or no citations." },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                            <span className="text-xs font-heading font-bold text-white">{item.step}</span>
                          </div>
                          <div>
                            <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{item.title}</p>
                            <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="early-mover" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    The First-Mover Advantage Window
                  </h2>
                  <div className="flex flex-col gap-4" style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
                    <p>
                      AI search systems build source credibility signals over time. A domain that has been consistently cited as an authoritative source for a category over six months is substantially more likely to continue being cited than a domain that just started implementing GEO. Credibility compounds — early-mover advantage in GEO is both real and durable.
                    </p>
                    <p>
                      The South African GEO landscape is currently open. Most South African businesses have not heard of GEO. The businesses that implement it systematically in 2026 will hold citation positions in their categories that will be difficult for later entrants to displace, because AI source credibility is built on historical consistency, not just current content quality.
                    </p>
                    <p>
                      The comparison to early SEO adoption is apt: the businesses that invested in quality, authoritative content and technical SEO in 2010–2012 held ranking dominance in their categories for years. GEO offers the same compounding advantage for businesses that move first.
                    </p>
                    <p>
                      For GEO strategy specific to Google AI Overviews — which are the most commercially important AI search surface for South African businesses — read{" "}
                      <Link href="/blog/generative-engine-optimisation/google-ai-overviews-and-geo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        How Google AI Overviews Change SEO and GEO
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-7" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Key Takeaways</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "The South African GEO landscape is largely unclaimed. Most local businesses are not yet implementing GEO, creating a first-mover window for brands that act in 2026.",
                      "AI search adoption is growing rapidly among South African consumers and professionals — particularly in financial services, legal, healthcare, e-commerce, and B2B services.",
                      "Local GEO requires South African entity signals: city entities (Cape Town, Johannesburg, Durban), local regulatory bodies (FSCA, HPCSA), local market data, and ZAR pricing context.",
                      "Different South African industries face different GEO priorities. Professional services and regulated industries currently have the most open citation landscape and the highest AI search query volume.",
                      "AI source credibility compounds over time — brands that establish GEO citation presence in their categories now will be more difficult to displace as local competitors eventually begin implementing GEO.",
                      "The implementation sequence is: citation-readiness audit → local entity content → FAQ sections with local focus → FAQPage schema → AI citation monitoring.",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)" }}>
                          <span className="text-xs font-heading font-bold text-white">{i + 1}</span>
                        </div>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none" style={{ userSelect: "none" }}>
                          <h3 className="font-heading font-semibold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", lineHeight: 1.4 }}>{faq.question}</h3>
                          <ChevronDown size={16} color="#a1a1a1" className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Continue Reading</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "What Is GEO? A Complete Guide", href: "/blog/generative-engine-optimisation", desc: "The full pillar guide to Generative Engine Optimisation." },
                  { label: "How Google AI Overviews Change SEO and GEO", href: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", desc: "How AI Overviews work and what to do to appear within them." },
                  { label: "How Passage Ranking Affects AI Visibility", href: "/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility", desc: "Passage-level indexing and its role in AI search visibility." },
                  { label: "GEO Services South Africa", href: "/geo-services-south-africa", desc: "Professional GEO implementation for South African businesses." },
                  { label: "AI SEO Services South Africa", href: "/ai-seo-services-south-africa", desc: "AI-informed SEO strategies for South African brands." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>South African GEO</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Ready to claim your AI citation position in South Africa?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    Professional GEO implementation builds local entity signals, citation-ready content architecture, and structured data across your site — delivering measurable AI citation results for South African market queries.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book a Strategy Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/geo-services-south-africa" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      GEO Services
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
