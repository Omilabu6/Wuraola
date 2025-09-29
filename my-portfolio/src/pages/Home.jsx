import { useEffect, useState } from 'react'
import ScrollVelocity from '../components/stylesComponets/ScrollVelocity';
import { AnimatePresence, motion } from 'framer-motion';
import wura from '../assets/wura.png'
import Magnet from '../components/stylesComponets/Magnet';
import arrow1 from '../assets/arrow.png'
import arrow from '../assets/Group 855.png'
import SecondSection from '../components/Home/SecondSection';
import SelectedWorks from '../components/Home/SelectedWorks';
import Services from '../components/Home/Services';
import FAQ from '../components/Home/FAQ';
import GetInTouch from '../components/Home/GetInTouch';

function Home({ setIsImageClicked }) {
const [IsExpanded , setIsExpanded] = useState(false)


 return (
      <div>
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
          <AnimatePresence>
            {IsExpanded && (
              <motion.div
                initial={{ scale: 4, borderRadius: "1rem" }}
                animate={{ scale: 20, borderRadius: 0 }}
                exit={{ scale: 0, borderRadius: "1rem" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 150,
                  height: 150,
                  backgroundColor: "rgba(90, 103, 216, 0.61)",
                  zIndex: 0, 
                }}
              />
            )}
          </AnimatePresence>
          <motion.img
            src={wura}
            alt="centered"
            initial={{ scale: 1 }}
            animate={{ scale: IsExpanded ? 1.2 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "13%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              cursor: "pointer",
              borderRadius: "1rem",
              backgroundColor: IsExpanded ? "transparent" : "rgba(90, 103, 216, 0.61)",
              padding: "20px 10px 0 10px",

            }}
            onClick={() => {
              setIsImageClicked(true);
              setIsExpanded(true);
            }}
          />
          {/* Text */}
          {IsExpanded && (
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className=' top-[42vh]  ml-3   absolute z-3 '
                  >
                    <Magnet padding={50} disabled={false} magnetStrength={3} >
                      <div className=' w-[100px] transition flex items-center  shadow-lg  cursor-pointer h-[100px] border-2 rounded-full   text-sm font-bold'>
                      <Magnet padding={50} disabled={false} magnetStrength={3}>
                        <div className=' flex items-center '>
                         <a  href="mailto:omilabuw@gmail.com "  className='pl-2 text-center'>  Hit me up</a>
                        <img src={arrow1} alt=""  className='w-[10px] -rotate-90 ml-1 '/>
                        </div>
                      </Magnet>
                      </div>
                   </Magnet>
                   
               </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "66%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  color: "#000",
                  fontSize: "2rem",
                }}
              >
                <div className='bg-black border-2 rounded-3xl border-white p-2 px-3 text-white text-xl'>
                  CREATIVE FRONTEND DEVELOPER
                </div>
                <div >
                  <img src={arrow} alt="" className='-translate-y-10 w-[20%] translate-x-75 -rotate-50' />
                  <h2 className=' text-sm w-50 -translate-y-10  translate-x-50 '>I build cool stuff—like 
                    engaging, responsive
                    websites and delightful
                    user experiences
                  </h2>
                </div>
              </motion.div>
                            
               <ScrollVelocity
              texts={['ELIZABETH . WURAOLA . OMILABU.']} 
              className="custom-scroll-text "
            />

          </div>
          )}

        
        </div>
         {IsExpanded &&
                <div>
            <SecondSection />
            <section id="works"> <SelectedWorks /></section>
            <Services />
              <FAQ />
              <GetInTouch />
          </div>
          }
  </div>
  );
}
export default Home
