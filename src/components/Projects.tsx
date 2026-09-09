import { IconChecklist, IconArrowUpRight } from "@tabler/icons-react";
import { useI18n } from "@/i18n";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projets" className="py-[clamp(48px,7vw,88px)]">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} tight />
      <Reveal>
        <p className="m-0 mb-[34px] text-[15.5px] text-mut">
          {t.projects.subtitle}
        </p>
      </Reveal>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          last={i === projects.length - 1}
        />
      ))}

      <Reveal className="mt-[26px] flex flex-wrap items-center gap-[14px] rounded-[20px] border border-dashed border-line bg-surf px-[22px] py-[18px]">
        <IconChecklist size={22} stroke={1.75} color="var(--p-acc)" />
        <div className="flex-1 basis-[240px]">
          <div className="text-[15px] font-extrabold">
            {t.projects.elismoiTitle}
          </div>
          <div className="text-[13.5px] text-mut">{t.projects.elismoiText}</div>
        </div>
        <a
          href={site.elismoi}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[7px] text-[13.5px] font-bold"
        >
          elismoi.com
          <IconArrowUpRight size={16} stroke={1.75} />
        </a>
      </Reveal>
    </section>
  );
}
