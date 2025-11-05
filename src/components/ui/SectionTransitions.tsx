import React, { useRef, useEffect } from "react";
import "../../styles/SectionTransitions.css";

interface SectionTransitionsProps {
  variant?: "slide" | "fade" | "scale" | "morph" | "divider";
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const SectionTransitions: React.FC<SectionTransitionsProps> = ({
  variant = "slide",
  direction = "up",
  className = "",
}) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (transitionRef.current) {
      observer.observe(transitionRef.current);
    }

    return () => {
      if (transitionRef.current) {
        observer.unobserve(transitionRef.current);
      }
    };
  }, []);

  const getTransitionClass = () => {
    const base = `section-transition transition-${variant}`;
    if (variant === "slide") {
      return `${base} slide-${direction}`;
    }
    return base;
  };

  if (variant === "divider") {
    return (
      <div className={`section-divider ${className}`}>
        <div className="divider-line">
          <div className="divider-glow"></div>
        </div>
        <div className="divider-particles">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="divider-particle"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={transitionRef} className={`${getTransitionClass()} ${className}`}>
      {variant === "morph" && (
        <div className="morph-background">
          <div className="morph-shape morph-1"></div>
          <div className="morph-shape morph-2"></div>
          <div className="morph-shape morph-3"></div>
        </div>
      )}
    </div>
  );
};

export default SectionTransitions;
