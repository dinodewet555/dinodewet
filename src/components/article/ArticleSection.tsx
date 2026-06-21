import type { ReactNode } from "react";

/** A spaced article body section. `id` matches its ArticleH2 anchor. */
export default function ArticleSection({
  id,
  children,
  className = "mb-14",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
