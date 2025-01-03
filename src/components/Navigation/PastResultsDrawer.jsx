import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import VehicleLogo from '../VehicleLogo';

// Create past results using actual vehicle data
const createPastResults = (vehicles) => {
  // Won auctions (vehicles 1 and 3)
  const wonResults = [1, 3].map(id => {
    const vehicle = vehicles[id];
    if (!vehicle) return null;
    return {
      id,
      title: vehicle.title,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }),
      price: `$${vehicle.currentBid}`,
      status: 'won',
      make: vehicle.make
    };
  }).filter(Boolean);

  // Lost auctions (vehicles 2 and 4)
  const lostResults = [2, 4].map(id => {
    const vehicle = vehicles[id];
    if (!vehicle) return null;
    return {
      id,
      title: vehicle.title,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }),
      price: `$${vehicle.currentBid}`,
      status: 'lost',
      make: vehicle.make
    };
  }).filter(Boolean);

  // Combine and sort by date
  return [...wonResults, ...lostResults].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
};

const PastResultsDrawer = ({ isOpen, onClose, vehicles, isMobile }) => {
  const navigate = useNavigate();
  
  // Only create past results if we have vehicles data
  const pastResults = vehicles ? createPastResults(vehicles) : [];

  const handleItemClick = (result) => {
    // For won auctions, use the same vehicle data
    const path = result.status === 'won' 
      ? `/sale-confirmation/${result.id}`
      : `/listings/${result.id}`;
    navigate(path);
    onClose();
  };

  const drawerContent = (
    <div className="h-full flex flex-col">
      {/* Mobile Pull Indicator */}
      {isMobile && (
        <div className="px-4 py-3 flex justify-center">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>
      )}

      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Past Results</h2>
        {isMobile && (
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {pastResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleItemClick(result)}
              className="block hover:bg-gray-50 cursor-pointer"
            >
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <VehicleLogo make={result.make} size="small" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {result.date} • {result.price}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    result.status === 'won' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {result.status === 'won' ? 'Won' : 'Lost'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Safe Area */}
      {isMobile && (
        <div className="h-safe-area-bottom bg-white" />
      )}
    </div>
  );

  // Desktop drawer
  if (!isMobile) {
    return (
      <div className="w-80 bg-white border-r border-gray-200">
        {drawerContent}
      </div>
    );
  }

  // Mobile drawer
  return (
    <div className="w-full h-full bg-white rounded-t-xl shadow-xl">
      {drawerContent}
    </div>
  );
};

export default PastResultsDrawer;
