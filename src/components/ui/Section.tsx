import type { ReactNode, CSSProperties } from "react";

type Variant = "primary" | "panel";

const BG: Record<Variant, string> = {
  primary: "#050505",
  panel: "#0d0d0d",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  /** Hairline border on top and bottom. */
  bordered?: boolean;
  /** Hairline border on top only. */
  borderTop?: boolean;
  /** Render the faint grid-bg overlay behind the content. */
  grid?: boolean;
  gridOpacity?: number;
  /** Overrides the default `py-28` (and any other section-level classes). */
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

/**
 * Standard page section: background variant, optional hairline borders, optional
 * grid overlay, and the site's max-w-7xl content container. Replaces the
 * repeated inline-styled <section> wrappers across pages.
 */
export default function Section({
  children,
  variant = "primary",
  bordered = false,
  borderTop = false,
  grid = false,
  gridOpacity = 0.4,
  className,
  containerClassName,
  style,
  ariaLabel,
}: Props) {
  const borderStyle: CSSProperties = {};
  if (bordered || borderTop) borderStyle.borderTop = "1px solid var(--border)";
  if (bordered) borderStyle.borderBottom = "1px solid var(--border)";

  return (
    <section
      className={`relative ${className ?? "py-28"}`}
      style={{ background: BG[variant], ...borderStyle, ...style }}
      aria-label={ariaLabel}
    >
      {grid && <div className="absolute inset-0 grid-bg" style={{ opacity: gridOpacity }} />}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ${containerClassName ?? ""}`}>
        {children}
      </div>
    </section>
  );
}
