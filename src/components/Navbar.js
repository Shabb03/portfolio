import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {ThemeContext} from '../context/ThemeContext';

const Nav = styled.nav`
  background-color: rgba(22, 33, 62, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--primary);
  box-shadow: 0 0 10px var(--primary),
              0 0 20px var(--primary);
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: var(--primary);
  width: ${props => props.width}%;
  transition: width 0.2s ease;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--surface);
    padding: 1rem;
  }
`;

const NavItem = styled(Link)`
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;

  &:hover {
    color: var(--primary); 
    text-shadow: 0 0 5px var(--primary),
                 0 0 10px var(--primary);
  }

  &.active {
    color: var(--primary);
    &::after {
      content: '';
      position: absolute; 
      bottom: 0; 
      left: 0;
      width: 100%; 
      height: 2px; 
      background: var(--primary);
      box-shadow: 0 0 5px var(--primary),
                  0 0 10px var(--primary);
  }
`;

const ColorButton = styled.button` 
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  cursor: pointer;
  background-color: ${props => props.color};
  transition: all 0.3s ease;
  box-shadow: 0 0 5px ${props => props.color};

  &:hover {
    box-shadow: 0 0 10px ${props => props.color},
                0 0 20px ${props => props.color};
    transform: scale(1.1);
  }
`;

const ThemeSelector = styled.div` 
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const themeColors = {
    pink: '#ff006c',
    blue: '#00f6ff',
    green: '#39ff14'
  };

  useEffect(()=> {
    const calculateScrollProgress = () => { 
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "history", label: "History" }, 
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "accomplishments", label: "Accomplishments" }, 
    { to: "hobbies", label: "Hobbies" }
  ];

  return ( 
    <Nav> 
      <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton> 
      <NavList isOpen={isOpen}> 
        {navItems.map((item) => (
          <li key={item.to}>
            <NavItem 
              to={item.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              easing="easeInOutQuad"
              delay={0}
              isDynamic={true}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavItem>
          </li>
        ))} 
        <ThemeSelector>
          {Object.entries(themeColors).map(([colorName, colorValue]) => (
            <ColorButton
              key={colorName}
              color={colorValue}
              onClick={() => toggleTheme(colorName)}
              style={{outline: theme === colorName ? '2px solid white' : 'none' }}
            />
          ))}
        </ThemeSelector>
      </NavList>
      <ProgressContainer>
        <ProgressBar width={scrollProgress} />
      </ProgressContainer>
    </Nav> 
  );
}

export default Navbar;