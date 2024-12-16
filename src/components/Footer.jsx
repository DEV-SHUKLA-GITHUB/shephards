import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Golden bar */}
      <div className="h-8 sm:h-16 bg-[#E9B661]" />

      {/* Main content */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-6">
          {/* CTA Section */}
          <div className="mb-16 sm:mb-32">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-[2.5rem] leading-tight font-medium text-gray-900">
                  Be a part of the next<br />
                  real estate revolution
                </h2>
                <p className="mt-3 text-gray-700 text-sm sm:text-base">
                  One liner and stuff about hiring interns and all that jazz. Write a<br className="hidden sm:block" />
                  bit more descriptions here
                </p>
              </div>
              <button className="bg-[#249063] text-white px-8 sm:px-16 py-3 sm:py-5 rounded-full text-xl sm:text-2xl">
                Join Us
              </button>
            </div>
          </div>

          {/* Navigation - Stack on mobile */}
          <nav className="mb-8 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
              {/* Navigation links here */}
            </div>
          </nav>

          {/* Info sections - Stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-32 mb-12 sm:mb-20">
            {/* Contact and address info here */}
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-400 order-2 sm:order-1">© 2023 — Copyright</p>
            <button className="bg-[#249063] p-2 rounded-full order-1 sm:order-2">
              {/* Scroll to top icon */}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;