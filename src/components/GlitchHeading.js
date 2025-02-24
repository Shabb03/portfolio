import styled, {keyframes} from 'styled-components'

const glitchAnim = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const StyledHeading = styled.h2`
  position: relative;
  text-align: center;
  color: var(--text);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 4px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.8;
  }

  &::before {
    color: var(--primary);
    animation: ${glitchAnim} 0.4s cubic-bezier(.25, .46, .45, .94) both infinite;
    animation-delay: 0.1s;
  }

  &::after {
    color: var(--secondary);
    animation: ${glitchAnim} 0.4s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
    animation-delay: 0.2s; 
  }
`;

export const GlitchHeading = ({children}) => (
    <StyledHeading data-text={children}>
        {children}
    </StyledHeading>
);