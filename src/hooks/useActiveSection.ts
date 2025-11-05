import { useState, useEffect } from "react";
import {
  NAVIGATION_SECTIONS,
  type NavigationSection,
} from "../utils/constants";
import { ANIMATION_CONFIG } from "../utils/animations";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<NavigationSection>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + ANIMATION_CONFIG.SCROLL_OFFSET;

      for (const sectionId of NAVIGATION_SECTIONS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
