import type { MetadataRoute } from "next";

const BASE = "https://dinodewet.co.za";

type Priority = number;
type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const launch = new Date("2026-04-22");
const blogPublished = new Date("2026-04-23");
const lastUpdate = new Date("2026-04-25");

const corePages: { path: string; priority: Priority; freq: Freq; date: Date }[] = [
  { path: "/", priority: 1.0, freq: "weekly", date: lastUpdate },
  { path: "/about", priority: 0.7, freq: "monthly", date: launch },
  { path: "/contact", priority: 0.7, freq: "monthly", date: launch },
  { path: "/blog", priority: 0.8, freq: "weekly", date: blogPublished },
];

const servicePages: { path: string; priority: Priority; freq: Freq; date: Date }[] = [
  { path: "/seo-services-south-africa", priority: 0.95, freq: "monthly", date: lastUpdate },
  { path: "/ai-seo-services-south-africa", priority: 0.95, freq: "monthly", date: launch },
  { path: "/answer-engine-optimisation-services-south-africa", priority: 0.9, freq: "monthly", date: launch },
  { path: "/geo-services-south-africa", priority: 0.9, freq: "monthly", date: launch },
  { path: "/semantic-seo-services", priority: 0.9, freq: "monthly", date: launch },
  { path: "/technical-seo-services", priority: 0.9, freq: "monthly", date: lastUpdate },
  { path: "/web-development-services", priority: 0.9, freq: "monthly", date: launch },
  { path: "/ai-seo", priority: 0.9, freq: "monthly", date: lastUpdate },
  { path: "/semantic-seo", priority: 0.9, freq: "monthly", date: launch },
  { path: "/ai-architect", priority: 0.9, freq: "monthly", date: launch },
  { path: "/generative-engine-optimisation", priority: 0.85, freq: "monthly", date: lastUpdate },
  { path: "/ai-search-engine-optimisation", priority: 0.85, freq: "monthly", date: lastUpdate },
  { path: "/llm-visibility", priority: 0.85, freq: "monthly", date: lastUpdate },
  { path: "/search-engine-optimisation", priority: 0.85, freq: "monthly", date: lastUpdate },
  { path: "/seo-consultant-south-africa", priority: 0.85, freq: "monthly", date: lastUpdate },
  { path: "/seo-services-cape-town", priority: 0.85, freq: "monthly", date: lastUpdate },
];

const blogPosts: { path: string; priority: Priority; freq: Freq; date: Date }[] = [
  { path: "/blog/what-is-semantic-seo", priority: 0.8, freq: "monthly", date: blogPublished },
  { path: "/blog/semantic-seo", priority: 0.7, freq: "monthly", date: blogPublished },
  { path: "/blog/semantic-seo/what-is-semantic-seo", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation", priority: 0.85, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/geo-vs-seo", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/how-ai-search-engines-choose-sources", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/what-makes-content-citation-ready", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/google-ai-overviews-and-geo", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/geo-for-south-african-businesses", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/passage-ranking-and-ai-visibility", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/benefits-of-generative-engine-optimisation", priority: 0.75, freq: "monthly", date: blogPublished },
  { path: "/blog/generative-engine-optimisation/ai-overview-brand-visibility-factors", priority: 0.75, freq: "monthly", date: blogPublished },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...corePages, ...servicePages, ...blogPosts].map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: p.date,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
