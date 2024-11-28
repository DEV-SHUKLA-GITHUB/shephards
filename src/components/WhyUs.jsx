import React from 'react'
import img1 from '../assets/carausalImg/1.jpg'
import { SiWebmoney } from "react-icons/si";
const WhyUs = () => {
  return (
//     <div className='bg-white flex space-x-14 px-20 p-8'>
//        <div className=' justify-around'>
//        <h1 className='font-serif pt-10'>Why Shephards</h1>
//   <h2 className='font-serif text-[#5F2517] text-xl pt-10'>Flexibility on your terms</h2>
//         <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
//  </div>
//         <div>  <h2 className='font-serif text-[#5F2517] text-xl pt-32 mt-2'>Flexibility on your terms</h2>
//         <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
//  </div>
//         <div>  <h2 className='font-serif text-[#5F2517] text-xl pt-32 mt-2'>Flexibility on your terms</h2>
//         <p className='text-sm text-gray-500'>Enjoy hassle-free living at Silkhaus for a month, a quarter, or a year. Just show up with your suitcase and we'll take care of the rest.</p>
//  </div>
//       <img
//         src={img1}
//         alt="Custom Styled"
//         className=" h-[25rem] w-[24%] rounded-tl-[100px]" // Apply rounding to specific corners
//       />
//          </div>
<div className='px-40 py-10'>
       <h2 className='text-3xl font-semibold text-center'>Why choose Shepherd ?</h2>
       <div className='flex justify-around pt-10 text-center'>
    <div className='flex flex-col items-center'>
        <SiWebmoney className='text-4xl text-[#249063]' /> {/* Adjust size as needed */}
        <h3 className='mt-2'>Complete Control</h3>
        <p className='mt-1'>Provides end to end rental and property management to <br /> the unit owners</p>
    </div>
    <div className='flex flex-col items-center'>
        <SiWebmoney className='text-4xl text-[#249063]' /> {/* Adjust size as needed */}
        <h3 className='mt-2'>Complete Control</h3>
        <p className='mt-1'>Provides end to end rental and property management to <br /> the unit owners</p>
    </div>
</div>
       <div className='flex justify-around pt-10 text-center'>
    <div className='flex flex-col items-center'>
        <SiWebmoney className='text-4xl text-[#249063]' /> {/* Adjust size as needed */}
        <h3 className='mt-2'>Complete Control</h3>
        <p className='mt-1'>Provides end to end rental and property management to <br /> the unit owners</p>
    </div>
    <div className='flex flex-col items-center'>
        <SiWebmoney className='text-4xl text-[#249063]' /> {/* Adjust size as needed */}
        <h3 className='mt-2'>Complete Control</h3>
        <p className='mt-1'>Provides end to end rental and property management to <br /> the unit owners</p>
    </div>
</div>

</div>
  )
}

export default WhyUs