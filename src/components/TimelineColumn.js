import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  background-color: var(--surface);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ColumnTitle = styled.h3`
  color: var(--primary);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const TimelineItem = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--primary);
    opacity: 0.3;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const DateRange = styled.p`
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Institution = styled.h4`
  color: var(--text);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h5`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const PointsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Point = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;

  &:before {
    content: '';
    color: var(--primary);
    position: absolute;
    left: 0;
  }
`;

const TimelineColumn = ({ title, data, isExperience }) => {
  return (
    <Column>
      <ColumnTitle>{title}</ColumnTitle>
      {data.map((item) => (
        <TimelineItem key={item.id}>
          <DateRange>{item.startDate} - {item.endDate}</DateRange>
          <Institution>{isExperience ? item.company : item.school}</Institution>
          <Subtitle>{isExperience ? item.title : item.degree}</Subtitle>
          <PointsList>
            {item.points.map((point, index) => (
              <Point key={index}>{point}</Point>
            ))}
          </PointsList>
        </TimelineItem>
      ))}
    </Column>
  );
};

export default TimelineColumn;