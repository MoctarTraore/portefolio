import { motion, useReducedMotion } from "framer-motion";
import { IconPhoto } from "@tabler/icons-react";
import { useI18n, pick } from "@/i18n";
import type { Project } from "@/content/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

function MediaPlaceholder({ label, side }: { label: string; side: "left" | "right" }) {
  return (
    <div
      className={`relative flex min-h-[280px] items-center justify-center bg-surf2 p-6 ${
        side === "left" ? "border-r border-line" : "border-l border-line"
      }`}
    >
      <div className="flex flex-col items-center gap-2 text-center text-[13px] text-mut">
        <IconPhoto size={26} stroke={1.5} />
        {label}
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  last,
}: {
  project: Project;
  last: boolean;
}) {
  const { lang } = useI18n();
  const reduced = useReducedMotion();

  const text = (
    <div className="p-[clamp(24px,3.4vw,38px)]">
      <div className="mb-[14px] flex items-center gap-[10px]">
        <span
          className="grid h-[38px] w-[38px] place-items-center rounded-[12px] text-[20px]"
          style={{ background: project.iconBg, color: project.iconColor }}
        >
          <project.icon size={20} stroke={1.75} />
        </span>
        <h3 className="m-0 text-[clamp(21px,2.4vw,27px)] font-extrabold tracking-[-0.025em]">
          {project.name}
        </h3>
        <span
          className="ml-auto whitespace-nowrap rounded-pill px-[11px] py-[5px] text-[11.5px] font-bold"
          style={{ background: project.badgeBg, color: project.badgeColor }}
        >
          {pick(project.badge, lang)}
        </span>
      </div>

      <p className="m-0 mb-[20px] text-[15px] leading-[1.72] text-mut">
        {pick(project.description, lang)}
      </p>

      <div className="mb-[22px] flex flex-wrap gap-[8px]">
        {project.stack.map((item) => (
          <span key={item} className="stack-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-[14px] text-[13.5px] font-bold">
        {project.links.map((link) => (
          <a
            key={link.href + link.label.fr}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={`inline-flex items-center gap-[7px] ${
              link.muted ? "text-mut hover:text-mut" : ""
            }`}
          >
            <link.icon size={17} stroke={1.75} />
            {pick(link.label, lang)}
          </a>
        ))}
      </div>
    </div>
  );

  const media = (
    <MediaPlaceholder
      label={pick(project.mediaPlaceholder, lang)}
      side={project.layout === "media-left" ? "left" : "right"}
    />
  );

  return (
    <motion.article
      className={`overflow-hidden rounded-card border border-line bg-surf shadow-p ${
        last ? "" : "mb-[26px]"
      }`}
      style={{ borderColor: "var(--p-line)" }}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.72, ease: EASE }}
      whileHover={{
        y: -6,
        borderColor: "var(--p-acc)",
        transition: { duration: 0.38, ease: EASE },
      }}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {project.layout === "media-left" ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            {text}
            {media}
          </>
        )}
      </div>
    </motion.article>
  );
}
