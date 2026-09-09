import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Décalage d'entrée en secondes (stagger — 0.07 par cran dans le proto). */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Révélation au scroll : opacity 0 → 1 et translateY 20px → 0 en 720ms,
 * une seule fois, quand 12% de l'élément est visible (rootMargin -8% en bas).
 * Neutralisé si `prefers-reduced-motion: reduce`.
 */
export function Reveal({ children, delay = 0, className, style, id }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.72, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
