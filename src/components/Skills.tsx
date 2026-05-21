import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import TechOrbit from "./TechOrbit";
import SkillTags from "./SkillTags";

const Skills = () => {
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
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#161619] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem] "
    >
      <div className="w-full flex justify-center">
        {/* <motion.img
          src={planetIcon}
          alt="planet-icon"
          className="bg-transparent w-[250px] h-[250px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20, // slower rotation, adjust to your liking
            ease: "linear",
          }}
          loading="lazy"
        /> */}
        <TechOrbit />
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
        className="flex flex-col justify-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-[48px] opacity-70 text-green-400 font-bold my-[4rem] w-full lg:ml-[-10rem] lg:text-[6rem]">
          My Skills
        </h2>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          I build fullstack web applications across the entire stack — from REST
          APIs and database design to responsive, accessible UIs. Most of my
          work is built with React, Node.js, TypeScript and Tailwind CSS, with a
          growing focus on Next.js and PostgreSQL.
        </p>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          I care about clean, maintainable code and UIs that feel smooth and
          intuitive. I enjoy taking a project from zero to deployed — handling
          auth, data modelling, state management, and frontend polish all in one
          build
        </p>
        <p className="text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          I'm currently expanding into Next.js 15, Drizzle ORM, and AI
          integrations with the Anthropic API. Every project I build pushes me
          into new territory
        </p>
        <p className=" text-white leading-relaxed text-lg font-semibold mb-[0.5rem]">
          Here are the technologies I most commonly use:
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 lg:px-0">
        <SkillTags />
      </div>
    </section>
  );
};

export default Skills;
