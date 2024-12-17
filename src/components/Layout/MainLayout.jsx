import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from '../Navigation/TopNav';
import SideNav from '../Navigation/SideNav';
import PastResultsDrawer from '../Navigation/PastResultsDrawer';

const MainLayout = ({ vehicles }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes (except for listings and sale confirmation)
  useEffect(() => {
    const isListingRoute = location.pathname.startsWith('/listings/');
    const isSaleConfirmationRoute = location.pathname.startsWith('/sale-confirmation/');
    
    if (!isListingRoute && !isSaleConfirmationRoute) {
      setIsDrawerOpen(false);
    }
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <TopNav onMobileMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <SideNav 
            isDrawerOpen={isDrawerOpen} 
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 transform w-64 bg-white z-50
          transition duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <SideNav 
            isDrawerOpen={isDrawerOpen} 
            setIsDrawerOpen={setIsDrawerOpen}
            isMobile={true}
          />
        </div>

        {/* Desktop Drawer */}
        <div className={`hidden md:block fixed left-64 top-[67px] h-[calc(100vh-67px)] transition-transform duration-300 ease-in-out transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <PastResultsDrawer 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}
            vehicles={vehicles}
            isMobile={false}
          />
        </div>

        {/* Mobile Drawer */}
        <div className={`
          md:hidden fixed inset-x-0 bottom-0 transform h-[70vh] bg-white z-50
          transition duration-300 ease-in-out rounded-t-xl shadow-xl
          ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <PastResultsDrawer 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}
            vehicles={vehicles}
            isMobile={true}
          />
        </div>

        {/* Main Content */}
        <main className={`
          w-full transition-all duration-300 ease-in-out
          md:pl-64
          ${isDrawerOpen ? 'md:ml-80' : ''}
          pt-[67px]
        `}>
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
