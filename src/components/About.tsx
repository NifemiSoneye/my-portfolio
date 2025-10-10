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
            I'm a 4th year Electronics and Computer engineering student who
            doubles as a frontend developer passionate about building smooth,
            modern, and user-friendly web experiences. I enjoy solving UI
            problems and crafting animations that bring designs to life. I love
            creating well organized, responsive and beautiful websites. I
            prioritize optimization without compromising on creating engaging
            user interfaces.
          </p>
          <p className="text-white leading-relaxed text-lg text-left font-semibold pt-[2rem]">
            I'm a big team player and I believe effective communication and team
            work can make the improbable , possible
          </p>
          <p className="text-white leading-relaxed text-lg text-left font-semibold pt-[2rem]">
            My journey into frontend development started out of curiosity for
            how design turns into interactive experiences. Since then, I've been
            obsessed with transforming ideas into functional, elegant, and
            accessible web applications.
          </p>
        </motion.div>
        <div className="max-w-xl mx-auto p-6 overflow-hidden">
          {sections.map((section, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: false, amount: 0.4 });
            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="border text-left p-[1rem] mt-[1rem]"
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
