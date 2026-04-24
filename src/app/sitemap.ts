import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dinodewet.co.za";
  const launch = new Date("2026-04-22");
  const blogPublished = new Date("2026-04-23");

  return [
    { url: `${base}/`, lastModified: launch, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: launch, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: launch, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: blogPublished, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/geo-services-south-africa`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai-seo-services-south-africa`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/answer-engine-optimisation-services-south-africa`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/semantic-seo`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/semantic-seo-services`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/web-development-services`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai-architect`, lastModified: launch, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/what-is-semantic-seo`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/generative-engine-optimisation`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/generative-engine-optimisation/geo-vs-seo`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/what-makes-content-citation-ready`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/google-ai-overviews-and-geo`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/geo-for-south-african-businesses`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/semantic-seo`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/semantic-seo/what-is-semantic-seo`, lastModified: blogPublished, changeFrequency: "monthly", priority: 0.75 },
  ];
}
