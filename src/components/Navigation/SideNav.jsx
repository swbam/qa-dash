import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  GalleryHorizontalEnd, 
  Gavel, 
  History,
  Settings
} from 'lucide-react';

const navItems = [
  { name: 'Listings', icon: GalleryHorizontalEnd, path: '/listings' },
  { name: 'My Bids', icon: Gavel, path: '/my-bids' },
  { name: 'Past Results', icon: History, path: '#', isDrawerTrigger: true },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const SideNav = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.isDrawerTrigger) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  return (
    <aside className="fixed left-0 top-[67px] h-[calc(100vh-67px)] w-64 bg-white border-r border-gray-200">
      <div className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = !item.isDrawerTrigger && location.pathname === item.path;
            const isPastResultsActive = item.isDrawerTrigger && isDrawerOpen;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                {item.isDrawerTrigger ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center w-full p-2 text-base font-normal rounded-lg ${
                      isPastResultsActive
                        ? 'bg-auction-blue-50 text-auction-blue-600'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-6 h-6 transition duration-75 ${
                      isPastResultsActive ? 'text-auction-blue-600' : 'text-gray-500'
                    }`} />
                    <span className="ml-3">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 text-base font-normal rounded-lg ${
                      isActive
                        ? 'bg-auction-blue-50 text-auction-blue-600'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-6 h-6 transition duration-75 ${
                      isActive ? 'text-auction-blue-600' : 'text-gray-500'
                    }`} />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
