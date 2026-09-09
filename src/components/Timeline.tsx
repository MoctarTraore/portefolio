import { useI18n, pick } from "@/i18n";
import { timeline } from "@/content/timeline";
import { Reveal } from "./Reveal";

const DOT_COLOR: Record<string, string> = {
  active: "var(--p-acc)",
  muted: "var(--p-mut)",
  amber: "var(--p-amber)",
};

export function Timeline() {
  const { t, lang } = useI18n();

  return (
    <Reveal className="rounded-[24px] border border-line bg-surf p-[26px] shadow-p">
      <div className="mb-[20px] text-[11.5px] font-bold tracking-[0.14em] text-mut">
        {t.about.careerEyebrow}
      </div>
      <div className="grid gap-[2px]">
        {timeline.map((entry) => (
          <div
            key={entry.org}
            className="grid grid-cols-[22px_1fr] gap-[14px]"
          >
            <div className="grid justify-items-center">
              <span
                className="mt-[5px] h-[11px] w-[11px] rounded-full"
                style={{
                  background: DOT_COLOR[entry.dot],
                  boxShadow:
                    entry.dot === "active"
                      ? "0 0 0 4px var(--p-acc-soft)"
                      : undefined,
                }}
              />
              {entry.connector && (
                <span className="h-full w-px flex-1 bg-line" />
              )}
            </div>
            <div className={entry.connector ? "pb-[22px]" : ""}>
              <div className="text-[15px] font-extrabold">{entry.org}</div>
              <div className="text-[13.5px] leading-[1.6] text-mut">
                {pick(entry.role, lang)}
              </div>
              <div
                className="mt-[4px] text-[12.5px] font-semibold"
                style={{
                  color: entry.periodAccent ? "var(--p-acc)" : "var(--p-mut)",
                }}
              >
                {pick(entry.period, lang)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
