import {
  IconSend,
  IconArrowDownRight,
  IconFileCv,
  IconMapPin,
  IconBuildingStore,
  IconDeviceMobile,
  IconServer2,
} from "@tabler/icons-react";
import { useI18n, pick } from "@/i18n";
import { heroStats } from "@/content/stats";
import { mailto } from "@/lib/site";
import { LIFT } from "@/lib/classes";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[48px] pb-[clamp(48px,7vw,86px)] pt-[clamp(56px,9vw,104px)]">
      {/* Colonne gauche */}
      <div>
        <Reveal className="mb-[26px] inline-flex items-center gap-[9px] rounded-pill border border-line bg-surf px-[14px] py-[7px] text-[12.5px] font-semibold text-mut">
          <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-ok" />
          <span>{t.hero.availability}</span>
        </Reveal>

        <Reveal delay={0.07}>
          <h1 className="m-0 mb-[18px] text-[clamp(38px,6.4vw,68px)] font-extrabold leading-[1.03] tracking-[-0.035em]">
            <span>{t.hero.titleLine1}</span>
            <br />
            <span className="bg-[linear-gradient(100deg,var(--p-acc),var(--p-amber))] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {t.hero.titleLine2}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="m-0 mb-[32px] max-w-[56ch] text-[clamp(15.5px,1.5vw,18px)] leading-[1.72] text-mut">
            {t.hero.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.21} className="mb-[34px] flex flex-wrap gap-[12px]">
          <a
            href="#contact"
            className={`inline-flex h-[52px] items-center gap-[10px] rounded-[16px] bg-acc px-[26px] text-[15px] font-bold text-on-acc shadow-acc-glow hover:text-on-acc ${LIFT}`}
          >
            <IconSend size={19} stroke={1.75} />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#projets"
            className={`inline-flex h-[52px] items-center gap-[10px] rounded-[16px] border border-line bg-surf px-[24px] text-[15px] font-semibold text-fg hover:text-fg ${LIFT}`}
          >
            <IconArrowDownRight size={19} stroke={1.75} />
            {t.hero.ctaSecondary}
          </a>
          <a
            href={mailto(t.hero.cvSubject)}
            className="inline-flex h-[52px] items-center gap-[9px] rounded-[16px] px-[20px] text-[14.5px] font-semibold text-mut hover:text-mut"
          >
            <IconFileCv size={18} stroke={1.75} />
            {t.hero.ctaCv}
          </a>
        </Reveal>

        <div className="flex flex-wrap gap-[26px] border-t border-line pt-[24px]">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.value} delay={0.28 + i * 0.07}>
              <div className="text-[26px] font-extrabold tracking-[-0.02em]">
                {stat.value}
              </div>
              <div className="text-[12.5px] font-medium text-mut">
                {pick(stat.label, lang)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Colonne droite — portrait */}
      <Reveal
        delay={0.28}
        className="relative w-full max-w-[420px] justify-self-center"
      >
        <div
          className="absolute inset-[-14px] rounded-[34px] opacity-30 blur-[20px]"
          style={{
            background:
              "linear-gradient(150deg, var(--p-acc), transparent 55%, var(--p-amber))",
          }}
        />
        <div
          className="relative overflow-hidden rounded-[28px] border border-line shadow-p"
          style={{
            background: "linear-gradient(170deg, var(--p-surf2), var(--p-surf))",
          }}
        >
          <img
            src="/moctar.png"
            alt={t.hero.portraitName}
            width={420}
            height={525}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="block aspect-[4/5] w-full object-cover"
            style={{ objectPosition: "50% 12%" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-[12px] px-[20px] py-[18px]"
            style={{
              background:
                "linear-gradient(to top, rgba(4,8,18,0.92), transparent)",
            }}
          >
            <div>
              <div className="text-[15px] font-extrabold text-white">
                {t.hero.portraitName}
              </div>
              <div className="text-[12.5px] font-medium text-[#C7D3EA]">
                {t.hero.portraitTitle}
              </div>
            </div>
            <span className="inline-flex items-center gap-[5px] whitespace-nowrap rounded-pill bg-white/[0.14] px-[10px] py-[6px] text-[11.5px] font-bold text-white">
              <IconMapPin size={14} stroke={2} />
              {t.hero.portraitLocation}
            </span>
          </div>
        </div>

        <div className="absolute left-0 top-[26px] flex animate-floaty-1 items-center gap-[8px] whitespace-nowrap rounded-[14px] border border-line bg-surf px-[14px] py-[9px] text-[12.5px] font-bold shadow-p nav:left-[-18px]">
          <IconBuildingStore size={16} stroke={1.75} color="var(--p-acc)" />
          Axelor ERP
        </div>
        <div className="absolute bottom-[96px] right-0 flex animate-floaty-2 items-center gap-[8px] whitespace-nowrap rounded-[14px] border border-line bg-surf px-[14px] py-[9px] text-[12.5px] font-bold shadow-p nav:right-[-22px]">
          <IconDeviceMobile size={16} stroke={1.75} color="var(--p-amber)" />
          Flutter
        </div>
        <div className="absolute bottom-[-16px] left-[14px] flex animate-floaty-3 items-center gap-[8px] whitespace-nowrap rounded-[14px] border border-line bg-surf px-[14px] py-[9px] text-[12.5px] font-bold shadow-p">
          <IconServer2 size={16} stroke={1.75} color="var(--p-ok)" />
          Spring Boot
        </div>
      </Reveal>
    </section>
  );
}
