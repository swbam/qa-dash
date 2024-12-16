import React from 'react';
import { User, Bell, Shield, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full"
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="p-6 space-y-6">
          {/* Account Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <User size={20} />
              Account Information
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-auction-blue-600 focus:border-auction-blue-600"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-auction-blue-600 focus:border-auction-blue-600"
                  defaultValue="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-auction-blue-600 focus:border-auction-blue-600"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Bell size={20} />
              Notification Preferences
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Auction Updates</h4>
                  <p className="text-sm text-gray-500">Get notified about your auction activity</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-auction-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-auction-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive email updates about your bids</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-auction-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-auction-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <CreditCard size={20} />
              Payment Methods
            </h3>
            <div className="mt-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-auction-blue-600">
                + Add Payment Method
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Shield size={20} />
              Security
            </h3>
            <div className="mt-4">
              <button className="text-auction-blue-600 hover:text-auction-blue-800">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button className="w-full sm:w-auto bg-auction-blue-600 text-white px-6 py-2 rounded-md hover:bg-auction-blue-800 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
