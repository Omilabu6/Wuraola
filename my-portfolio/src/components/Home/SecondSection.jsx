import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import wura1 from "../../assets/wura1.jpg"
import Shuffle from '../stylesComponets/Shuffle';
import "./../../App.css";

const SecondSection = () => {
  const pathRef = useRef(null);
  const container = useRef(null); // ✅ declare before useScroll

  // ✅ bind scroll progress to the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength.toString();

    const handleScroll = () => {
      const rect = path.getBoundingClientRect();
      const pathTop = rect.top;
      const pathHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (pathTop < windowHeight && pathTop + pathHeight > 0) {
        const visibleRatio = Math.min(
          1,
          (windowHeight - pathTop) / (windowHeight + pathHeight)
        );
        const speedFactor = 1.5;
        const drawLength = Math.min(
          pathLength,
          pathLength * visibleRatio * speedFactor
        );
        path.style.strokeDashoffset = (pathLength - drawLength).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={container} className=""> {/* ✅ attach ref here */}
      <div className="overflow-hidden">
        <div className="py-[15em] px-[3em]">
          {/* 🟢 Animated SVG */}
          <div className="md:block hidden">
            <div className="relative">
              <svg
                width="1452"
                height="1590"
                viewBox="0 0 1452 1590"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform absolute -z-10 -translate-x-15 -translate-y-10"
              >
                <g filter="url(#filter0_d_3919_417)">
                  <path
                    ref={pathRef}
                    d="M5 3C149.11 22.5188 297.24 58.6933 420 188.335C511.57 355.647 948.192 96.0827 971.499 272.574C985.589 357.568 921.483 404.84 945.5 473C983.68 565.797 1153.45 545.017 1220.5 597.5C1341.18 672.727 876.438 1143.91 1004.83 1155.57C1066.88 1163.09 1097.94 1173.98 1144.96 1208.39C1201.97 1246.42 1234.24 1270.14 1296.44 1349.86C1363.22 1422.58 1398.5 1467.59 1445 1580"
                    stroke="#5A67D8"
                    strokeWidth="6"
                    style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3919_417"
                    x="0.597412"
                    y="0.0270996"
                    width="1451.17"
                    height="1589.12"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3919_417"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3919_417"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <h1 className="text-2xl w-[25em]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 , delay: 0.3}}
              >
            “ I’m a frontend developer who loves bringing creativity </motion.div>
             <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 , delay: 0.5}}
              >
             to life through code. My mission is to build user-friendly,</motion.div>
               <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 , delay: 0.7}}
              >beautiful, and
            impactful web solutions. “</motion.div>
          </h1>
          <h1 className="flex  justify-end items-end text-7xl pt-55">
            <img src="/wura1.webp" alt="" className="w-20 rounded-2xl mr-4" />
            <div className="flex flex-col justify-end items-end">
              <Shuffle
                text="CREATIVE DEVELOPER"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
              /> 
              <Shuffle
                text="FRONTEND DEVELOPER"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
              /> 
           </div>
          </h1>
          <h2 className="text-xl w-[20em] pt-45 pl-2">
            <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block"
      >
        At first, I thought I was just learning to code...
      </motion.span>{" "}
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="inline-block"
      >
        but I soon realized I was learning to bring ideas to life,
      </motion.span>{" "}
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="inline-block"
      >
        solve real problems,
      </motion.span>{" "}
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="inline-block"
      >
        and shape how people experience the web.
      </motion.span>
          </h2>
          <h2 className="flex justify-end text-xl pt-55">
            <span className="w-[20em]">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="inline-block"
              >
              Now, I build with purpose creating interfaces</motion.span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="inline-block"
              >
               that are not just
              functional, but unforgettable.</motion.span>
            </span>
          </h2>
        </div>
      </div>

      {/* Circle animation */}
      <motion.div style={{ height }} className="CircleContainer ">
        <div className="Circle"></div>
      </motion.div>
    </div>
  );
};

export default SecondSection;
