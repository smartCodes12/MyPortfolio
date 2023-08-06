import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>

        <div style={{paddingTop:"15px"}} className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-black' >
            <p className='text-pink-600'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Sarthak Pawse</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Frontend Devloper</h2>
            <p className='text-[#8892b0] py-6 max-w-[700px]'>Passionate about creating captivating user experiences, I am a
                dedicated beginner-level Web developer with a strong foundation in
                HTML, CSS, and JavaScript. I gained hands-on experience building
                dynamic web applications in front-end frameworks such as React . I am
                excited to embark on new challenges and contribute to the ever-evolving
                world of Web development.</p>
                <div>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span></button>
                </Link>
                </div>

        </div>
      
    </div>
  )
}

export default Home
