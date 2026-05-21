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
      title: "Fullstack Development",
      text: "I build complete web applications from REST APIs and databases to responsive, accessible UIs — shipping features that work reliably across the entire stack.",
    },
    {
      title: "Design Philosophy",
      text: "I focus on building interfaces that are intuitive and purposeful — clean layouts, smooth interactions, and UIs that feel natural to use",
    },
    {
      title: "Always Evolving",
      text: "I'm continuously expanding my stack — currently working with Next.js 15, PostgreSQL, and AI integrations, and actively building projects that push me into new territory.",
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
              I'm a fullstack developer based in Lagos, building
              production-ready web applications with React, Node.js, and
              Next.js. I've shipped multiple fullstack projects including a
              real-time Kanban task manager, an inventory tracking system, and
              an event registration platform — all deployed and live.
            </p>
            <p className="text-white leading-relaxed text-lg font-semibold pt-[2rem]">
              I enjoy working across the entire stack, from designing REST APIs
              and managing databases to crafting clean, responsive UIs. I care
              about writing maintainable code and building things that actually
              work well for users.
            </p>
            <p className="text-white leading-relaxed text-lg font-semibold pt-[2rem]">
              I'm currently expanding into Next.js 15, PostgreSQL, and AI
              integrations, and actively looking for remote fullstack roles
              where I can contribute and keep growing.
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
