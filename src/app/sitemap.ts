import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dinodewet.tech";
  const now = new Date("2026-04-23");

  const staticPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/geo-services-south-africa`, priority: 0.9 },
    { url: `${base}/ai-seo-services-south-africa`, priority: 0.9 },
    { url: `${base}/answer-engine-optimisation-services-south-africa`, priority: 0.9 },
    { url: `${base}/semantic-seo`, priority: 0.9 },
    { url: `${base}/semantic-seo-services`, priority: 0.9 },
    { url: `${base}/web-development-services`, priority: 0.9 },
    { url: `${base}/ai-architect`, priority: 0.9 },
  ];

  const blogPages = [
    { url: `${base}/blog/what-is-semantic-seo`, priority: 0.8 },
    { url: `${base}/blog/generative-engine-optimisation`, priority: 0.85 },
    { url: `${base}/blog/generative-engine-optimisation/geo-vs-seo`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/what-makes-content-citation-ready`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/google-ai-overviews-and-geo`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/geo-for-south-african-businesses`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation`, priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors`, priority: 0.75 },
    { url: `${base}/blog/semantic-seo/what-is-semantic-seo`, priority: 0.75 },
  ];

  return [
    ...staticPages.map(({ url, priority }) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...blogPages.map(({ url, priority }) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
  ];
}
