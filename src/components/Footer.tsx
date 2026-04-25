import Link from "next/link";

type Group = {
  heading: string;
  items: { href: string; label: string }[];
};

const linkGroups: Group[] = [
  {
    heading: "Core Services",
    items: [
      { href: "/seo-services-south-africa", label: "SEO Services South Africa" },
      { href: "/ai-seo-services-south-africa", label: "AI SEO Services" },
      { href: "/semantic-seo-services", label: "Semantic SEO Services" },
      { href: "/technical-seo-services", label: "Technical SEO Services" },
      { href: "/web-development-services", label: "Web Development Services" },
      { href: "/search-engine-optimisation", label: "Search Engine Optimisation" },
    ],
  },
  {
    heading: "AI Search & Answer Engines",
    items: [
      { href: "/ai-seo", label: "AI SEO" },
      { href: "/answer-engine-optimisation-services-south-africa", label: "Answer Engine Optimisation" },
      { href: "/generative-engine-optimisation", label: "Generative Engine Optimisation" },
      { href: "/ai-search-engine-optimisation", label: "AI Search Engine Optimisation" },
      { href: "/llm-visibility", label: "LLM Visibility" },
    ],
  },
  {
    heading: "Entity & Location",
    items: [
      { href: "/seo-consultant-south-africa", label: "SEO Consultant South Africa" },
      { href: "/seo-services-cape-town", label: "SEO Services Cape Town" },
      { href: "/semantic-seo", label: "Semantic SEO" },
      { href: "/ai-architect", label: "AI Architect" },
      { href: "/geo-services-south-africa", label: "GEO Services South Africa" },
    ],
  },
  {
    heading: "Company",
    items: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "#1f1f1f", background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-heading font-bold text-white text-lg uppercase tracking-widest mb-4">
              DINO DE WET
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#a1a1a1", maxWidth: "300px", fontFamily: "var(--font-body)" }}
            >
              Semantic SEO consultant, AI architect, and Next.js web developer based in Cape Town —
              building digital systems for authority, visibility, and growth across Google, AI Overviews,
              and answer engines.
            </p>
            <a
              href="mailto:dinodewet555@gmail.com"
              className="text-sm transition-colors duration-200 hover:text-white block mb-3"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              dinodewet555@gmail.com
            </a>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-lg font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Call
            </Link>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-5"
                style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
              >
                {group.heading}
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="internal-link-compact text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderColor: "#1f1f1f" }}
        >
          <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Dino de Wet. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
            dinodewet.co.za — Semantic SEO, AI search visibility, and Next.js development in Cape Town, South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
