import styled, { keyframes } from 'styled-components';

export const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  @media (min-width: 300px) {
    height: 40vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
`;

export const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1) translateX(-1rem) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0) rotate(0);
  }
`;

export const SlideshowImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 30%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(1.1) translateX(-1rem) rotate(-5deg);
  transition: all 0.5s ease-in-out;

  &.active {
    z-index: 1;
    opacity: 1;
    transform: scale(1) translateX(0) rotate(0);
    animation: ${fadeInOut} 0.5s ease-in-out;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;
