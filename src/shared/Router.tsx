// import Ost from "pages/ost/Ost";
import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ost from "../pages/ost/Ost";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
                
        <Route path="/a" element={<Ost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;