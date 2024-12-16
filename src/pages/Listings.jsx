import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import VehicleCondition from '../components/VehicleCondition';
import VehicleLogo from '../components/VehicleLogo';

const sortOptions = [
  { name: 'Ending Soon', value: 'timeLeft' },
  { name: 'Price: Low to High', value: 'priceLow' },
  { name: 'Price: High to Low', value: 'priceHigh' },
  { name: 'Newest Listings', value: 'newest' },
];

const Listings = ({ vehicles, makes }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [sortBy, setSortBy] = useState('timeLeft');
  const [showMakes, setShowMakes] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const filteredVehicles = useMemo(() => {
    return Object.values(vehicles).filter(vehicle => {
      const matchesSearch = vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(vehicle.make);
      return matchesSearch && matchesMake;
    });
  }, [vehicles, searchQuery, selectedMakes]);

  const sortedVehicles = useMemo(() => {
    return [...filteredVehicles].sort((a, b) => {
      switch (sortBy) {
        case 'priceLow':
          return parseFloat(a.currentBid.replace(/,/g, '')) - parseFloat(b.currentBid.replace(/,/g, ''));
        case 'priceHigh':
          return parseFloat(b.currentBid.replace(/,/g, '')) - parseFloat(a.currentBid.replace(/,/g, ''));
        case 'timeLeft':
          return a.timeLeft.localeCompare(b.timeLeft);
        default:
          return 0;
      }
    });
  }, [filteredVehicles, sortBy]);

  const toggleMake = (make) => {
    setSelectedMakes(prev => 
      prev.includes(make)
        ? prev.filter(m => m !== make)
        : [...prev, make]
    );
  };

  return (
    <div className="max-w-[1920px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Available Vehicles</h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse through available salvage and damaged vehicles
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-auction-blue-600 focus:border-auction-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <button 
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setShowMakes(!showMakes)}
              >
                <Filter size={20} />
                Makes
                <ChevronDown size={16} />
              </button>
              {showMakes && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="p-2">
                    {makes.map((make) => (
                      <label key={make.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-auction-blue-600"
                          checked={selectedMakes.includes(make.name)}
                          onChange={() => toggleMake(make.name)}
                        />
                        <VehicleLogo make={make.name} size="small" className="ml-2" />
                        <span className="ml-2 text-sm text-gray-700">{make.name}</span>
                        <span className="ml-auto text-xs text-gray-500">({make.count})</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setShowSort(!showSort)}
              >
                Sort by
                <ChevronDown size={16} />
              </button>
              {showSort && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        sortBy === option.value ? 'bg-gray-100' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSort(false);
                      }}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Makes */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Makes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {makes.map((make) => (
            <button
              key={make.name}
              onClick={() => toggleMake(make.name)}
              className={`flex flex-col items-center p-3 rounded-lg border ${
                selectedMakes.includes(make.name)
                  ? 'border-auction-blue-600 bg-auction-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <VehicleLogo 
                make={make.name} 
                size="large"
                className={`mb-2 ${
                  selectedMakes.includes(make.name) ? 'text-auction-blue-600' : 'text-gray-700'
                }`}
              />
              <span className={`text-sm font-medium ${
                selectedMakes.includes(make.name) ? 'text-auction-blue-600' : 'text-gray-900'
              }`}>
                {make.name}
              </span>
              <span className="text-xs text-gray-500 mt-1">({make.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow overflow-hidden max-w-sm mx-auto w-full">
            <div className="cursor-pointer" onClick={() => navigate(`/listings/${vehicle.id}`)}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{vehicle.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mileage</span>
                    <span className="text-gray-900">{vehicle.mileage} mi</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Location</span>
                    <span className="text-gray-900">{vehicle.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Current Bid</span>
                    <span className="text-auction-blue-600 font-medium">
                      ${vehicle.currentBid}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Time Left</span>
                    <span className="text-auction-green-600 font-medium">{vehicle.timeLeft}</span>
                  </div>
                </div>

                {/* Vehicle Condition */}
                <div className="mt-4">
                  <VehicleCondition conditions={vehicle.conditions} />
                </div>

                <Link
                  to={`/listings/${vehicle.id}`}
                  className="mt-4 block w-full bg-auction-blue-600 text-white py-2 px-4 rounded-md hover:bg-auction-blue-800 transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
