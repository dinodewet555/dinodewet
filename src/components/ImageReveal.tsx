"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "left" | "top" | "right";
}

export default function ImageReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "left",
}: ImageRevealProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const clipFrom =
      direction === "left"
        ? "inset(0 100% 0 0)"
        : direction === "right"
        ? "inset(0 0 0 100%)"
        : "inset(100% 0 0 0)";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: outer, start: "top 85%", once: true },
        delay: delay / 1000,
      });

      // Outer clip reveals the image
      tl.from(outer, {
        clipPath: clipFrom,
        duration: 1.1,
        ease: "power4.inOut",
      });

      // Inner slightly counter-moves for a parallax pop
      tl.from(
        inner,
        {
          scale: 1.12,
          duration: 1.1,
          ease: "power4.inOut",
        },
        "<"
      );
    });

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={outerRef} className={className} style={{ overflow: "hidden", willChange: "clip-path", ...style }}>
      <div ref={innerRef} style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
