import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  justify-content: center;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  padding: 8px 12px;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;
export const TitleLogoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const HeaderTitleLogo = styled.a`
  width: 200px;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 180px;

  &:hover {
    cursor: pointer;
    color: #ff9d52;
  }
`;

export const ButtonWrapper = styled.nav`
  margin: 0;
  position: fixed;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  top: 0.5%;
  color: #fff;
  z-index: 20;
`;
export const LoginAndMyPageBox = styled.div`
  display: flex;
  width: 200px;
  gap: 30px;
  margin-right: 20px;
`;
export const LoginBtn = styled.div`
  all: unset;
  position: fixed;
  right: 2%;
  font-size: 20px;

  &:hover {
    color: #ff9d52;
    cursor: pointer;
  }
`;
export const LogoutBtn = styled.div`
  all: unset;
  right: 10px;
  left: 90%;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: #ff9d52;
  }
`;
export const MypageBtn = styled.div`
  all: unset;
  left: 70%;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: #ff9d52;
  }
`;
