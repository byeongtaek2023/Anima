import React, { useEffect, useState } from 'react';
import * as St from '../header/HeaderStyle';
import { useNavigate } from 'react-router-dom';
import { getUserSession, handleLogout } from 'api/supabase/supabase';

const Header = () => {
  const [Islogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 라우터 이동 핸들러
  const handleNavigateAndReload = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const result = sessionStorage.getItem('user');
        setIsLogin(!!result);
      } catch (error) {
        console.error('유저 세션 확인 중 문제가 발생했습니다.', error);
      }
    };

    checkUserSession();
  }, []);

  // 세션 스토리지에서 사용자 정보 가져오는 로직
  const getStoreUser = () => {
    const storeUser = sessionStorage.getItem('user');
    return storeUser ? JSON.parse(storeUser) : null;
  };

  return (
    <>
      <St.HeaderWrapper>
        <St.ButtonWrapper>
          <St.TitleLogoWrapper>
            <St.HeaderTitleLogo
              onClick={() => {
                handleNavigateAndReload('/home');
              }}
            >
              anima
            </St.HeaderTitleLogo>
          </St.TitleLogoWrapper>

          <St.LoginAndMyPageBox>
            {Islogin ? (
              <>
                <St.LogoutBtn
                  onClick={() => {
                    handleLogout();
                    setIsLogin(false);
                  }}
                >
                  Logout
                </St.LogoutBtn>
                <St.MypageBtn
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  Mypage
                </St.MypageBtn>
              </>
            ) : (
              <St.LoginBtn
                onClick={() => {
                  handleNavigateAndReload('/login');
                }}
              >
                Login
              </St.LoginBtn>
            )}
          </St.LoginAndMyPageBox>
        </St.ButtonWrapper>
      </St.HeaderWrapper>
    </>
  );
};

export default Header;
