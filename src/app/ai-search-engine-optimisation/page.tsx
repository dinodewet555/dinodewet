import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "AI Search Engine Optimisation | Retrieval-Aware SEO by Dino de Wet",
  description:
    "AI search engine optimisation aligns a website with how retrieval-augmented and generative AI engines select, rank, and cite content. Practical implementation by Dino de Wet.",
  alternates: { canonical: "https://dinodewet.co.za/ai-search-engine-optimisation" },
  openGraph: {
    title: "AI Search Engine Optimisation | Retrieval-Aware SEO",
    description: "How to structure content and entities for AI retrieval, ranking, and citation.",
    url: "https://dinodewet.co.za/ai-search-engine-optimisation",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Engine Optimisation | Retrieval-Aware SEO",
    description: "Structure content for how AI retrieves, ranks, and cites it.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/ai-search-engine-optimisation#service",
      name: "AI Search Engine Optimisation",
      url: "https://dinodewet.co.za/ai-search-engine-optimisation",
      description:
        "Aligning a website with how retrieval-augmented and generative AI engines select, rank, and cite content.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "AI Search Engine Optimisation",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "AI Search Engine Optimisation", href: "/ai-search-engine-optimisation" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Discipline
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            AI Search Engine Optimisation
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            AI search engines combine vector retrieval, ranking, and generation in one pipeline. AI search engine
            optimisation is the discipline of structuring content so each step in that pipeline returns your brand —
            cleanly, consistently, and with the right framing.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            What it covers
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            The work overlaps with{" "}
            <Link href="/generative-engine-optimisation" className="internal-link">generative engine optimisation</Link>{" "}
            but focuses specifically on the retrieval surface — chunking, passage clarity, entity disambiguation,
            and structured-data signals that retrieval-augmented systems consume directly. It complements{" "}
            <Link href="/answer-engine-optimisation-services-south-africa" className="internal-link">answer engine optimisation services</Link>{" "}
            on the answer-shaping side.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            Strong AI search performance requires a strong classical foundation — built through{" "}
            <Link href="/technical-seo-services" className="internal-link">technical SEO services</Link>{" "}
            and <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link> —
            then extended through brand-mention strategy and{" "}
            <Link href="/llm-visibility" className="internal-link">LLM visibility</Link>{" "}
            programmes.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            To scope an engagement, <Link href="/contact" className="internal-link">book an AI search consultation</Link>.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Build Your AI Search Visibility"
        links={[
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/llm-visibility", anchor: "LLM visibility" },
          { href: "/ai-seo", anchor: "AI SEO" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
        ]}
      />
    </>
  );
}
