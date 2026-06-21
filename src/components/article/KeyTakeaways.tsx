/** Bulleted, bordered takeaway list used near the top of articles. */
export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-2.5 p-3 rounded-lg border"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
        >
          <div
            className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
            style={{ background: "var(--faint)" }}
          />
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.55 }}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
