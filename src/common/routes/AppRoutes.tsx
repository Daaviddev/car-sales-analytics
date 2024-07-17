import { Route, Routes } from 'react-router-dom';

import DashboardHome from '@/pages/DashboardHome/DashboardHome';
import DashboardSales from '@/pages/DashboardSales/DashboardSales';
import DashboardLayout from '@layout/ContentLayout/ContentLayout';
import MainLayout from '@layout/MainLayout/MainLayout';
import React from 'react';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSales />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
