// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className='flex flex-col h-svh bg-white'>
      <div className='flex-1 h-full'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
