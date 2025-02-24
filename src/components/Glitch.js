import { keyframes } from 'styled-components';

export const glitch = keyframes`
  0% {
    clip-path: inset(71% 0 10% 0);
    transform: translate(-2px, 2px);
  }
  10% {
    clip-path: inset(29% 0 54% 0);
    transform: translate(2px, -2px);
  }
  20% {
    clip-path: inset(83% 0 4% 0);
    transform: translate(1px, 2px);
  }
  30% {
    clip-path: inset(23% 0 67% 0);
    transform: translate(-1px, 1px);
  }
  40% {
    clip-path: inset(89% 0 4% 0);
    transform: translate(2px, -2px);
  }
  50% {
    clip-path: inset(37% 0 52% 0);
    transform: translate(-2px, 1px);
  }
  60% {
    clip-path: inset(66% 0 14% 0);
    transform: translate(2px,-1px);
  }
  70% {
    clip-path: inset(43% 0 37% 0);
    transform: translate(-2px, 2px);
  }
  80% {
    clip-path: inset(92% 0 4% 0);
    transform: translate(2px, -2px);
  }
  90% {
    clip-path: inset(11% 0 79% 0); 
    transform: translate(1px, -1px);
  }
  100% {
    clip-path: inset(31% 0 58% 0); 
    transform: translate(-2px, 2px);
  }
`;