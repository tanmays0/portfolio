import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ExternalLinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="brutal-press inline-flex min-h-10 items-center gap-2 border-2 border-border bg-main px-4 py-2.5 text-sm font-bold shadow-brutal"
    >
      {label}
      <ExternalLink size={14} aria-hidden />
    </a>
  );
}

export function PrevNextNav({
  nextHref,
  nextLabel,
  prefix,
}: {
  nextHref: string;
  nextLabel: string;
  prefix: string;
}) {
  return (
    <Link
      href={nextHref}
      className="brutal-box brutal-press mt-12 flex min-h-14 items-center justify-between gap-3 bg-bold-yellow px-5 py-4 text-lg font-bold"
    >
      <span>
        {prefix} · {nextLabel}
      </span>
      <ArrowRight size={18} aria-hidden />
    </Link>
  );
}
