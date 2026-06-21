import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";

export type RelatedLink = {
  href: string;
  anchor: string;
  description?: string;
};

type Props = {
  heading?: string;
  intro?: string;
  links: RelatedLink[];
};

export default function RelatedServices({
  heading = "Related SEO Services",
  intro,
  links,
}: Props) {
  return (
    <Section variant="panel" bordered className="py-20 relative" ariaLabel={heading}>
      <Eyebrow>Explore Related Services</Eyebrow>
      <SectionHeading size="clamp(1.5rem, 3vw, 2.4rem)" className="mb-4" style={{ lineHeight: 1.2 }}>
        {heading}
      </SectionHeading>
      {intro && (
        <p
          className="mb-10"
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.8,
            fontSize: "1rem",
            fontFamily: "var(--font-body)",
            maxWidth: "640px",
          }}
        >
          {intro}
        </p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
        {links.map((l) => (
          <li
            key={l.href}
            className="rounded-xl border p-5"
            style={{ background: "#050505", borderColor: "var(--border)" }}
          >
            <Link href={l.href} className="internal-link text-base font-medium">
              {l.anchor}
            </Link>
            {l.description && (
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
              >
                {l.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
