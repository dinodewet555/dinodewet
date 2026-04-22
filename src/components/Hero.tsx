import Link from "next/link";
import Image from "next/image";
import HeroName from "@/components/HeroName";
import HeroParallax from "@/components/HeroParallax";
import HeroAmbient from "@/components/HeroAmbient";

export default function Hero() {
  return (
    <section
      className="hero-section relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient cursor glow */}
      <HeroAmbient />

      {/* Portrait — data-speed gives ScrollSmoother parallax automatically */}
      <div className="hero-portrait absolute right-0 top-0 h-full w-full md:w-[52%] pointer-events-none" data-speed="0.82">
        <Image
          src="/images/dino-portrait-hero.jpg"
          alt="Dino de Wet — Semantic SEO Strategist and AI Architect"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          className="object-cover object-top"
          style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.75)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050505 0%, #050505 8%, rgba(5,5,5,0.85) 30%, rgba(5,5,5,0.15) 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.4) 15%, transparent 45%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.25 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-[600px] xl:max-w-[640px]">

          <div
            className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs mb-10"
            style={{
              borderColor: "#2a2a2a",
              background: "rgba(255,255,255,0.03)",
              color: "#a1a1a1",
              fontFamily: "var(--font-body)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "#fff" }} />
            Cape Town, South Africa · Available for Projects
          </div>

          <HeroName
            text="Dino"
            className="font-heading font-bold text-white leading-none mb-1"
            style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", letterSpacing: "-0.035em" }}
            delay={0.12}
          />
          <HeroName
            text="de Wet"
            className="font-heading font-bold text-white leading-none mb-8"
            style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", letterSpacing: "-0.035em" }}
            delay={0.2}
          />

          <div className="hero-tags flex flex-wrap gap-2 mb-8">
            {["AI Architect", "Semantic SEO", "Web Developer"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs border rounded-full"
                style={{
                  borderColor: "#2a2a2a",
                  color: "#a1a1a1",
                  fontFamily: "var(--font-body)",
                  background: "rgba(255,255,255,0.03)",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="hero-copy"
            style={{
              color: "#a1a1a1",
              maxWidth: "500px",
              lineHeight: 1.75,
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              marginBottom: "2.5rem",
            }}
          >
            I build high-performance websites and intelligent digital systems combining modern development, semantic SEO, and AI-driven strategy — designed for visibility, speed, authority, and growth.
          </p>

          <div className="hero-ctas flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary px-7 py-3 rounded-lg font-medium text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start a Project
            </Link>
            <Link
              href="/semantic-seo"
              className="btn-secondary px-7 py-3 rounded-lg font-medium text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Expertise
            </Link>
          </div>

          <div
            className="hero-stats mt-20 grid grid-cols-3 gap-6 pt-8 border-t"
            style={{ borderColor: "#1f1f1f" }}
          >
            {[
              { value: "Semantic SEO", label: "Architecture" },
              { value: "AI Systems", label: "Design & Build" },
              { value: "Next.js", label: "Development" },
            ].map((s) => (
              <div key={s.value}>
                <p className="font-heading font-bold text-white text-sm mb-0.5">{s.value}</p>
                <p className="text-xs" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-8 flex items-center gap-3"
        style={{ opacity: 0.35 }}
      >
        <div className="w-8 h-px" style={{ background: "#a1a1a1" }} />
        <p className="text-xs tracking-widest uppercase" style={{ color: "#a1a1a1", fontFamily: "var(--font-body)" }}>
          Scroll
        </p>
      </div>

      {/* ScrollTrigger parallax init for browsers without ScrollSmoother */}
      <HeroParallax />
    </section>
  );
}
