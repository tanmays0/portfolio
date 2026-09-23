export function MetaRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.filter(Boolean).map((item, i) => {
        const accents = [
          "bg-main",
          "bg-bold-yellow",
          "bg-coral-pink",
          "bg-sky-blue",
          "bg-vivid-orange",
        ] as const;
        return (
          <span
            key={`${item}-${i}`}
            className={`border-2 border-border px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider ${accents[i % accents.length]}`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
