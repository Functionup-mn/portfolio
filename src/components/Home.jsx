import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-900" id="home">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col h-full justify-center text-white">
          <h1 className=" text-4xl sm:text-7xl font-bold">I'm a Frontend Developer</h1>
          <p className=" text-gray-400 py-4 max-w-md">
            I am a fresher but I have to work on it and I also love to work on
            web appliaction using technologies like React and Tailwind.
          </p>
          <div >
            <Link to="projects" smooth duration={500} className=" group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600">
              Projects
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className=" ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="profile-logo"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
