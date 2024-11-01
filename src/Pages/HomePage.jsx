import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchCard from '../components/SearchCard'
import Properties from '../components/Properties'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div className='bg-[#F1F3F6]'>
      <div className="relative">
        <Hero>
          <SearchCard />
        </Hero>
        <div className="pt-24">
          <Properties/>
        </div>
      </div>
      <WhyUs/>
      <Testimonials/>
    </div>
  )
}

export default HomePage