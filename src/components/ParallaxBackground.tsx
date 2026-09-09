import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Deux halos décoratifs fixes derrière le contenu.
 * translate3d(0, scrollY * facteur, 0) — 0.18 et -0.10.
 * Désactivé si `prefers-reduced-motion: reduce`.
 */
export function ParallaxBackground() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, (v) => v * 0.18);
  const y2 = useTransform(scrollY, (v) => v * -0.1);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{
          y: reduced ? 0 : y1,
          background:
            "radial-gradient(circle at 40% 40%, rgba(47,134,255,0.30), transparent 68%)",
        }}
        className="absolute -top-40 -right-[140px] h-[520px] w-[520px] rounded-full blur-[12px]"
      />
      <motion.div
        style={{
          y: reduced ? 0 : y2,
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,165,36,0.11), transparent 70%)",
        }}
        className="absolute top-[640px] -left-[180px] h-[460px] w-[460px] rounded-full blur-[14px]"
      />
    </div>
  );
}
