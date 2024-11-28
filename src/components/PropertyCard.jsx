import React from 'react';
import img1 from '../assets/carausalImg/1.jpg';
import { IoBed, IoHome } from "react-icons/io5";
import { FaRulerHorizontal } from "react-icons/fa6";

const PropertyCard = () => {
  return (
    <div className="bg-white rounded-xl border shadow-md overflow-hidden">
      <img src={img1} className=" p-3 object-cover w-full h-54 rounded-xl" alt="Sea view Bungalow" />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-1">4 BHK - Kormangala</h1>
        <span className="text-gray-500">Provides end to end rental and property management to the unit owners</span>
        <div className="flex pt-4  text-gray-700">
          <div className="flex items-center px-2 space-x-1">
            <IoBed className="text-xl" />
            <span>2 Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <IoBed className="text-xl" />
            <span>2 Beds</span>
          </div> 
        </div>
        {/* <hr />
        <div className='flex justify-end'><p className='text-xl font-semibold'>INR 12.361 </p><span className='text-sm pt-2'>avg/night</span></div> */}
      </div>
    </div>
  );
};

export default PropertyCard;
