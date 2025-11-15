import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
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
  const sections = [
    {
      title: "Frontend Development",
      text: "I develop performance-based and engaging websites that perform their purpose while prioritizing user experience and accessibility.",
    },
    {
      title: "Design Philosophy",
      text: "I focus on creating interfaces that are not only visually appealing but intuitive and purposeful, ensuring every interaction feels smooth and natural.",
    },
    {
      title: "Continuous Growth",
      text: "I’m always learning — currently exploring backend development with Node.js and expanding into the full MERN stack to become a well-rounded full stack developer.",
    },
  ];
  return (
    <div>
      <section
        id="about"
        ref={ref} // 👈 attach reference
        className="min-h-screen bg-[#1a1c20] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem]"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
          className="flex flex-col justify-center  min-h-screen max-w-3xl mx-auto px-6"
        >
          <h2 className="text-[48px] opacity-70 text-green-400 font-bold my-[4rem] w-full text-left lg:ml-[-10rem] lg:text-[6rem]">
            About Me
          </h2>
          <div className="text-left lg:flex lg:flex-col lg:items-center lg:justify-center">
            <p className="text-white leading-relaxed text-lg font-semibold">
              I'm an Electronics and Computer engineering student who doubles as
              a frontend developer passionate about building smooth, modern, and
              user-friendly web experiences. I enjoy solving UI problems and
              crafting animations that bring designs to life. I love creating
              well organized, responsive and beautiful websites. I prioritize
              optimization without compromising on creating engaging user
              interfaces.
            </p>
            <p className="text-white leading-relaxed text-lg font-semibold pt-[2rem]">
              I'm a big team player and I believe effective communication and
              team work can make the improbable , possible.
            </p>
            <p className="text-white leading-relaxed text-lg font-semibold pt-[2rem]">
              My journey into frontend development started out of curiosity for
              how design turns into interactive experiences. Since then, I've
              been obsessed with transforming ideas into functional, elegant,
              and accessible web applications.
            </p>
          </div>
        </motion.div>
        <div className=" mx-auto p-6 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
          {sections.map((section, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: false, amount: 0.4 });
            return (
              <motion.div
                key={index}
                ref={cardRef}
                whileHover={{ scale: 1.03 }}
                className="border text-left p-[1rem] "
                initial={{ opacity: 0, y: 50 }}
                animate={
                  cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.7,
                  type: "spring",
                }}
              >
                <p className="font-semibold text-[24px] mb-[1rem]">
                  {section.title}
                </p>
                <p className="font-semibold mb-[2rem]">{section.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
