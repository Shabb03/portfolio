import React from 'react';
import styled from 'styled-components';
import historyData from '../data/history.json';
import TimelineColumn from '../components/TimelineColumn';
import {GlitchHeading} from '../components/GlitchHeading';

const HistorySection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function History() {
  return (
    <HistorySection>
      <GlitchHeading>My Journey</GlitchHeading>
      <GridContainer>
        <TimelineColumn title="Experience" data={historyData.experience} isExperience={true} />
        <TimelineColumn title="Education" data={historyData.education} isExperience={false} />
      </GridContainer>
    </HistorySection>
  );
}

export default History; 