import React, { useState } from 'react';
import img1 from "../assets/carausalImg/1.jpg";

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
      
      <button className="relative z-50 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors mb-16">
        Contact Us
      </button>

      <div 
        className="relative p-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-3xl mx-auto relative">
      
          <div className="absolute inset-0 rounded-t-full border border-[#E6D5B8] transition-all duration-500"
               style={{ margin: '-20px', opacity: '0.4' }} />
          
          <div className="absolute inset-0 rounded-t-full border-2 border-[#E6D5B8] transition-all duration-500"
               style={{ margin: '-40px', opacity: '0.5' }} />
          
          <div className="absolute inset-0 rounded-t-full border-2 border-[#FFD700] transition-all duration-500"
               style={{ margin: '-60px', opacity: '0.3' }} />
          
          <div className="absolute inset-0 rounded-t-full border-2 border-[#FFD700] transition-all duration-500"
               style={{ margin: '-80px', opacity: '0.2' }} />
          
          <div className="absolute inset-0 rounded-t-full border-3 border-[#FFD700] transition-all duration-500"
               style={{ margin: '-100px', opacity: '0.1' }} />

        
          <div className="relative rounded-t-full overflow-hidden">
            <div className="absolute inset-0 rounded-t-full border-4 border-white" />
            <img 
              src={img1} 
              alt="Luxury interior" 
              className={`w-full h-auto object-cover rounded-t-full transition-transform duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        </div>


        <div 
          className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
            isHovered ? 'opacity-75' : 'opacity-50'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;