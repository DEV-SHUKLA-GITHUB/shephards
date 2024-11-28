import React from 'react';
import PropertyCard from './PropertyCard';
import { FaArrowRight } from "react-icons/fa6";
const Properties = () => {
  return (
    <div className='px-24 pb-4'>
      <h1 className='font-serif text-center text-3xl pb-20 px-6 py-4'>Brilliant Properties across Neighbourhoods</h1>
      
      {/* Grid layout for Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* First Row: 3 Properties */}
        <div className="col-span-1">
          <PropertyCard />
        </div>
        <div className="col-span-1">
          <PropertyCard />
        </div>
        <div className="col-span-1">
          <PropertyCard />
        </div>
      </div>

      {/* Second Row: 2 Properties Centered with 0.5 column on each side */}
      <div className="flex justify-center pt-10">
  <div className="mx-4 w-1/3">
    <PropertyCard />
  </div>
  <div className="mx-4 w-1/3">
    <PropertyCard />
  </div>
</div>
<h4 className='flex justify-center mt-10 text-[#249063]'>view all properties <FaArrowRight className='mt-1.5 mx-4'/></h4>
    </div>
  );
};

export default Properties;