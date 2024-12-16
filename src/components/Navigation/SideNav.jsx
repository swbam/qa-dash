import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item.isDrawerTrigger) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      navigate(item.path);
      setIsDrawerOpen(false);
    }
  };

  return (
    <aside className="fixed left-0 top-[67px] z-20 h-full w-64 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = !item.isDrawerTrigger 
              ? location.pathname === item.path
              : isDrawerOpen;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center w-full p-2 text-base font-normal rounded-lg ${
                    isActive
                      ? 'bg-auction-blue-50 text-auction-blue-600'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-6 h-6 transition duration-75 ${
                    isActive ? 'text-auction-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="ml-3">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
