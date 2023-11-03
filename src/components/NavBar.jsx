import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'projects',
        },
        {
            id: 4,
            link: 'skills',
        },
        {
            id: 5,
            link: 'contact',
        }
    ];
    // {console.log(links)} 
  return (
    <div className=' flex items-center justify-between h-20 w-full px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Nadeem</h1>
      </div>

      <ul className='hidden md:flex'>
          {
            links.map(({id, link}) =>( 
                <li key={id} className='px-3 cursor-pointer font-medium capitalize text-gray-400 hover:scale-110 duration-200 '>
                  <Link to={link} offset={-100} smooth={true} duration={500}>{link}</Link>
                </li>
                ))
          } 
          
      </ul>
      <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
         {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      
      {
        nav && (
             <ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
      {
            links.map(({id,link}) =>(
                <li key={id} className=' cursor-pointer capitalize p-5 text-3xl '>
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
            ))
          } 
      </ul>
        )
      }
     
    </div>
  )
}

export default NavBar
