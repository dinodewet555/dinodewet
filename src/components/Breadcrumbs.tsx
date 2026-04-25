import Link from "next/link";

export type Crumb = { name: string; href: string };

const SITE = "https://dinodewet.co.za";

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const fullTrail: Crumb[] = trail[0]?.href === "/" ? trail : [{ name: "Home", href: "/" }, ...trail];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullTrail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs list-none p-0 m-0">
          {fullTrail.map((c, i) => {
            const isLast = i === fullTrail.length - 1;
            return (
              <li key={c.href + i} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" style={{ color: "#a1a1a1" }}>
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="internal-link-compact">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span style={{ color: "#444" }}>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
