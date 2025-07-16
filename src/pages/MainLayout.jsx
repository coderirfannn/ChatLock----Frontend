import React from 'react';
import { Outlet } from 'react-router-dom';
// import { LayoutSidebar } from '../Components/MainLayoutComponents/LayoutSidebar';
import Header from '../components/feedcomponent/Header';

function MainLayout() {
  return (
    <div className="">
      <div>
         <Header></Header>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
