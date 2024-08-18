import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import userProfile from "../assets/profile.png";
import Logo from "./Logo";
import ThemeSwitch from "./Switch";


const Navbar = () => {
  const user = {};
  const [showProfile, setShowProfile] = useState(false);

  return (
  <div className='flex flex-col md:flex-row w-full py-5  items-center justify-between gap-4 md:gap-0'>
    <div className='flex gap-2 text-[20px] md:hidden lg:flex'>
    <Link to='/' className='text-red-600'>
          <FaYoutube />
        </Link>
        <Link to='/' className='text-blue-600'>
          <FaFacebook />
        </Link>
        <Link to='/' className='text-rose-600'>
          <FaInstagram />
        </Link>
        <Link to='/' className='text-blue-500'>
          <FaTwitterSquare />
        </Link>
    </div>

    <Logo />
    <div className='hidden md:flex gap-14 items-center'>
        <ul className='flex gap-8 text-base text-black dark:text-white'>
          <Link to='/'>Home</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>About</Link>
        </ul>
        
        <ThemeSwitch />
    
    </div>

  </div>
    );
};

export default Navbar;