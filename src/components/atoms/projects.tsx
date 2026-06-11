import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  const { t, lang } = useI18n();
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.1}>
              <ProjectCard
                title={p.title}
                category={p.category}
                description={p.description[lang]}
                thumbnail={p.thumbnail}
                stack={p.stack}
                year={p.year}
                liveUrl={p.liveUrl}
                githubUrl={p.githubUrl}
                caseStudyUrl={p.caseStudyUrl}
                viewCase={t("projects.viewCase")}
                viewLive={t("projects.viewLive")}
                viewGithub={t("projects.viewGithub")}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
