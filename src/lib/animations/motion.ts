/**
 * Shared animation tokens. Keep timing, easing and selectors here so every
 * animation in the project feels consistent.
 */
export const EASE = {
  out: "power3.out",
  inOut: "power3.inOut",
} as const;

export const DURATION = {
  base: 0.9,
  image: 1.2,
  hero: 1.6,
  count: 1.6,
} as const;

/** Data attributes that opt an element into an animation. */
export const SELECTORS = {
  heroImage: "[data-hero-image]",
  heroCurtain: "[data-hero-curtain]",
  heroItem: "[data-hero-item]",
  reveal: "[data-reveal]",
  imageReveal: "[data-image-reveal]",
  parallax: "[data-parallax]",
  countTo: "[data-count-to]",
  showcasePanel: "[data-showcase-panel]",
  showcaseImage: "[data-showcase-image]",
  showcaseText: "[data-showcase-text]",
  showcaseProgress: "[data-showcase-progress]",
} as const;

/** Pinned showcase tuning. */
export const SHOWCASE = {
  /** How many viewport heights the pin lasts. Keep this short. */
  scrollScreens: 2.2,
  /** Relative scroll length of each state (arbitrary timeline units). */
  hold: 1,
  /** Relative length of the transition between two states. */
  swap: 0.4,
} as const;

/** Media queries used with gsap.matchMedia(). */
export const MEDIA = {
  /**
   * gsap.matchMedia() only runs its callback when at least ONE condition
   * matches. "all" always matches, so animations also run on small screens.
   */
  always: "all",
  isDesktop: "(min-width: 768px)",
  /** Pinned showcase only runs at this width and up. */
  isWide: "(min-width: 1024px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export interface MotionOptions {
  isDesktop: boolean;
}