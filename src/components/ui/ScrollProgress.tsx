import React, { useRef, useEffect } from "react";
import "../../styles/ScrollProgress.css";

const ScrollProgress: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isActive = true;

    const updateScrollProgress = () => {
      if (!progressBarRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const clampedProgress = Math.min(Math.max(progress, 0), 100);
      progressBarRef.current.style.width = `${clampedProgress}%`;
    };

    const tick = () => {
      updateScrollProgress();

      if (isActive) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
        style={{ width: "0%" }}
      />
    </div>
  );
};

export default ScrollProgress;
