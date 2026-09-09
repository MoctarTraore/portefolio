# CLAUDE.md

Guidance for working in this repository.

## What this repo is

Personal portfolio site for Moctar Traoré (full-stack developer, Abidjan). Deploy target: `moctartraore.com`.

**Stack:** Vite 6 + React 19 + TypeScript + Tailwind CSS 3 + Framer Motion. Single page, bilingual **FR/EN**, **dark theme by default with a light toggle**, scroll-reveal animations. Built to the spec in `Refonte portfolio développeur/design_handoff_portfolio/`.

## Commands

```bash
npm install       # first run also: `npm approve-scripts esbuild` if prompted
npm run dev       # Vite dev server
npm run build     # tsc -b + vite build  -> dist/
npm run preview   # serve the production build
```

No test runner and no linter are wired up.

## Layout

```
index.html                 Vite entry — SEO/OG/JSON-LD + pre-paint theme/lang script (no FOUC)
public/moctar.png          portrait (from the handoff assets)
legacy/                    the previous single-file site, kept for reference only
src/
  main.tsx                 mounts <ThemeProvider><I18nProvider><App>
  App.tsx                  page shell: ParallaxBackground + Header + <main> sections + Footer
  index.css                Tailwind layers + `--p-*` design tokens for both themes + keyframes
  theme/ThemeProvider.tsx  theme state -> data-theme attr + color-scheme + localStorage['mt.theme']
  i18n/
    dictionary.ts          all UI strings, `fr` and `en` objects; `Localized` type + `pick()` helper
    index.tsx              I18nProvider + useI18n() -> { lang, t, toggleLang }; localStorage['mt.lang']
  content/                 static data, each string as { fr, en }
    projects.ts  skills.ts  timeline.ts  stats.ts
  components/
    Reveal.tsx             Framer Motion whileInView wrapper (opacity/y, once, 720ms, `delay` = stagger)
    ParallaxBackground.tsx useScroll + useTransform, two fixed halos (factors 0.18 / -0.10)
    SectionHeading.tsx     eyebrow + H2 + rule
    Header Hero About Timeline Projects ProjectCard Skills Contact Footer
  lib/
    site.ts                email, social URLs, `mailto()` builder (manual encoding)
    classes.ts             LIFT / CARD_HOVER shared interaction class strings
```

## Conventions & invariants

- **All copy lives in `i18n/dictionary.ts` or `content/*.ts`** — never hard-code visible strings in components. Every content string is `{ fr, en }`; read it with `pick(value, lang)`.
- **Design tokens** are CSS custom properties `--p-*` defined once in `src/index.css` on `:root` (dark) and `:root[data-theme="light"]`. Tailwind maps them (`bg-surf`, `text-mut`, `border-line`, `shadow-p`, `ease-p`, …) in `tailwind.config.ts`. Add a color there, not as a literal in JSX. Values come from `design/Portfolio.dc.html` (the `THEMES` object) and the handoff README token table.
- **Light-theme inks stay dark** (`#155CC4`, `#92400E`, `#0F8A43`) on ~10–12% tinted backgrounds for 4.5:1 contrast. Do not lighten them.
- **Motion:** easing `cubic-bezier(0.22,1,0.36,1)` (`ease-p`); durations 260ms button hover, 320ms theme, 380ms card hover, 720ms reveal. `Reveal` and `ParallaxBackground` both no-op under `prefers-reduced-motion: reduce` (via `useReducedMotion`); `index.css` also damps the decorative `floaty`/`pulseDot` loops.
- **Responsive** is `clamp()` + `auto-fit/minmax` grids. The only breakpoint is the custom Tailwind screen `nav: 860px` (header links hidden below it); the logo wordmark also hides below `min-[430px]` so the header fits at 360px. Avoid adding other breakpoints.
- **Contact form** does `preventDefault` + `mailto:` redirect and flips the helper note. To upgrade: POST to Formspree/Resend/custom API with loading/success/error states, keep `mailto:` as fallback.
- Icons: `@tabler/icons-react` components (tree-shaken), never the webfont. Verify a name exists in the installed version before importing (`IconVote` etc. are absent — `IconChecklist` is used for Elismoi).

## Known gaps

- **No CV PDF** — Hero "Demander mon CV" is a `mailto:` with a prefilled subject (`site.ts` / `dictionary.ts` `hero.cvSubject`). Switch to `<a download href="/cv.pdf">` once the file exists in `public/`.
- **Project screenshots missing** — `ProjectCard` renders a `MediaPlaceholder` (icon + caption). Replace with real `<img loading="lazy">` per project; captions are `mediaPlaceholder` in `content/projects.ts`.
- **`og.png` referenced but absent** — `index.html` points OG/Twitter image at `/og.png`; add a 1200×630 image to `public/`.
- Portrait is a PNG (`public/moctar.png`); a WebP/AVIF version with `<picture>` would help LCP on slow connections.
- The folder name `Refonte portfolio développeur/` has a space and an accent — quote paths in shell commands.
