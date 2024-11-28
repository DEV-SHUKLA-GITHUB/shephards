import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo and Brand Name  */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <span className="text-lg font-medium">Shephard Homes</span>
      </div>

      {/* {/ Navigation Links and CTA */}
      <div className="flex items-center space-x-8">
        <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
          About Us
        </a>
        <a href="/properties" className="text-gray-600 hover:text-gray-900 transition-colors">
          Properties
        </a>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;