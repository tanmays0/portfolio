"use client";

import Image from "next/image";
import Link from "next/link";

type ThemeLogoProps = {
  href: string;
  className?: string;
};

export function ThemeLogo({ href, className = "" }: ThemeLogoProps) {
  return (
    <Link
      href={href}
      className={`ts-logo brutal-press inline-flex h-12 w-12 shrink-0 items-center justify-center border-2 border-border bg-bold-yellow shadow-brutal-sm ${className}`}
      aria-label="Home"
    >
      <Image
        src="/logos/ts-mark.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
        unoptimized
      />
      <span className="sr-only">TS</span>
    </Link>
  );
}
