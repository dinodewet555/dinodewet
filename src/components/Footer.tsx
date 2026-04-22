import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/semantic-seo", label: "Semantic SEO" },
  { href: "/ai-architect", label: "AI Architect" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "#1f1f1f", background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <p
              className="font-heading font-bold text-white text-lg uppercase tracking-widest mb-4"
            >
              DINO DE WET
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#a1a1a1", maxWidth: "260px" }}>
              Semantic SEO Web Developer & AI Architect. Building digital systems designed for authority, visibility, and growth.
            </p>
          </div>

          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-5"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-5"
              style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
            >
              Services
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Semantic SEO Web Development",
                "Next.js Development",
                "WordPress Development",
                "AI Architecture",
                "Digital Strategy",
              ].map((s) => (
                <p
                  key={s}
                  className="text-sm"
                  style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderColor: "#1f1f1f" }}
        >
          <p
            className="text-xs"
            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Dino de Wet. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}
          >
            dinodewet.tech — Built for authority, visibility, and growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
