import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as St from '../shared/LayoutStyle';
import Header from 'components/header/Header';

const Layout = () => {
  const navigate = useNavigate();
  const handleNavigateAndReload = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {/* 헤더와 푸터 CSS 작업은 LayoutStyle.ts 파일에서 하시면 됩니다*/}

      <St.HeaderWrapper>
        <St.HeaderTitleLogo
          onClick={() => {
            handleNavigateAndReload('/');
          }}
        />
      </St.HeaderWrapper>
      <St.ButtonWrapper>
        <St.RegisterBtn
          onClick={() => {
            handleNavigateAndReload('/register');
          }}
        >
          Register
        </St.RegisterBtn>
        <St.LoginBtn
          onClick={() => {
            handleNavigateAndReload('/login');
          }}
        >
          Login
        </St.LoginBtn>
      </St.ButtonWrapper>

      <Outlet />
      <St.FooterWrapper>
        <p>Copyright 2023. Anima All rights reserved</p>
      </St.FooterWrapper>
    </>
  );
};

export default Layout;
