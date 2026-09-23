import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { WorkIntro } from "@/components/content/WorkIntro";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tw = await getTranslations({ locale, namespace: "work" });

  return <WorkIntro title={tw("title")} />;
}
