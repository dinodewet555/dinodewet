import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "SEO Services South Africa | Dino de Wet",
  description:
    "SEO services in South Africa for businesses that want sustained organic visibility across Google, AI Overviews, and answer engines. Technical SEO, semantic SEO, and AI SEO from Cape Town.",
  alternates: { canonical: "https://dinodewet.co.za/seo-services-south-africa" },
  openGraph: {
    title: "SEO Services South Africa | Dino de Wet",
    description:
      "Search-engine optimisation services for South African businesses — technical, semantic, and AI-driven SEO that compounds over time.",
    url: "https://dinodewet.co.za/seo-services-south-africa",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services South Africa | Dino de Wet",
    description: "Sustained organic visibility for South African businesses across Google and AI search.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/seo-services-south-africa#service",
      name: "SEO Services South Africa",
      url: "https://dinodewet.co.za/seo-services-south-africa",
      description:
        "Search-engine optimisation services for South African businesses — combining technical SEO, semantic SEO, and AI SEO into one strategy.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: [
        { "@type": "Country", name: "South Africa" },
        { "@type": "City", name: "Cape Town" },
        { "@type": "City", name: "Johannesburg" },
        { "@type": "City", name: "Durban" },
      ],
      serviceType: "Search Engine Optimisation",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "SEO Services South Africa", href: "/seo-services-south-africa" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Service
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            SEO Services in South Africa
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Search-engine optimisation services for South African businesses that want compounding visibility across
            Google, AI Overviews, ChatGPT, Perplexity, and modern answer engines. Strategy, implementation, and
            measurement combined into a single coherent system.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose-content">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            What is included
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            Every engagement is structured around three pillars that work as one system. The{" "}
            <Link href="/technical-seo-services" className="internal-link">technical SEO services</Link> layer
            ensures crawlability, indexability, performance, and structured data are correct at the foundation.
            On top of that, <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>{" "}
            establish topical depth, entity clarity, and the topical authority Google now requires for sustained
            rankings.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            The third layer — <Link href="/ai-seo-services-south-africa" className="internal-link">AI SEO services in South Africa</Link>{" "}
            — extends the same content assets into AI Overviews, generative answer engines, and large-language-model
            citation surfaces. Cape Town businesses can also engage{" "}
            <Link href="/seo-services-cape-town" className="internal-link">SEO services in Cape Town</Link>{" "}
            with stronger local entity, citation, and Knowledge Graph signals.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            To scope a project,{" "}
            <Link href="/contact" className="internal-link">request an SEO consultation</Link>.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        intro="Each service below addresses a specific layer of the same system — pick the entry point that matches the strongest constraint on your visibility today."
        links={[
          { href: "/technical-seo-services", anchor: "technical SEO services", description: "Crawl, index, performance, and structured-data foundations." },
          { href: "/semantic-seo-services", anchor: "semantic SEO services", description: "Topical authority, entity clarity, and information architecture." },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa", description: "Visibility across AI Overviews, ChatGPT, Perplexity, and Gemini." },
          { href: "/seo-services-cape-town", anchor: "SEO services in Cape Town", description: "Local entity and citation strategy for Cape Town businesses." },
          { href: "/seo-consultant-south-africa", anchor: "SEO consultant in South Africa", description: "Strategy and oversight for in-house teams or agencies." },
          { href: "/contact", anchor: "request an SEO consultation", description: "Scope a project, ask a question, or request an audit." },
        ]}
      />
    </>
  );
}
