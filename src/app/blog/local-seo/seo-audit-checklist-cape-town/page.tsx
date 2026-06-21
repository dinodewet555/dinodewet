import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

const URL = "https://dinodewet.co.za/blog/local-seo/seo-audit-checklist-cape-town";

export const metadata: Metadata = {
  title: "SEO Audit Checklist for Cape Town Businesses (2026)",
  description:
    "Running an SEO audit for your Cape Town business? This checklist covers technical, on-page, and local factors that kill rankings in 2026 — with step-by-step fixes.",
  keywords: [
    "SEO audit Cape Town",
    "Cape Town SEO checklist",
    "local SEO audit South Africa",
    "Google Business Profile audit",
    "NAP consistency South Africa",
    "Core Web Vitals 2026",
    "LocalBusiness schema",
    "Cape Town SEO consultant",
    "Western Cape local SEO",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "SEO Audit Checklist for Cape Town Businesses (2026)",
    description:
      "Technical, on-page, and local factors that kill rankings for Cape Town businesses in 2026 — with step-by-step fixes.",
    url: URL,
    type: "article",
    images: [
      {
        url: "/images/seo-framework.png",
        width: 1200,
        height: 630,
        alt: "SEO Audit Checklist for Cape Town Businesses",
      },
    ],
  },
};

