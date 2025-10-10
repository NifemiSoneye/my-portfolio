import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const name: string[] = "Nifemi".split("");
  const devIcon = new URL("../assets/developer.png", import.meta.url).href;
  return (
    <section id="home" className="pt-[6rem] text-white text-center">
      <h1 className="text-[48px]">Hey There ,</h1>
      <motion.h1
        className="text-[48px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I'm{" "}
        {name.map((letter, index) => (
          <motion.span
            key={index}
            className="text-green-400 inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1, // delay per letter
              duration: 0.3,
              type: "spring",
            }}
          >
            {letter}
          </motion.span>
        ))}
        {/*         <motion.span
          className="text-green-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          Nifemi
        </motion.span> */}
      </motion.h1>
      <p className="text-[24px] pt-[2rem]">A Frontend Developer</p>
      <div className="flex items-center justify-center mt-[2rem] ">
        <div className="h-[300px] w-[300px] rounded-full bg-[#212A37] border-2 border-[#222428] flex items-center justify-center p-[1rem]">
          <img
            src={devIcon}
            alt="dev"
            className="h-[220px] w-[220px] p-[1rem] "
          />
        </div>
      </div>
      <p className="italic mt-[1rem]">"Build for everyone with everyone"</p>
    </section>
  );
};

export default Home;
