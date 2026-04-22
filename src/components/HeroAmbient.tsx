"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroAmbient() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const section = document.querySelector(".hero-section") as HTMLElement;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      gsap.to(glow, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 1.6,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none absolute"
      style={{
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)",
        filter: "blur(30px)",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "30%",
        zIndex: 2,
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
