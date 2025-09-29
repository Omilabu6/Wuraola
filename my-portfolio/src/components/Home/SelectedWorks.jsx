
import React, { useState } from 'react'
import wakamate from '../../assets/wakamate.png'
import luxry from '../../assets/luxry.png'
import mentra from '../../assets/mentra.png'
import bw from '../../assets/bw.png'
import FlowingMenu from '../stylesComponets/FlowingMenue';
import { AnimatePresence, motion } from 'framer-motion';

const demoItems = [
  { 
    link: 'https://waka-mate-ai.vercel.app/', 
    text: 'WAKAMATE', 
    image: wakamate,
    description: 'WakaMate AI is an AI assistant that helps small vendors plan routes, track sales, restock smartly, and grow with ease.' 
  },
  { 
    link: 'https://mentra-kb84.vercel.app/', 
    text: 'MENTRA', 
    image: mentra,
    description: 'Mentra is an empathetic AI chatbot offering 24/7 mental health support, emotion analysis, and personalized guidance, with privacy-first, crisis detection, and cross-platform access.' 
  },
  { 
    link: 'https://luxury-design-challenge.vercel.app/', 
    text: 'ETERNA', 
    image: luxry,
    description: 'Eterna curates exclusive, luxurious escapes where every destination is a masterpiece crafted for the discerning traveler.' 
  },
  { 
    link: 'https://bwdesigns.vercel.app/', 
    text: 'Black and White', 
    image: bw,
    description: 'BLK + WHT is a minimalist fashion brand offering bold, black-and-white essentials that express confidence and individuality.' 
  }
];

// Modal/Popup component for displaying selected item details
function DemoGallery({ activeItem, onClose, onNext }) {
  if (!activeItem) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed  inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking backdrop
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-white rounded-xl p-6 w-[500px] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        <img 
          src={activeItem.image} 
          alt={activeItem.text} 
          className="w-full h-48  object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-black">{activeItem.text}</h2>
        <p className="text-gray-600 mb-4">{activeItem.description}</p>

        <button 
          onClick={onNext} 
          className="w-full bg-indigo-400 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-500 transition-colors duration-200"
        >
          Visit Project →
        </button>
      </motion.div>
    </motion.div>
  );
}

const SelectedWorks = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item, event) => {
    // Prevent default link behavior
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setActiveItem(item);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const handleNext = () => {
    if (activeItem && activeItem.link) {
      window.location.href = activeItem.link;
    }
  };

  // Create enhanced items with click handler for FlowingMenu
  const enhancedItems = demoItems.map(item => ({
    ...item,
    onClick: (event) => handleItemClick(item, event)
  }));

  return (
    <div className='pt-30 pb-20 bg-zinc-800 text-white'>
        <div className='flex justify-between pb-20 pr-5 align-middle items-center'>
            <motion.div
                initial={{ width:0 ,opacity:0 }}
                whileInView={{ width:450 , opacity:1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  height: 3,
                  marginTop:30,
                  backgroundColor: "white",
                  transformOrigin: "left",
                }}
            >
            </motion.div>
            <h1 className='text-8xl '>
                Selected Works
            </h1>
        </div>
        <h2 className=' w-[50%] py-4 px-6 mb-30'>Here is a collection of some projects I've built through collaborations, hackathons, and personal explorations each reflecting my creativity, problem-solving skills, and passion for impactful solutions.</h2>
        
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu 
            items={enhancedItems}
          />
        </div>
        
        {/* DemoGallery Modal/Popup */}
        <AnimatePresence>
          {activeItem && (
            <DemoGallery 
              activeItem={activeItem}
              onClose={handleClose}
              onNext={handleNext}
            />
          )}
        </AnimatePresence>
    </div>
  )
}

export default SelectedWorks