export const site = {
  email: "moctartraore000@gmail.com",
  name: "Moctar Traoré",
  location: "Abidjan, Côte d'Ivoire",
  social: {
    github: "https://github.com/MoctarTraore",
    githubHandle: "@MoctarTraore",
    linkedin: "https://www.linkedin.com/in/daouda-moctar-traor%C3%A9",
    linkedinName: "Daouda Moctar Traoré",
    x: "https://x.com/MoctarTrao65864",
  },
  elismoi: "https://elismoi.com",
} as const;

/**
 * Construit un lien `mailto:` — encodage manuel (le corps d'un mailto n'est pas
 * du form-urlencoded, donc pas de « + » à la place des espaces).
 */
export const mailto = (subject?: string, body?: string): string => {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}${parts.length ? `?${parts.join("&")}` : ""}`;
};
