"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  stagger?: boolean;
}

export default function GSAPReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = false,
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const yVal = direction === "up" ? 55 : 0;
      const xVal = direction === "left" ? -55 : direction === "right" ? 55 : 0;

      if (stagger && el.children.length > 0) {
        gsap.from(Array.from(el.children), {
          opacity: 0,
          y: yVal,
          x: xVal,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      } else {
        gsap.from(el, {
          opacity: 0,
          y: yVal,
          x: xVal,
          duration: 0.85,
          ease: "power3.out",
          delay: delay / 1000,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [delay, direction, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
