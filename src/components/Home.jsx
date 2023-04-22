import React from 'react';
import myImage from '../assets/mypic2.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white scroll-smooth'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2  className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Engineer</h2>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group mt-8 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={myImage} alt="my profile" className="rounded-2xl max-w-2xl mx-auto w-2/3 md:w-full top-20"/>
            </div>
        </div>
    </div>
  )
}

export default Home