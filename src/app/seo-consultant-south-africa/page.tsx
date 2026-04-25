import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "SEO Consultant South Africa | Dino de Wet",
  description:
    "Independent SEO consultant in South Africa offering strategy, technical audits, semantic SEO, and AI search visibility for businesses, agencies, and in-house teams.",
  alternates: { canonical: "https://dinodewet.co.za/seo-consultant-south-africa" },
  openGraph: {
    title: "SEO Consultant South Africa | Dino de Wet",
    description: "Independent SEO consultant covering technical, semantic, and AI search.",
    url: "https://dinodewet.co.za/seo-consultant-south-africa",
    siteName: "Dino de Wet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Consultant South Africa | Dino de Wet",
    description: "Independent SEO consultancy across technical, semantic, and AI search.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://dinodewet.co.za/seo-consultant-south-africa#service",
      name: "SEO Consultant South Africa",
      url: "https://dinodewet.co.za/seo-consultant-south-africa",
      description:
        "Independent SEO consultancy across technical SEO, semantic SEO, and AI search visibility for South African businesses, agencies, and in-house teams.",
      provider: { "@id": "https://dinodewet.co.za/#person" },
      areaServed: { "@type": "Country", name: "South Africa" },
      serviceType: "SEO Consultancy",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs trail={[{ name: "SEO Consultant South Africa", href: "/seo-consultant-south-africa" }]} />

      <section className="pb-20" style={{ background: "#050505" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Consulting
          </p>
          <h1
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            SEO Consultant South Africa
          </h1>
          <p style={{ color: "#a1a1a1", maxWidth: "640px", lineHeight: 1.8, fontSize: "1.05rem", fontFamily: "var(--font-body)" }}>
            Dino de Wet is an independent SEO consultant based in Cape Town, working with South African and
            international businesses on technical SEO, semantic SEO, and AI search visibility — through full
            engagements or as an embedded advisor to in-house and agency teams.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>
            Engagement formats
          </h2>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For ground-up programmes, see{" "}
            <Link href="/seo-services-south-africa" className="internal-link">SEO services in South Africa</Link>.
            For specific layers — <Link href="/technical-seo-services" className="internal-link">technical SEO services</Link>,{" "}
            <Link href="/semantic-seo-services" className="internal-link">semantic SEO services</Link>, or{" "}
            <Link href="/ai-seo-services-south-africa" className="internal-link">AI SEO services in South Africa</Link>{" "}
            — engagements can target a single layer.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
            For local positioning,{" "}
            <Link href="/seo-services-cape-town" className="internal-link">SEO services for Cape Town businesses</Link>{" "}
            adds local entity, citation, and Google Business Profile work to the same foundation.
          </p>
          <p style={{ color: "#a1a1a1", lineHeight: 1.85, fontSize: "1rem", fontFamily: "var(--font-body)" }}>
            <Link href="/contact" className="internal-link">Request a consultation</Link>{" "}
            or read more <Link href="/about" className="internal-link">about Dino de Wet</Link>.
          </p>
        </div>
      </section>

      <RelatedServices
        heading="Connected SEO Solutions"
        links={[
          { href: "/seo-services-south-africa", anchor: "SEO services in South Africa" },
          { href: "/seo-services-cape-town", anchor: "SEO services in Cape Town" },
          { href: "/technical-seo-services", anchor: "technical SEO services" },
          { href: "/semantic-seo-services", anchor: "semantic SEO services" },
          { href: "/ai-seo-services-south-africa", anchor: "AI SEO services in South Africa" },
          { href: "/about", anchor: "about Dino de Wet" },
        ]}
      />
    </>
  );
}
