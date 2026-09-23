"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { certifications } from "@/content/certifications";
import { FilterChipGroup } from "@/components/ui/FilterChipGroup";
import { CertificationCard } from "@/components/content/CertificationCard";

export function CertificationsListing() {
  const tc = useTranslations("common");
  const tcerts = useTranslations("certifications");
  const [filter, setFilter] = useState("all");

  const options = [
    tcerts("types.certification"),
    tcerts("types.specialization"),
  ];

  const filtered = certifications.filter((cert) => {
    if (filter === "all") return true;
    if (filter === tcerts("types.certification")) return cert.type === "certification";
    if (filter === tcerts("types.specialization")) return cert.type === "specialization";
    return true;
  });

  return (
    <div className="mt-10 space-y-8">
      <FilterChipGroup
        options={options}
        active={filter}
        onChange={setFilter}
        allLabel={tc("all")}
      />
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">{tc("emptyFilter")}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert) => (
            <CertificationCard
              key={cert.id}
              variant="full"
              title={cert.title}
              description={cert.description}
              kicker={tcerts(`types.${cert.type}`)}
              image={cert.image}
              certificateImage={cert.certificateImage}
              certificatePdf={cert.certificatePdf}
              keyPoints={cert.keyPoints}
              verifyHref={cert.verifyHref}
              issuer={cert.issuer}
              obtainedDate={cert.obtainedDate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
