"use client";

type FilterChipGroupProps = {
  options: string[];
  active: string;
  onChange: (value: string) => void;
  allLabel: string;
};

export function FilterChipGroup({
  options,
  active,
  onChange,
  allLabel,
}: FilterChipGroupProps) {
  const chips = [allLabel, ...options];

  return (
    <div className="flex flex-wrap gap-2 py-1">
      {chips.map((chip, i) => {
        const selected =
          active === chip || (chip === allLabel && active === "all");
        const value = chip === allLabel ? "all" : chip;
        const accents = [
          "bg-main",
          "bg-bold-yellow",
          "bg-coral-pink",
          "bg-sky-blue",
          "bg-vivid-orange",
        ] as const;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => onChange(value)}
            className={`brutal-press min-h-9 shrink-0 border-2 border-border px-3 py-1.5 font-mono text-xs font-bold tracking-wide ${
              selected
                ? `${accents[i % accents.length]} shadow-brutal-sm`
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}
