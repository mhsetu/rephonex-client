import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from '../Pages/Dashboard/PhoneSellingList/PhoneSellingList';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