const PUBLISHED = "2026-05-03";

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      "headline": "SEO Audit Checklist for Cape Town Businesses (2026)",
      "description":
        "A complete 2026 SEO audit checklist for Cape Town businesses covering technical SEO, on-page signals, Google Business Profile, NAP consistency, content quality, and review management.",
      "url": URL,
      "datePublished": PUBLISHED,
      "dateModified": PUBLISHED,
      "author": { "@id": "https://dinodewet.co.za/#person" },
      "publisher": {
        "@type": "Person",
        "@id": "https://dinodewet.co.za/#person",
        "name": "Dino de Wet",
        "url": "https://dinodewet.co.za",
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://dinodewet.co.za/images/seo-framework.png",
        "width": 1200,
        "height": 630,
      },
      "isPartOf": { "@id": "https://dinodewet.co.za/blog#blog" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": URL },
      "about": [
        { "@type": "Thing", "name": "SEO Audit" },
        { "@type": "Thing", "name": "Local SEO" },
        { "@type": "Thing", "name": "Google Business Profile" },
        { "@type": "Place", "name": "Cape Town" },
      ],
      "keywords":
        "SEO audit Cape Town, local SEO South Africa, Google Business Profile, NAP consistency, Core Web Vitals, LocalBusiness schema",
      "articleSection": "Local SEO",
      "wordCount": 2400,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3"],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      "url": URL,
      "name": "SEO Audit Checklist for Cape Town Businesses (2026)",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Local SEO", "item": "https://dinodewet.co.za/blog/local-seo/seo-audit-checklist-cape-town" },
          { "@type": "ListItem", "position": 4, "name": "SEO Audit Checklist for Cape Town Businesses", "item": URL },
        ],
      },
    },
    {
      "@type": "HowTo",
      "@id": `${URL}#howto`,
      "name": "How to Run an SEO Audit for a Cape Town Business",
      "description":
        "A six-step SEO audit process covering technical health, on-page optimisation, local signals, content quality, and post-audit prioritisation for Cape Town businesses.",
      "totalTime": "PT4H",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Audit technical health",
          "text":
            "Use Google Search Console to identify crawl errors, blocked pages, indexation problems, and broken internal links. Confirm HTTPS is active with a valid SSL certificate.",
          "url": `${URL}#technical`,
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Test Core Web Vitals on mobile",
          "text":
            "Run Google PageSpeed Insights against the mobile profile. Target LCP under 2.5s, CLS under 0.1, and INP under 200ms — accounting for the slower mobile data common in South Africa.",
          "url": `${URL}#technical`,
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Audit on-page signals",
          "text":
            "Review title tags, meta descriptions, heading structure, and internal linking. Confirm every important page is reachable within three clicks from the homepage.",
          "url": `${URL}#onpage`,
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Optimise Google Business Profile",
          "text":
            "Check that the business name matches the legal trading name (no keyword stuffing), categories are accurate, services and photos are complete, and review velocity is 5–10 per month with responses within 48 hours.",
          "url": `${URL}#local`,
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Verify NAP consistency",
          "text":
            "Confirm Name, Address, and Phone are identical across Google Business Profile, Yellow Pages SA, Brabys, Hotfrog, and Cylex South Africa. Use BrightLocal or Whitespark to surface variations.",
          "url": `${URL}#local`,
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Prioritise and fix",
          "text":
            "Fix GBP violations, broken pages, and HTTPS issues within two weeks. Resolve NAP inconsistencies and add LocalBusiness schema within 30 days. Treat reviews, local link building, and rank tracking as ongoing monthly work.",
          "url": `${URL}#after`,
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://dinodewet.co.za/#localbusiness",
      "name": "Dino de Wet — Semantic SEO & Local SEO Consultant",
      "url": "https://dinodewet.co.za",
      "image": "https://dinodewet.co.za/images/dino-portrait-hero.jpg",
      "description":
        "Semantic SEO and local SEO consultant in Cape Town, South Africa. SEO audits, Google Business Profile optimisation, and topical authority strategy for Western Cape businesses.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "areaServed": [
        { "@type": "City", "name": "Cape Town" },
        { "@type": "AdministrativeArea", "name": "Western Cape" },
        { "@type": "Country", "name": "South Africa" },
      ],
      "knowsAbout": [
        "SEO Audit",
        "Local SEO",
        "Google Business Profile Optimisation",
        "NAP Consistency",
        "LocalBusiness Schema",
        "Semantic SEO",
        "Technical SEO",
      ],
      "sameAs": ["https://dinodewet.co.za"],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should a Cape Town business run an SEO audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Every six months is the minimum. Google's algorithm updates frequently and AI-driven search changes are accelerating in 2026. A biannual audit keeps your technical foundation sound and your local signals current.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a local agency to do my SEO audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Not always, but local expertise helps. A Cape Town-based SEO professional understands regional search behaviour, Western Cape competitive dynamics, and which local directories carry the most weight for South African businesses.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the most common SEO mistake for South African websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Ignoring mobile page speed. A high percentage of South African users browse on mobile devices with variable connection speeds. Failing Core Web Vitals on mobile is one of the fastest ways to lose local rankings.",
          },
        },
        {
          "@type": "Question",
          "name": "How does local schema improve my visibility in Cape Town?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "LocalBusiness schema gives Google and AI systems a machine-readable confirmation of your physical location, contact details, and service area. It bridges the gap between your website content and your physical Cape Town address, which is especially important for AI-generated local answers.",
          },
        },
        {
          "@type": "Question",
          "name": "What South African directories matter most for NAP consistency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yellow Pages SA, Brabys, and Hotfrog are the primary South African directories to audit. Google Business Profile is the anchor. Consistency across all of them reinforces your local authority.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do an SEO audit myself without paid tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, for the basics. Google Search Console handles crawl errors and indexation. Google PageSpeed Insights covers Core Web Vitals. Google's GBP dashboard shows profile completeness. Paid tools like Screaming Frog, Ahrefs, or BrightLocal speed up the process and surface issues you would miss manually.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens if my GBP listing gets suspended?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A suspended listing disappears from Maps and local search results entirely. Reinstatement requires submitting a video verification or identity documents to Google. Prevention is far easier: follow GBP guidelines strictly, especially around business name formatting.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results after fixing audit issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Technical fixes (crawl errors, HTTPS) can show results within 2–4 weeks. GBP improvements often show within 4–8 weeks. Content and link-building improvements typically take 3–6 months to reflect in rankings.",
          },
        },
        {
          "@type": "Question",
          "name": "Does load-shedding affect my SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Indirectly, yes. If your hosting provider experiences downtime during load-shedding and your site becomes unreachable, Google's crawlers may reduce crawl frequency. Choose a hosting provider with guaranteed uptime and generator or UPS backup.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the fastest local SEO win for a Cape Town SME?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Completing and optimising your Google Business Profile fully. Most SME profiles are incomplete, and a fully optimised profile with accurate categories, photos, and regular posts can improve Map Pack visibility within weeks.",
          },
        },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "why-now", label: "Why Audits Matter More Now" },
  { id: "technical", label: "Technical SEO Audit" },
  { id: "onpage", label: "On-Page SEO Audit" },
  { id: "local", label: "Local SEO Audit" },
  { id: "content", label: "Content & Entity Salience" },
  { id: "after", label: "What to Do After Your Audit" },
  { id: "professional", label: "Need a Professional Audit?" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const keyTakeaways = [
  "A full SEO audit for Cape Town businesses covers five areas: technical SEO, on-page content, local SEO signals, content quality, and review management.",
  "Google's AI Overviews now appear in a growing share of local results — visibility is no longer just about the Map Pack top 3.",
  "Google has intensified GBP enforcement in 2026, suspending listings that keyword-stuff business names.",
  "NAP consistency across Yellow Pages SA, Brabys, and Hotfrog remains a foundational ranking signal.",
  "Review quality matters more than review volume. Google now reads review content semantically.",
  "Thin location pages (swapping city names without unique content) no longer rank in 2026.",
  "Local link building gains weight as a differentiator when GBP signals are similar across competitors.",
  "Aim for 5–10 new reviews per month and respond to all reviews within 48 hours.",
  "Weekly rank tracking is now standard practice given the frequency of Google algorithm updates.",
];

const coreWebVitals = [
  { metric: "LCP (Largest Contentful Paint)", measures: "Load speed of main content", threshold: "Under 2.5 seconds" },
  { metric: "CLS (Cumulative Layout Shift)", measures: "Visual stability", threshold: "Under 0.1" },
  { metric: "INP (Interaction to Next Paint)", measures: "Responsiveness", threshold: "Under 200ms" },
];

const gbpChecklist = [
  "Business name matches your legal/trading name exactly (no keyword stuffing).",
  "Primary and secondary categories are accurate and specific.",
  "Business description uses natural language with relevant service terms.",
  "All services and products are listed with descriptions.",
  "Photos are updated (minimum: exterior, interior, team, products/services).",
  "Q&A section has been seeded with common customer questions.",
  "Posts are published at least twice per month.",
  "Review velocity: 5–10 new reviews per month, responses within 48 hours.",
];

const faqItems = [
  {
    q: "How often should a Cape Town business run an SEO audit?",
    a: "Every six months is the minimum. Google's algorithm updates frequently and AI-driven search changes are accelerating in 2026. A biannual audit keeps your technical foundation sound and your local signals current.",
  },
  {
    q: "Do I need a local agency to do my SEO audit?",
    a: "Not always, but local expertise helps. A Cape Town-based SEO professional understands regional search behaviour, Western Cape competitive dynamics, and which local directories carry the most weight for South African businesses.",
  },
  {
    q: "What is the most common SEO mistake for South African websites?",
    a: "Ignoring mobile page speed. A high percentage of South African users browse on mobile devices with variable connection speeds. Failing Core Web Vitals on mobile is one of the fastest ways to lose local rankings.",
  },
  {
    q: "How does local schema improve my visibility in Cape Town?",
    a: "LocalBusiness schema gives Google and AI systems a machine-readable confirmation of your physical location, contact details, and service area. It bridges the gap between your website content and your physical Cape Town address, which is especially important for AI-generated local answers.",
  },
  {
    q: "What South African directories matter most for NAP consistency?",
    a: "Yellow Pages SA, Brabys, and Hotfrog are the primary South African directories to audit. Google Business Profile is the anchor. Consistency across all of them reinforces your local authority.",
  },
  {
    q: "Can I do an SEO audit myself without paid tools?",
    a: "Yes, for the basics. Google Search Console handles crawl errors and indexation. Google PageSpeed Insights covers Core Web Vitals. Google's GBP dashboard shows profile completeness. Paid tools like Screaming Frog, Ahrefs, or BrightLocal speed up the process and surface issues you would miss manually.",
  },
  {
    q: "What happens if my GBP listing gets suspended?",
    a: "A suspended listing disappears from Maps and local search results entirely. Reinstatement requires submitting a video verification or identity documents to Google. Prevention is far easier: follow GBP guidelines strictly, especially around business name formatting.",
  },
  {
    q: "How long does it take to see results after fixing audit issues?",
    a: "Technical fixes (crawl errors, HTTPS) can show results within 2–4 weeks. GBP improvements often show within 4–8 weeks. Content and link-building improvements typically take 3–6 months to reflect in rankings.",
  },
  {
    q: "Does load-shedding affect my SEO?",
    a: "Indirectly, yes. If your hosting provider experiences downtime during load-shedding and your site becomes unreachable, Google's crawlers may reduce crawl frequency. Choose a hosting provider with guaranteed uptime and generator or UPS backup.",
  },
  {
    q: "What's the fastest local SEO win for a Cape Town SME?",
    a: "Completing and optimising your Google Business Profile fully. Most SME profiles are incomplete, and a fully optimised profile with accurate categories, photos, and regular posts can improve Map Pack visibility within weeks.",
  },
];

const localBusinessJsonExample = `{
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Road",
    "addressLocality": "Cape Town",
    "addressRegion": "Western Cape",
    "postalCode": "8001",
    "addressCountry": "ZA"
  },
  "telephone": "+27 21 000 0000",
  "url": "https://yourdomain.co.za"
}`;

const bodyTextStyle = {
  color: "#a1a1a1",
  lineHeight: 1.85,
  fontSize: "1rem",
  fontFamily: "var(--font-body)",
} as const;

const h2Style = {
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
} as const;

const h3Style = {
  fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
} as const;

export default function SeoAuditChecklistCapeTownPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        trail={[
          { name: "Blog", href: "/blog" },
          { name: "Local SEO", href: "/blog/local-seo/seo-audit-checklist-cape-town" },
          { name: "SEO Audit Checklist for Cape Town Businesses", href: "/blog/local-seo/seo-audit-checklist-cape-town" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-xs font-medium px-2.5 py-1 rounded border" style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}>
                Local SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> 12 min read
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> 3 May 2026
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              SEO Audit Checklist for Cape Town Businesses (2026)
            </h1>
            <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "680px" }}>
              An SEO audit for a Cape Town business examines technical health, on-page content, Google Business Profile, and local citation consistency. Done well, it shows you exactly why you are not ranking — and what to fix first.
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
                {/* Quick Answer */}
                <section id="quick-answer" className="mb-14">
                  <blockquote className="rounded-xl border-l-4 p-6" style={{ borderLeftColor: "#2563eb", background: "rgba(37,99,235,0.05)", borderTopColor: "#1f1f1f", borderRightColor: "#1f1f1f", borderBottomColor: "#1f1f1f", borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopStyle: "solid", borderRightStyle: "solid", borderBottomStyle: "solid" }}>
                    <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Answer</p>
                    <p style={bodyTextStyle}>
                      An SEO audit for a Cape Town business examines technical health, on-page content, Google Business Profile, and local citation consistency. Completing one reveals exactly why you are not ranking in local search and what to fix first. For most Cape Town SMEs, the biggest wins come from fixing GBP gaps and NAP inconsistencies across South African directories.
                    </p>
                  </blockquote>
                </section>

                {/* Key Takeaways */}
                <section id="key-takeaways" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Key Takeaways</h2>
                  <div className="flex flex-col gap-2">
                    {keyTakeaways.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Now */}
                <section id="why-now" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Why SEO Audits Matter More Now Than in 2020</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      Running an SEO audit for a Cape Town business used to be an annual task. That is no longer enough. Google&apos;s algorithm has changed substantially since 2020 and the local search environment in the Western Cape is more competitive than ever.
                    </p>
                    <p>
                      The clearest shift: Google&apos;s Helpful Content updates moved the goalposts from keyword density to genuine topical authority. A Cape Town plumber who stuffed &quot;plumber Cape Town&quot; into every paragraph would have ranked reasonably well in 2020. Today, that same page may be actively suppressed.
                    </p>
                    <p>Three changes make 2026 audits especially urgent for local businesses:</p>
                  </div>
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "AI Overviews in local results", desc: "Google's AI-generated answers now appear above traditional results for many local queries. If your content is not structured for machine extraction, you are invisible to a growing share of searchers." },
                      { title: "Stricter GBP enforcement", desc: "Listing suspensions for keyword-stuffed business names have increased. \"Cape Town Best Plumber – Rapid Response\" instead of your real business name puts you at risk." },
                      { title: "Thin content is detectable", desc: "Google can identify copy-paste location pages where only the city name changes. Unique, locally relevant content is the only path to ranking." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote className="mt-6 pl-5 border-l-2" style={{ borderLeftColor: "#3a3a3a" }}>
                    <p className="italic" style={{ ...bodyTextStyle, color: "#cfcfcf" }}>
                      &quot;A biannual audit is now the minimum for any Cape Town business that depends on local search traffic.&quot;
                    </p>
                  </blockquote>
                </section>

                {/* Technical */}
                <section id="technical" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Technical SEO Audit: The Foundation</h2>
                  <p style={bodyTextStyle}>
                    Technical SEO is the layer everything else sits on. If Google cannot crawl and index your site correctly, no amount of great content will help.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Crawlability and Indexation</h3>
                  <p style={bodyTextStyle}>
                    Use Google Search Console to identify crawl errors, blocked pages, and indexation issues. Common mistakes to fix:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {[
                      "Pages blocked by robots.txt that should be indexed",
                      "Duplicate content caused by URL parameters (e.g., ?ref= or ?utm_source=)",
                      "Orphan pages with no internal links pointing to them",
                      "Broken internal links returning 404 errors",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Core Web Vitals and Page Speed</h3>
                  <p style={bodyTextStyle}>The three Core Web Vitals that matter most:</p>
                  <div className="mt-4 overflow-x-auto rounded-xl border" style={{ borderColor: "#1f1f1f" }}>
                    <table className="w-full" style={{ borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
                      <thead>
                        <tr style={{ background: "rgba(37,99,235,0.08)" }}>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Metric</th>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>What it measures</th>
                          <th className="text-left p-3 text-white font-heading font-semibold" style={{ fontSize: "0.85rem", borderBottom: "1px solid #1f1f1f" }}>Good threshold</th>
                        </tr>
                      </thead>
                      <tbody>
                        {coreWebVitals.map((row, i) => (
                          <tr key={row.metric} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                            <td className="p-3 text-sm" style={{ color: "#cfcfcf", borderBottom: i === coreWebVitals.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.metric}</td>
                            <td className="p-3 text-sm" style={{ color: "#a1a1a1", borderBottom: i === coreWebVitals.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.measures}</td>
                            <td className="p-3 text-sm" style={{ color: "#a1a1a1", borderBottom: i === coreWebVitals.length - 1 ? "none" : "1px solid #1f1f1f" }}>{row.threshold}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4" style={bodyTextStyle}>
                    <strong className="text-white">Cape Town-specific note:</strong> South Africa&apos;s internet infrastructure means many local users experience slower connections than users in Europe or North America. A page that loads in 2.8s on fibre may take 5+ seconds on mobile data. Test using Google PageSpeed Insights and target the mobile score specifically.
                  </p>
                  <p className="mt-3" style={bodyTextStyle}>
                    Load-shedding also affects hosting uptime. If your hosting provider does not have adequate generator backup, your site may experience downtime during outages. That affects crawl frequency and user experience. Choose a hosting provider with guaranteed uptime SLAs.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Mobile and HTTPS</h3>
                  <p style={bodyTextStyle}>
                    South African mobile usage is high and Google uses mobile-first indexing for all sites. The mobile version is what Google primarily evaluates.
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {[
                      "Confirm your site is fully responsive across screen sizes.",
                      "Ensure HTTPS is active with a valid SSL certificate (no mixed-content warnings).",
                      "Test tap targets: buttons and links must be large enough to tap without zooming.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* On-Page */}
                <section id="onpage" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>On-Page SEO Audit</h2>
                  <p style={bodyTextStyle}>
                    On-page SEO covers the signals within each page that tell Google what the page is about and who it serves.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Title Tags and Meta Descriptions</h3>
                  <p style={bodyTextStyle}>
                    Every page needs a unique title tag (50–65 characters) that includes the primary keyword naturally. For Cape Town businesses, that means including location modifiers where relevant.
                  </p>
                  <p className="mt-3" style={bodyTextStyle}>
                    A useful format when serving a specific neighbourhood: <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#1a1a1a", color: "#cfcfcf", border: "1px solid #2a2a2a" }}>[Service] in [Area], Cape Town | [Business Name]</code> — for example <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#1a1a1a", color: "#cfcfcf", border: "1px solid #2a2a2a" }}>Electrician in Claremont, Cape Town | Volt Solutions</code>.
                  </p>
                  <p className="mt-3" style={bodyTextStyle}>
                    Meta descriptions do not directly affect rankings, but they influence click-through rate. Write them for the human reader, not the algorithm.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Heading Structure and Content Depth</h3>
                  <p style={bodyTextStyle}>
                    Each page needs one H1 that matches its primary intent. H2s and H3s should cover subtopics logically. Red flags to fix:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {[
                      "Multiple H1 tags on a single page",
                      "Heading tags used for styling rather than structure",
                      "Pages under 300 words on competitive topics (too thin to rank)",
                      "No location-specific context on service pages",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Internal Linking</h3>
                  <p style={bodyTextStyle}>
                    Internal links distribute authority across your site and help Google understand your content hierarchy. A Cape Town web designer&apos;s site should link from the homepage to individual{" "}
                    <Link href="/semantic-seo-services" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                      semantic SEO services
                    </Link>
                    {" "}pages and from blog posts back to relevant service pages. Audit by checking that every important page is reachable within three clicks from the homepage.
                  </p>
                </section>

                {/* Local */}
                <section id="local" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Local SEO Audit: The Cape Town Advantage</h2>
                  <p style={bodyTextStyle}>
                    This is where most Cape Town businesses either win or lose in local search. A thorough local audit covers three core areas.
                  </p>

                  <div className="my-8 rounded-xl overflow-hidden border" style={{ borderColor: "#1f1f1f" }}>
                    <Image
                      src="/images/seo-framework.png"
                      alt="Cape Town local SEO audit framework covering technical, on-page, and local signals"
                      width={1200}
                      height={630}
                      className="w-full h-auto"
                    />
                  </div>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Google Business Profile (GBP) Optimisation</h3>
                  <p style={bodyTextStyle}>
                    Your GBP listing is your most powerful local ranking tool. Audit it against this checklist:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {gbpChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#16a34a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl border p-5" style={{ borderColor: "#3a1d1d", background: "rgba(220,38,38,0.05)" }}>
                    <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.9rem" }}>Warning</p>
                    <p className="text-sm" style={{ color: "#cfcfcf", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
                      Google&apos;s fake-review detection has improved substantially. Businesses using review-acquisition services or incentivising reviews face direct profile penalties in 2026.
                    </p>
                  </div>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>Local Schema Markup (JSON-LD)</h3>
                  <p style={bodyTextStyle}>
                    <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#1a1a1a", color: "#cfcfcf", border: "1px solid #2a2a2a" }}>LocalBusiness</code> schema provides a machine-readable link between your website and your physical Cape Town address. AI crawlers and Google&apos;s systems use this to verify that your business genuinely operates where you claim. At minimum, your schema should include:
                  </p>
                  <pre className="mt-4 rounded-xl border p-5 overflow-x-auto" style={{ borderColor: "#1f1f1f", background: "#0a0a0a", fontSize: "0.8rem", lineHeight: 1.6 }}>
                    <code style={{ color: "#cfcfcf", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{localBusinessJsonExample}</code>
                  </pre>
                  <p className="mt-4" style={bodyTextStyle}>
                    Add opening hours, geo-coordinates, and <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#1a1a1a", color: "#cfcfcf", border: "1px solid #2a2a2a" }}>sameAs</code> links to your GBP and social profiles to strengthen entity signals.
                  </p>

                  <h3 className="font-heading font-bold text-white mt-8 mb-4" style={h3Style}>NAP (Name, Address, Phone) Consistency</h3>
                  <p style={bodyTextStyle}>
                    NAP consistency means your business name, address, and phone number are identical across every online directory. Even small differences (&quot;Rd&quot; vs &quot;Road&quot;, or a landline on one directory and a mobile on another) can dilute your local authority. Key South African directories to audit:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {["Yellow Pages SA", "Brabys", "Hotfrog", "Cylex South Africa", "Google Business Profile (the anchor)"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4" style={bodyTextStyle}>
                    Use a tool like BrightLocal or Whitespark to run a citation audit, or manually search your business name and check each listing.
                  </p>
                </section>

                {/* Content & Entity Salience */}
                <section id="content" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Content Quality and Entity Salience</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      Google&apos;s systems now evaluate whether your content clearly maps to the entities — people, places, services, concepts — that your Cape Town customers are actually searching for. This is what{" "}
                      <Link href="/blog/semantic-seo/what-is-semantic-seo" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        semantic SEO
                      </Link>
                      {" "}calls entity salience.
                    </p>
                    <p>
                      What entity salience means in practice: a Cape Town accountant&apos;s page about &quot;tax returns&quot; should reference SARS, provisional tax, the South African tax year (March to February), and ideally mention the specific suburbs or business districts they serve. These contextual signals tell Google and AI systems that the content is genuinely relevant to a Cape Town audience — not a generic page with &quot;Cape Town&quot; inserted into the title.
                    </p>
                    <p>Audit your content for:</p>
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {[
                      "Location-specific keywords with geographic modifiers (e.g., \"bookkeeper in Sea Point\" or \"web designer in Cape Town\").",
                      "References to local landmarks, neighbourhoods, or regional context where relevant.",
                      "Unique insights that a generic national page would not include.",
                      "No copy-paste location pages where only the city name changes.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 p-3 rounded-lg border" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4" style={bodyTextStyle}>
                    Review content is now analysed semantically too. A review that says &quot;Great plumber, fixed our geyser quickly in Bellville&quot; carries more local entity weight than &quot;5 stars, great service.&quot; Encourage customers to be specific.
                  </p>
                </section>

                {/* After Audit */}
                <section id="after" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>What to Do After Your Audit</h2>
                  <p style={bodyTextStyle}>A completed audit is only useful if it leads to action. A practical prioritisation framework:</p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        label: "Fix immediately (within 2 weeks)",
                        items: [
                          "Correct any GBP violations (keyword-stuffed name, wrong category).",
                          "Fix broken pages and crawl errors in Search Console.",
                          "Ensure HTTPS is active and SSL is valid.",
                        ],
                      },
                      {
                        label: "Fix within 30 days",
                        items: [
                          "Correct NAP inconsistencies across all directories.",
                          "Add or update LocalBusiness schema on homepage and contact page.",
                          "Rewrite thin location pages with genuine local content.",
                        ],
                      },
                      {
                        label: "Ongoing (monthly)",
                        items: [
                          "Acquire 5–10 reviews; respond within 48 hours.",
                          "Build at least one new local link per month.",
                          "Track Map Pack rankings weekly.",
                          "Publish at least two GBP posts per month.",
                        ],
                      },
                    ].map((col) => (
                      <div key={col.label} className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-3" style={{ fontSize: "0.95rem" }}>{col.label}</p>
                        <ul className="flex flex-col gap-2">
                          {col.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>
                              <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#3a3a3a" }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Professional */}
                <section id="professional" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Need a Professional SEO Audit for Your Cape Town Business?</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      If you have worked through this checklist but do not have time to fix everything you found — or are not sure what the findings mean — a professional audit is the logical next step. A local SEO professional understands the Western Cape competitive landscape, neighbourhood-level search behaviour, and which directories matter for South African businesses.
                    </p>
                    <p>
                      Explore{" "}
                      <Link href="/seo-services-cape-town" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        Cape Town SEO services
                      </Link>
                      {" "}or{" "}
                      <Link href="/semantic-seo-services" className="text-white underline underline-offset-2" style={{ textDecorationColor: "#3a3a3a" }}>
                        semantic SEO services
                      </Link>
                      {" "}to see how a structured audit and entity-driven strategy can move your local rankings.
                    </p>
                  </div>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                      <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>Choose a local agency if</p>
                      <ul className="flex flex-col gap-2 text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                        <li>You serve customers in specific Cape Town suburbs (Claremont, Sea Point, Woodstock, Stellenbosch).</li>
                        <li>Your competitors are also local businesses and you need neighbourhood-level insight.</li>
                        <li>You want someone who can attend your premises and gather authentic local content.</li>
                      </ul>
                    </div>
                    <div className="rounded-xl border p-5" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                      <p className="font-heading font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>Choose a national or remote agency if</p>
                      <ul className="flex flex-col gap-2 text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                        <li>You serve a national audience and Cape Town is one of many markets.</li>
                        <li>Your primary competitors are national brands, not local SMEs.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-8" style={h2Style}>Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-4">
                    {faqItems.map((item) => (
                      <div key={item.q} className="rounded-xl border p-6" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                        <p className="font-heading font-semibold text-white mb-3" style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}>{item.q}</p>
                        <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-14">
                  <h2 className="font-heading font-bold text-white mb-5" style={h2Style}>Conclusion</h2>
                  <div className="flex flex-col gap-4" style={bodyTextStyle}>
                    <p>
                      A structured SEO audit is not a one-time project. It is a diagnostic process that keeps your local search visibility aligned with how Google and AI systems evaluate local businesses right now.
                    </p>
                    <p>
                      Start with the quick wins (GBP corrections, NAP fixes, crawl errors) and build toward the longer-term work (local content, link building, schema). Your next three actions:
                    </p>
                    <ol className="flex flex-col gap-2 list-decimal pl-5">
                      <li>Open Google Search Console and check for crawl errors and coverage issues today.</li>
                      <li>Log into Google Business Profile and compare it against the audit checklist above.</li>
                      <li>Search your business name on Yellow Pages SA and Brabys to check NAP consistency.</li>
                    </ol>
                  </div>
                </section>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-28" style={{ background: "#050505", borderTop: "1px solid #1f1f1f" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Continue Reading</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Cape Town SEO Services", href: "/seo-services-cape-town", desc: "Semantic, local, and technical SEO services for Western Cape businesses." },
                  { label: "Semantic SEO: What It Is and 10 Tips", href: "/blog/semantic-seo/what-is-semantic-seo", desc: "How entity-led SEO outperforms keyword-led SEO in 2026." },
                  { label: "Semantic SEO vs. Traditional SEO", href: "/blog/semantic-seo/semantic-seo-vs-traditional-seo", desc: "What actually changed and how to build a hybrid strategy that wins." },
                  { label: "Technical SEO Services", href: "/technical-seo-services", desc: "Crawlability, Core Web Vitals, indexation, and rendering for AI-era sites." },
                  { label: "GEO for South African Businesses", href: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", desc: "How South African businesses can win in AI-driven search." },
                  { label: "About Dino de Wet", href: "/about", desc: "Cape Town-based semantic SEO strategist and AI architect." },
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
                  <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>Get a Tailored SEO Audit</p>
                  <h2 className="font-heading font-bold text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Want a structured SEO audit that prioritises the fixes that move local rankings in Cape Town?
                  </h2>
                  <p className="mb-8 text-sm" style={{ color: "#a1a1a1", lineHeight: 1.8, fontFamily: "var(--font-body)" }}>
                    A semantic, local-aware audit covering technical health, GBP, NAP, schema, and content quality — with a prioritised action plan you can hand to a developer or agency.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      Book an Audit Call <ArrowRight size={14} />
                    </Link>
                    <Link href="/seo-services-cape-town" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      View Cape Town SEO Services
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/seo-services-cape-town", anchor: "Cape Town SEO services" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/technical-seo-services", anchor: "technical SEO services" },
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/seo-consultant-south-africa", anchor: "SEO consultant in South Africa" },
          { href: "/blog", anchor: "SEO blog" },
        ]}
      />
    </>
  );
}
