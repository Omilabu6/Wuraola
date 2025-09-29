import cute from '../assets/cute.jpg';
import React, { useRef } from "react";
import '../App.css';
import Magnet from '../components/stylesComponets/Magnet';
import { useScroll, useTransform, motion } from 'framer-motion';
import Footer from '../components/Footer';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3h0uapm",     // ✅ your EmailJS service ID
        "template_mel7vmm",    // ✅ your EmailJS template ID
        form.current,
        "en-DjfifqT7Lc5CU5"    // ✅ your EmailJS public key
      )
      .then(
        (result) => {
          alert("Hi your message has been sent to me successfully!. I will get back to you as soon as possible. Thanks for reaching out.");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className='pt-30 bg-[#5A67D89C]'>
      <h1 className='text-8xl p-10'>
        Let’s Build <br /> Something Cool
      </h1>

      <div className="w-[100%]">
        <Scale />
      </div>

      <div className='text-4xl px-15 py-10 w-[75%]'>
        I’d love to hear from you! Whether it’s a project, collaboration, or just a hello. Use the form below to get in touch.
      </div>

      {/* 🔹 Form starts here */}
      <form ref={form} onSubmit={sendEmail} className='py-10 px-15 gap-10  flex  flex-col'>
        <div className='  w-full flex justify-around '>
          <div className='flex w-[40%] flex-col gap-5 '>
            <input
              type="text"
              name="name"
              placeholder='Name'
              className='bg-white rounded-2xl p-4 shadow-xl'
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              className='bg-white rounded-2xl p-4 shadow-xl'
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="w-[40%] px-4 py-3 rounded-2xl bg-white shadow-xl resize-none"
            required
          />
        </div>
        
        {/* Submit Button */}
          <button
            type="submit"
            className='bg-zinc-800 mx-15 flex justify-center items-center w-43 p-5 cursor-pointer rounded-xl h-18 shadow-lg'
          >
            <Magnet padding={50} disabled={false} magnetStrength={3}>
              <h2 className='text-xl text-white'>Submit</h2>
            </Magnet>
          </button>
      </form>

      <div className='flex justify-end items-end pt-10 px-10 pb-20 flex-col'>
        <span className='font-semibold'>Get in touch :</span>
        omilabuw@gmail.com, +234 8133909844
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

const Scale = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div ref={container} className="container">
      <div className="sticky_">
        <div className="element">
          <motion.div style={{ scale: scale4 }} className="videoContainer">
            <img src={cute} alt="Cute" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
