import React, { useRef, useEffect } from "react";
import "../../styles/ParallaxContainer.css";

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isActive = true;

    const updateParallax = () => {
      if (!parallaxRef.current || !isActive) return;

      const scrollY = window.scrollY;
      const rect = parallaxRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const viewportProgress =
          (scrollY - elementTop + windowHeight) /
          (windowHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, viewportProgress));

        const maxOffset = 100 * speed;
        const offset = (clampedProgress - 0.5) * maxOffset;

        let transform = "";
        switch (direction) {
          case "up":
            transform = `translateY(${-offset}px)`;
            break;
          case "down":
            transform = `translateY(${offset}px)`;
            break;
          case "left":
            transform = `translateX(${-offset}px)`;
            break;
          case "right":
            transform = `translateX(${offset}px)`;
            break;
        }

        parallaxRef.current.style.transform = transform;
      }
    };

    const tick = () => {
      updateParallax();
      if (isActive) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, direction]);

  return (
    <div ref={parallaxRef} className={`parallax-container ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
