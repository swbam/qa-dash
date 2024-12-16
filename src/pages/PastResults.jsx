import React from 'react';
import { Link } from 'react-router-dom';
import VehicleCondition from '../components/VehicleCondition';

const pastResults = [
  {
    id: 1,
    title: '2005 Ford Taurus',
    finalPrice: 750,
    date: '2024-02-15',
    status: 'won',
    image: 'https://via.placeholder.com/400x300.png?text=Taurus+Damage',
    make: 'Ford',
    makeIcon: 'car-makes-icon ford',
    conditions: [
      "Rear End Damage",
      "Clean Title",
      "Won't Start",
      "Airbags Not Deployed",
      "Keys Available"
    ]
  },
  {
    id: 2,
    title: '2007 Chevrolet Impala',
    finalPrice: 1200,
    date: '2024-02-14',
    status: 'lost',
    make: 'Chevrolet',
    makeIcon: 'car-makes-icon chevrolet',
    image: 'https://via.placeholder.com/400x300.png?text=Impala+Damage',
    conditions: [
      "Front End Damage",
      "Salvage Title",
      "Starts and Drives",
      "Airbags Deployed",
      "No Keys"
    ]
  },
  {
    id: 3,
    title: '2006 Dodge Charger',
    finalPrice: 2100,
    date: '2024-02-13',
    status: 'won',
    make: 'Dodge',
    makeIcon: 'car-makes-icon dodge',
    image: 'https://via.placeholder.com/400x300.png?text=Charger+Damage',
    conditions: [
      "Side Damage",
      "Salvage Title",
      "Engine Start Program",
      "Airbags Not Deployed",
      "Keys Available"
    ]
  }
];

const PastResults = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Past Results</h1>
        <p className="mt-1 text-sm text-gray-500">
          View your auction history and results
        </p>
      </div>

      {/* Results Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conditions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Final Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pastResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img className="h-16 w-16 rounded object-cover" src={result.image} alt={result.title} />
                      </div>
                      <div className="ml-4">
                        <div className="flex flex-col items-start">
                          <span className={`${result.makeIcon} text-2xl mb-1`}></span>
                          <div className="text-sm font-medium text-gray-900">{result.title}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-64">
                      <VehicleCondition conditions={result.conditions} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${result.finalPrice.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(result.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      result.status === 'won' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {result.status === 'won' ? 'Won' : 'Lost'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={result.status === 'won' ? '/sale-confirmation' : `/listings/${result.id}`}
                      className="text-auction-blue-600 hover:text-auction-blue-800"
                    >
                      {result.status === 'won' ? 'View Purchase' : 'View Listing'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastResults;
