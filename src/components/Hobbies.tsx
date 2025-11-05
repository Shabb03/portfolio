import React from "react";
import "../styles/Hobbies.css";
import hobbiesData from "../data/hobbies.json";
import { Section, AnimatedGrid } from "./ui";
import { Hobby } from "../types";

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = hobbiesData.hobbies as Hobby[];

  return (
    <Section
      id="hobbies"
      title="Hobbies & Interests"
      className="hobbies-section"
      transitionType="slide"
      transitionDirection="right"
    >
      <AnimatedGrid className="hobbies-grid" animationType="scaleIn">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon" aria-hidden="true">
              {hobby.icon}
            </div>
            <h3 className="hobby-name">{hobby.name}</h3>
          </div>
        ))}
      </AnimatedGrid>
    </Section>
  );
};

export default Hobbies;
