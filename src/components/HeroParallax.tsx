"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-portrait", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
