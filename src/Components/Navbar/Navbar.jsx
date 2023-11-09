
import React ,{useState}from 'react'
import { motion } from 'framer-motion';
import {FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {SiNintendogamecube} from 'react-icons/si'

const links=[

  {name:'mmorpg',path:'/'},
  {name:'shooter',path:'/shooter'},
  {name:'Pixel',path:'/pixel'},
  {name:'permadeath',path:'/permadeath'},
  {name:'superhero',path:'/superhero'},
  {name:'sailing',path:'/sailing'},
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const sidebarVariants = {
      open: {
        x: -100,
        opacity:1,
        y:0,
        transition: {
          ease: 'easeOut',
          duration: 0.3,
          when:'beforeChildren',
          staggerChildren:.2
        },
      },
      closed: {
        x: 60,
        opacity:0,
        transition: {
          ease: 'easeIn',
          duration: 0.3,
          
        },
      },
  };
    const childVariants = {
      open: {
        y: 50,
        x:0,
        transition: {
          ease: 'easeOut',
          duration: 0.5,
          
        },
      },
      closed: {
        // y:200,
        x:200,
        transition: {
          ease: 'easeIn',
          duration: 0.3,
          
        },
      },
  };
  return <>
  
  <div className="bg-slate-700 scroll-m-48 scroll-smooth  ps-4 flex mt-0 fixed z-10 w-full top-0  h-16">
  <div className="flex items-center text-white"> 
  <div className="text-3xl  ">

    <SiNintendogamecube/> 
  </div>
      <h1 className=' text-2xl ms-1'>
       GAME REVIEWS
      </h1>
</div>
      <div className='fixed right-0 mt-1  z-10'>
          <button className='bg-gray-200 p-5  rounded-full relative right-1 z-10' onClick={handleToggle}><FaBars/></button>
          <motion.nav
            className="sidebar px-5 text-center mt-1 text-white bg-gray-800 shadow-white shadow-2xl h-screen absolute z-10 w-40"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            
            variants={sidebarVariants}
            >
          
            
                {links.map((link)=>
                <motion.h1
                  variants={childVariants}
                  whileHover={{scale:1.1}}
              className='my-2  cursor-pointer border p-2 ' >
    <Link className='' to={link.path}>{link.name}</Link></motion.h1>)}
            

          
          </motion.nav>
        </div>
        
  </div>
    </>
}
