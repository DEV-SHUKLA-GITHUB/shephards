import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/carausalImg/1.jpg";
import img2 from "../assets/carausalImg/2.jpg";
import img3 from "../assets/carausalImg/3.jpg";

const GlassmorphicButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-10 py-3 rounded-md
                bg-black/20 backdrop-blur-sm
                shadow-[0_4px_15px_rgba(0,0,0,0.1)]
                transition-all duration-500
                group
                hover:bg-black/30
                hover:border-white/30
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                hover:scale-105
                active:scale-95
                text-white
                font-normal
                text-lg
                tracking-wide
                overflow-hidden
                w-44
                z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r
                      from-white/[0.05] to-transparent
                      group-hover:from-white/[0.08] group-hover:to-transparent
                      transition-all duration-500
                      rounded-md" />
      <span className="relative z-10 group-hover:text-white/90 transition-colors duration-500">
        {children}
      </span>
    </button>
  );
};

const Hero = ({ children }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={img1} className="w-full h-[550px] object-cover" alt="First slide" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className='font-serif text-white text-5xl pb-4'>First slide label</h3>
              <GlassmorphicButton onClick={() => console.log('Button 1 clicked')}>
                Explore
              </GlassmorphicButton>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="w-full h-[550px] object-cover" alt="Second slide" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className='font-serif text-white text-5xl pb-4'>First slide label</h3>
              <GlassmorphicButton onClick={() => console.log('Button 2 clicked')}>
                Explore
              </GlassmorphicButton>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="w-full h-[550px] object-cover" alt="Third slide" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className='font-serif text-white text-5xl pb-4'>First slide label</h3>
              <GlassmorphicButton onClick={() => console.log('Button 3 clicked')}>
                Explore
              </GlassmorphicButton>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Search card container positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4">
        {children}
      </div>
    </div>
  );
};

export default Hero;