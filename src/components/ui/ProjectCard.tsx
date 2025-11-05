import React from "react";
import { Project } from "../../types";
import ProjectLinks from "./ProjectLinks";
import TechTags from "./TechTags";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
  titleTag?: "h3" | "h4";
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({
    project,
    variant = "compact",
    titleTag: TitleTag = variant === "featured" ? "h3" : "h4",
  }) => {
    const cardClass = `project-card ${
      variant === "featured" ? "featured" : "compact"
    }`;

    return (
      <div className={cardClass}>
        <div className="project-header">
          <TitleTag className="project-title">{project.title}</TitleTag>
          <ProjectLinks codeUrl={project.codeUrl} />
        </div>
        <p className="project-description">{project.description}</p>
        <TechTags technologies={project.technologies} />
      </div>
    );
  }
);

export default ProjectCard;
