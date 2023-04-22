import React from 'react';
import git from '../assets/exp/git.png';
import js from '../assets/exp/js.jpg';
import html from '../assets/exp/html.jpg';
import css from '../assets/exp/css.jpg';
import php from '../assets/exp/php.jpg';
import python from '../assets/exp/python.jpg';
import reactImage from '../assets/exp/react.jpg';
import mysql from '../assets/exp/mysql.png';
import api from '../assets/exp/api.jpg';
import laravel from '../assets/exp/laravel.png';
import tailwind from '../assets/exp/tailwind.png';
import django from '../assets/exp/django.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-cyan-500'
        },
        {
            id: 4,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: reactImage,
            title: 'React JS',
            style: 'shadow-cyan-500'
        },
        {
            id: 6,
            src: php,
            title: 'PHP',
            style: 'shadow-cyan-500'
        },
        {
            id: 7,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-red-500'
        },
        {
            id: 8,
            src: python,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: api,
            title: 'RESTful APIs',
            style: 'shadow-green-500'
        },
        {
            id: 12,
            src: git,
            title: 'GIT',
            style: 'shadow-orange-500'
        },
    ];

  return (
    <div id='skills' name='skills' className='flex flex-col bg-gradient-to-b from-gray-800 to-black sm:pb-52 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-3'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full bg-gradient-to-b from-gray-800 to-black text-white grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {techs.map(({id, src, title, style}) => {
                    return (<div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 p rounded-lg mx-6 ${style}`}>
                        <img src={src} alt=""  className='rounded-3xl w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>);
            })}
        </div>
    </div>
  )
}

export default Experience;