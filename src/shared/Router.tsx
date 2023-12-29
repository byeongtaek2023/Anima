
import Login from 'pages/Login';
import Register from 'pages/Register';
import Layout from './Layout';
import Home from 'pages/Home';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Ost from "pages/ost/Ost";
import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import Ost from '../pages/ost/Ost';
import AniList from 'components/AniList';
import ImageSlideshow from 'components/ImageSlideShow';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/a" element={<Ost />} />
          <Route path="/b" element={<AniList />} />
          <Route path="/c" element={<ImageSlideshow />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
