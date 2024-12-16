import React from 'react';
import PropertyCard from './PropertyCard';
import { FaArrowRight } from "react-icons/fa6";

const Properties = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">
        Brilliant properties across neighborhoods
      </h1>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
        {[1, 2, 3].map((_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
        {[1, 2].map((_, index) => (
          <PropertyCard key={index + 3} />
        ))}
      </div>
    </div>
  );
};
export default Properties;