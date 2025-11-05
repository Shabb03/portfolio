import React from "react";

interface TechTagsProps {
  technologies: string[];
  className?: string;
}

const TechTags: React.FC<TechTagsProps> = ({
  technologies,
  className = "project-technologies",
}) => {
  return (
    <div className={className}>
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechTags;
