import type { ReactNode } from "react";
import { bodyTextStyle } from "./styles";

/** A prose paragraph in the article body. Pass multiple stacked via a parent
 * `flex flex-col gap-4` when you need several. */
export default function BodyText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={className} style={bodyTextStyle}>
      {children}
    </p>
  );
}
