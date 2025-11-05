export const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};

export const ANIMATION_CONFIG = {
  SCROLL_DURATION: 800,
  SCROLL_TO_TOP_DURATION: 700,
  NAVBAR_HEIGHT: 70,
  SCROLL_OFFSET: 100,
} as const;
