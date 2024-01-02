import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  padding: 10px;
  width: 45rem;
  height: 10rem;
  position: relative;
  align-items: center;
  border: 1px solid #ff683b;
  border-radius: 20px;
  gap: 20px;
  margin-top: 60px;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  right: 1000px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 25px;
  }
`;

export const UserIcon = styled.div`
  background-image: url('https://cdn-icons-png.flaticon.com/512/3177/3177440.png');
  width: 50px;
  height: 50px;
  background-size: cover;
  object-fit: cover;
  margin-bottom: 60px;
  margin-left: 40px;
`;

export const UserId = styled.p`
  font-size: 30px;

  font-family: 'ONE-Mobile-Title';
`;

export const Date = styled.span`
  font-size: 16px;
  margin-left: 20px;
  margin-top: 0px;
  font-family: 'ONE-Mobile-Title';
`;
export const CommentWrapper = styled.div`
  margin-top: 14px;
`;
export const UserComment = styled.span`
  font-family: 'ONE-Mobile-Title';
  font-size: 17px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 43px;
  gap: 10px;
`;
export const EditButton = styled.button`
  all: unset;
  font-size: 16px;
  font-family: 'ONE-Mobile-Title';

  &:hover {
    color: #ff683b;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  all: unset;
  font-size: 16px;
  font-family: 'ONE-Mobile-Title';
  &:hover {
    color: #ff683b;
    cursor: pointer;
  }
`;

export const EditingWrapper = styled.div`
  margin-left: 80px;
  padding: 10px;

  margin-top: 100px;
`;
export const SaveAndCancelBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
export const EditInput = styled.input`
  all: unset;
  border-bottom: 2px solid #5199f0;
  width: 30rem;
  height: 3rem;
  font-size: 16px;
  align-items: center;
`;
export const SaveButton = styled.button`
  all: unset;
  font-family: 'ONE-Mobile-Title';
`;
export const CancelButton = styled.button`
  all: unset;
  font-family: 'ONE-Mobile-Title';
`;
