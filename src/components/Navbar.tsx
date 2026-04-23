"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem =
  | { type: "section"; label: string }
  | { type: "link"; href: string; label: string };

// Flat link list — used only for active-state detection
const serviceLinks = [
  { href: "/geo-services-south-africa", label: "GEO Services South Africa" },
  { href: "/ai-seo-services-south-africa", label: "AI SEO Services" },
  { href: "/answer-engine-optimisation-services-south-africa", label: "Answer Engine Optimisation" },
  { href: "/semantic-seo", label: "Semantic SEO Web Development" },
  { href: "/semantic-seo-services", label: "Semantic SEO Services" },
  { href: "/web-development-services", label: "Web Development Services" },
  { href: "/ai-architect", label: "AI Architect" },
];

// Structured list — used for dropdown rendering
const serviceItems: NavItem[] = [
  { type: "section", label: "Generative Engine Optimisation" },
  { type: "link", href: "/geo-services-south-africa", label: "GEO Services South Africa" },
  { type: "link", href: "/ai-seo-services-south-africa", label: "AI SEO Services" },
  { type: "link", href: "/answer-engine-optimisation-services-south-africa", label: "Answer Engine Optimisation" },
  { type: "section", label: "SEO & Development" },
  { type: "link", href: "/semantic-seo", label: "Semantic SEO Web Development" },
  { type: "link", href: "/semantic-seo-services", label: "Semantic SEO Services" },
  { type: "link", href: "/web-development-services", label: "Web Development Services" },
  { type: "link", href: "/ai-architect", label: "AI Architect" },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = serviceLinks.some((l) => pathname === l.href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm transition-colors duration-200"
              style={{
                color: isServicesActive ? "#ffffff" : "#a1a1a1",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.02em",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Services
              <ChevronDown
                size={13}
                style={{
                  transition: "transform 0.2s",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 mt-3 rounded-xl border overflow-hidden"
                style={{
                  transform: "translateX(-50%)",
                  background: "rgba(13,13,13,0.98)",
                  borderColor: "#1f1f1f",
                  backdropFilter: "blur(16px)",
                  minWidth: "290px",
                }}
              >
                {serviceItems.map((item, i) => {
                  const isLast = i === serviceItems.length - 1;
                  if (item.type === "section") {
                    return (
                      <div
                        key={`section-${item.label}`}
                        className="px-5 py-2"
                        style={{
                          borderBottom: "1px solid #1f1f1f",
                          borderTop: i > 0 ? "1px solid #1f1f1f" : "none",
                        }}
                      >
                        <p
                          className="text-xs font-medium uppercase tracking-widest"
                          style={{
                            color: "#555555",
                            fontFamily: "var(--font-body)",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-5 py-3.5 text-sm transition-colors duration-150 hover:text-white"
                      style={{
                        color: pathname === item.href ? "#ffffff" : "#a1a1a1",
                        fontFamily: "var(--font-body)",
                        borderBottom: !isLast ? "1px solid #1f1f1f" : "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {topLinks.slice(1).map((link) => (
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "rgba(5,5,5,0.98)", borderColor: "#1f1f1f" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="text-sm py-2.5"
              style={{
                color: pathname === "/" ? "#ffffff" : "#a1a1a1",
                fontFamily: "var(--font-body)",
              }}
            >
              Home
            </Link>

            {/* Mobile services accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between text-sm py-2.5 w-full text-left"
              style={{
                color: isServicesActive ? "#ffffff" : "#a1a1a1",
                fontFamily: "var(--font-body)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Services
              <ChevronDown
                size={13}
                style={{
                  transition: "transform 0.2s",
                  transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {mobileServicesOpen && (
              <div
                className="rounded-xl border overflow-hidden mb-1"
                style={{ borderColor: "#1f1f1f", background: "rgba(255,255,255,0.02)" }}
              >
                {serviceItems.map((item, i) => {
                  const isLast = i === serviceItems.length - 1;
                  if (item.type === "section") {
                    return (
                      <div
                        key={`mobile-section-${item.label}`}
                        className="px-4 py-2"
                        style={{
                          borderBottom: "1px solid #1f1f1f",
                          borderTop: i > 0 ? "1px solid #1f1f1f" : "none",
                        }}
                      >
                        <p
                          className="text-xs font-medium uppercase tracking-widest"
                          style={{ color: "#555555", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                        >
                          {item.label}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-sm"
                      style={{
                        color: pathname === item.href ? "#ffffff" : "#a1a1a1",
                        fontFamily: "var(--font-body)",
                        borderBottom: !isLast ? "1px solid #1f1f1f" : "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {[
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm py-2.5"
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
              className="btn-primary text-sm px-5 py-2.5 rounded-lg font-medium text-center mt-3"
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
