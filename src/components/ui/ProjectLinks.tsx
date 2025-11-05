import React from "react";

interface ProjectLinksProps {
  codeUrl: string;
  className?: string;
  linkClassName?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  codeUrl,
  className = "project-links",
  linkClassName = "project-link",
}) => {
  return (
    <div className={className}>
      <a
        href={codeUrl}
        className={linkClassName}
        aria-label="View on GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="link-icon" aria-hidden="true">
          💻
        </span>
        <span className="link-text">Code</span>
      </a>
    </div>
  );
};

export default ProjectLinks;
