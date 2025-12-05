import { useEffect, useState } from 'react'
import ScrollVelocity from '../components/stylesComponets/ScrollVelocity';
import { AnimatePresence, motion } from 'framer-motion';
import Magnet from '../components/stylesComponets/Magnet';
import arrow1 from '../assets/arrow.png'
import arrow from '../assets/Group 855.png'
import SecondSection from '../components/Home/SecondSection';
import SelectedWorks from '../components/Home/SelectedWorks';
import Services from '../components/Home/Services';
import FAQ from '../components/Home/FAQ';
import GetInTouch from '../components/Home/GetInTouch';
import Footer from '../components/Footer';

function Home({ setIsImageClicked }) {
const [IsExpanded , setIsExpanded] = useState(false)
const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
const [isHoveringImage, setIsHoveringImage] = useState(false);

useEffect(() => {
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);


 return (
      <div>
        {/* Custom Cursor for Desktop */}
        {isHoveringImage && !IsExpanded && (
          <div
            className="fixed pointer-events-none z-50 transition-all duration-200 hidden md:block"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y + 25}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Click me
            </div>
          </div>
        )}

        {/* Touch Indicator for Mobile */}
        {!IsExpanded && (
          <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow-2xl animate-bounce">
              Tap me
            </div>
          </div>
        )}

        <div  style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }} className=''>
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
            src="/wura.webp"
            alt="centered"
            initial={{ scale: 1 }}
            animate={{ scale: IsExpanded ? 1.2 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundColor: IsExpanded ? "transparent" : "rgba(90, 103, 216, 0.61)",
            }}
            className='openingImage'
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
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
                <div className='bg-black border-2 hidden md:block rounded-3xl border-white p-2 px-3 text-white text-lg md:text-xl'>
                  CREATIVE FRONTEND DEVELOPER
                </div>
                <div >
                  <img src={arrow} alt="" className='-translate-y-10 w-[20%] translate-x-75 -rotate-50' />
                  <h2 className=' text-sm w-50 -translate-y-10  translate-x-50 '>I build cool websites that are very
                    interactive, responsive 
                    and give users a delightful.
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
              <Footer />
          </div>
          }
  </div>
  );
}
export default Home