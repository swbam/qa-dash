import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Car, 
  Camera, 
  Clock,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import VehicleCondition from '../components/VehicleCondition';

const VehicleListing = ({ vehicles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState('');
  
  const vehicleDetails = vehicles[id];

  if (!vehicleDetails) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Vehicle not found</h2>
        <p className="mt-2 text-gray-500">The vehicle you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/listings')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-auction-blue-600 hover:bg-auction-blue-700"
        >
          Return to Listings
        </button>
      </div>
    );
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();
    // Handle bid submission
    console.log('Bid submitted:', bidAmount);
  };

  const minBidAmount = parseInt(vehicleDetails.currentBid?.replace(/,/g, '')) + 100 || 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vehicle Title */}
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model}
            </h1>
            <p className="text-gray-500 mt-2 text-center">Control #: {vehicleDetails.controlNumber}</p>
          </div>

          {/* Vehicle Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Car className="text-auction-blue-600" size={24} />
              <h2 className="text-lg font-semibold">Vehicle Information</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "MAKE/MODEL", value: `${vehicleDetails.make} ${vehicleDetails.model}` },
                { label: "YEAR", value: vehicleDetails.year },
                { label: "VIN", value: vehicleDetails.vin },
                { label: "ODOMETER", value: `${vehicleDetails.odometer} mi` },
              ].map((detail, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">{detail.label}</div>
                  <div className="font-medium">{detail.value}</div>
                </div>
              ))}
            </div>

            {/* Vehicle Condition */}
            <div className="mt-6">
              <VehicleCondition conditions={vehicleDetails.conditions} />
            </div>
          </div>

          {/* Photos */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-auction-blue-600" size={24} />
              <h2 className="text-lg font-semibold">Vehicle Photos</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/400x400.png?text=Vehicle+Photo"
                    alt={`Vehicle ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Bid Info */}
        <div className="space-y-6">
          {/* Current Bid */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="text-auction-blue-600" size={20} />
                <span className="text-red-600 font-semibold">2h 15m left</span>
              </div>
              <div className="text-sm text-gray-500">
                Min Increment: $100
              </div>
            </div>
            
            <div className="text-center p-4 bg-auction-blue-50 rounded-lg border-2 border-auction-blue-600 mb-4">
              <div className="text-sm text-auction-blue-600 font-medium">CURRENT BID</div>
              <div className="text-3xl font-bold text-auction-blue-800">
                ${vehicleDetails.currentBid}
              </div>
            </div>

            {/* Bid Form */}
            <form onSubmit={handleBidSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Bid Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="number"
                    min={minBidAmount}
                    step={100}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-auction-blue-600 focus:border-auction-blue-600"
                    placeholder="Enter bid amount"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-auction-blue-600 text-white py-3 px-4 rounded-md hover:bg-auction-blue-800 transition-colors font-medium"
              >
                Place Bid
              </button>
            </form>

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
              <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                By placing a bid, you agree to our terms and conditions. All bids are final and cannot be retracted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleListing;