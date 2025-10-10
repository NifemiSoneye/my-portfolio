import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const name: string[] = "Nifemi".split("");
  return (
    <div className="pt-[6rem] text-white text-center">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
};

export default Home;
