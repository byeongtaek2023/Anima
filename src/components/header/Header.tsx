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

  //헤더 색상 변경
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // 스크롤 이벤트에 핸들러 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <St.HeaderWrapper style={{ backgroundColor: scrollPosition > 0 ? 'black' : 'transparent' }}>
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
