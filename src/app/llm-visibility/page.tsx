import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "LLM Visibility | Brand Mentions Across ChatGPT, Gemini & Perplexity",
  description:
    "LLM visibility consulting from Dino de Wet — strategy and implementation that gets your brand cited inside ChatGPT, Gemini, Perplexity, and other large-language-model answer surfaces.",
  alternates: { canonical: "https://dinodewet.co.za/llm-visibility" },
  openGraph: {
    title: "LLM Visibility | Brand Mentions Across ChatGPT, Gemini & Perplexity",
    description: "Strategy that gets your brand cited inside large-language-model answers.",
    url: "https://dinodewet.co.za/llm-visibility",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Visibility | Brand Mentions Across ChatGPT, Gemini & Perplexity",
    description: "Be present in the answers buyers actually read.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/llm-visibility#service",
      name: "LLM Visibility",
      url: "https://dinodewet.co.za/llm-visibility",
      description:
        "Strategy and implementation that increases brand mentions and citations inside large-language-model answer surfaces — ChatGPT, Gemini, Perplexity, and Claude.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: "Worldwide",
      serviceType: "LLM Visibility",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "LLM Visibility", href: "/llm-visibility" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Programme
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            LLM Visibility
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Buyers are increasingly running their first comparison inside an LLM, not Google. LLM visibility is the
            discipline of becoming a brand that those models recall, summarise, and recommend — through entity
            strength, distributed brand mentions, and content that survives passage-level retrieval.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            How LLM visibility is built
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            The foundation is an unambiguous brand entity — the same work that{" "}
            <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>{" "}
            and a strong{" "}
            <Link href="/seo-consultant-south-africa" className="internal-link">SEO consultant in South Africa</Link>{" "}
            establish for classical search. On top of that, LLM visibility programmes drive consistent third-party
            mentions and structure on-site content for retrieval — the same techniques used in{" "}
            <Link href="/generative-engine-optimisation" className="internal-link">generative engine optimisation</Link>{" "}
            and <Link href="/ai-search-engine-optimisation" className="internal-link">AI search engine optimisation</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            Engineering and infrastructure are delivered through{" "}
            <Link href="/web-development-services" className="internal-link">Next.js SEO web development</Link>{" "}
            and, where AI features must ship inside the product itself,{" "}
            <Link href="/ai-architect" className="internal-link">AI architect services</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            To scope an engagement,{" "}
            <Link href="/contact" className="internal-link">book an LLM visibility consultation</Link>.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/generative-engine-optimisation", anchor: "generative engine optimisation" },
          { href: "/ai-search-engine-optimisation", anchor: "AI search engine optimisation" },
          { href: "/answer-engine-optimisation-services-south-africa", anchor: "answer engine optimisation services" },
          { href: "/ai-seo", anchor: "AI SEO" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/ai-architect", anchor: "AI architect services" },
        ]}
      />
    </>
  );
}
