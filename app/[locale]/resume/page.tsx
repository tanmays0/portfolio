import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageIntro } from "@/components/ui/PageIntro";
import { AccentButton } from "@/components/ui/AccentButton";
import { PdfEmbed } from "@/components/content/PdfEmbed";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tr = await getTranslations({ locale, namespace: "resume" });
  return {
    title: tr("title"),
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
  };
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations({ locale, namespace: "resume" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <div className="page-pad pb-24 pt-10">
      <Breadcrumb
        backHref={`/${locale}/about`}
        backLabel={tc("back")}
        trail={[tr("eyebrow")]}
      />
      <PageIntro
        index="04"
        eyebrow={tr("eyebrow")}
        title={tr("title")}
        description={tr("description")}
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <AccentButton as="a" href={site.resumePdf} target="_blank" rel="noreferrer">
            {tc("viewPdf")}
          </AccentButton>
          <AccentButton
            as="a"
            href={site.resumePdf}
            download="resume.pdf"
            tone="ghost"
          >
            {tc("download")}
          </AccentButton>
        </div>
      </PageIntro>
      <PdfEmbed src={site.resumePdf} />
    </div>
  );
}
