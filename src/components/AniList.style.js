import styled from 'styled-components';

export const RenderWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  
  h1 {
    font-size: 24px;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 30px;  
    }

    @media (min-width: 1024px) {
      font-size: 38px;  
    }
  }

  p {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px;  
    }

    @media (min-width: 1024px) {
      font-size: 18px;  
    }
  }
`;


export const renderWarpList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderWarpList2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderWarpList3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;

export const ItemContainer = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: margin-left 0.3s ease; 
  box-sizing: border-box;
  width: 300px;
`;

export const Image = styled.img`
  max-width: 100%; 
  height: auto; 

  @media (min-width: 768px) {
   
    max-width: 90%; 
  }

  @media (min-width: 1024px) {

    max-width:80%; 
  }
`;

export const Caption = styled.p`
  margin-top: 5px;
`;

export const LeftButton = styled.button`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2; 
`;

export const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2; 
`;
