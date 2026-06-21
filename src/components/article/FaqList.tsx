import type { Faq } from "@/lib/seo";

/** Renders the visible FAQ. Feed the SAME `faqs` array to `buildArticleSchema`
 * so the FAQPage schema and the rendered Q&A can never drift apart. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((item) => (
        <div
          key={item.q}
          className="rounded-xl border p-6"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
        >
          <p
            className="font-heading font-semibold text-white mb-3"
            style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}
          >
            {item.q}
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
          >
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}
