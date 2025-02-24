import React from 'react';
import styled from 'styled-components';
import skillsData from '../data/skills.json';
import {GlitchHeading} from '../components/GlitchHeading';

const SkillsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled.div`
  background-color: rgba(22, 33, 62, 0.8);
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px var(--primary),
                0 0 20px var(--primary);
    
    i {
      color: var(--primary);
      text-shadow: 0 0 5px var(--primary),
                   0 0 10px var(--primary);
    }

    &::before {
      transform: translateX(100%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: transform 0.5s ease;
  }
`;

const SkillIcon = styled.i`
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const SkillName = styled.h3`
  color: var(--text);
  font-size: 1.2rem;
  margin: 0;
`;

const SkillsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Skills() {
  return (
    <SkillsSection>
      <GlitchHeading>Skills & Technologies</GlitchHeading>
        <SkillsContainer>
          <SkillsGrid>
            {skillsData.skills.map((skill) => (
              <SkillCard key={skill.id}>
                <SkillIcon className={skill.icon} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;