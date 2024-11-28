import React, { useState } from 'react';
import img1 from "../assets/carausalImg/1.jpg";
import { SiWebmoney } from 'react-icons/si'; // Assuming you're using this icon

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
      <h1 className="text-4xl md:text-6xl font-semibold text-navy-900 mb-4">
        Turn your properties into <br /> investments
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        <span className='text-[#249063]'>Shepherd</span> partners with unit owners to offer a luxury rental <br /> experience at a reasonable cost.
      </p>
      
      {/* Button with z-index and positioning */}
      <button className="relative z-50 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors mb-16">
        Contact Us
      </button>

      <div 
        className="relative p-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-3xl mx-auto relative">
          {/* Outermost decorative ring */}
          <div className="absolute z-10 inset-0 rounded-t-full transition-all duration-700 ease-in-out" style={{ margin: '-96px' }} />
          <div className="absolute inset-0 rounded-t-full transition-all duration-700 ease-in-out" style={{ margin: '-166px', border: '3px solid #FFD700' }} />
          <div className="absolute inset-0 rounded-t-full transition-all duration-700 ease-in-out" style={{ border: '3px solid #FFD700', margin: '-115px' }} />
          <div className="absolute inset-0 rounded-t-full transition-all duration-700 ease-in-out" style={{ border: '4px solid #F5E6CC', margin: '-68px' }} />
          <div className="absolute inset-0 rounded-t-full transition-all duration-700 ease-in-out" style={{ border: '5px solid #E6D5B8', margin: '-24px' }} />

          {/* Main frame with enhanced border */}
          <div className="relative rounded-t-full overflow-hidden">
            <div className="absolute inset-0 rounded-t-full transition-all duration-700" style={{ border: '6px solid white' }} />
            <img src={img1} alt="Luxury interior" className="w-full h-screen object-cover relative rounded-t-full transition-transform duration-700" />
          </div>
        </div>

        {/* Enhanced background glow */}
        <div 
          className="absolute inset-0 -z-10 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle at center, #FFD700 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;