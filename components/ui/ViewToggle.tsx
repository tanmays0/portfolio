"use client";

import { LayoutGrid, List } from "lucide-react";

type ViewToggleProps = {
  mode: "list" | "grid";
  onChange: (mode: "list" | "grid") => void;
  listLabel: string;
  gridLabel: string;
};

export function ViewToggle({
  mode,
  onChange,
  listLabel,
  gridLabel,
}: ViewToggleProps) {
  return (
    <div className="inline-flex gap-0 border-2 border-border bg-card shadow-brutal-sm">
      <button
        type="button"
        aria-pressed={mode === "list"}
        onClick={() => onChange("list")}
        className={`inline-flex min-h-9 items-center gap-2 px-3 py-1.5 text-sm font-bold transition ${
          mode === "list"
            ? "bg-black text-white"
            : "bg-card text-foreground hover:bg-muted"
        }`}
      >
        <List size={16} aria-hidden />
        {listLabel}
      </button>
      <button
        type="button"
        aria-pressed={mode === "grid"}
        onClick={() => onChange("grid")}
        className={`inline-flex min-h-9 items-center gap-2 border-l-2 border-border px-3 py-1.5 text-sm font-bold transition ${
          mode === "grid"
            ? "bg-black text-white"
            : "bg-card text-foreground hover:bg-muted"
        }`}
      >
        <LayoutGrid size={16} aria-hidden />
        {gridLabel}
      </button>
    </div>
  );
}
