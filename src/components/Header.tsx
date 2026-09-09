import { IconSunHigh, IconMoon } from "@tabler/icons-react";
import { useI18n } from "@/i18n";
import { useTheme } from "@/theme/ThemeProvider";

export function Header() {
  const { t, lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#projets", label: t.nav.work },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--p-bg)_82%,transparent)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-content items-center gap-[18px] px-[22px] py-[14px]">
        <a
          href="#top"
          className="flex flex-none items-center gap-[10px] text-fg hover:text-fg"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-[12px] text-[14px] font-extrabold tracking-[-0.02em] text-on-acc"
            style={{
              background: "linear-gradient(150deg, var(--p-acc), #7FB4FF)",
            }}
          >
            MT
          </span>
          <span className="hidden text-[15px] font-extrabold tracking-[-0.02em] min-[430px]:inline">
            Moctar Traoré
          </span>
        </a>

        <nav className="ml-auto hidden gap-[24px] text-[14px] font-medium text-mut nav:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-acc">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.langLabel}
            className="h-[38px] rounded-[12px] border border-line bg-surf px-3 text-[13px] font-bold tracking-[0.04em] text-fg"
          >
            {lang === "en" ? "EN" : "FR"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.nav.themeLabel}
            className="grid h-[38px] w-[38px] place-items-center rounded-[12px] border border-line bg-surf text-fg"
          >
            {theme === "dark" ? (
              <IconSunHigh size={18} stroke={1.75} />
            ) : (
              <IconMoon size={18} stroke={1.75} />
            )}
          </button>
          <a
            href="#contact"
            className="inline-flex h-[38px] items-center rounded-[12px] bg-acc px-4 text-[13.5px] font-bold text-on-acc shadow-acc-glow-sm hover:text-on-acc"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
