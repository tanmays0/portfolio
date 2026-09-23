"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AccentButton } from "@/components/ui/AccentButton";
import { ThemeLogo } from "@/components/layout/ThemeLogo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/content/site";

type HeaderProps = {
  locale: string;
};

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const base = `/${locale}/about`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `${base}#home`, label: t("home"), match: "home" },
    { href: `${base}#about`, label: t("about"), match: "about" },
    { href: `/${locale}/work`, label: t("projects"), match: "work" },
    {
      href: `/${locale}/certifications`,
      label: t("certs"),
      match: "certifications",
    },
    { href: `/${locale}/writing`, label: t("blog"), match: "writing" },
    { href: `${base}#contact`, label: t("contact"), match: "contact" },
  ];

  function navClass(match: string) {
    const active =
      match === "work"
        ? pathname.includes("/work")
        : match === "certifications"
          ? pathname.includes("/certifications")
          : match === "writing"
            ? pathname.includes("/writing")
            : match === "home"
              ? pathname.includes("/about") &&
                !pathname.includes("/work") &&
                !pathname.includes("/certifications") &&
                !pathname.includes("/writing")
              : false;
    return [
      "px-3 py-1.5 text-sm font-bold uppercase tracking-wide transition-colors",
      active
        ? "border-2 border-border bg-main text-black shadow-brutal-sm"
        : "text-foreground hover:bg-bold-yellow hover:text-black",
    ].join(" ");
  }

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-card/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-brutal-sm" : ""
      }`}
    >
      <div className="page-pad flex h-[4.5rem] items-center justify-between gap-3 md:h-20">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <ThemeLogo href={base} />
          <Link
            href={base}
            className="hidden font-display text-lg font-black uppercase leading-none tracking-tight sm:block md:text-xl lg:text-2xl"
          >
            <span className="bg-bold-yellow px-1.5 py-0.5 text-black">
              {site.name.split(" ")[0]}
            </span>{" "}
            <span className="bg-sky-blue px-1.5 py-0.5 text-black">
              {site.name.split(" ")[1]}
            </span>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(link.match)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccentButton
            as="a"
            href={`/${locale}/resume`}
            tone="yellow"
            className="hidden min-h-10 px-4 text-xs sm:inline-flex"
          >
            {tc("viewResume")}
          </AccentButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border-2 border-border bg-card text-foreground shadow-brutal-sm lg:hidden"
            aria-label={menuOpen ? tc("closeMenu") : tc("openMenu")}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="page-pad border-t-2 border-border bg-card py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`min-h-11 ${navClass(link.match)}`}
              >
                {link.label}
              </Link>
            ))}
            <AccentButton
              as="a"
              href={`/${locale}/resume`}
              tone="yellow"
              className="mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {tc("viewResume")}
            </AccentButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
