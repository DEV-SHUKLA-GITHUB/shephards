import React from 'react';
import img1 from '../assets/carausalImg/1.jpg';
import { IoBed, IoHome } from "react-icons/io5";
import { FaRulerHorizontal } from "react-icons/fa6";

const PropertyCard = () => {
  return (
    <div className="bg-white w-1/4 rounded-xl border shadow-md overflow-hidden">
      <img src={img1} className="object-cover w-full h-54rounded-t-xl" alt="Sea view Bungalow" />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-1">Sea view Bungalow in Goa</h1>
        <span className="text-gray-500">Goa</span>
        <div className="flex pt-4 justify-between text-gray-700">
          <div className="flex items-center space-x-1">
            <IoBed className="text-xl" />
            <span>2 Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <IoHome className="text-xl" />
            <span>Villa</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRulerHorizontal className="text-xl" />
            <span>2000 sq ft</span>
          </div>
        </div>
        <hr />
        <div className='flex justify-end'><p className='text-xl font-semibold'>INR 12.361 </p><span className='text-sm pt-2'>avg/night</span></div>
      </div>
    </div>
  );
};

export default PropertyCard;
