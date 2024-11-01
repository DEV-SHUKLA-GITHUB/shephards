import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoBed, IoHome } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const TestimonialCard = () => {
  return (
    <div className='bg-white w-1/4 rounded-xl p-6'>
        <h2 className='text-[#5F2517] font-serif'>Sara H</h2>
        <span className='flex text-[#5F2517]'><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></span>
        <div className='flex justify-between my-4'><span className='flex text-sm'><IoBed className=" mt-1" /><span className="px-2">Downtown 1BDR</span></span><span className='flex text-sm'> <SlCalender className=' pt-1'/><span className="px-2">Jul 2023</span></span></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias dolor corrupti facilis qui harum expedita quia mollitia dolore eveniet!</p>
    </div>
  )
}

export default TestimonialCard