import styled from 'styled-components';
const ItemContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 

  &:last-child {
    margin-bottom: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 270px; /* Adjust the gap between items as needed */
`;

export { ItemContainer, GridContainer };
