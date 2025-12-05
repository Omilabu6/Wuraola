import Magnet from '../stylesComponets/Magnet'
import React from 'react'
import { motion } from 'framer-motion'



const GetInTouch = () => {
  return (
    <div className='py-40 md:px-20 px-5 bg-zinc-800  text-white'>
        <div>
            <div className='md:text-7xl text-4xl'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 , delay: 0.5}}
               >
                Let's 
              </motion.div>
               <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 , delay: 0.7}}
               >
                work together 
              </motion.div>
            </div>
            
            <hr
            className='md:mt-20 mt-10 mb-10 w-[85%]'/>
            <Magnet padding={50} disabled={false} magnetStrength={3}>
             <div><h1 className='text-xl text-center cursor-pointer rounded-4xl px-5 w-[200px] bg-indigo-400 py-5 '><Magnet padding={50} disabled={false} magnetStrength={3}>Get in Touch</Magnet></h1></div>
            </Magnet>
            <div className='flex flex-col items-end  gap-5'>
                <h1>omilabuw@gmail.com</h1>
                <h1>+234 8133909844</h1>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch