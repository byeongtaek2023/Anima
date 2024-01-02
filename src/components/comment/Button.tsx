import React from 'react';
import styled from 'styled-components';

interface Porps {
  text: string;
}

const Button = ({ text }: Porps) => {
  return <Buttons>{text}</Buttons>;
};

export default Button;

const Buttons = styled.button`
  border: none;
  color: #fff;
  background-color: transparent;
  padding: 0.5rem;
  font-size: 16px;
  font-family: 'ONE-Mobile-Title';

  &:hover {
    cursor: pointer;
    color: #ff683b;
  }
`;
