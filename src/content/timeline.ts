import type { Localized } from "@/i18n";

export type TimelineEntry = {
  org: string;
  role: Localized;
  period: Localized;
  /** Première entrée : la période s'affiche en couleur d'accent. */
  periodAccent?: boolean;
  dot: "active" | "muted" | "amber";
  /** Trait vertical sous la puce (toutes sauf la dernière). */
  connector: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    org: "Prosol · Overnetflow",
    role: {
      fr: "Développeur Axelor ERP — modules métier, backend Java, intégrations",
      en: "Axelor ERP developer — business modules, Java backend, integrations",
    },
    period: {
      fr: "Stage 1 an 8 mois, puis CDD 5 mois",
      en: "Internship 1 yr 8 mo, then 5-month fixed-term contract",
    },
    periodAccent: true,
    dot: "active",
    connector: true,
  },
  {
    org: "Neurones Technologies S.A.",
    role: {
      fr: "Développeur applications — stage",
      en: "Application developer — internship",
    },
    period: { fr: "oct. 2024 – déc. 2024", en: "oct. 2024 – déc. 2024" },
    dot: "muted",
    connector: true,
  },
  {
    org: "Eburtis SARL",
    role: { fr: "Développeur — stage", en: "Developer — internship" },
    period: { fr: "nov. 2023 – janv. 2024", en: "nov. 2023 – janv. 2024" },
    dot: "muted",
    connector: true,
  },
  {
    org: "Pigier Côte d'Ivoire",
    role: {
      fr: "Licence professionnelle — informatique",
      en: "Professional bachelor's degree — computer science",
    },
    period: { fr: "2021 – 2025", en: "2021 – 2025" },
    dot: "amber",
    connector: false,
  },
];
