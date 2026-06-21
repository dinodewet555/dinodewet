"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import type { Post } from "@/content/posts";

type SortKey = "newest" | "oldest";

export default function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("newest");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    result.sort((a, b) =>
      sort === "newest"
        ? b.publishedISO.localeCompare(a.publishedISO)
        : a.publishedISO.localeCompare(b.publishedISO)
    );
    return result;
  }, [posts, query, category, sort]);

  return (
    <div>
      {/* Search bar */}
      <div
        className="flex items-center gap-3 rounded-xl border px-5 py-4 mb-5"
        style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
      >
        <Search size={16} color="#a1a1a1" className="flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles — semantic SEO, GEO, local SEO…"
          aria-label="Search articles"
          className="w-full bg-transparent text-sm outline-none"
          style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
        />
      </div>

      {/* Category chips + sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = cat === category;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  color: active ? "#050505" : "#a1a1a1",
                  background: active ? "#ffffff" : "rgba(255,255,255,0.02)",
                  borderColor: active ? "#ffffff" : "#1f1f1f",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort articles"
          className="text-xs rounded-lg border px-3 py-1.5 cursor-pointer outline-none"
          style={{
            fontFamily: "var(--font-body)",
            color: "#a1a1a1",
            background: "rgba(255,255,255,0.02)",
            borderColor: "#1f1f1f",
          }}
        >
          <option value="newest" style={{ background: "#0d0d0d" }}>Newest first</option>
          <option value="oldest" style={{ background: "#0d0d0d" }}>Oldest first</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm py-12 text-center" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
          No articles match “{query}”. Try a different term or category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <div
              key={post.slug}
              className="card-hover rounded-xl border h-full flex flex-col overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "#1f1f1f" }}
            >
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded border"
                    style={{ color: "#a1a1a1", borderColor: "#2a2a2a", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6 flex flex-col flex-1">
                <h3 className="font-heading font-semibold mb-3" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 1.35 }}>
                  <Link href={`/blog/${post.slug}`} className="internal-link">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm mb-5 flex-1" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
                  {post.summary}
                </p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #1f1f1f" }}>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
                    <Calendar size={11} />
                    {post.dateDisplay}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
