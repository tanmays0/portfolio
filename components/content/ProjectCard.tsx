import Image from "next/image";
import Link from "next/link";

const CHIP_COLORS = [
  "border-border bg-main",
  "border-border bg-bold-yellow",
  "border-border bg-coral-pink",
  "border-border bg-sky-blue",
  "border-border bg-vivid-orange",
] as const;

export function ProjectCard({
  href,
  title,
  description,
  year,
  image,
  stack = [],
  index = 1,
}: {
  href: string;
  title: string;
  description: string;
  year: string;
  image: string;
  stack?: string[];
  index?: number;
}) {
  return (
    <Link
      href={href}
      className="brutal-box brutal-press group flex h-full flex-col overflow-hidden bg-card"
    >
      <div className="relative aspect-[16/10] border-b-2 border-border bg-muted">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 border-2 border-border bg-card px-2 py-0.5 font-mono text-xs font-bold shadow-brutal-sm">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-xs font-bold">{year}</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
        {stack.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {stack.slice(0, 4).map((item, i) => (
              <li
                key={item}
                className={`border-2 px-2 py-0.5 text-xs font-bold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
