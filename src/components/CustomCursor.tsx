"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (target) {
        gsap.to(cursor, { scale: 3, duration: 0.35, ease: "power3.out" });
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (target) {
        gsap.to(cursor, { scale: 1, duration: 0.45, ease: "elastic.out(1, 0.5)" });
      }
    };

    const onDown = () => gsap.to(cursor, { scale: 0.7, duration: 0.1 });
    const onUp = () => gsap.to(cursor, { scale: 1, duration: 0.25, ease: "elastic.out(1, 0.5)" });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-blob" aria-hidden="true" />
  );
}
