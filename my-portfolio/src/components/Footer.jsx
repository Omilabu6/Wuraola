import React from 'react'
import X from '../assets/X.png'
import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
  return (
    <div className='mt-0'>
      <div className='flex flex-col   justify-between bg-zinc-800 text-white'>
        <div className='p-10 pt-25 gap-2 flex flex-col'>
          <div className="flex">
           <a rel="stylesheet" href="https://x.com/wur38094" > <img src={X} alt="" className='w-9 bg-white  rounded-full p-2 mt-2' /></a>
            <a rel="stylesheet" href="www.linkedin.com/in/omilabu-wuraola-7a200b329" ><img src='/LinkedIn.webp' alt="" className='w-13 ' /></a>  
          </div>
          <div className='flex md:flex-row flex-col  pt-5 '>
            <Link to='/' className='text-xl  font-light hover:border-b-2 duration-200 hover:text-indigo-400 transition transform hover:border-indigo-400'>Home</Link>
            <Link to='/about' className='text-xl md:ml-5 font-light hover:border-b-2 duration-200 hover:text-indigo-400 transition transform hover:border-indigo-400'>About</Link>
            <Link to='#services' className='text-xl md:ml-5 font-light hover:border-b-2 duration-200 hover:text-indigo-400 transition transform hover:border-indigo-400'>Services</Link>
            <Link to='#works' className='text-xl md:ml-5 font-light hover:border-b-2 duration-200 hover:text-indigo-400 transition transform hover:border-indigo-400'>Works</Link>
            <Link to='/contact' className='text-xl md:ml-5 font-light hover:border-b-2 duration-200 hover:text-indigo-400 transition transform hover:border-indigo-400'>Contact</Link>
          </div>
        </div>
          <h1 className='footerText mt-35 mx-auto'>ELIZABETH W.
          </h1>
      </div>
    </div>
  )
}

export default Footer