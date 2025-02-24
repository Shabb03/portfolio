import React from 'react';
import styled from 'styled-components';
import { glitch } from '../components/Glitch';
import projectsData from '../data/projects.json';
import {GlitchHeading} from '../components/GlitchHeading';
import defaultImage from '../assets/default-avatar.png'; 

const ProjectsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a`
  background-color: rgba(22, 33, 62, 0.8);
  border: 1px solid var(--primary);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  height: 100%;
  position: relative;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 0, 108, 0.2);
      animation: ${glitch} 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
    }
  }

  &::before {
    content: "';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      transparent 0%,
      rgba(255, 0, 108, 0.1) 50%,
      transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectName = styled.h3`
  color: var(--text);
  font-size: 1.2rem;
  margin: 0;
  transition: all 0.3s ease;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

function Projects() {
  return (
    <ProjectsSection>
      <GlitchHeading>My Projects</GlitchHeading>
        <ProjectsGrid>
          {projectsData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
            <ProjectImage>
              <img
                src={`${project.image}`}
                alt={project.name}
                onError={(e) => {
                  e.target.src = defaultImage;
                }}
              />
            </ProjectImage>
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;