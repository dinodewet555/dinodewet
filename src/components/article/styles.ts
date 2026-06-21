import type { CSSProperties } from "react";

// Shared typographic constants for long-form article bodies. Mirrors the values
// used in the existing reference articles so primitives render identically.

export const bodyTextStyle: CSSProperties = {
  color: "var(--text-muted)",
  lineHeight: 1.85,
  fontSize: "1rem",
  fontFamily: "var(--font-body)",
};

export const h2Style: CSSProperties = {
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
};

export const h3Style: CSSProperties = {
  fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
};
