import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from '../Navigation/TopNav';
import SideNav from '../Navigation/SideNav';
import PastResultsDrawer from '../Navigation/PastResultsDrawer';

const MainLayout = ({ vehicles }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes (except for listings and sale confirmation)
  useEffect(() => {
    const isListingRoute = location.pathname.startsWith('/listings/');
    const isSaleConfirmationRoute = location.pathname.startsWith('/sale-confirmation/');
    
    if (!isListingRoute && !isSaleConfirmationRoute) {
      setIsDrawerOpen(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <TopNav />
      <SideNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <div className="flex">
        <PastResultsDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          vehicles={vehicles}
        />
        <main className={`pt-[67px] pl-64 flex-1 transition-all duration-300 ease-in-out ${
          isDrawerOpen ? 'ml-80' : ''
        }`}>
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
