import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  z-index: 100;
  height: 80px;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;
export const TitleLogoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
`;

export const HeaderTitleLogo = styled.a`
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 180px;
  font-family: 'Giants-Bold';
  color: #5199f0;

  &:hover {
    cursor: pointer;
    color: #427abd;
  }
`;
export const Slash = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  font-family: 'Giants-Bold';
  color: #fff;
`;
export const HeaderOstLogo = styled.a`
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: 'Giants-Bold';
  &:hover {
    cursor: pointer;
    color: #ff6e30;
  }
`;

export const ButtonWrapper = styled.nav`
  margin: 0;
  position: fixed;
  background-color: #000;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
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
  top: 3.4%;
  font-size: 20px;
  font-family: 'Giants-Bold';

  &:hover {
    color: #5199f0;
    cursor: pointer;
  }
`;
export const LogoutBtn = styled.div`
  all: unset;
  right: 10px;
  left: 90%;
  font-size: 19px;
  font-family: 'Giants-Bold';
  &:hover {
    cursor: pointer;
    color: #5199f0;
  }
`;
export const MypageBtn = styled.div`
  all: unset;
  left: 70%;
  font-size: 18px;
  font-family: 'TAEBAEKfont';
  &:hover {
    cursor: pointer;
    color: #5199f0;
  }
`;
