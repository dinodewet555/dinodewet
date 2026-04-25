"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Smoother = { kill: () => void; scrollTo: (target: number, smooth?: boolean) => void };

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<Smoother | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let cancelled = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }, { ScrollSmoother }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/ScrollSmoother"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollTrigger.config({ ignoreMobileResize: true });

      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        effects: true,
        normalizeScroll: true,
      }) as unknown as Smoother;
    })();

    return () => {
      cancelled = true;
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
