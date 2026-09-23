import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/ui/PageIntro";
import { WritingListing } from "@/components/content/WritingListing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WritingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tw = await getTranslations({ locale, namespace: "writing" });

  return (
    <div className="page-pad pb-24 pt-10">
      <PageIntro
        index="03"
        eyebrow={tw("eyebrow")}
        title={tw("title")}
        description={tw("description")}
      />
      <WritingListing />
    </div>
  );
}
