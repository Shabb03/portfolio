import React from 'react';
import SlideSection from '../components/SlideSection';
import hobbiesData from '../data/hobbies.json';

function Hobbies() {
  return (
    <SlideSection
      title="Hobbies"
      items={hobbiesData.hobbies}
    />
  );
}

export default Hobbies;