import React from 'react';
import { Outlet } from 'react-router-dom';
import * as St from '../shared/LayoutStyle';

const Layout = () => {
  return (
    <>
      {/* 헤더와 푸터 CSS 작업은 LayoutStyle.ts 파일에서 하시면 됩니다*/}

      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
