import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Dino de Wet",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "#050505" }}
    >
      <p
        className="text-xs font-medium uppercase tracking-widest mb-6"
        style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
      >
        Error 404
      </p>

      <h1
        className="font-heading font-bold text-white mb-4"
        style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}
      >
        Page Not Found
      </h1>

      <p
        className="text-base max-w-md mb-10 leading-relaxed"
        style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
      >
        This page doesn&apos;t exist or may have moved. Start from the homepage
        or explore the services below.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="btn-primary inline-flex items-center justify-center text-sm px-6 py-3 rounded-lg font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="text-sm px-6 py-3 rounded-lg font-medium border transition-colors duration-200 hover:text-white"
          style={{
            color: "#a1a1a1",
            borderColor: "#1f1f1f",
            fontFamily: "var(--font-body)",
          }}
        >
          Browse Blog
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full">
        {[
          { href: "/semantic-seo", label: "Semantic SEO" },
          { href: "/geo-services-south-africa", label: "GEO Services" },
          { href: "/ai-architect", label: "AI Architect" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm py-3 px-4 rounded-lg border text-center transition-colors duration-200 hover:text-white hover:border-white"
            style={{
              color: "#a1a1a1",
              borderColor: "#1f1f1f",
              fontFamily: "var(--font-body)",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
