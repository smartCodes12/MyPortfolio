import React , {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../img/logo2.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => {setNav(!nav)
  console.log("clicked")}

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300 '>
      <div>
          {/* <img src={} alt="logo" style={{width: "150px"}} /> */}
      </div>
      
        <ul className='hidden md:flex'>
          <li><Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link></li>
          <li><Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link></li>
          <li><Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link></li>
          <li><Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link></li>
          <li><Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link></li>
        </ul>

      {/* hamburgur */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile view */}
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>  
          <li className='py-6 text-4xl'><Link
          onClick={handleClick}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link></li>
          <li className='py-6 text-4xl'><Link
          onClick={handleClick}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link></li>
          <li className='py-6 text-4xl'><Link
          onClick={handleClick}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link></li>
          <li className='py-6 text-4xl'><Link
          onClick={handleClick}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link></li>
          <li className='py-6 text-4xl'><Link
          onClick={handleClick}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link></li>
        </ul> 

      {/* side icons  */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://www.linkedin.com/in/sarthak-pawse-95a329284/?originalSubdomain=in" target='_blank' rel="noopener">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://github.com/smartCodes12" rel="noopener" target='_blank'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="mailto: twelvesmartcodes@example.com" rel="noopener" target='_blank'>
              Mail <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href={logo} rel="noopener" target='_blank'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar