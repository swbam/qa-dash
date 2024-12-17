import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  GalleryHorizontalEnd, 
  Gavel, 
  History,
  Settings,
  X
} from 'lucide-react';

const navItems = [
  { name: 'Listings', icon: GalleryHorizontalEnd, path: '/listings' },
  { name: 'My Bids', icon: Gavel, path: '/my-bids' },
  { name: 'Past Results', icon: History, path: '#', isDrawerTrigger: true },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const SideNav = ({ isDrawerOpen, setIsDrawerOpen, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item.isDrawerTrigger) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      navigate(item.path);
      if (isMobile) {
        // Close mobile menu when navigating
        document.dispatchEvent(new CustomEvent('closeMobileMenu'));
      }
    }
  };

  return (
    <aside className="h-full flex flex-col bg-white">
      {isMobile && (
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <img src="/logo.webp" alt="Logo" className="h-6" />
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('closeMobileMenu'))}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
      )}
      
      <div className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = !item.isDrawerTrigger && location.pathname === item.path;
            const isPastResultsActive = item.isDrawerTrigger && isDrawerOpen;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center w-full p-2 text-base font-normal rounded-lg ${
                    isActive || isPastResultsActive
                      ? 'bg-auction-blue-50 text-auction-blue-600'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-6 h-6 transition duration-75 ${
                    isActive || isPastResultsActive ? 'text-auction-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="ml-3">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Safe Area */}
      {isMobile && (
        <div className="h-safe-area-bottom bg-white" />
      )}
    </aside>
  );
};

export default SideNav;
