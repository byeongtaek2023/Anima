import React, { useState, useEffect } from 'react';
import * as St from './ScrollToTopStyle';
import styled from 'styled-components';

interface ScrollToTopButtonProps {
  visible: boolean;
}

const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding: 15px;
  cursor: pointer;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  z-index: 20;
  font-size: 18px;
  font-family: 'Tenada';
  transition: 0.3s;

  &:hover {
    background-color: #2980b9;
    transition: 0.3s;
    width: 60px;
    height: 60px;
    font-size: 23px;
  }

  &::before {
    transition: 0.4s;
  }
  /* 버튼 내부에 텍스트로 화살표 표시 */
  &::after {
    font-size: 10px;
  }
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop} visible={isVisible}>
      up!
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
