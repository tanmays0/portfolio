import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/content/projects";
import { locales, type Locale } from "@/i18n/routing";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MetaRow } from "@/components/ui/MetaRow";
import { StackList } from "@/components/ui/StackList";
import {
  ExternalLinkButton,
  PrevNextNav,
} from "@/components/ui/ExternalLinkButton";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.flatMap((project) =>
    locales.map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const tc = await getTranslations({ locale, namespace: "common" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const { next } = getAdjacentProjects(slug);

  const sections = [
    { title: "Problem", body: project.problem, accent: "bg-coral-pink" },
    { title: "Solution", body: project.solution, accent: "bg-main" },
    { title: "Who it's for", body: project.whoItsFor, accent: "bg-sky-blue" },
    { title: "How it works", body: project.howItWorks, accent: "bg-bold-yellow" },
  ];

  return (
    <article className="page-pad pb-24 pt-10">
      <Breadcrumb
        backHref={`/${locale}/work`}
        backLabel={tc("back")}
        trail={[tn("projects"), project.name]}
      />

      <div className="brutal-box bg-card p-6 md:p-8">
        <MetaRow items={[project.year, ...project.categories]} />
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{project.tagline}</p>
      </div>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden border-2 border-border bg-muted shadow-brutal">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <section
            key={section.title}
            className={`brutal-box p-5 ${section.accent}`}
          >
            <h2 className="font-display text-xl font-bold">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <section className="brutal-box mt-4 bg-card p-5">
        <h2 className="font-display text-xl font-bold">Stack</h2>
        <div className="mt-4">
          <StackList items={project.stack} />
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLinkButton href={project.liveUrl} label={tc("liveWebsite")} />
        <ExternalLinkButton href={project.githubUrl} label={tc("github")} />
      </div>

      {next ? (
        <PrevNextNav
          nextHref={`/${locale}/work/${next.slug}`}
          nextLabel={next.name}
          prefix={tc("nextProject")}
        />
      ) : null}
    </article>
  );
}
