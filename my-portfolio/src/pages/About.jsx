import React from 'react'
import ScrollReveal from '../components/stylesComponets/ScrollReveal';
import GetInTouch from '../components/Home/GetInTouch';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='bg-[#5A67D89C] pt-10   '>
      <div className='md:px-60 px-10 py-10'>
        <img src="/seexy.webp" alt="" className='w-[300px] rounded-xl'/>
         <h1 className='md:text-3xl text-2xl py-4  px-10 '>Hello I'm Wuraola</h1>
      </div>
      <hr  className='mx-5'/>
      <div className='flex justify-between mx-auto md:flex-row   rounded-3xl align-middle item-center pt-10 pb-10  px-5 gap-5 flex-col '>
        <div className='font-semibold  text-2xl'>ABOUT ME</div>
        <div className='  text-xl md:w-[60%] pb-20'>       
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >Hi I’m Wuraola Omilabu Elizabeth. I'm a creative frontend developer  who loves bringing ideas to life on the web.
          </ScrollReveal> 
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >At first, I was pretty naive about tech. I first heard about web development from someone I really looked up to, and I was instantly intrigued by the websites he built. I was always left in awe by how beautiful, creative, interactive, and sometimes even 3D they looked. It was just… magical.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >Fast-forward to today, I work mainly with React, JavaScript, TypeScript, CSS, and Tailwind CSS to create responsive, engaging interfaces. For animations and motion, I bring my projects to life using Framer Motion, GSAP, and other frameworks.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >On the side, I explore game development for fun using Unity. I currently have over 3 games in development. It keeps me creative and pushes me to think beyond traditional web experiences.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >I’m continuously evolving as a developer, blending creativity, interaction, and storytelling to shape experiences that stand out.
          </ScrollReveal>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >This is me passionate, curious, and building the future of immersive web experiences.</ScrollReveal>
        </div>
     </div>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default About