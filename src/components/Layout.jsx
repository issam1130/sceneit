import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="layout">
      <header>
      
      
      
        <Navigation />
     
      </header>
      
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout;
