import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 스타일 정의
// Modal.style.js


export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

background-color: #222;
padding: 20px;
width: 100vh;
height: 90vh;
overflow-y: auto;
&::-webkit-scrollbar {
  display: none;
}
border: 1px solid #ff683b;
p {
    font-size: 14px;
    color : white;
    @media (min-width: 300px) {
      font-size: 6px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const ModalImage = styled.img`

  max-width: 100%;
  height: 70vh;
  border-radius: 4px;
  z-index: 1002; // 모달보다 2 높은 값으로 설정
`;

export const ModalClose = styled.span`

color: #ff683b;
float: right;
font-size: 28px;
font-weight: bold;
cursor: pointer;
&:hover,
&:focus {
  color: #ff683b;
  text-decoration: none;
}`

export const X = styled.div`
display:flex;

`