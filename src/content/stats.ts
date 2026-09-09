import type { Localized } from "@/i18n";

export type HeroStat = {
  value: string;
  label: Localized;
};

export const heroStats: HeroStat[] = [
  {
    value: "4 ans",
    label: { fr: "de pratique", en: "of practice" },
  },
  {
    value: "Axelor",
    label: { fr: "modules ERP chez Prosol", en: "ERP modules at Prosol" },
  },
  {
    value: "A → Z",
    label: { fr: "conception, dev, déploiement", en: "design, build, deploy" },
  },
];

export type HeroBadge = {
  label: string;
  color: string;
  animation: string;
};

export const heroBadges: HeroBadge[] = [
  { label: "Axelor ERP", color: "var(--p-acc)", animation: "animate-floaty-1" },
  { label: "Flutter", color: "var(--p-amber)", animation: "animate-floaty-2" },
  { label: "Spring Boot", color: "var(--p-ok)", animation: "animate-floaty-3" },
];
