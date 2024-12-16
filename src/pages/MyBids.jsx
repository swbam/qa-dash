import React from 'react';
import { Link } from 'react-router-dom';
import VehicleCondition from '../components/VehicleCondition';

const myBids = [
  {
    id: 1,
    title: '2006 Honda Civic LX',
    mileage: '185,234',
    location: 'Nashville, TN',
    currentBid: 1200,
    yourBid: 1100,
    timeLeft: '2h 15m',
    image: 'https://via.placeholder.com/400x300.png?text=Civic+Damage',
    conditions: [
      "Front End Damage",
      "Clean Title",
      "Starts and Drives",
      "Airbags Deployed",
      "Keys Available"
    ]
  },
  {
    id: 2,
    title: '2008 Toyota Corolla',
    mileage: '198,567',
    location: 'Atlanta, GA',
    currentBid: 800,
    yourBid: 750,
    timeLeft: '4h 30m',
    image: 'https://via.placeholder.com/400x300.png?text=Corolla+Damage',
    conditions: [
      "Rear End Damage",
      "Salvage Title",
      "Engine Start Program",
      "Airbags Not Deployed",
      "No Keys"
    ]
  }
];

const MyBids = () => {
  return (
    <div className="max-w-[1920px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">My Bids</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your active bids and auction status
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {myBids.map((bid) => (
          <div key={bid.id} className="bg-white rounded-lg shadow overflow-hidden">
            <Link to={`/listings/${bid.id}`}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={bid.image}
                  alt={bid.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{bid.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mileage</span>
                    <span className="text-gray-900">{bid.mileage} mi</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Location</span>
                    <span className="text-gray-900">{bid.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Current Bid</span>
                    <span className="text-auction-blue-600 font-medium">
                      ${bid.currentBid.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Your Bid</span>
                    <span className={`font-medium ${
                      bid.yourBid < bid.currentBid ? 'text-red-600' : 'text-green-600'
                    }`}>
                      ${bid.yourBid.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Time Left</span>
                    <span className="text-auction-green-600 font-medium">{bid.timeLeft}</span>
                  </div>
                </div>

                {/* Vehicle Condition */}
                <div className="mt-4">
                  <VehicleCondition conditions={bid.conditions} />
                </div>

                <button
                  className="mt-4 w-full bg-auction-blue-600 text-white py-2 px-4 rounded-md hover:bg-auction-blue-800 transition-colors"
                >
                  Place New Bid
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBids;
