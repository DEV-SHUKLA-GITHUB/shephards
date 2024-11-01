import React from 'react'
import logo from '../../vector/default-monochrome-white.svg'
import { CiLocationOn } from "react-icons/ci";
import { IoLogoInstagram ,IoLogoLinkedin,IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=' text-white'>
        <div className='bg-[#303131] flex justify-evenly py-14 '>
            <div>
            <img src={logo} alt='logo' className='h-[40px] py-2 my-4'/>
            <h2 className='my-4 text-lg'>Our Destinations</h2>
            <div>
            <span className='flex text-gray-400 '><CiLocationOn className='pt-1 mx-1'/> Bangalore</span>
            <span className='flex text-gray-400 '><CiLocationOn className='pt-1 mx-1'/> Bangalore</span>
            <span className='flex text-gray-400 '><CiLocationOn className='pt-1 mx-1'/> Bangalore</span>
            </div>
            </div>
            <div> <h2 className='my-4 text-lg pt-16'>Our Destinations</h2>
            <div>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            </div></div>
            <div>  <h2 className='my-4 text-lg pt-16'>Our Destinations</h2>
            <div>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            </div></div>
            <div>  <h2 className='my-4 text-lg pt-16'>Our Destinations</h2>
            <div>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            <span className='flex text-gray-400 '> Bangalore</span>
            </div></div>
        </div>
        <div className="bg-black flex justify-between px-20 py-6">
  <div className="flex space-x-4 text-sm text-gray-400">
    <span>Copyright &copy; 2024 Shephards</span>
    <span>T&Cs</span>
    <span>Cancellation Policy</span>
    <span>Privacy Policy</span>
    <span>Sitemap</span>
  </div>
  <div className="flex space-x-4">
    <IoLogoInstagram className="text-3xl text-gray-400" />
    <IoLogoLinkedin className="text-3xl text-gray-400" />
    <IoLogoFacebook className="text-3xl text-gray-400" />
    <FaXTwitter className="text-3xl text-gray-400" />
  </div>
</div>

    </div>
  )
}

export default Footer