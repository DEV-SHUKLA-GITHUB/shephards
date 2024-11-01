import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='bg-[#F1F3F6] p-16'>
        <h1 className='font-serif py-4'>Hear From Our Guests</h1>
        <div className='flex space-x-8'>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
    </div>
  )
}

export default Testimonials