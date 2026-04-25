import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Search Engine Optimisation | What It Is & How It Works in 2026",
  description:
    "Search engine optimisation explained — how Google, Bing, and AI search systems rank and cite content, and how an integrated technical, semantic, and AI-aware programme delivers compounding visibility.",
  alternates: { canonical: "https://dinodewet.co.za/search-engine-optimisation" },
  openGraph: {
    title: "Search Engine Optimisation | What It Is & How It Works in 2026",
    description: "An integrated approach to SEO across classical search and AI answer engines.",
    url: "https://dinodewet.co.za/search-engine-optimisation",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimisation | What It Is & How It Works in 2026",
    description: "Compounding visibility across Google, Bing, and AI search systems.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/search-engine-optimisation#service",
      name: "Search Engine Optimisation",
      url: "https://dinodewet.co.za/search-engine-optimisation",
      description:
        "An integrated SEO programme combining technical foundations, semantic depth, and AI-aware content strategy for compounding visibility across Google and AI search systems.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "Search Engine Optimisation",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "Search Engine Optimisation", href: "/search-engine-optimisation" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Discipline
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Search Engine Optimisation
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Search engine optimisation is no longer one discipline — it is a portfolio. Classical ranking still
            drives the majority of qualified traffic, while AI Overviews, ChatGPT, Perplexity, and Gemini are
            reshaping the discovery surface. An effective SEO programme treats both as one system.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            The integrated SEO stack
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            Foundations sit in <Link href="/technical-seo-services" className="internal-link">technical SEO services</Link> —
            crawl, index, performance, and structured data. Topical authority is built by{" "}
            <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>.
            AI surfaces are addressed through{" "}
            <Link href="/ai-seo" className="internal-link">AI SEO</Link>,{" "}
            <Link href="/generative-engine-optimisation" className="internal-link">generative engine optimisation</Link>,
            and <Link href="/answer-engine-optimisation-services-south-africa" className="internal-link">answer engine optimisation services</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For a regional engagement, see{" "}
            <Link href="/seo-services-south-africa" className="internal-link">SEO services in South Africa</Link>{" "}
            or, for Cape Town businesses,{" "}
            <Link href="/seo-services-cape-town" className="internal-link">SEO services in Cape Town</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            <Link href="/contact" className="internal-link">Request an SEO consultation</Link> to discuss your project.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/technical-seo-services", anchor: "technical SEO services" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/ai-seo", anchor: "AI SEO" },
          { href: "/seo-consultant-south-africa", anchor: "SEO consultant in South Africa" },
          { href: "/seo-services-cape-town", anchor: "SEO services in Cape Town" },
        ]}
      />
    </>
  );
}
