import React from 'react'
import img1 from '../assets/carausalImg/1.jpg'
const WhyUs = () => {
  return (
    <div className='bg-white flex space-x-14 px-20 p-8'>
       <div className=' justify-around'>
       <h1 className='font-serif pt-10'>Why Shephards</h1>
  <h2 className='font-serif text-[#5F2517] text-xl pt-10'>Flexibility on your terms</h2>
        <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
 </div>
        <div>  <h2 className='font-serif text-[#5F2517] text-xl pt-32 mt-2'>Flexibility on your terms</h2>
        <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
 </div>
        <div>  <h2 className='font-serif text-[#5F2517] text-xl pt-32 mt-2'>Flexibility on your terms</h2>
        <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
 </div>
      <img
        src={img1}
        alt="Custom Styled"
        className=" h-[25rem] w-[24%] rounded-tl-[100px]" // Apply rounding to specific corners
      />
         </div>
  )
}

export default WhyUs