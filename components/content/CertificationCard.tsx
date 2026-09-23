"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Eye, ExternalLink, X } from "lucide-react";
import { useTranslations } from "next-intl";

type CertificationCardProps = {
  variant: "compact" | "full";
  title: string;
  description: string;
  kicker: string;
  image: string;
  certificateImage: string;
  certificatePdf?: string;
  keyPoints: string[];
  verifyHref: string;
  issuer?: string;
  obtainedDate?: string;
  dark?: boolean;
  carousel?: boolean;
  className?: string;
  onViewCertificate?: () => void;
};

export function CertificationCard({
  variant,
  title,
  description,
  kicker,
  image,
  certificateImage,
  certificatePdf,
  keyPoints,
  verifyHref,
  issuer,
  obtainedDate,
  carousel = false,
  className = "",
  onViewCertificate,
}: CertificationCardProps) {
  const t = useTranslations("common");
  const [lightbox, setLightbox] = useState(false);

  function openCert() {
    if (onViewCertificate) onViewCertificate();
    else setLightbox(true);
  }

  return (
    <>
      <article
        className={`brutal-box flex h-full flex-col bg-card p-5 ${className}`}
      >
        <button
          type="button"
          onClick={openCert}
          className="group relative mb-4 aspect-[4/3] w-full overflow-hidden border-2 border-border bg-muted shadow-brutal-sm"
          aria-label={`${t("viewCertificate")}: ${title}`}
        >
          <Image
            src={certificateImage || image}
            alt={title}
            fill
            unoptimized
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute top-2 right-2 border-2 border-border bg-sky-blue px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black shadow-brutal-sm">
            {kicker}
          </span>
        </button>

        <h3 className="line-clamp-2 min-h-[3.5rem] font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-sm leading-relaxed text-ink-soft">
          {description}
        </p>

        {variant === "full" ? (
          <dl className="mt-4 space-y-2 border-t-2 border-border pt-4 text-sm">
            {issuer ? (
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-muted-foreground">{t("issuer")}</dt>
                <dd className="text-right text-foreground">{issuer}</dd>
              </div>
            ) : null}
            {obtainedDate ? (
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-muted-foreground">{t("obtained")}</dt>
                <dd className="text-foreground">{obtainedDate}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        <div className="mt-4">
          {variant === "full" ? (
            <p className="mb-2 text-sm font-bold text-foreground">
              {t("keyPoints")}
            </p>
          ) : null}
          <ul className="space-y-2 text-sm">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-ink-soft">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center border-2 border-border bg-main">
                  <Check size={10} strokeWidth={3} aria-hidden />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button
            type="button"
            onClick={openCert}
            className={`brutal-press inline-flex min-h-9 items-center gap-1.5 border-2 border-border bg-bold-yellow px-3 py-1.5 font-bold text-black shadow-brutal-sm ${
              carousel ? "text-xs" : "text-sm"
            }`}
          >
            <Eye size={12} aria-hidden />
            {t("viewCertificate")}
          </button>
          <a
            href={verifyHref}
            target="_blank"
            rel="noreferrer"
            className={`brutal-press inline-flex min-h-9 items-center gap-1.5 border-2 border-border bg-card px-3 py-1.5 font-bold shadow-brutal-sm ${
              carousel ? "text-xs" : "text-sm"
            }`}
          >
            <Check size={12} aria-hidden />
            {t("verify")}
            {!carousel ? <ExternalLink size={14} aria-hidden /> : null}
          </a>
        </div>
      </article>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center border-2 border-border bg-card shadow-brutal"
            aria-label="Close"
            onClick={() => setLightbox(false)}
          >
            <X size={18} />
          </button>
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-border bg-card shadow-brutal-lg">
              <Image
                src={certificateImage}
                alt={title}
                fill
                className="object-contain"
                sizes="896px"
                unoptimized
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {certificatePdf ? (
                <a
                  href={certificatePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="brutal-press inline-flex items-center gap-2 border-2 border-border bg-bold-yellow px-4 py-2 text-sm font-bold text-black shadow-brutal-sm"
                >
                  Open PDF
                  <ExternalLink size={14} aria-hidden />
                </a>
              ) : null}
              <a
                href={verifyHref}
                target="_blank"
                rel="noreferrer"
                className="brutal-press inline-flex items-center gap-2 border-2 border-border bg-main px-4 py-2 text-sm font-bold text-black shadow-brutal-sm"
              >
                {t("verify")}
                <ExternalLink size={14} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
