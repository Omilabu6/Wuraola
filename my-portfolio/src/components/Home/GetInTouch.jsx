import Magnet from '../stylesComponets/Magnet'
import React from 'react'
import { motion } from 'framer-motion'



const GetInTouch = () => {
  return (
    <div className='py-40 px-20 bg-white rounded-4xl  text-black'>
        <div>
            <div className='text-7xl'>
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
            
            <motion.hr 
             initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 950, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    backgroundColor: "white",
                    transformOrigin: "right", // 🔑 makes it expand from right
                }}
            className='mt-20 mb-10'/>
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