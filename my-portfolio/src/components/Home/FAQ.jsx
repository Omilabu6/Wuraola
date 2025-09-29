import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
    const faqs = [
    {
      question: "What services do you offer exactly?",
      answer:
        "I build modern, responsive websites with clean code and smooth interactions. My main focus is frontend development using React, JavaScript, TypeScript, Tailwind CSS, Framer Motion, and GSAP. I also enjoy exploring game development with Unity.",
    },
    {
      question: "I have a design ready. Can you build it?",
      answer:
        "Yes! If you have a design in Figma, XD, or Sketch, I can bring it to life with pixel-perfect precision. If you don’t have a design, I can also suggest layouts and ideas to match your brand’s vibe.",
    },
    {
      question: "What if I don’t like the design or the direction?",
      answer:
        "No worries I believe projects are best when they’re collaborative. I share progress updates so you’re always in the loop, and we can adjust until it feels right for you.",
    },
    {
      question: "What are the payment terms for a project?",
      answer:
        "It depends on the scope, but usually, I request a percentage upfront and the rest after delivery. For larger projects, we can break it into milestones.",
    },
    {
      question: "Are you open to collaborations or freelance work?",
      answer:
        "Yes, I enjoy working with others. Whether it’s hackathons, freelance projects, or fun side ideas, I’m always open to collaborating.",
    },
    {
      question: "Do you only build websites?",
      answer:
        "Mostly yes, but not just websites. I also build web apps and love experimenting with animations, motion design, and game development. For me, the web should feel alive, so I often add extra creative touches to make projects more interactive and memorable.",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-30 px-10 text-white bg-zinc-800'>
      <div className='flex justify-between pb-20 pr-5 align-middle items-center'>
            <motion.div
                initial={{ width:0 ,opacity:0 }}
                whileInView={{ width:750 , opacity:1 }}
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
                FAQ
            </h1>
           
        </div>
         <h2>Have any question about me? Check this out</h2>
         <div>
         <div className="p-4 mx-auto md:w-[75%] pt-25">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border rounded-xl shadow-md p-4 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}// 👈 stagger effect
            >
              {/* Question */}
              <button
                className="flex justify-between w-full text-left font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className='text-2xl'>{openIndex === index ? "-" : "+"}</span>
              </button>

              {/* Answer with transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-200 border p-2 mt-2 rounded-xl">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      
         </div>
    </div>
  )
}

export default FAQ

