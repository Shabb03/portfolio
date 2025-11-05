import React, { ReactNode } from "react";
import { useScrollAnimationWithClass, AnimationType } from "../../hooks";

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  enableStagger?: boolean;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = React.memo(
  ({
    children,
    className = "",
    animationType = "slideUp",
    enableStagger = true,
  }) => {
    const { ref, animationClass } = useScrollAnimationWithClass(animationType);

    const gridClasses = [
      className,
      enableStagger && "animate-stagger",
      animationClass,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={gridClasses}>
        {children}
      </div>
    );
  }
);

AnimatedGrid.displayName = "AnimatedGrid";

export default AnimatedGrid;
