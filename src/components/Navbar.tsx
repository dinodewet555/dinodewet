"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/semantic-seo", label: "Semantic SEO" },
  { href: "/ai-architect", label: "AI Architect" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,5,5,0.95)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid #1f1f1f"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-white tracking-tight text-base uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          DINO DE WET
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#ffffff" : "#a1a1a1",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2 rounded-lg font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a Call
          </Link>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(5,5,5,0.98)",
            borderColor: "#1f1f1f",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm py-2"
                style={{
                  color: pathname === link.href ? "#ffffff" : "#a1a1a1",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5 rounded-lg font-medium text-center mt-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
