import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantic SEO Articles | Dino de Wet",
  description:
    "Guides on semantic SEO, entity optimisation, topical authority, and Knowledge Graph strategy from Dino de Wet — Semantic SEO Web Developer & AI Architect.",
  alternates: {
    canonical: "https://dinodewet.co.za/blog/semantic-seo",
  },
  openGraph: {
    title: "Semantic SEO Articles | Dino de Wet",
    description:
      "Guides on semantic SEO, entity optimisation, topical authority, and Knowledge Graph strategy.",
    url: "https://dinodewet.co.za/blog/semantic-seo",
    images: [
      {
        url: "/images/semantic-seo-services.png",
        width: 1200,
        height: 630,
        alt: "Semantic SEO Articles — Dino de Wet",
      },
    ],
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://dinodewet.co.za/blog/semantic-seo#page",
      "url": "https://dinodewet.co.za/blog/semantic-seo",
      "name": "Semantic SEO Articles",
      "description":
        "A collection of guides on semantic SEO, entity-based optimisation, topical authority, and Knowledge Graph strategy.",
      "isPartOf": { "@id": "https://dinodewet.co.za/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dinodewet.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dinodewet.co.za/blog" },
          { "@type": "ListItem", "position": 3, "name": "Semantic SEO", "item": "https://dinodewet.co.za/blog/semantic-seo" },
        ],
      },
    },
  ],
};

const articles = [
  {
    href: "/blog/semantic-seo/what-is-semantic-seo",
    title: "Semantic SEO: What It Is and 10 Tips for Success",
    description:
      "Learn what semantic SEO is, why it matters, and 10 practical tips to improve topical authority, entity clarity, and search visibility.",
    readTime: "14 min",
  },
  {
    href: "/blog/what-is-semantic-seo",
    title: "What Is Semantic SEO? A Complete Guide",
    description:
      "Semantic SEO builds visibility around entities, attributes, and relationships — not just keywords. A deep guide to Knowledge Graphs, NLP, and topical authority.",
    readTime: "12 min",
  },
];

export default function SemanticSEOCategory() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />

      <section style={{ background: "#050505", minHeight: "70vh" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-10" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">Semantic SEO</span>
          </nav>

          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Category
          </p>

          <h1
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1.1 }}
          >
            Semantic SEO
          </h1>

          <p className="text-base max-w-2xl mb-14 leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            Guides on building search visibility through entities, topical authority, and semantic content architecture — not just keywords.
          </p>

          <div className="flex flex-col gap-6">
            {articles.map(({ href, title, description, readTime }) => (
              <Link
                key={href}
                href={href}
                className="group block border rounded-xl p-6 transition-colors duration-200 hover:border-white"
                style={{ borderColor: "#1f1f1f" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2
                      className="font-heading font-semibold text-white mb-2 group-hover:underline"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                      {description}
                    </p>
                    <p className="text-xs mt-3" style={{ color: "#555", fontFamily: "var(--font-body)" }}>
                      {readTime} read
                    </p>
                  </div>
                  <ArrowRight size={18} className="shrink-0 mt-1 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t flex flex-col sm:flex-row gap-4 items-start sm:items-center" style={{ borderColor: "#1f1f1f" }}>
            <p className="text-sm" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
              Need a semantic SEO strategy for your site?
            </p>
            <Link
              href="/semantic-seo-services"
              className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Semantic SEO Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
