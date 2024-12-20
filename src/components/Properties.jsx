import React from 'react';
import PropertyCard from './PropertyCard';

const Properties = () => {
  // Combine all property cards into a single array
  const properties = [1, 2, 3, 4, 5]; // This can be replaced with actual property data

  return (
    <div className="mx-auto px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">
        Brilliant Properties Across Neighborhoods
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
  {properties.map((_, index) => (
      <PropertyCard />
  ))}
</div>


      </div>
  );
};

export default Properties;
