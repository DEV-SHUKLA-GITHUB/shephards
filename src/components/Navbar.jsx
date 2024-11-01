import React from 'react'
import logo from "../assets/cover.png"
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className='flex justify-between bg-white'>
        <Link to="/">
  <img src={logo} alt="logo" className="h-[74px]" />
</Link>

        <div className='flex pt-4 mr-10'>
            <a href="#" className='p-2 text-sm font-sans no-underline text-black'>Our Properties</a>
            <a href="#" className='p-2 text-sm font-sans no-underline text-black'>My Bookings</a>
            <a href="./contact" className='p-2 text-sm font-sans no-underline text-black'>Contact Us</a>
        <Dropdown>
      <Dropdown.Toggle variant='none' id="dropdown-basic">
        About Us
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Who are we</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    </div>
  )
}

export default Navbar