import { useCallback } from "react";
import { easeInOutQuart, ANIMATION_CONFIG } from "../utils/animations";

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.offsetTop - ANIMATION_CONFIG.NAVBAR_HEIGHT;

      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = ANIMATION_CONFIG.SCROLL_DURATION;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }, []);

  const scrollToTop = useCallback((): void => {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const duration = ANIMATION_CONFIG.SCROLL_TO_TOP_DURATION;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return { scrollToSection, scrollToTop };
};
