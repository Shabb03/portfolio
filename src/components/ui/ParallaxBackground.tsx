import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import "../../styles/ParallaxContainer.css";

interface ParallaxBackgroundProps {
  variant?: "shapes" | "geometry" | "code-rain";
  className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  variant = "shapes",
  className = "",
}) => {
  if (variant === "code-rain") {
    return (
      <ParallaxContainer speed={0.2} direction="down" className={className}>
        <div className="code-rain" />
      </ParallaxContainer>
    );
  }

  if (variant === "geometry") {
    return (
      <div className={`parallax-bg ${className}`}>
        <ParallaxContainer speed={0.3} direction="up">
          <div
            className="parallax-geometry triangle"
            style={{ top: "15%", left: "80%" }}
          />
        </ParallaxContainer>

        <ParallaxContainer speed={0.6} direction="down">
          <div
            className="parallax-geometry circle"
            style={{ top: "60%", right: "85%" }}
          />
        </ParallaxContainer>

        <ParallaxContainer speed={0.4} direction="left">
          <div
            className="parallax-geometry square"
            style={{ top: "25%", left: "15%" }}
          />
        </ParallaxContainer>

        <ParallaxContainer speed={0.5} direction="right">
          <div
            className="parallax-geometry triangle"
            style={{ bottom: "20%", right: "20%" }}
          />
        </ParallaxContainer>
      </div>
    );
  }

  return (
    <ParallaxContainer speed={0.8} direction="up" className={className}>
      <div className="parallax-bg floating-shapes" />
    </ParallaxContainer>
  );
};

export default ParallaxBackground;
