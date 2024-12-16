import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-4 py-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.webp" alt="Logo" className="h-6" />
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <Link to="/settings" className="text-gray-500 hover:text-gray-700">
              <Settings size={20} />
            </Link>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
