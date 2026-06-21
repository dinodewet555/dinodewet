import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ReadingLink = { label: string; href: string; desc: string };

/** The "Continue Reading" stack of internal link cards in the article footer. */
export default function ContinueReading({ links }: { links: ReadingLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <div
            className="card-hover rounded-xl border p-5 flex items-center justify-between gap-4"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <p
                className="font-heading font-semibold text-white mb-1"
                style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
              >
                {link.label}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                {link.desc}
              </p>
            </div>
            <ArrowRight size={16} color="var(--text-muted)" className="flex-shrink-0" />
          </div>
        </Link>
      ))}
    </div>
  );
}
