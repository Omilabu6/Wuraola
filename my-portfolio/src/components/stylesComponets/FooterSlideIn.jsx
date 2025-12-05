import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedText() {
    const phrase = "ELIZABETH  W.";
    const description = useRef(null);
    const isInView = useInView(description);
    
    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i) => ({
            y: "0%",
            transition: { duration: 0.5, delay: 0.02 * i }
        }),
        closed: {
            y: "100%",
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div 
            ref={description} 
            className="w-full flex justify-center"
        >
            <div className="w-full  text-center flex justify-center flex-col ">
                <p className="text-8xl sm:text-[9rem] md:text-[9rem]   font-normal  font-serif m-0 flex flex-wrap justify-center gap-1 lg:gap-2">
                    {phrase.split(" ").map((word, index) => {
                        return (
                            <span 
                                key={index} 
                                className="relative overflow-hidden inline-flex"
                            >
                                <motion.span 
                                    variants={slideUp} 
                                    custom={index} 
                                    animate={isInView ? "open" : "closed"}
                                    initial="initial"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
            </div>
        </motion.div>
    );
}