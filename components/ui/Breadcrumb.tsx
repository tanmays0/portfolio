import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Breadcrumb({
  backHref,
  backLabel,
  trail,
}: {
  backHref: string;
  backLabel: string;
  trail: string[];
}) {
  return (
    <div className="mb-8 space-y-4">
      <Link
        href={backHref}
        className="brutal-press inline-flex min-h-10 items-center gap-2 border-2 border-border bg-card px-3 py-1.5 text-sm font-bold shadow-brutal-sm"
      >
        <ArrowLeft size={16} aria-hidden />
        {backLabel}
      </Link>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {trail.join(" / ")}
      </p>
    </div>
  );
}
