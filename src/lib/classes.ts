/** Micro-interactions partagées (équivalents Tailwind des `data-lift` / `data-card` du proto). */

/** Boutons & liens : translateY(-2px) + brightness(1.06), 260ms. */
export const LIFT =
  "transition-[transform,filter] duration-260 ease-p hover:-translate-y-[2px] hover:brightness-[1.06]";

/** Cartes : translateY(-6px) + bordure accent, 380ms. */
export const CARD_HOVER =
  "transition-[transform,border-color] duration-380 ease-p hover:-translate-y-[6px] hover:border-acc";
