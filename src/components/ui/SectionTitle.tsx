import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  level?: 2 | 3;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  level = 2,
  className = "section-title",
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
};

export default SectionTitle;
