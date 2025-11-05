import React from "react";
import "../styles/Accomplishments.css";
import accomplishmentsData from "../data/accomplishments.json";
import { Section, AnimatedGrid } from "./ui";
import { Accomplishment } from "../types";

const Accomplishments: React.FC = () => {
  const accomplishments: Accomplishment[] =
    accomplishmentsData.accomplishments as Accomplishment[];

  return (
    <Section
      id="accomplishments"
      title="Accomplishments"
      className="accomplishments-section"
      transitionType="fade"
    >
      <AnimatedGrid className="accomplishments-grid" animationType="slideUp">
        {accomplishments.map((item, index) => (
          <div key={index} className="accomplishment-card">
            <div className="accomplishment-header">
              <div className="accomplishment-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="accomplishment-meta">
                <h3 className="accomplishment-title">{item.title}</h3>
                <h4 className="accomplishment-organization">
                  {item.organization}
                </h4>
                <span className="accomplishment-date">{item.date}</span>
              </div>
            </div>
            <p className="accomplishment-description">{item.description}</p>
          </div>
        ))}
      </AnimatedGrid>
    </Section>
  );
};

export default Accomplishments;
