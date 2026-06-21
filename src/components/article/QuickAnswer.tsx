import type { ReactNode } from "react";
import { bodyTextStyle } from "./styles";

/** The boxed "Quick Answer" callout that opens citation-ready articles. */
export default function QuickAnswer({
  label = "Quick Answer",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <blockquote
      className="rounded-xl border-l-4 p-6"
      style={{
        borderLeftColor: "#2563eb",
        background: "rgba(37,99,235,0.05)",
        border: "1px solid var(--border)",
        borderLeftWidth: 4,
        borderLeftStyle: "solid",
      }}
    >
      <p
        className="font-heading font-semibold text-white mb-2"
        style={{ fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
      >
        {label}
      </p>
      <p style={bodyTextStyle}>{children}</p>
    </blockquote>
  );
}
