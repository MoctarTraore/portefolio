import {
  IconBrowser,
  IconServer2,
  IconDeviceMobile,
  IconCloudCog,
  type Icon,
} from "@tabler/icons-react";
import type { Localized } from "@/i18n";

export type SkillGroup = {
  icon: Icon;
  iconColor: string;
  title: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: IconBrowser,
    iconColor: "var(--p-acc)",
    title: { fr: "Frontend", en: "Frontend" },
    items: ["React", "TypeScript", "Vite", "Tailwind", "Angular"],
  },
  {
    icon: IconServer2,
    iconColor: "var(--p-ok)",
    title: { fr: "Backend & ERP", en: "Backend & ERP" },
    items: ["Java", "Spring Boot", "Axelor AOP", "REST APIs", "JPQL", "Laravel"],
  },
  {
    icon: IconDeviceMobile,
    iconColor: "var(--p-amber)",
    title: { fr: "Mobile", en: "Mobile" },
    items: ["Flutter", "Dart", "ML Kit", "Play Billing", "Mobile Money"],
  },
  {
    icon: IconCloudCog,
    iconColor: "var(--p-acc)",
    title: { fr: "Données & DevOps", en: "Data & DevOps" },
    items: [
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "MinIO",
      "Render",
      "Hostinger",
      "Firebase",
    ],
  },
];
