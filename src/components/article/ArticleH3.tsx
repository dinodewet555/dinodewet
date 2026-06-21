import type { ReactNode } from "react";
import { h3Style } from "./styles";

export default function ArticleH3({
  children,
  className = "mt-8 mb-4",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`font-heading font-bold text-white ${className}`} style={h3Style}>
      {children}
    </h3>
  );
}
