import { IconTargetArrow, IconCompass, IconStack2 } from "@tabler/icons-react";
import { useI18n } from "@/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Timeline } from "./Timeline";

const VALUE_ICONS = [IconTargetArrow, IconCompass, IconStack2];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-[clamp(48px,7vw,88px)]">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[34px]">
        <Reveal>
          <p className="m-0 mb-[18px] text-[16px] leading-[1.78] text-mut">
            {t.about.p1}
          </p>
          <p className="m-0 mb-[22px] text-[16px] leading-[1.78] text-mut">
            {t.about.p2}
          </p>

          <div className="grid gap-[12px]">
            {t.about.values.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div key={value.title} className="flex items-start gap-[12px]">
                  <Icon
                    size={20}
                    stroke={1.75}
                    color="var(--p-acc)"
                    className="mt-[2px] shrink-0"
                  />
                  <div>
                    <strong className="text-[14.5px]">{value.title}</strong>
                    <div className="text-[13.5px] leading-[1.6] text-mut">
                      {value.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Timeline />
      </div>
    </section>
  );
}
