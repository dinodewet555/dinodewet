import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation | GEO Strategy by Dino de Wet",
  description:
    "Generative engine optimisation (GEO) positions content to be retrieved, ranked, and cited inside generative AI answers — Google AI Overviews, ChatGPT, Perplexity, and Gemini.",
  alternates: { canonical: "https://dinodewet.co.za/generative-engine-optimisation" },
  openGraph: {
    title: "Generative Engine Optimisation | GEO Strategy by Dino de Wet",
    description: "GEO strategy for AI Overviews, ChatGPT, Perplexity, and large-language-model citation.",
    url: "https://dinodewet.co.za/generative-engine-optimisation",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Engine Optimisation | GEO Strategy by Dino de Wet",
    description: "Be retrieved, ranked, and cited inside generative AI answers.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/generative-engine-optimisation#service",
      name: "Generative Engine Optimisation",
      url: "https://dinodewet.co.za/generative-engine-optimisation",
      description:
        "Positioning content for retrieval, ranking, and citation by generative AI systems including Google AI Overviews, ChatGPT, Perplexity, and Gemini.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "Generative Engine Optimisation",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "Generative Engine Optimisation", href: "/generative-engine-optimisation" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Strategy
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Generative Engine Optimisation
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Generative engine optimisation (GEO) is the practice of structuring content, entities, and authority
            so a brand is selected, summarised, and cited inside generative AI answers. The traffic and decision
            surface have moved — GEO is how a business stays present on it.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            How a GEO engagement is structured
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            GEO works alongside, not instead of, classical search optimisation. The classical layer is delivered
            through <Link href="/seo-services-south-africa" className="internal-link">SEO services in South Africa</Link>;
            the generative layer extends the same content into AI surfaces via{" "}
            <Link href="/answer-engine-optimisation-services-south-africa" className="internal-link">answer engine optimisation services</Link>{" "}
            and a paired{" "}
            <Link href="/llm-visibility" className="internal-link">LLM visibility</Link>{" "}
            programme that strengthens brand mentions across the broader public web.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For full implementation in a South African context, the production engagement is{" "}
            <Link href="/ai-seo-services-south-africa" className="internal-link">AI SEO services</Link>{" "}
            — combined with <Link href="/ai-search-engine-optimisation" className="internal-link">AI search engine optimisation</Link>{" "}
            patterns specific to retrieval-augmented systems.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            For deeper background, read the{" "}
            <Link href="/blog/generative-engine-optimisation" className="internal-link">complete GEO guide</Link>{" "}
            on the blog.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Build Your AI Search Visibility"
        links={[
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/llm-visibility", anchor: "LLM visibility" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services" },
          { href: "/ai-seo", anchor: "AI SEO strategy" },
          { href: "/blog/generative-engine-optimisation", anchor: "complete GEO guide" },
        ]}
      />
    </>
  );
}
