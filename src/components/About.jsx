import React from 'react';

const About = () => {
  return (
    <div id='about' name="about" className="w-full pb-40 h-screen bg-gradient-to-b from-gray-800 to-black pt-44">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>About Me</p>
            </div>
            <p className='text-xl mt-20 text-white'>I'm a student at the faculty of computers and AI, medical informatics department, and I'm a full-stack software engineer, I've some experience in building web applications back-end and front-end,
                    I've skills of front-end development using HTML, CSS, JavaScript, bootsrap, tailwind CSS and React js,
                    back-end development using python, django, django rest framework, PHP, laravel, MySQL and postgreSQL, I've built a lot of projects using these skills in the college
                    I'm looking for a new opportunity to learn and gain more experience in software development as an intern or a developer.
            </p>
        </div>
    </div>
  )
}

export default About