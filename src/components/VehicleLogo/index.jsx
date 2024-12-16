import React from 'react';

const VehicleLogo = ({ make, size = 'large', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'w-16 h-16 text-2xl';
      case 'medium':
        return 'w-12 h-12 text-xl';
      case 'small':
        return 'w-8 h-8 text-sm';
      default:
        return 'w-12 h-12 text-xl';
    }
  };

  const getLetter = () => {
    switch (make.toLowerCase()) {
      case 'honda':
        return 'H';
      case 'toyota':
        return 'O';
      case 'ford':
        return 'F';
      case 'chevrolet':
        return '⋈';
      case 'nissan':
        return '□';
      case 'volkswagen':
        return 'V';
      case 'bmw':
        return '◐';
      case 'mercedes':
        return '△';
      default:
        return make.charAt(0);
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`
        ${getSizeClasses()}
        rounded-full
        bg-auction-blue-50
        text-auction-blue-600
        hover:text-auction-blue-800
        transition-colors
        flex
        items-center
        justify-center
        font-bold
      `}>
        {getLetter()}
      </div>
    </div>
  );
};

export default VehicleLogo;
