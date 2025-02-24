import React from 'react';
import styled from 'styled-components';
import { glitch } from './Glitch';
    
const GlitchContainer = styled.div`
  position: relative;
  display: inline-block;
  color: var(--primary);
  text-shadow: 0 0 5px var(--primary);

  &:hover {
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0; 
      left: 0; 
      width: 100%;
      height: 100%;
      background: var(--background);
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 var(--primary);
      animation: ${glitch} 0.4s linear infinite;
      background: var(--background);
      clip-path: inset(0);
    }
    
    &::after {
      left: 2px;
      text-shadow: 2px 0 var(--secondary);
      animation: ${glitch} 0.4s linear infinite reverse;
      background: var(--background);
      clip-path: inset(0);
    }
  }
`;

export const GlitchText = ({children}) => (
  <GlitchContainer data-text={children}>
    {children}
  </GlitchContainer> 
);