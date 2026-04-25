import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Technical SEO Services | Crawl, Index & Performance Foundations",
  description:
    "Technical SEO services for South African businesses — crawlability audits, indexation strategy, Core Web Vitals, structured data, and Next.js-grade performance engineering by Dino de Wet.",
  alternates: { canonical: "https://dinodewet.co.za/technical-seo-services" },
  openGraph: {
    title: "Technical SEO Services | Crawl, Index & Performance Foundations",
    description: "Crawl, index, performance, and structured-data foundations that the rest of SEO depends on.",
    url: "https://dinodewet.co.za/technical-seo-services",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Services | Crawl, Index & Performance Foundations",
    description: "Technical SEO foundations that compound — crawl, index, schema, performance.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/technical-seo-services#service",
      name: "Technical SEO Services",
      url: "https://dinodewet.co.za/technical-seo-services",
      description:
        "Crawl, index, performance, and structured-data engineering that gives every other SEO investment a stable foundation.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "Technical SEO",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "Technical SEO Services", href: "/technical-seo-services" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Service
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Technical SEO Services
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Search engines can only rank what they can crawl, render, and understand. Technical SEO services
            close the gap between your content and how Google, Bing, and AI retrieval systems actually see your site.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            What gets fixed
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0 mb-8">
            {[
              "Crawl-budget and indexation logic",
              "Sitemap and robots strategy",
              "Canonicalisation and trailing-slash policy",
              "Internal-linking architecture",
              "Core Web Vitals and rendering",
              "JavaScript SEO and SSR coverage",
              "Schema.org / JSON-LD modelling",
              "Hreflang and international setup",
              "Redirect chains and status codes",
              "Server logs and crawl diagnostics",
            ].map((item) => (
              <li key={item} className="rounded-lg border p-4" style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}>
                <span style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            Technical SEO is the prerequisite layer for every other initiative. Pair it with{" "}
            <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>{" "}
            for topical authority, or with{" "}
            <Link href="/web-development-services" className="internal-link">Next.js SEO web development</Link>{" "}
            when the underlying CMS or framework is the bottleneck.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            For a structured engagement, see{" "}
            <Link href="/seo-services-south-africa" className="internal-link">SEO services in South Africa</Link>{" "}
            or <Link href="/contact" className="internal-link">request a technical SEO audit</Link>.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/web-development-services", anchor: "Next.js SEO web development" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/seo-consultant-south-africa", anchor: "SEO consultant in South Africa" },
          { href: "/contact", anchor: "request a technical SEO audit" },
        ]}
      />
    </>
  );
}
