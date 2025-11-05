import React from "react";
import "../styles/Projects.css";
import projectsData from "../data/projects.json";
import { Section, SectionTitle, ProjectCard } from "./ui";
import { useScrollAnimationWithClass } from "../hooks";
import { Project } from "../types";
import { sortProjectsByFeatured, UI_TEXT } from "../utils";

const Projects: React.FC = () => {
  const projects: Project[] = projectsData as Project[];
  const { featured: featuredProjects, other: otherProjects } =
    sortProjectsByFeatured(projects);

  const { ref: featuredRef, animationClass: featuredAnimation } =
    useScrollAnimationWithClass("scaleIn");
  const { ref: otherRef, animationClass: otherAnimation } =
    useScrollAnimationWithClass("slideUp");

  return (
    <Section
      id="projects"
      title="Featured Projects"
      className="projects-section"
      transitionType="slide"
      transitionDirection="left"
    >
      <div
        ref={featuredRef}
        className={`featured-projects animate-stagger ${featuredAnimation}`}
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} variant="featured" />
        ))}
      </div>

      <SectionTitle level={3} className="subsection-title">
        {UI_TEXT.OTHER_PROJECTS_TITLE}
      </SectionTitle>
      <div
        ref={otherRef}
        className={`other-projects animate-stagger ${otherAnimation}`}
      >
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} variant="compact" />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
