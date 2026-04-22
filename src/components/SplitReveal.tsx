"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface SplitRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  direction?: "up" | "left" | "right" | "none";
}

export default function SplitReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.07,
  once = true,
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("h1, h2, h3, h4, p, blockquote");
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      targets.forEach((target, i) => {
        const split = new SplitText(target, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap.from(split.lines, {
          yPercent: 105,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          delay: delay / 1000 + i * 0.05,
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            once,
          },
          onComplete: () => split.revert(),
        });
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
