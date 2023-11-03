import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import react from '../assets/react.png'


const Skills = () => {

    const skills = [
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
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 4,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-sky-300'
        },
        {
            id: 6,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]
  return (
    <div className='w-full px-4 md:px-44 py-10 bg-gradient-to-b from-gray-900 to-black text-white md:h-screen' id='skills'>
      <div className=' max-w-screen-lg flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold border-b-2 inline border-gray-400'>Skills</p>
        <p className='my-4'>These are the technologies I have worked with </p>
      </div>

      <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0'>
        {
            skills.map(({id, src, title, style}) => (
                 <div key={id} className={`flex flex-col items-center hover:scale-105 duration-300 shadow-md rounded-lg ${style}`}>
         <img className=' w-20 mx-auto' src={src} alt="logo" />
         <p className=' pt-3'>{title}</p>
      </div>
            ))
        }
     
      </div>
      </div>
    </div>
  )
}

export default Skills
