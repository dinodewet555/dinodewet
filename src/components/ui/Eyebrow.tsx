import type { ReactNode } from "react";

/** The repeated uppercase tracking-widest muted label that prefixes most sections. */
export default function Eyebrow({
  children,
  className = "mb-4",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-widest text-muted ${className}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}
