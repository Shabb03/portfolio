import React, { useState } from 'react';
import styled from 'styled-components';
import {GlitchHeading} from '../components/GlitchHeading';

const Section = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  height: 0;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
`;

const SlideTitle = styled.h3`
  color: var(--text);
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  transform: translateY(-50%);
  width: 90%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 2;
`;

const NavButton = styled.button` 
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--text);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    background-color: var(--primary);
    transform: scale(1.1);
  }
`;

const DotsContainer = styled.div`
  display: flex; 
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;
  
const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => active ? 'var(--primary)' : 'var(--text-secondary)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
  }
`;

const Counter = styled.div` 
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--text);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const SlideSection = ({ title, items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide ((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide ((prev) => (prev - 1 + items.length) % items.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide (index);
  };

  if (!items || items.length === 0) {
    return (
      <Section>
        <GlitchHeading>{title}</GlitchHeading>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          No slides available.
        </p>
      </Section>
    );
  };  
  
  return (
    <Section>
      <GlitchHeading>{title}</GlitchHeading>
      <SlideContainer>
        <Slide>
          <SlideImage
            src={items[currentSlide].image}
            alt={items[currentSlide].title}
          />
          <SlideOverlay>
            <SlideTitle>{items[currentSlide].title}</SlideTitle>
          </SlideOverlay>
        </Slide>
        <NavigationButtons>
          <NavButton onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </NavButton>
          <NavButton onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </NavButton>
        </NavigationButtons>
        <Counter>
          {currentSlide + 1}/{items.length}
        </Counter>
      </SlideContainer> 
      <DotsContainer>
        {items.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </Section>
  );
};

export default SlideSection;