import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 스타일 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: #222;
  padding: 20px;
  width: 100vh;
  height: 70vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid #ff683b;
`;

const ModalClose = styled.span`
  color: #ff683b;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ff683b;
    text-decoration: none;
  }
`;

const Image = styled.img`
  cursor: pointer;
`;
export {ModalClose, ModalContent, ModalOverlay,Image };
