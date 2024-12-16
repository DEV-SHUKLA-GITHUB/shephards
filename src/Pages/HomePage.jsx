import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchCard from '../components/SearchCard'
import Properties from '../components/Properties'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

const HomePage = () => {
  return (
    <div className='bg-white w-screen'>
      <div className="relative">
        <Hero>
          <SearchCard />
        </Hero>
      <WhyUs/>
        <div className="pt-24">
          <Properties/>
        </div>
      </div>
       <Stats/> 
      <Testimonials/>
    </div>
  )
}

export default HomePage