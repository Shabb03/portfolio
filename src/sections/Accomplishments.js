import React from 'react';
import SlideSection from '../components/SlideSection';
import accomplishmentsData from '../data/accomplishments.json';

function Accomplishments() {
  return (
    <SlideSection
      title="Accomplishments"
      items={accomplishmentsData.accomplishments}
    />
  );
}

export default Accomplishments;