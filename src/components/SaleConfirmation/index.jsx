import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  MapPin,
  Package,
  Camera,
  Car,
  HashIcon,
  Contact,
} from "lucide-react";
import VehicleCondition from "../VehicleCondition";

const ModernSaleConfirmation = ({ vehicles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Success Banner */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="h-2 bg-auction-green-600" />
            <div className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-auction-green-50 mb-4">
                <CheckCircle className="text-auction-green-600" size={40} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Sale Complete!</h1>
              <p className="text-xl text-gray-500 mt-2">
                Your {vehicleDetails.year} {vehicleDetails.make}{" "}
                {vehicleDetails.model} has been sold
              </p>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            {/* Control Number */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-red-500">
                    CONTROL NUMBER
                  </div>
                  <div className="text-2xl font-bold font-mono text-red-500">
                    {vehicleDetails.controlNumber}
                  </div>
                </div>
                <HashIcon className="text-red-500" size={32} />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Car className="text-auction-blue-600" size={24} />
                <h2 className="text-lg font-semibold">Vehicle Information</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "MAKE/MODEL", value: `${vehicleDetails.make} ${vehicleDetails.model}` },
                  { label: "YEAR", value: vehicleDetails.year },
                  { label: "VIN", value: vehicleDetails.vin },
                  { label: "ODOMETER", value: `${vehicleDetails.mileage} mi` },
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

        {/* Right Column */}
        <div className="space-y-6">
          {/* Winning Bid */}
          <div className="bg-auction-green-50 rounded-lg p-6 border-2 border-auction-green-600 text-center">
            <div className="text-sm text-auction-green-700 font-medium">WINNING BID</div>
            <div className="text-3xl font-bold text-auction-green-800">
              ${vehicleDetails.currentBid}
            </div>
          </div>

          {/* Buyer Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Contact className="text-auction-blue-600" size={24} />
              <h2 className="text-lg font-semibold">Buyer Details</h2>
            </div>
            {[
              { label: "BUYER", value: "CPRT BUYER" },
              { label: "PHONE", value: "+1615-123-4567" },
            ].map((detail, index) => (
              <div key={index} className="bg-auction-blue-50 p-3 rounded-lg mb-3">
                <div className="text-sm text-auction-blue-600">{detail.label}</div>
                <div className="font-medium text-auction-blue-800">{detail.value}</div>
              </div>
            ))}
          </div>

          {/* Pickup Location */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-auction-blue-600" size={24} />
              <h2 className="text-lg font-semibold">Pickup Location</h2>
            </div>

            {/* Pickup Contact Details */}
            <div className="mb-4">
              <div className="bg-auction-blue-50 p-3 rounded-lg mb-3">
                <div className="text-sm text-auction-blue-600">PICKUP CONTACT NAME</div>
                <div className="font-medium text-auction-blue-800">
                  John Smith
                </div>
              </div>
              <div className="bg-auction-blue-50 p-3 rounded-lg mb-3">
                <div className="text-sm text-auction-blue-600">EMAIL</div>
                <div className="font-medium text-auction-blue-800">
                  john@ibuycars.com
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium">123 Example Street</p>
              <p className="text-sm text-gray-500 mt-1">Nashville, TN 37203</p>
            </div>

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mt-4 mb-6">
              <img
                src="https://via.placeholder.com/600x300.png?text=Location+Map"
                alt="Location map"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-center text-red-500 text-sm mb-2">
              Please verify your control number with the buyer upon arrival for pickup.
            </p>
            <p className="text-center text-gray-500 text-sm">
              The buyer will contact you shortly to arrange pickup and payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSaleConfirmation;
