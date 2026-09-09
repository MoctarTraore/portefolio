import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n, pick } from "@/i18n";
import { skillGroups } from "@/content/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  const { t, lang } = useI18n();
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-[clamp(48px,7vw,88px)]">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title.fr}
            className="rounded-[22px] border border-line bg-surf p-[24px]"
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
            <group.icon size={26} stroke={1.75} color={group.iconColor} />
            <div className="mb-[10px] mt-[14px] text-[17px] font-extrabold">
              {pick(group.title, lang)}
            </div>
            <div className="flex flex-wrap gap-[7px]">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-[18px] flex flex-wrap items-center gap-[10px] rounded-[18px] border border-line bg-surf px-[20px] py-[16px]">
        <span className="text-[11.5px] font-bold tracking-[0.12em] text-mut">
          {t.skills.methodsLabel}
        </span>
        <span className="h-[18px] w-px bg-line" />
        {t.skills.methods.map((method, i) => (
          <Fragment key={method}>
            {i > 0 && <span className="text-mut">·</span>}
            <span className="text-[13px] font-semibold">{method}</span>
          </Fragment>
        ))}
      </Reveal>
    </section>
  );
}
