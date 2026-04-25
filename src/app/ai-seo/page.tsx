import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "AI SEO | Visibility Across Google AI, ChatGPT & Answer Engines",
  description:
    "AI SEO is the discipline of structuring content, entities, and authority so brands appear in Google AI Overviews, ChatGPT, Perplexity, and large-language-model search results. By Dino de Wet.",
  alternates: { canonical: "https://dinodewet.co.za/ai-seo" },
  openGraph: {
    title: "AI SEO | Visibility Across Google AI, ChatGPT & Answer Engines",
    description: "How AI SEO works and how to position your brand to be retrieved, cited, and recommended by AI search systems.",
    url: "https://dinodewet.co.za/ai-seo",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO | Visibility Across Google AI, ChatGPT & Answer Engines",
    description: "Position your brand to be retrieved, cited, and recommended by AI search systems.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/ai-seo#service",
      name: "AI SEO",
      url: "https://dinodewet.co.za/ai-seo",
      description:
        "Strategy and implementation that positions a brand for visibility across AI search systems — Google AI Overviews, ChatGPT, Perplexity, Gemini, and answer engines.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "AI SEO",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "AI SEO", href: "/ai-seo" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Discipline
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            AI SEO
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            AI SEO is the discipline of structuring content, entities, and authority so a brand is retrieved,
            cited, and recommended by AI search systems — Google AI Overviews, ChatGPT, Perplexity, Gemini,
            and answer engines that no longer return ten blue links.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            How AI SEO works
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            AI search systems combine retrieval, ranking, and generation. Pages that win citations are the ones
            structured for passage-level extraction, with clean entity signals and a strong topical foundation.
            That foundation is built through{" "}
            <Link href="/semantic-seo" className="internal-link">semantic SEO consulting</Link>{" "}
            — and extended through targeted{" "}
            <Link href="/generative-engine-optimisation" className="internal-link">generative engine optimisation</Link>{" "}
            and{" "}
            <Link href="/answer-engine-optimisation-services-south-africa" className="internal-link">answer engine optimisation services</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For South African businesses, the production engagement is{" "}
            <Link href="/ai-seo-services-south-africa" className="internal-link">AI SEO services in South Africa</Link>,
            which combines content modelling, schema, internal linking, and brand-mention strategy with an
            <Link href="/llm-visibility" className="internal-link"> LLM visibility strategy</Link>{" "}
            so brand mentions show up where decisions get made.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            See the <Link href="/blog/generative-engine-optimisation" className="internal-link">complete guide to generative engine optimisation</Link>{" "}
            for the full methodology, or <Link href="/contact" className="internal-link">book an AI SEO consultation</Link>{" "}
            to discuss your project.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Build Your AI Search Visibility"
        links={[
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/llm-visibility", anchor: "LLM visibility strategy" },
          { href: "/semantic-seo", anchor: "semantic SEO foundation" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
        ]}
      />
    </>
  );
}
