import React from "react";
import PassGen from "../assets/projects/passGen.png";
import Ecommerce from "../assets/projects/e-commerce.png";
import todoApp from "../assets/projects/todo-app.png";
import crypto from "../assets/projects/crypto-app.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Ecommerce,
      demo: 'https://e-commerce-myweb-app.netlify.app/',
      code: 'https://github.com/Functionup-mn/E-Commerce-App/tree/main/Frontend'
    },
    {
      id: 2,
      src: crypto,
      demo: 'https://fantastic-my-crypto.netlify.app/',
      code: 'https://github.com/Functionup-mn/crypto-project'
    },
    {
      id: 3,
      src: PassGen,
      demo: 'https://password-genrator-my-web.netlify.app',
      code: 'https://github.com/Functionup-mn/react-projects/tree/passGen/project-5/project-5-passGen'
    },
    {
      id: 4,
      src: todoApp,
      demo: 'https://my-todo-web-app1.netlify.app/',
      code: 'https://github.com/Functionup-mn/React-Todo-App/tree/main/firebase-todo-app'
    },
  ];
  return (
    <div className=" w-full px-4 md:px-44 bg-gradient-to-b from-black to-gray-900 text-white md:h-screen" id="projects">
      <div className=" max-w-screen-lg flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-2 inline border-gray-400">
            Projects
          </p>
          <p className="my-4">Chack out my some of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 px-12 gap-8 sm:px-0">
          {projects.map(({ id, src , demo, code}) => (
            <div key={id} className=" shadow-md shadow-gray-500 rounded-lg">
              <img
                className=" h-60 hover:scale-105 duration-300 rounded-md"
                src={src}
                alt="project-logo"
              />
              <div className=" flex justify-center items-center">
                <button className=" w-1/2 px-6 py-3 m-2 hover:scale-105 duration-200">
                  <a href={demo} target="_blank">Demo</a>
                </button>
                <button className=" w-1/2 px-6 py-3 m-2 hover:scale-105 duration-200">
                  <a href={code} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
