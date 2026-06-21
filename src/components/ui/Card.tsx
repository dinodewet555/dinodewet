import type { ReactNode, CSSProperties } from "react";

type Surface = "panel" | "primary" | "subtle";

const SURFACE: Record<Surface, string> = {
  panel: "#0d0d0d",
  primary: "#050505",
  subtle: "rgba(255,255,255,0.02)",
};

type Props = {
  children: ReactNode;
  surface?: Surface;
  /** Adds the card-hover lift/glow transition. */
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Bordered rounded panel — the recurring card container across the site. */
export default function Card({
  children,
  surface = "panel",
  hover = false,
  className = "p-8",
  style,
}: Props) {
  return (
    <div
      className={`rounded-xl border ${hover ? "card-hover" : ""} ${className}`}
      style={{ background: SURFACE[surface], borderColor: "var(--border)", ...style }}
    >
      {children}
    </div>
  );
}
