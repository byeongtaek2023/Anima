import styled from 'styled-components';

export const RenderWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  h1 {
    font-size: 34px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
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

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;

// export const ItemListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   overflow: hidden; /* Hide overflowing content */
// `;

// export const ItemContainer = styled.div`
//   margin-right: 10px;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   transition: margin-left 0.3s ease; /* Add smooth transition for margin-left */
// `;


// export const LeftButton = styled.button`
//   cursor: pointer;
//   position: absolute;
//   left: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 2; /* Bring button above the images */
// `;
// export const RightButton = styled.button`
//   cursor: pointer;
//   position: absolute;
//   right: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 2; /* Bring button above the images */
// `;
// ====================================





export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden; /* Hide overflowing content */
`;

export const ItemContainer = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: margin-left 0.3s ease; /* Add smooth transition for margin-left */
  box-sizing: border-box;
  width: 300px; /* Set a fixed width for the container */
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover; /* Ensure images maintain aspect ratio */
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
  z-index: 2; /* Bring button above the images */
`;

export const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2; /* Bring button above the images */
`;

