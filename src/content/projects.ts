import {
  IconMap2,
  IconId,
  IconBuildingStore,
  IconFileDescription,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconLayoutGrid,
  type Icon,
} from "@tabler/icons-react";
import type { Localized } from "@/i18n";

export type ProjectLink = {
  label: Localized;
  href: string;
  icon: Icon;
  external?: boolean;
  muted?: boolean;
};

export type Project = {
  id: string;
  name: string;
  icon: Icon;
  iconColor: string;
  iconBg: string;
  badge: Localized;
  badgeColor: string;
  badgeBg: string;
  description: Localized;
  stack: string[];
  links: ProjectLink[];
  /** Texte du placeholder de capture (à remplacer par un <img>). */
  mediaPlaceholder: Localized;
  /** Rythme alterné : ValidPhoto a le visuel à gauche. */
  layout: "text-left" | "media-left";
};

export const projects: Project[] = [
  {
    id: "proj-proximetiers",
    name: "ProxiMétiers",
    icon: IconMap2,
    iconColor: "var(--p-acc)",
    iconBg: "var(--p-acc-soft)",
    badge: { fr: "En développement", en: "In development" },
    badgeColor: "var(--p-amber)",
    badgeBg: "rgba(245,165,36,0.11)",
    description: {
      fr: "Marketplace qui met en relation les artisans ivoiriens — plombiers, électriciens, maçons — avec les clients proches d'eux grâce à la géolocalisation. Profils prestataires, recherche par rayon, abonnements et paiements Mobile Money.",
      en: "A marketplace connecting Ivorian craftsmen — plumbers, electricians, masons — with nearby clients through geolocation. Provider profiles, radius search, subscriptions and Mobile Money payments.",
    },
    stack: [
      "React + Vite + TS",
      "Spring Boot 4",
      "PostgreSQL / PostGIS",
      "MinIO",
      "CinetPay / Paystack",
    ],
    links: [
      {
        label: { fr: "Étude de cas sur demande", en: "Case study on request" },
        href: "#contact",
        icon: IconFileDescription,
      },
      {
        label: { fr: "GitHub", en: "GitHub" },
        href: "https://github.com/MoctarTraore",
        icon: IconBrandGithub,
        external: true,
        muted: true,
      },
    ],
    mediaPlaceholder: {
      fr: "Capture d'écran ProxiMétiers (web)",
      en: "ProxiMétiers screenshot (web)",
    },
    layout: "text-left",
  },
  {
    id: "proj-validphoto",
    name: "ValidPhoto",
    icon: IconId,
    iconColor: "var(--p-amber)",
    iconBg: "rgba(245,165,36,0.11)",
    badge: { fr: "Freemium", en: "Freemium" },
    badgeColor: "var(--p-badge)",
    badgeBg: "rgba(47,134,255,0.11)",
    description: {
      fr: "Application Flutter qui transforme une photo de téléphone en photo d'identité ou de passeport conforme : détection et cadrage du visage avec Google ML Kit, recadrage aux normes, planches imprimables — et tout fonctionne hors-ligne, sans serveur, sans donnée qui quitte le téléphone.",
      en: "A Flutter app that turns a phone photo into a compliant ID or passport picture: face detection and framing with Google ML Kit, standard-accurate crops, printable sheets — and it all runs offline, no server, no data leaving the phone.",
    },
    stack: ["Flutter / Dart", "Google ML Kit", "Offline-first", "Play Billing"],
    links: [
      {
        label: { fr: "Démo sur demande", en: "Request a demo" },
        href: "#contact",
        icon: IconBrandGooglePlay,
      },
    ],
    mediaPlaceholder: {
      fr: "Capture d'écran ValidPhoto (mobile)",
      en: "ValidPhoto screenshot (mobile)",
    },
    layout: "media-left",
  },
  {
    id: "proj-vendeurci",
    name: "Vendeur.ci",
    icon: IconBuildingStore,
    iconColor: "var(--p-ok)",
    iconBg: "rgba(34,197,94,0.16)",
    badge: { fr: "En développement", en: "In development" },
    badgeColor: "var(--p-amber)",
    badgeBg: "rgba(245,165,36,0.11)",
    description: {
      fr: "Vitrine mobile pour les vendeurs ivoiriens jusque-là coincés dans les statuts WhatsApp. Les vendeurs publient leurs produits en photos et vidéos ; les acheteurs parcourent librement et les contactent directement par deeplink WhatsApp ou appel — pas de panier, pas de paiement intégré. Comptes OTP des deux côtés, back-office admin, abonnement mensuel pour les vendeurs.",
      en: "A mobile showcase for Ivorian sellers stuck inside WhatsApp status posts. Sellers publish products with photos and video; buyers browse freely and contact them straight away through a WhatsApp deeplink or a call — no cart, no in-app payment. OTP accounts for both sides, admin back-office, monthly seller subscriptions.",
    },
    stack: ["Flutter", "Spring Boot", "PostgreSQL", "OTP", "WhatsApp deeplink"],
    links: [
      {
        label: {
          fr: "Design system & écrans sur demande",
          en: "Design system & screens on request",
        },
        href: "#contact",
        icon: IconLayoutGrid,
      },
    ],
    mediaPlaceholder: {
      fr: "Capture d'écran Vendeur.ci (mobile)",
      en: "Vendeur.ci screenshot (mobile)",
    },
    layout: "text-left",
  },
];
