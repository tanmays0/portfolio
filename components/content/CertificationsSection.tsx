import Link from "next/link";
import { certifications } from "@/content/certifications";
import { CertificationCard } from "@/components/content/CertificationCard";
import { AccentButton } from "@/components/ui/AccentButton";

type CertificationsSectionProps = {
  locale: string;
};

export function CertificationsSection({ locale }: CertificationsSectionProps) {
  const featured = certifications.slice(0, 6);

  return (
    <section id="certs" className="page-pad scroll-mt-24 py-12 md:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="section-label">Credentials</span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-tight md:text-5xl">
            Certifications
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Verified credentials across backend, test automation, UI/UX,
            networking, and data — with public Coursera links.
          </p>
        </div>
        <AccentButton
          as={Link}
          href={`/${locale}/certifications`}
          tone="ghost"
        >
          View all
        </AccentButton>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((cert) => (
          <CertificationCard
            key={cert.id}
            variant="compact"
            title={cert.title}
            description={cert.description}
            kicker={cert.type}
            image={cert.image}
            certificateImage={cert.certificateImage}
            certificatePdf={cert.certificatePdf}
            keyPoints={cert.keyPoints.slice(0, 2)}
            verifyHref={cert.verifyHref}
            issuer={cert.issuer}
            obtainedDate={cert.obtainedDate}
          />
        ))}
      </div>
    </section>
  );
}
