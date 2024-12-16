import React from 'react';
import { IoBed } from "react-icons/io5";
import img1 from '../assets/carausalImg/1.jpg';

const PropertyCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-emerald-600 text-white px-2 sm:px-3 py-1 rounded-full text-sm">
            ₹1880/night
          </span>
        </div>
        <img 
          src={img1} 
          className="w-full h-48 sm:h-64 object-cover" 
          alt="Property" 
        />
      </div>
      
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold">4 BHK - Koramangala</h3>
        <p className="text-sm text-gray-600 mt-1">
          Provides end to end rental and property management to the unit owners
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            <IoBed className="text-emerald-600" />
            <span className="text-sm">2 Beds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard