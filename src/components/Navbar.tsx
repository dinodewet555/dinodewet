"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem =
  | { type: "section"; label: string }
  | { type: "link"; href: string; label: string };

// Primary nav surfaced as visible top-level links — kept short to avoid clutter
// while still giving Screaming Frog/Googlebot a direct crawlable path to the
// most important money pages.
const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/seo-services-south-africa", label: "Services" },
  { href: "/ai-seo", label: "AI SEO" },
  { href: "/semantic-seo", label: "Semantic SEO" },
  { href: "/ai-architect", label: "AI Architect" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Full services taxonomy. Rendered server-side inside the dropdown so every
// service URL is in the initial HTML regardless of whether the dropdown is
// expanded — visibility is controlled by CSS, not React conditional rendering.
const serviceItems: NavItem[] = [
  { type: "section", label: "Core SEO Services" },
  { type: "link", href: "/seo-services-south-africa", label: "SEO Services South Africa" },
  { type: "link", href: "/technical-seo-services", label: "Technical SEO Services" },
  { type: "link", href: "/semantic-seo-services", label: "Semantic SEO Services" },
  { type: "link", href: "/web-development-services", label: "Web Development Services" },
  { type: "section", label: "AI Search & Answer Engines" },
  { type: "link", href: "/ai-seo", label: "AI SEO" },
  { type: "link", href: "/ai-seo-services-south-africa", label: "AI SEO Services South Africa" },
  { type: "link", href: "/answer-engine-optimisation-services-south-africa", label: "Answer Engine Optimisation" },
  { type: "link", href: "/generative-engine-optimisation", label: "Generative Engine Optimisation" },
  { type: "link", href: "/ai-search-engine-optimisation", label: "AI Search Engine Optimisation" },
  { type: "link", href: "/llm-visibility", label: "LLM Visibility" },
  { type: "section", label: "Entity & Location" },
  { type: "link", href: "/seo-consultant-south-africa", label: "SEO Consultant South Africa" },
  { type: "link", href: "/seo-services-cape-town", label: "SEO Services Cape Town" },
  { type: "link", href: "/semantic-seo", label: "Semantic SEO" },
  { type: "link", href: "/ai-architect", label: "AI Architect" },
];

const allServiceHrefs = serviceItems.filter((i) => i.type === "link").map((i) => (i as { href: string }).href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = allServiceHrefs.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
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
        background: scrolled ? "rgba(5,5,5,0.95)" : "rgba(5,5,5,0.6)",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-heading font-bold text-white tracking-tight text-base uppercase"
          style={{ letterSpacing: "0.08em" }}
          aria-label="Dino de Wet — Home"
        >
          DINO DE WET
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Top-level visible links — Services is also a real Link to the
              services hub, plus a hover/click dropdown listing the full set. */}
          <div ref={dropdownRef} className="relative">
            <div className="flex items-center gap-1">
              <Link
                href="/seo-services-south-africa"
                className="text-sm transition-colors duration-200"
                style={{
                  color: isServicesActive || pathname === "/seo-services-south-africa" ? "#ffffff" : "#a1a1a1",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.02em",
                }}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="p-1"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                aria-label="Toggle services menu"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#a1a1a1" }}
              >
                <ChevronDown
                  size={13}
                  style={{
                    transition: "transform 0.2s",
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            {/* Always rendered in HTML so links are crawlable. CSS controls visibility. */}
            <div
              id="services-dropdown"
              className="absolute top-full left-1/2 mt-3 rounded-xl border overflow-hidden"
              style={{
                transform: "translateX(-50%)",
                background: "rgba(13,13,13,0.98)",
                borderColor: "#1f1f1f",
                backdropFilter: "blur(16px)",
                minWidth: "320px",
                opacity: servicesOpen ? 1 : 0,
                visibility: servicesOpen ? "visible" : "hidden",
                pointerEvents: servicesOpen ? "auto" : "none",
                transition: "opacity 0.15s ease",
              }}
            >
              {serviceItems.map((item, i) => {
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
                        style={{ color: "#555555", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  );
                }
                const isLast = i === serviceItems.length - 1;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-5 py-3 text-sm transition-colors duration-150 hover:text-white"
                    style={{
                      color: isActive ? "#ffffff" : "#a1a1a1",
                      fontFamily: "var(--font-body)",
                      borderBottom: !isLast ? "1px solid #1f1f1f" : "none",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {primaryLinks.slice(2).map((link) => (
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
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu — also fully rendered in HTML; CSS controls visibility so
          all links remain crawlable. */}
      <div
        className="md:hidden border-t"
        style={{
          background: "rgba(5,5,5,0.98)",
          borderColor: "#1f1f1f",
          maxHeight: menuOpen ? "85vh" : "0",
          overflow: menuOpen ? "auto" : "hidden",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "max-height 0.25s ease, opacity 0.2s ease",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          <Link
            href="/"
            className="text-sm py-2.5"
            style={{ color: pathname === "/" ? "#ffffff" : "#a1a1a1", fontFamily: "var(--font-body)" }}
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between text-sm py-2.5 w-full text-left"
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
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

          <div
            id="mobile-services"
            className="rounded-xl border overflow-hidden mb-1"
            style={{
              borderColor: "#1f1f1f",
              background: "rgba(255,255,255,0.02)",
              maxHeight: mobileServicesOpen ? "1000px" : "0",
              opacity: mobileServicesOpen ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.2s ease",
            }}
            aria-hidden={!mobileServicesOpen}
          >
            {serviceItems.map((item, i) => {
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
              const isLast = i === serviceItems.length - 1;
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

          {primaryLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm py-2.5"
              style={{ color: pathname === link.href ? "#ffffff" : "#a1a1a1", fontFamily: "var(--font-body)" }}
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
    </header>
  );
}
