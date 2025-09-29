import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnet from '../stylesComponets/Magnet';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Responsive\nDevelopment",
      description: "I build websites that look and work great on all devices mobile, tablet, and desktop. Your users get a seamless experience, no matter where they visit from.",
      icon: "circle"
    },
    {
      title: "Animations &\nMicrointeractions", 
      description: "With tools like Framer Motion and CSS animations, I add smooth transitions and interactive effects that bring your UI to life and enhance user engagement.",
      icon: "pentagon"
    },
    {
      title: "Code Reviews\n& Debugging",
      description: "Need a second pair of eyes on your frontend code? I offer code review, refactoring, and debugging to help make your codebase cleaner and more efficient.",
      icon: "star"
    },
    {
      title: "UI Implementation\nfrom Design",
      description: "Got a Figma, Adobe XD, or Sketch file? I'll bring it to life with clean, maintainable, and pixel-perfect code that matches your design exactly.",
      icon: "circle"
    },
    {
      title: "Single Page\nApplications (SPAs)",
      description: "Using frameworks like React, I create fast, interactive, and smooth single-page applications that feel like native apps in the browser.",
      icon: "pentagon"
    },
    {
      title: "Collaborative\nTeam Work",
      description: "I'm used to working with product managers, backend developers, and designers. Whether it's Git workflows or team communication, I fit right in.",
      icon: "star"
    }
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'circle':
        return <div className="w-9 h-9 mt-5 bg-black rounded-full  hover:rotate-[360deg] transition-transform duration-300"></div>;
      case 'pentagon':
        return (
          <div className="w-10 h-10 mt-5 relative">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-black  hover:rotate-[360deg] transition-transform duration-300">
              <path d="M12 2 L22 9 L18 20 L6 20 L2 9 Z" />
            </svg>
          </div>
        );
      case 'star':
        return (
          <div className="w-10 h-10 mt-5 relative">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-black  hover:rotate-[360deg] transition-transform duration-300">
              <path d="M12 2 L15 9 L22 9 L17 14 L19 22 L12 18 L5 22 L7 14 L2 9 L9 9 Z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div id="expertise" className="bg-zinc-800 min-h-screen py-30 px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title with underline */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className='flex justify-between pb-20 pr-5 align-middle items-center'>
                <h1 className='text-8xl text-white '>
                 My Expertise
            </h1>
           <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 550, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    height: 3,
                    marginTop: 30,
                    backgroundColor: "white",
                    transformOrigin: "right", // 🔑 makes it expand from right
                }}
                />
            </div>
        </div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          layout
        >
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.6, ease: "easeInOut" }
                }}
                className="relative h-64 sm:h-72 lg:h-80 flex flex-col justify-between"
                style={{
                  perspective: "1000px", 
                }}
              >
                <div
                  className="bg-indigo-300 hover:rotate-0 cursor-pointer transform transition shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between"
                  style={{
                    transform: "rotateY(-10deg)", 
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div>
                    <h3 className="text-black font-bold text-base sm:text-lg lg:text-xl leading-tight mb-4 sm:mb-5 lg:mb-6 whitespace-pre-line">
                      {service.title}
                    </h3>
                    <p className=" bg-zinc-800 text-white px-5 py-6 rounded-2xl text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-end cursor-pointer">
                    {renderIcon(service.icon)}
                  </div>
                </div>
              </motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Magnet padding={20} disabled={false} magnetStrength={3}>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white cursor-pointer transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <Magnet padding={20} disabled={false} magnetStrength={3} >{showAll ? 'Show Less' : 'Show More'}</Magnet> 
          </motion.button>
          </Magnet>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;