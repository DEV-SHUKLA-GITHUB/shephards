import React from 'react'
import PropertyCard from './PropertyCard'

const Properties = () => {
  return (
    <div className='px-24 pb-4'>
        <h1 className='font-serif px-6 py-4'>Featured Serviced Apartments For Rent In</h1>
        <div className='flex space-x-8'>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </div>
    </div>
  )
}

export default Properties