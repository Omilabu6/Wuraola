// Preloader.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [count, setCount] = useState(100);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          setTimeout(() => setShow(false), 400); // wait for zoom-out
          return 0;
        }
        return prev - 1;
      });
    }, 40); // adjust speed here
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={count === 0 ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black text-white text-[10em] font-bold z-50"
        >
          {count}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
