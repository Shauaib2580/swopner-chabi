interface FeatCardProps {
  title: string;
  titleColor: string;
  bg: string;
  items: string[];
}

export function FeatCard({ title, titleColor, bg, items }: FeatCardProps) {
  return (
    <div className="rounded-2xl border border-[#2E3040] p-5 mb-4" style={{ background: bg }}>
      <h3 className="font-display text-[17px] mb-3" style={{ color: titleColor }}>
        {title}
      </h3>
      <ul className="list-none">
        {items.map((it) => (
          <li
            key={it}
            className="flex gap-2.5 py-1.5 text-[14.5px] border-b border-white/5 last:border-b-0"
          >
            <span className="text-[#3FA66B] shrink-0">✓</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
