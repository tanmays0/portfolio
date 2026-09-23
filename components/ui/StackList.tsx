const CHIP_COLORS = [
  "border-border bg-main",
  "border-border bg-bold-yellow",
  "border-border bg-coral-pink",
  "border-border bg-sky-blue",
  "border-border bg-vivid-orange",
] as const;

export function StackList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li
          key={item}
          className={`border-2 px-3 py-1 text-sm font-bold shadow-brutal-sm ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
