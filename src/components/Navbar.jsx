import React, { useState } from 'react';





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
     
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <a href='/' className="text-lg font-medium hidden sm:block">Shephard Homes</a>
            <span className="text-lg font-medium sm:hidden">SH</span>
          </div>

      
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="/properties" className="text-gray-600 hover:text-gray-900 transition-colors">Properties</a>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
              Join Us
            </button>
          </div>

         
          <button 
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="/about" className="text-gray-600 hover:text-gray-900 px-4">About Us</a>
              <a href="/properties" className="text-gray-600 hover:text-gray-900 px-4">Properties</a>
              <div className="px-4">
                <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;