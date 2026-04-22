"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroNameProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function HeroName({ text, className = "", style, delay = 0.1 }: HeroNameProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLElement>(".gsap-char");
    if (!chars.length) return;

    // Set hidden state before paint, then animate in
    gsap.set(chars, { yPercent: 110, opacity: 0 });
    gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      ease: "power4.out",
      stagger: 0.045,
      delay,
    });
  }, [delay]);

  return (
    <h1 ref={ref} className={className} style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span className="gsap-char" style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </h1>
  );
}
