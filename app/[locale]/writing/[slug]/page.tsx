import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { articles, getArticle } from "@/content/articles";
import { locales, type Locale } from "@/i18n/routing";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MetaRow } from "@/components/ui/MetaRow";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return articles.flatMap((article) =>
    locales.map((locale) => ({
      locale,
      slug: article.slug,
    })),
  );
}

function renderBody(markdown: string) {
  const blocks = markdown.trim().split(/\n\n+/);
  return blocks.map((block, index) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="mt-8 border-b-2 border-border pb-2 font-display text-2xl font-bold first:mt-0"
        >
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    return (
      <p key={index} className="mt-4 text-base leading-relaxed text-ink-soft">
        {block}
      </p>
    );
  });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const tc = await getTranslations({ locale, namespace: "common" });
  const tn = await getTranslations({ locale, namespace: "nav" });

  return (
    <article className="page-pad pb-24 pt-10">
      <Breadcrumb
        backHref={`/${locale}/writing`}
        backLabel={tc("back")}
        trail={[tn("blog"), article.category]}
      />

      <div className="brutal-box bg-card p-6 md:p-8">
        <MetaRow
          items={[
            article.category,
            article.date,
            `${article.readTimeMinutes} min`,
          ]}
        />
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          {article.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{article.excerpt}</p>
      </div>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden border-2 border-border bg-muted shadow-brutal">
        <Image
          src={article.coverImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="brutal-box mx-auto mt-8 max-w-3xl bg-card p-6 md:p-8">
        {renderBody(article.body)}
      </div>
    </article>
  );
}
