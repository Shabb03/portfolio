import React from "react";
import "../styles/Experience.css";
import historyData from "../data/history.json";
import { Section, AnimatedTimelineItem } from "./ui";
import { TimelineItem } from "../types";

const Experience: React.FC = () => {
  const timelineData: TimelineItem[] =
    historyData.timelineData as TimelineItem[];

  return (
    <Section
      id="experience"
      title="Experience & Education"
      className="experience-section"
      transitionType="slide"
      transitionDirection="up"
    >
      <div className="timeline">
        {timelineData.map((item, index) => (
          <AnimatedTimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
