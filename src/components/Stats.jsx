import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoGridSharp } from "react-icons/io5";
import img1 from "../assets/carausalImg/1.jpg";

const StatsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column */}
        <div className="space-y-4">
          {/* Amenities Card */}
          <div className="bg-gray-50 rounded-2xl p-6 h-48">
            <h2 className="text-4xl font-bold text-gray-900">40+</h2>
            <p className="text-lg font-medium text-gray-900 mt-2">Amenities</p>
            <p className="text-sm text-gray-600 mt-1">All properties boast of blah blah one liner</p>
            <div className="grid grid-cols-4 gap-2 mt-4 opacity-20">
              {[...Array(8)].map((_, i) => (
                <IoGridSharp key={i} className="text-2xl text-gray-400" />
              ))}
            </div>
          </div>

          {/* Bottom Happy Customers Card */}
          <div className="bg-[#FFF3D9] rounded-2xl p-6 h-40">
            <div className="flex justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">200+</h2>
                <p className="text-lg font-medium text-gray-900 mt-2">Happy Customers</p>
                <p className="text-sm text-gray-600">one liners about this</p>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-yellow-400 text-xl" />
                <FaStar className="text-yellow-400 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          {/* Top Happy Customers Card */}
          <div className="bg-emerald-600 rounded-2xl p-6 h-48 text-white">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-lg font-medium mt-2">Happy Customers</p>
            <p className="text-sm opacity-90">one liners about this</p>
          </div>

          {/* Property Image Card */}
          <div className="rounded-2xl overflow-hidden h-40">
            <img 
              src={img1}
              alt="Property Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Last Column */}
        <div className="space-y-4">
          {/* Number 8 Card */}
          <div className="rounded-2xl overflow-hidden h-48">
            <div className="flex justify-center items-center bg-gray-50 h-full">
              <span className="text-6xl font-bold text-gray-900">8</span>
            </div>
          </div>

          {/* Live Properties Card */}
          <div className="bg-gray-50 rounded-2xl p-6 h-40">
            <h2 className="text-lg font-medium text-gray-900">Live Properties</h2>
            <p className="text-sm text-gray-600 mt-1">across Bengaluru and 5 more cities</p>
            <div className="mt-4">
              <img 
                src="/api/placeholder/400/100" 
                alt="Location Map" 
                className="w-full h-16 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;