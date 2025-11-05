import React from "react";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import SectionTransitions from "./SectionTransitions";

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  transitionType?: "slide" | "fade" | "scale" | "morph";
  transitionDirection?: "up" | "down" | "left" | "right";
  showDivider?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  className,
  children,
  transitionType = "slide",
  transitionDirection = "up",
  showDivider = true,
}) => {
  return (
    <>
      {showDivider && id !== "home" && <SectionTransitions variant="divider" />}
      <section id={id} className={className}>
        <SectionTransitions
          variant={transitionType}
          direction={transitionDirection}
        />
        <SectionContainer>
          <SectionTitle>{title}</SectionTitle>
          {children}
        </SectionContainer>
      </section>
    </>
  );
};

export default Section;
