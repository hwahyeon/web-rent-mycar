import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import RegistCarDetailPage from '../pages/RegistCarDetailPage';
import RegistCarPage from '../pages/RegistCarPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register-car" element={<RegistCarPage />} />
      <Route path="/register-car/detail" element={<RegistCarDetailPage />} />
    </Routes>
  );
}

export default MainRoutes;