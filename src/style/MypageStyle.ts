import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  color: var(--color-dark-gray);
  background-color: transparent;

  @media (max-width: 1000px) {
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    width: 100%;
  }
`;
export const ProfileBox = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 50%;
  border-bottom: 1px solid #fff;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;
export const ImageWrapper = styled.div`
  width: 22rem;
  height: 22rem;

  @media (max-width: 1000px) {
    align-items: center;
    margin-right: 70px;
  }
`;
export const ProfileImage = styled.div`
  background-image: url('https://ilmdovamogykbfoegyri.supabase.co/storage/v1/object/public/avatars/avatar.png');
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 30%;
  margin-top: 120px;
  margin-left: 110px;
`;

export const NicknameWrapper = styled.div`
  position: absolute;
  display: flex;
  margin-bottom: 1rem;
  height: 100px;
  right: 26.3%;
  bottom: 68%;

  @media (max-width: 1000px) {
    align-items: center;
    bottom: 42%;
    right: 41%;
  }
`;

export const UserNickname = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  transition: 0.5s;
  width: 25rem;
  padding: 0 3rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const EmailWrapper = styled.div`
  position: absolute;
  right: 26%;
  bottom: 65%;
`;
export const Email = styled.p`
  font-size: 1.7rem;
  color: #8a8e94;
  margin-bottom: 3rem;
  width: 25rem;
  padding: 0 3rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CommentTitleBox = styled.div`
  @media (max-width: 1000px) {
    align-items: center;
  }
`;
export const CommentTitle = styled.div`
  margin-top: 19px;
  margin-left: 3px;
  font-size: 22px;
`;

export const CommentWrapper = styled.div`
  background-color: green;
`;
export const Nickname = styled.div``;
export const CommentAvatarBox = styled.div``;
export const Avatar = styled.div``;
export const Comment = styled.div``;
