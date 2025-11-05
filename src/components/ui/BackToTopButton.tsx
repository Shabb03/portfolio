import React from "react";
import { useScrollTo } from "../../hooks";
import { UI_TEXT } from "../../utils";

interface BackToTopButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  className = "back-to-top",
  children = "↑",
}) => {
  const { scrollToTop } = useScrollTo();

  return (
    <button
      className={className}
      onClick={scrollToTop}
      aria-label={UI_TEXT.BACK_TO_TOP}
    >
      {children}
    </button>
  );
};

export default BackToTopButton;
