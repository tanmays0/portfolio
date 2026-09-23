import Link from "next/link";

export function ArticleRow({
  href,
  category,
  date,
  readTime,
  title,
  excerpt,
  readLabel,
}: {
  href: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  readLabel: string;
}) {
  return (
    <Link
      href={href}
      className="brutal-box brutal-press block bg-card p-6 transition"
    >
      <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {category} · {date} · {readTime}
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
        {title}
      </h2>
      <p className="mt-2 max-w-3xl text-ink-soft">{excerpt}</p>
      <span className="mt-4 inline-block border-2 border-border bg-main px-3 py-1 text-sm font-bold shadow-brutal-sm">
        {readLabel}
      </span>
    </Link>
  );
}
