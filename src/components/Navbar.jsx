import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed scroll-smooth">
        <div>
            <h1 className='text-5xl font-signature ml-2'>Ahmad Maghrapy</h1>
        </div>
        <ul className='hidden md:flex'>
             <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to="home" smooth duration={500}>Home</Link></li>
             <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to="about" smooth duration={500}>About</Link></li>
             <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to="portfolio" smooth duration={500}>Portfolio</Link></li>
             <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to="skills" smooth duration={500}>Skills</Link></li>
             <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
        
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {setNav(!nav)}} to="home" smooth duration={500}>Home</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {setNav(!nav)}} to="about" smooth duration={500}>About</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {setNav(!nav)}} to="portfolio" smooth duration={500}>Portfolio</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {setNav(!nav)}} to="skills" smooth duration={500}>Skills</Link></li>
                <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {setNav(!nav)}} to="contact" smooth duration={500}>Contact</Link></li>
            </ul>
        )}
    </div>
  )
}

export default Navbar