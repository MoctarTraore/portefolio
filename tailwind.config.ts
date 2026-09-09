import type { Config } from "tailwindcss";

/**
 * Le thème est piloté par des variables CSS `--p-*` posées sur `:root`
 * (défaut sombre) et `:root[data-theme="light"]` — voir src/index.css.
 * Tailwind ne fait que les exposer sous forme d'utilitaires.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--p-bg)",
        bg2: "var(--p-bg2)",
        surf: "var(--p-surf)",
        surf2: "var(--p-surf2)",
        line: "var(--p-line)",
        fg: "var(--p-fg)",
        mut: "var(--p-mut)",
        acc: "var(--p-acc)",
        "acc-soft": "var(--p-acc-soft)",
        "on-acc": "var(--p-on-acc)",
        amber: "var(--p-amber)",
        ok: "var(--p-ok)",
        badge: "var(--p-badge)",
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "18px",
        "2xl2": "22px",
        card: "26px",
        panel: "30px",
        halo: "34px",
        pill: "100px",
      },
      boxShadow: {
        p: "var(--p-shadow)",
        "acc-glow": "0 14px 30px var(--p-acc-soft)",
        "acc-glow-sm": "0 8px 22px var(--p-acc-soft)",
      },
      transitionTimingFunction: {
        p: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        260: "260ms",
        320: "320ms",
        380: "380ms",
        720: "720ms",
      },
      screens: {
        // Le seul point de rupture explicite : la nav du header est masquée sous 860px.
        nav: "860px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.75)" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2s infinite",
        "floaty-1": "floaty 6s ease-in-out infinite",
        "floaty-2": "floaty 7.5s ease-in-out infinite",
        "floaty-3": "floaty 8.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
