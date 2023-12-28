import React from 'react';
import styled from 'styled-components';

const Comment = () => {
  return (
    <div>
      <ul>
        <Comments>
          <UserIcon>
            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" width={40} height={40} alt="" />
          </UserIcon>
          <UserWrapper style={{ display: 'flex' }}>
            <UserInfo>
              <UserId>임시</UserId>
              <Date>2023.12.27</Date>
            </UserInfo>
            <CommentWrapper>
              <UserComment>와랄랄라</UserComment>
            </CommentWrapper>
          </UserWrapper>
        </Comments>
      </ul>
    </div>
  );
};

export default Comment;

const Comments = styled.li`
  display: flex;
`;
const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserIcon = styled.div``;
const UserId = styled.p``;
const Date = styled.p`
  font-size: 0.813rem;
  margin-left: 0.125rem;
`;
const CommentWrapper = styled.div`
  margin-top: 0.5rem;
`;
const UserComment = styled.span``;
