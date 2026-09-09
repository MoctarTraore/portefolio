import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { useI18n } from "@/i18n";
import { site, mailto } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: site.social.github, icon: IconBrandGithub, label: "GitHub", external: true },
    {
      href: site.social.linkedin,
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      external: true,
    },
    { href: site.social.x, icon: IconBrandX, label: "X (Twitter)", external: true },
    { href: mailto(), icon: IconMail, label: "Email", external: false },
  ];

  return (
    <footer className="flex flex-wrap items-center justify-between gap-[14px] border-t border-line pb-[46px] pt-[30px] text-[13px] text-mut">
      <span>{t.footer.rights}</span>
      <span className="flex gap-[16px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            aria-label={link.label}
            className="text-mut hover:text-acc"
          >
            <link.icon size={18} stroke={1.75} />
          </a>
        ))}
      </span>
    </footer>
  );
}
