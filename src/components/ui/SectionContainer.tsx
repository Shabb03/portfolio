import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = "section-container",
}) => {
  return <div className={className}>{children}</div>;
};

export default SectionContainer;
