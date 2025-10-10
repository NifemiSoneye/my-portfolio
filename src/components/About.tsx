import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const variants: Variants = {
    hidden: { opacity: 0, y: 100 }, // start off invisible & below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div>
      <section
        id="about"
        ref={ref} // 👈 attach reference
        className="min-h-screen bg-[#1a1c20] text-white "
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
          className="max-w-xl text-center p-6 "
        >
          <h2 className="text-[48px] opacity-50 text-green-400 font-bold my-[4rem] ">
            About Me
          </h2>
          <p className="text-white leading-relaxed text-lg text-left font-semibold">
            I'm a frontend developer passionate about building smooth, modern,
            and user-friendly web experiences. I enjoy solving UI problems and
            crafting animations that bring designs to life. I love creating well
            organized, responsive and beautiful websites.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
