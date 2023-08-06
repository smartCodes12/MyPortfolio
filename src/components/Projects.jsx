import React from "react";
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'

const Projects = () => {
  
  return (
    <>
    <div id="projects" style={{paddingBottom:"10vh"}}>
    <div style={{color:"white" ,paddingBottom:"60px",paddingTop:"70px", paddingLeft:"12px"}} className="max-w-[1000px] mx-auto  flex-col  h-full bg-black "> 
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
              <p className='py-4'> These are the Projects I've worked with</p>
              </div>
    <div style={{justifyContent:"space-around",padding:"55px", marginTop:"-60px", flexWrap:"wrap"}} className="gap-10 flex flex-row justify-center bg-black md:h-full md:flex-row md:justify-center">
    <div className="flex justify-center items-center bg-black md:pd-5 ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-40 object-cover" src={p1} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ecommerce Website</div>
          <p className="text-gray-700 text-base">I've Devlope A functional Modern Ecommerce Platform</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo
          </button>
          <a
            href="https://github.com/smartCodes12"
            target="_blank"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Git
          </a>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center bg-black md:mt-0 md:mx-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-40 object-cover" src={p2} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Personal Portfolio</div>
          <p className="text-gray-700 text-base">I devlope My Devloper Portfolio Using ReactJs</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo
          </button>
          <a
            href="https://github.com/smartCodes12"
            target="_blank"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Git
          </a>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center bg-black md:mt-0 md:mx-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-40 object-cover" src={p3} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Daily News App</div>
          <p className="text-gray-700 text-base">I've Devlope a News App with News API using ReactJs</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo
          </button>
          <a
            href="https://github.com/smartCodes12"
            target="_blank"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Git
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Projects;