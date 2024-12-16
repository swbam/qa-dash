import React from 'react';

const Map = ({ address }) => {
  // Convert address to URL-safe string
  const encodedAddress = encodeURIComponent(address);
  
  // Create static Google Maps URL
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY || ''}`;

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden bg-gray-100">
      {/* Fallback map UI when no API key is provided */}
      <div className="w-full h-full flex items-center justify-center bg-auction-blue-50 text-auction-blue-600">
        <div className="text-center">
          <div className="font-medium mb-2">{address}</div>
          <div className="text-sm text-auction-blue-400">Map preview available with API key</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
