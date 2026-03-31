import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import Btn from '../Common/Btn'
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";


const Navbar = () => {
  let [mobileMenu, setMobileMenu]= useState(false);
  return (
    <>
    <nav className='mt-5 md:mt-12.5 absolute top-0 left-0 w-full z-10'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo w-2/5 md:w-1/5">
          <a href="">
            <img src={logo} alt="" />
          </a>
          </div>
          <div className="menu w-3/5 hidden md:block">
            <ul className='flex justify-center md:gap-5 lg:gap-15'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Carreer</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="btn flex items-center md:w-1/5 text-end">
          {/* props দিয়ে পাঠানো হলো । একই কালার তবুও বুঝানোর জন্য দেওয়া হলো । */}
          <Btn text="Contact" className=' hidden md:block md:bg-[#6A4DF4]'></Btn>
          
          {

          mobileMenu ? 
          <GrClose onClick={()=>setMobileMenu(false)} className='transition text-2xl text-white md:hidden absolute top-2.4 right-2.5  hover:text-red-500 duration-300'/>
          :
          <FaBarsStaggered onClick={()=>setMobileMenu(true)} className='transition text-2xl text-white md:hidden absolute top-2.4 right-2.5 hover:text-[#6A4DF4] duration-500 ' />
          
          }



          </div>

          {/* mobile menu */}
          <div className={`menu absolute ${mobileMenu ? "left-0" : "-left-full"} duration-500 py-3 top-[140%] w-full md:hidden bg-linear-to-r from-[#6A4DF4] to-black`}>
            <ul className='flex flex-col text-center text-white justify-center gap-5 bg-linear-to-r from-black to-[#6A4DF4]'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Carreer</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          {/* mobile menu */}

        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar