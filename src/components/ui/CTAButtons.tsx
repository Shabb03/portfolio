import React from "react";
import { useScrollTo } from "../../hooks";
import { UI_TEXT } from "../../utils";

interface CTAButtonsProps {
  className?: string;
  primaryText?: string;
  secondaryText?: string;
  primaryTarget?: string;
  secondaryTarget?: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = React.memo(
  ({
    className,
    primaryText = UI_TEXT.VIEW_PROJECTS,
    secondaryText = UI_TEXT.MY_JOURNEY,
    primaryTarget = "projects",
    secondaryTarget = "experience",
  }) => {
    const { scrollToSection } = useScrollTo();

    return (
      <div className={`hero-actions ${className || ""}`}>
        <button
          className="cta-button primary"
          onClick={() => scrollToSection(primaryTarget)}
        >
          {primaryText}
        </button>
        <button
          className="cta-button secondary"
          onClick={() => scrollToSection(secondaryTarget)}
        >
          {secondaryText}
        </button>
      </div>
    );
  }
);

export default CTAButtons;
