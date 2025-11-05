import React from "react";
import "../styles/Skills.css";
import skillsData from "../data/skills.json";
import { Section, AnimatedGrid, ParallaxBackground } from "./ui";
import { SkillCategory } from "../types";

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      className="skills-section"
      transitionType="scale"
    >
      <ParallaxBackground variant="shapes" />
      <AnimatedGrid className="skills-grid" animationType="slideUp">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  <span className="skill-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </AnimatedGrid>
    </Section>
  );
};

export default Skills;
