import Link from "next/link";

export type RelatedLink = {
  href: string;
  anchor: string;
  description?: string;
};

type Props = {
  heading?: string;
  intro?: string;
  links: RelatedLink[];
};

export default function RelatedServices({
  heading = "Related SEO Services",
  intro,
  links,
}: Props) {
  return (
    <section
      className="py-20 relative"
      style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}
      aria-label={heading}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
        >
          Explore Related Services
        </p>
        <h2
          className="font-heading font-bold text-white mb-4"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          {heading}
        </h2>
        {intro && (
          <p
            className="mb-10"
            style={{
              color: "#a1a1a1",
              lineHeight: 1.8,
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              maxWidth: "640px",
            }}
          >
            {intro}
          </p>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          {links.map((l) => (
            <li
              key={l.href}
              className="rounded-xl border p-5"
              style={{ background: "#050505", borderColor: "#1f1f1f" }}
            >
              <Link href={l.href} className="internal-link text-base font-medium">
                {l.anchor}
              </Link>
              {l.description && (
                <p
                  className="mt-2 text-sm"
                  style={{ color: "#a1a1a1", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
                >
                  {l.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
