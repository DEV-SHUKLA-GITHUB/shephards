import React from 'react'
import img1 from '../assets/carausalImg/1.jpg'
import { SiWebmoney } from "react-icons/si";
const WhyUs = () => {
  return (

<div className='px-40 py-10'>
       <h2 className='text-3xl font-semibold text-center'>Why choose Shepherd ?</h2>
       <div className='md:flex justify-around pt-10 text-center'>
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
       <div className='md:flex justify-around pt-10 text-center'>
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