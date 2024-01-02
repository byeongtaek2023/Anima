import styled from 'styled-components';
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 270px; /* Adjust the gap between items as needed */
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  background-color: rgba(224, 224, 224, 0.3);
  /* 반투명한 연회색 배경색 */
  color: #ffffff;
  /* 흰색 글자색 */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
