import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButton = { label: string; href: string };

/** The boxed conversion CTA in the article footer. */
export default function ArticleCTA({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: CTAButton;
  secondary?: CTAButton;
}) {
  return (
    <div
      className="rounded-2xl border p-10 relative overflow-hidden"
      style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.015)" }}
    >
      <div
        className="absolute -top-20 -right-20 w-64 h-64 opacity-5 pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, white, transparent)" }}
      />
      <div className="relative z-10">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          {eyebrow}
        </p>
        <h2
          className="font-heading font-bold text-white mb-4"
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          {title}
        </h2>
        <p
          className="mb-8 text-sm"
          style={{ color: "var(--text-muted)", lineHeight: 1.8, fontFamily: "var(--font-body)" }}
        >
          {body}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primary.href}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {primary.label} <ArrowRight size={14} />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
