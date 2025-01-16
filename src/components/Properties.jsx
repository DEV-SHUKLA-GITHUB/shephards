import React from 'react';
import PropertyCard from './PropertyCard';
import img1 from '../assets/carausalImg/1.jpg';
import img2 from '../assets/carausalImg/2.jpg';
import img3 from '../assets/carausalImg/3.jpg';
import img4 from '../assets/carausalImg/4.jpg';
import img5  from '../assets/carausalImg/5.jpg';

const Properties = () => {
  // Combine all property cards into a single array
  const properties = [1, 2, 3, 4, 5]; // This can be replaced with actual property data

  return (
    <div className="mx-auto px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">
        Brilliant Properties Across Neighborhoods
      </h1>
      <div className="flex flex-wrap justify-center gap-8">

      <PropertyCard img={img1}/>
      <PropertyCard img={img2}/>
      <PropertyCard img={img3}/>
      <PropertyCard img={img4}/>
      <PropertyCard img={img5}/>
 
</div>


      </div>
  );
};

export default Properties;
