import React from 'react';
import discussionBoard from '../assets/portfolio/discussion board.png';
import library from '../assets/portfolio/library.png';
import kasper from '../assets/portfolio/kasper.png';
import specialOne from '../assets/portfolio/specialone.png';
import laragigs from '../assets/portfolio/laragigs1.png';
import digitalBond from '../assets/portfolio/digitalbond.png';

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: discussionBoard,
            name: 'discussion board web app',
            link: 'https://github.com/Ahmedmaghrapy11/discussion_board'
        },
        {
            id:2,
            src: library,
            name: 'library management system',
            link: 'https://github.com/Ahmedmaghrapy11/library_management_system'
        },
        {
            id:3,
            src: kasper,
            name: 'kasper special design',
            link: 'https://github.com/Ahmedmaghrapy11/template_two'
        },
        {
            id:4,
            src: specialOne,
            name: 'agency special design',
            link: 'https://github.com/Ahmedmaghrapy11/special_design/tree/master'
        },
        {
            id:5,
            src: laragigs,
            name: 'jobs web app',
            link: 'https://github.com/Ahmedmaghrapy11/laragigs'
        },
        {
            id:6,
            src: digitalBond,
            name: 'digital bond job application',
            link: 'https://github.com/Ahmedmaghrapy11/DigitalBondTask'
        }
    ]

  return (
    <div id='portfolio' name="portfolio" className='bg-gradient-to-b from-black to-gray-800 pb-40 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id, src, name, link}) => {
                return(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <p className="m-4 capitalize">{name}</p>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link} rel='noreferrer'target='_blank'>Code</a></button>
                            </div>
                        </div>
                );
            })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio