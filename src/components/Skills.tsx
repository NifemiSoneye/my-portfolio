import React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const planetIcon = new URL("../assets/planet.png", import.meta.url).href;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });
  const variants: Variants = {
    hidden: { opacity: 0, x: 50 }, // start off invisible & below
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "TAILWIND",
    "TYPESCRIPT",
    "AXIOS",
    "REDUX",
    "GIT",
    "VITE",
    "VERCEL",
    "FRAMER MOTION",
  ];
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#161619] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem] "
    >
      <div className="w-full flex justify-center">
        <motion.img
          src={planetIcon}
          alt="planet-icon"
          className="bg-transparent w-[250px] h-[250px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20, // slower rotation, adjust to your liking
            ease: "linear",
          }}
        />
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
        className="flex flex-col justify-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-[48px] opacity-70 text-green-400 font-bold my-[4rem] w-full lg:ml-[-10rem] lg:text-[8rem]">
          My Skills
        </h2>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          I love building things that feel good to use — clean, responsive
          websites that look great and perform even better. Most of my work
          revolves around React and Tailwind CSS, where I get to blend
          creativity with logic to bring ideas to life.
        </p>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          I work comfortably with JavaScript, TypeScript, and enjoy adding a bit
          of motion with Framer Motion to make interfaces feel alive. I’m big on
          clean code, smooth performance, and making sure everything works
          seamlessly across different devices.
        </p>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          Right now, I’m learning Node.js, Express, and MongoDB to round out my
          skills and grow into a full-stack developer. I enjoy challenging
          myself to learn something new with every project I take on.
        </p>
        <p className=" text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          Here are the technologies I most commonly use :{" "}
        </p>
      </motion.div>

      <div className=" mx-auto p-6 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
        {skills.map((skill, index) => {
          const skillsRef = useRef(null);
          const cardInView = useInView(skillsRef, { once: false, amount: 0.4 });
          return (
            <motion.div
              key={index}
              ref={skillsRef}
              whileHover={{ scale: 1.03 }}
              className="border-b text-left p-[1rem] "
              initial={{ opacity: 0, y: 50 }}
              animate={
                cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.7,
                type: "spring",
              }}
            >
              <p className="font-semibold text-[24px] mb-[1rem]">{skill}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
