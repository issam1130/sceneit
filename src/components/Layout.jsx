import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navigation from './Navigation';

function Layout() {
  return (
    <div className="layout">
      <header>
      
        <h1>Rear-view.</h1>
      
        <Navigation />
     
      </header>
      
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout;
