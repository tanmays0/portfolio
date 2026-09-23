import { getTranslations, setRequestLocale } from "next-intl/server";
import { CareerSection } from "@/components/content/CareerSection";
import { CertificationsSection } from "@/components/content/CertificationsSection";
import { ContactSection } from "@/components/content/ContactSection";
import { HeroSection } from "@/components/content/HeroSection";
import { MarqueeStrip } from "@/components/content/MarqueeStrip";
import { OfflineModeSection } from "@/components/content/OfflineModeSection";
import { ProjectsGallery } from "@/components/content/ProjectsGallery";
import { SkillsSection } from "@/components/content/SkillsSection";
import { SectionMotion } from "@/components/ui/SectionMotion";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const ta = await getTranslations({ locale, namespace: "about" });

  return (
    <div>
      <HeroSection bio={ta("bio")} />
      <MarqueeStrip />
      <SectionMotion>
        <SkillsSection />
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <CareerSection />
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <OfflineModeSection />
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <ProjectsGallery locale={locale} />
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <CertificationsSection locale={locale} />
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <ContactSection />
      </SectionMotion>
    </div>
  );
}
