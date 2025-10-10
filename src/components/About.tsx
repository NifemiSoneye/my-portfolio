import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
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
    <div>
      <section
        id="about"
        ref={ref} // 👈 attach reference
        className="min-h-screen bg-[#1a1c20] text-white overflow-x-hidden"
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
            organized, responsive and beautiful websites. I prioritize
            optimization without compromising on creating engaging user
            interfaces.
          </p>
          <p className="text-white leading-relaxed text-lg text-left font-semibold pt-[2rem]">
            I'm a big team player and I believe effective communication and team
            work can make the improbable , possible
          </p>
          <div>
            <div className="border text-left p-[1rem] mt-[1rem]">
              <p className="font-semibold text-[24px] mb-[1rem]">
                Frontend development
              </p>
              <p className="font-semibold mb-[2rem]">
                I develop performance based and intriguing websites that
                performs its purpose while captivating and prioritizing user
                experience
              </p>
            </div>
            <div className="border text-left p-[1rem] mt-[1rem]">
              <p className="font-semibold text-[24px] mb-[1rem]">
                Frontend development
              </p>
              <p className="font-semibold mb-[2rem]">
                I develop performance based and intriguing websites that
                performs its purpose while captivating and prioritizing user
                experience
              </p>
            </div>
            <div className="border text-left p-[1rem] mt-[1rem]">
              <p className="font-semibold text-[24px] mb-[1rem]">
                Frontend development
              </p>
              <p className="font-semibold mb-[2rem]">
                I develop performance based and intriguing websites that
                performs its purpose while captivating and prioritizing user
                experience
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
