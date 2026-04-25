import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "SEO Services Cape Town | Local & National SEO by Dino de Wet",
  description:
    "SEO services for Cape Town businesses — local entity strategy, technical foundations, semantic depth, and AI search visibility from a Cape Town–based consultant.",
  alternates: { canonical: "https://dinodewet.co.za/seo-services-cape-town" },
  openGraph: {
    title: "SEO Services Cape Town | Local & National SEO by Dino de Wet",
    description: "SEO services for Cape Town businesses — local, national, and AI search.",
    url: "https://dinodewet.co.za/seo-services-cape-town",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Cape Town | Local & National SEO by Dino de Wet",
    description: "Local and national SEO for Cape Town businesses.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://dinodewet.co.za/seo-services-cape-town#service",
      name: "SEO Services Cape Town",
      url: "https://dinodewet.co.za/seo-services-cape-town",
      description:
        "Local and national SEO services for Cape Town businesses, including technical SEO, semantic SEO, AI search visibility, and Google Business Profile strategy.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: { "@type": "City", name: "Cape Town" },
      serviceType: "Local SEO",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "SEO Services Cape Town", href: "/seo-services-cape-town" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Local
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            SEO Services Cape Town
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            SEO services for Cape Town businesses — combining local entity strategy and Google Business Profile
            optimisation with the same technical, semantic, and AI search foundation used for national programmes.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            How a Cape Town engagement is structured
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            The local layer addresses Google Business Profile, locally relevant citations, neighbourhood-level
            content, and review strategy. The national layer is delivered through{" "}
            <Link href="/seo-services-south-africa" className="internal-link">SEO services in South Africa</Link>{" "}
            with foundations from{" "}
            <Link href="/technical-seo-services" className="internal-link">technical SEO services</Link>{" "}
            and depth from <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For brands aiming at AI Overviews and answer engines, the same content base is extended with{" "}
            <Link href="/ai-seo-services-south-africa" className="internal-link">AI SEO services in South Africa</Link>{" "}
            and a paired <Link href="/llm-visibility" className="internal-link">LLM visibility</Link> programme.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            Cape Town businesses can engage Dino as an embedded{" "}
            <Link href="/seo-consultant-south-africa" className="internal-link">SEO consultant in South Africa</Link>{" "}
            or, for site rebuilds, through{" "}
            <Link href="/web-development-services" className="internal-link">Next.js SEO web development</Link>.
            <Link href="/contact" className="internal-link"> Book a Cape Town SEO consultation</Link> to start.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/seo-consultant-south-africa", anchor: "SEO consultant in South Africa" },
          { href: "/technical-seo-services", anchor: "technical SEO services" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/web-development-services", anchor: "Next.js SEO web development" },
        ]}
      />
    </>
  );
}
