import { useState, type FormEvent } from "react";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";
import { useI18n } from "@/i18n";
import { site, mailto } from "@/lib/site";
import { LIFT } from "@/lib/classes";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const contactLinks = [
    { href: mailto(), icon: IconMail, label: site.email, external: false },
    {
      href: site.social.linkedin,
      icon: IconBrandLinkedin,
      label: site.social.linkedinName,
      external: true,
    },
    {
      href: site.social.github,
      icon: IconBrandGithub,
      label: site.social.githubHandle,
      external: true,
    },
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = t.contact.mailSubjectPrefix + name;
    const body = `${message}\n\n${t.contact.mailReachMe}${contact}\n${name}`;
    window.location.href = mailto(subject, body);
    setSent(true);
  }

  return (
    <section id="contact" className="py-[clamp(48px,7vw,88px)] pb-[40px]">
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[38px] rounded-panel border border-line p-[clamp(26px,4vw,48px)] shadow-p"
        style={{
          background: "linear-gradient(160deg, var(--p-surf2), var(--p-surf))",
        }}
      >
        <Reveal>
          <div
            className="avail-pill mb-[22px]"
            style={{ background: "rgba(34,197,94,0.10)", color: "var(--p-ok)" }}
          >
            <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-ok" />
            <span>{t.contact.availability}</span>
          </div>

          <h2 className="m-0 mb-[14px] text-[clamp(26px,3.6vw,40px)] font-extrabold tracking-[-0.03em]">
            {t.contact.title}
          </h2>
          <p className="m-0 mb-[26px] max-w-[44ch] text-[15.5px] leading-[1.72] text-mut">
            {t.contact.paragraph}
          </p>

          <div className="grid gap-[10px]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={`flex items-center gap-[12px] rounded-[16px] border border-line bg-surf px-[16px] py-[13px] text-[14px] font-semibold text-fg hover:text-fg ${LIFT}`}
              >
                <link.icon size={19} stroke={1.75} color="var(--p-acc)" />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="grid content-start gap-[12px]">
            <label
              htmlFor="c-name"
              className="text-[12.5px] font-bold tracking-[0.04em] text-mut"
            >
              {t.contact.nameLabel}
            </label>
            <input
              id="c-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePlaceholder}
              className="field h-[50px]"
            />

            <label
              htmlFor="c-contact"
              className="mt-[6px] text-[12.5px] font-bold tracking-[0.04em] text-mut"
            >
              {t.contact.contactLabel}
            </label>
            <input
              id="c-contact"
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={t.contact.contactPlaceholder}
              className="field h-[50px]"
            />

            <label
              htmlFor="c-project"
              className="mt-[6px] text-[12.5px] font-bold tracking-[0.04em] text-mut"
            >
              {t.contact.projectLabel}
            </label>
            <textarea
              id="c-project"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.projectPlaceholder}
              className="field resize-y py-[14px] leading-[1.6]"
            />

            <button
              type="submit"
              className={`mt-[8px] inline-flex h-[54px] items-center justify-center gap-[10px] rounded-[16px] border-none bg-acc text-[15.5px] font-extrabold text-on-acc shadow-acc-glow hover:text-on-acc ${LIFT}`}
            >
              <IconSend size={19} stroke={1.75} />
              <span>{t.contact.submit}</span>
            </button>

            <div
              className="text-center text-[12.5px] text-mut"
              style={sent ? { color: "var(--p-acc)" } : undefined}
            >
              {sent ? t.contact.noteSent : t.contact.note}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
