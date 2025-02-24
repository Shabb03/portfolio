import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {animateScroll as scroll} from 'react-scroll';

const FooterContainer = styled.footer`
  background-color: var(--surface);
  padding: 2rem;
  text-align: center;
  margin-top: auto;
  position: relative;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--primary);
  color: var(--text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

function Footer() {
  const linkedIn = "https://www.linkedin.com/in/rishab-sidhu/";
  const github = "https://github.com/shabb03";

  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: true
    });
  };

  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {currentYear} Rishabdev Sidhu. All rights reserved.
      </Copyright>
      <BackToTop visible={showButton} onClick={scrollToTop} aria-label="Back to top">
        <i className="fas fa-arrow-up"></i>
      </BackToTop>
    </FooterContainer>
  );
}

export default Footer;