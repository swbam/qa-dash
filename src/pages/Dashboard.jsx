import React from 'react';
import { Clock, Gavel, TrendingUp, DollarSign } from 'lucide-react';

const stats = [
  {
    name: 'Active Auctions',
    value: '24',
    icon: Clock,
    change: '+2.5%',
    changeType: 'positive'
  },
  {
    name: 'Your Active Bids',
    value: '7',
    icon: Gavel,
    change: '+14%',
    changeType: 'positive'
  },
  {
    name: 'Won Auctions',
    value: '12',
    icon: TrendingUp,
    change: '+2.1%',
    changeType: 'positive'
  },
  {
    name: 'Total Spent',
    value: '$48,250',
    icon: DollarSign,
    change: '+9%',
    changeType: 'positive'
  }
];

const featuredAuctions = [
  {
    id: 1,
    title: '2020 Tesla Model 3',
    currentBid: 32500,
    timeLeft: '2h 15m',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    id: 2,
    title: '2019 BMW M4',
    currentBid: 45000,
    timeLeft: '4h 30m',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJtdyUyMG00fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  },
  {
    id: 3,
    title: '2021 Porsche 911',
    currentBid: 89000,
    timeLeft: '1h 45m',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHw%3D&w=1000&q=80'
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your auctions today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Auctions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Featured Auctions</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAuctions.map((auction) => (
            <div key={auction.id} className="bg-white border rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{auction.title}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Current Bid</p>
                    <p className="text-lg font-medium text-auction-blue-600">
                      ${auction.currentBid.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time Left</p>
                    <p className="text-sm font-medium text-auction-green-600">{auction.timeLeft}</p>
                  </div>
                </div>
                <button className="mt-4 w-full bg-auction-blue-600 text-white py-2 px-4 rounded-md hover:bg-auction-blue-800 transition-colors">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
