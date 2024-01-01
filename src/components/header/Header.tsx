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

  // 마운트 되었을 때 로그인 상태 true
  // useEffect(() => {
  //   getUserSession().then((result) => {
  //     // 유저정보 있으면 true
  //     // 없으면 false
  //     if (result) {
  //       console.log(result);
  //       setIsLogin(true);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const result = sessionStorage.getItem('user');
        setIsLogin(!!result);
      } catch (error) {
        console.error('유저 세션를 확인하는데에 문제가 발생했습니다.', error);
      }
    };

    checkUserSession();
  }, []);

  // 세션 스토리지에서 사용자 정보 가져오는 로직
  const getStoreUser = () => {
    const storeUser = sessionStorage.getItem('user');
    return storeUser ? JSON.parse(storeUser) : null;
  };

  // // 로그아웃 될 때 유저 정보 지우기
  // const clearUserSession = () => {
  //   sessionStorage.removeItem('user');
  // };

  return (
    <>
      {/* 헤더와 푸터 CSS 작업은 LayoutStyle.ts 파일에서 하시면 됩니다*/}

      <St.HeaderWrapper>
        <St.HeaderTitleLogo
          onClick={() => {
            handleNavigateAndReload('/');
          }}
        />
        <St.ButtonWrapper>
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
                마이페이지
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
        </St.ButtonWrapper>
      </St.HeaderWrapper>
    </>
  );
};

export default Header;
