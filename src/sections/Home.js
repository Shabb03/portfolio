import React from 'react';
import styled from 'styled-components';
import defaultAvatar from '../assets/default-avatar.png';
import { GlitchText } from '../components/GlitchText';

const HomeSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: item;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Summary = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 2rem;
  }
`;

const ProfileImage = styled.img` 
  width: 300px; 
  height: 300px; 
  border-radius: 50%; 
  object-fit: cover; 
  border: 4px solid var(--primary); 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

function Home() {
  const name = "Rishab Sidhu"; 
  const summary = `I am a Computer Science graduate from DCU with a 1.1 Honours degree. 
      Spent 6 months in industry working at Irish Life, where I gained hands-on experience working on projects in a professional agile environment. 
      Through this experience, I developed strong technical skills in software development in an organisation, enhanced my academic skills, and improved my problem-solving and project management abilities. 
      Academically developed skills in the use of full-stack development, academic research, and software design principles through completing various projects in groups and independently. 
      Strong communication and teamwork skills from working in various environments across retail, government and engineering sector.`;

  const profileImage = null;

  return (
    <HomeSection> 
      <ContentArea>
        <Title>
          Hi, I'm <GlitchText>{name}</GlitchText>
        </Title>
        <Summary>{summary}</Summary>
      </ContentArea> 
      <ImageArea> 
        <ProfileImage 
          src={profileImage || defaultAvatar}
          alt={`${name}'s profile`}
        /> 
      </ImageArea>
    </HomeSection>
  );
}

export default Home;