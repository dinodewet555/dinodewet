import { SITE_URL } from "@/lib/site";

export type Faq = { q: string; a: string };

/** A single FAQPage node built from one {q,a}[] — also used to feed the visible
 * FAQ list so schema and rendered Q&A can never diverge. */
export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((f) => ({
      "@type": "Question" as const,
      name: f.q,
      acceptedAnswer: { "@type": "Answer" as const, text: f.a },
    })),
  };
}

/** Breadcrumb crumb; `path` is relative to the site root ("" == home). */
export type BreadcrumbItem = { name: string; path: string };

export type ArticleSchemaInput = {
  /** Slug relative to /blog, e.g. "semantic-seo/entity-seo-knowledge-graph". */
  slug: string;
  title: string;
  description: string;
  published: string;
  modified?: string;
  category: string;
  keywords?: string[] | string;
  wordCount?: number;
  /** Path ("/images/x.png") or absolute URL. */
  image?: string;
  faqs?: Faq[];
  /** Entity names for the Article `about` property. */
  about?: string[];
  /** Trail excluding Home (auto-prepended) — include the article itself last. */
  breadcrumb: BreadcrumbItem[];
};

/**
 * Full article JSON-LD @graph (Article + WebPage + BreadcrumbList + optional
 * FAQPage). Replaces ~150 lines of hand-written schema per article and keeps the
 * FAQ in lockstep with the rendered list.
 */
export function buildArticleSchema(input: ArticleSchemaInput) {
  const url = `${SITE_URL}/blog/${input.slug}`;
  const imageUrl = input.image
    ? input.image.startsWith("http")
      ? input.image
      : `${SITE_URL}${input.image}`
    : undefined;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: input.title,
      description: input.description,
      url,
      datePublished: input.published,
      dateModified: input.modified ?? input.published,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      ...(imageUrl
        ? { image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 } }
        : {}),
      isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(input.about ? { about: input.about.map((name) => ({ "@type": "Thing", name })) } : {}),
      ...(input.keywords
        ? { keywords: Array.isArray(input.keywords) ? input.keywords.join(", ") : input.keywords }
        : {}),
      articleSection: input.category,
      ...(input.wordCount ? { wordCount: input.wordCount } : {}),
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "h3"] },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: input.title,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [{ name: "Home", path: "" }, ...input.breadcrumb].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    },
  ];

  if (input.faqs && input.faqs.length) {
    graph.push({ ...buildFaqSchema(input.faqs), "@id": `${url}#faq` });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
