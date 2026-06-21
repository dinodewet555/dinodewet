import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  /** CSS font-size; defaults to the standard section clamp. */
  size?: string;
  className?: string;
  style?: CSSProperties;
};

/** The site's standard section <h2> with responsive clamp sizing. */
export default function SectionHeading({
  children,
  size = "clamp(1.8rem, 4vw, 3rem)",
  className = "mb-6",
  style,
}: Props) {
  return (
    <h2
      className={`font-heading font-bold text-white ${className}`}
      style={{ fontSize: size, letterSpacing: "-0.02em", lineHeight: 1.15, ...style }}
    >
      {children}
    </h2>
  );
}
