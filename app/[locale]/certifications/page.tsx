import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageIntro } from "@/components/ui/PageIntro";
import { CertificationsListing } from "@/components/content/CertificationsListing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tcerts = await getTranslations({ locale, namespace: "certifications" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <div className="page-pad pb-24 pt-10">
      <Breadcrumb
        backHref={`/${locale}/about`}
        backLabel={tc("back")}
        trail={[tcerts("title")]}
      />
      <PageIntro
        index="05"
        eyebrow="Credentials"
        title={tcerts("title")}
        description={tcerts("description")}
      />
      <CertificationsListing />
    </div>
  );
}
