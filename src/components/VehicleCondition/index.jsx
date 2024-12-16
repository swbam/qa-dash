import React from 'react';

const ConditionTag = ({ children }) => (
  <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mr-2 mb-2">
    {children}
  </span>
);

const VehicleCondition = ({ conditions }) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">VEHICLE CONDITION</h3>
      <div className="flex flex-wrap">
        {conditions.map((condition, index) => (
          <ConditionTag key={index}>{condition}</ConditionTag>
        ))}
      </div>
    </div>
  );
};

export default VehicleCondition;
