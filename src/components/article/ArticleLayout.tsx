import type { ReactNode } from "react";
import { BookOpen, Clock, Calendar } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { bodyTextStyle } from "./styles";

export type TocItem = { id: string; label: string };

type Props = {
  /** Full JSON-LD object from buildArticleSchema (owns the BreadcrumbList). */
  schema: object;
  /** Visual breadcrumb trail (schema suppressed — the @graph owns it). */
  breadcrumb: Crumb[];
  category: string;
  readTime: string;
  date: string;
  title: string;
  intro: string;
  toc: TocItem[];
  children: ReactNode;
};

/**
 * Article shell: JSON-LD, breadcrumb, hero, and the sticky-TOC + body grid.
 * The page supplies only data + body sections, so a new article is mostly prose.
 */
export default function ArticleLayout({
  schema,
  breadcrumb,
  category,
  readTime,
  date,
  title,
  intro,
  toc,
  children,
}: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs trail={breadcrumb} emitSchema={false} />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 hero-ambient" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded border"
                style={{ color: "var(--text-muted)", borderColor: "var(--border-light)", background: "rgba(255,255,255,0.03)", fontFamily: "var(--font-body)" }}
              >
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                <Clock size={12} /> {readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                <Calendar size={12} /> {date}
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              {title}
            </h1>
            <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "680px" }}>{intro}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Body */}
      <section className="py-16" style={{ background: "#0d0d0d", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <aside className="lg:col-span-1">
              <AnimatedSection direction="left">
                <div
                  className="rounded-xl border p-6 lg:sticky lg:top-28"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen size={14} color="var(--text-muted)" />
                    <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                      Contents
                    </p>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-2">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-start gap-2 text-xs leading-relaxed transition-colors hover:text-white"
                            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                          >
                            <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--faint)" }} />
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </AnimatedSection>
            </aside>

            <article className="lg:col-span-3">
              <AnimatedSection>{children}</AnimatedSection>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
