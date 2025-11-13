import React from 'react'
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const variants: Variants = {
        hidden: { opacity: 0, x: 50 }, // start off invisible & below
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      };
      const ref = useRef(null);
        const isInView = useInView(ref, {
          once: false,
          amount: 0.2,
        });
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111113] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem] "
    >
        <div className="w-full flex justify-center">
            <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
        className="flex flex-col justify-center max-w-3xl mx-auto px-6"
      >
        
      </motion.div>
        </div>
    </section>
  )
}

export default Projects
