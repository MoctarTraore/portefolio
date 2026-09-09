import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Marge basse : 30px par défaut, 14px pour la section Projets (sous-titre en dessous). */
  tight?: boolean;
};

/** Motif de titre de section : eyebrow numéroté · H2 · filet horizontal. */
export function SectionHeading({ eyebrow, title, tight }: SectionHeadingProps) {
  return (
    <Reveal className={`flex items-center gap-3 ${tight ? "mb-[14px]" : "mb-[30px]"}`}>
      <span className="text-[12px] font-bold tracking-[0.14em] text-acc">
        {eyebrow}
      </span>
      <h2 className="m-0 text-[clamp(26px,3.4vw,38px)] font-extrabold tracking-[-0.03em]">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </Reveal>
  );
}
