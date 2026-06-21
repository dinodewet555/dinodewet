import type { ReactNode } from "react";
import { h2Style } from "./styles";

/** Article section heading. `id` doubles as the table-of-contents anchor. */
export default function ArticleH2({
  id,
  children,
  className = "mb-5",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={`font-heading font-bold text-white ${className}`} style={h2Style}>
      {children}
    </h2>
  );
}
