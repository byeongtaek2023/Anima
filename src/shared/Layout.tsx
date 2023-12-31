import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as St from '../shared/LayoutStyle';
import Header from 'components/header/Header';
import { getUserSession, handleLogout } from 'api/supabase/supabase';

const Layout = () => {
  const navigate = useNavigate();
  const handleNavigateAndReload = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    getUserSession().then((result) => {
      if (result) {
        console.log(result);
        setIsLoggin(true);
      }
    });
  }, []);

  const [Isloggin, setIsLoggin] = useState(false);

  const login = () => {
    navigate('/login');
  };

  // const getUserSession = async () => {
  //   const { data, error } = await supabase.auth.getSession();
  //   console.log(data);
  //   if (error) throw error;
  //   return data;
  // };

  // const handleLogout = async () => {
  //   try {
  //     const { error } = await supabase.auth.signOut();
  //     if (error) throw error;
  //     setIsLoggin(false);
  //     navigate('/'); // 로그아웃 후 홈페이지로 이동
  //   } catch (error) {
  //     console.error('로그아웃 실패:', error);
  //   }
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
          {Isloggin ? (
            <St.LogoutBtn
              onClick={() => {
                handleLogout();
                // handleNavigateAndReload('/register');
              }}
            >
              Logout
            </St.LogoutBtn>
          ) : (
            <St.LoginBtn
              onClick={() => {
                login();
                // handleNavigateAndReload('/login');
              }}
            >
              Login
            </St.LoginBtn>
          )}
        </St.ButtonWrapper>
      </St.HeaderWrapper>

      <Outlet />
      <St.FooterWrapper>
        <p>Copyright 2023. Anima All rights reserved</p>
      </St.FooterWrapper>
    </>
  );
};

export default Layout;
