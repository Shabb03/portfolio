import React from "react";
import { useScrollAnimation } from "../../hooks";
import { TimelineItem } from "../../types";
import { ANIMATION_DELAYS } from "../../utils";

interface AnimatedTimelineItemProps {
  item: TimelineItem;
  index: number;
  className?: string;
}

const AnimatedTimelineItem: React.FC<AnimatedTimelineItemProps> = React.memo(
  ({ item, index, className }) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
    const isEven = index % 2 === 0;
    const animationClass = isVisible
      ? isEven
        ? "animate-slideRight"
        : "animate-slideLeft"
      : isEven
      ? "animate-slideRight-hidden"
      : "animate-slideLeft-hidden";

    return (
      <div
        ref={ref}
        className={`timeline-item ${item.type} ${animationClass} ${
          className || ""
        }`}
        style={{
          transitionDelay: `${index * ANIMATION_DELAYS.TIMELINE_STAGGER}s`,
        }}
      >
        <div className="timeline-content">
          <div className={`type-badge ${item.type}`}>{item.type}</div>
          <div className="timeline-header">
            <h3 className="timeline-title">{item.title}</h3>
            <h4 className="timeline-company">{item.company}</h4>
            <span className="timeline-year">{item.year}</span>
          </div>
          <ul className="timeline-description">
            {item.description.map((point, pointIndex) => (
              <li key={pointIndex} className="timeline-point">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="timeline-marker"></div>
      </div>
    );
  }
);

export default AnimatedTimelineItem;
