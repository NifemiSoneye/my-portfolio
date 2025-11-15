import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const name: string[] = "Nifemi".split("");
  const devIcon = new URL("../assets/developer.png", import.meta.url).href;
  return (
    <section
      id="home"
      className="pt-[6rem] text-white text-center bg-gradient-to-b from-[#1a1c20] to-[#222428] lg:grid grid-cols-2 lg:text-left lg:px-[5rem] lg:pt-[8rem] border-b border-gray-500 pb-[1rem] min-h-screen items-center"
    >
      <div className="order-1 lg:order-1 lg:mt-[2rem] font-semibold">
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
        <div className="col-span-2 order-3 flex-col items-center mt-[1rem] lg:items-start lg:mt-[2rem] hidden lg:flex">
          <p className="italic mt-[1rem] lg:mt-0">
            "Build for everyone with everyone"
          </p>
          <button className="bg-transparent border mt-[1rem] p-[1rem] hover:bg-green-400">
            Check out my work
          </button>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/NifemiSoneye"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/nifemi-soneye-07269b347/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-green-400 transition-colors" />
            </a>
            <a href="https://x.com/AFCNIFEMI" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[2rem] order-2 lg:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
          className="h-[300px] w-[300px] rounded-full bg-[#212A37] border-2 border-[#222428] flex items-center justify-center p-[1rem] lg:h-[400px] lg:w-[400px] "
        >
          <img
            src={devIcon}
            alt="dev"
            className="h-[220px] w-[220px] p-[1rem] lg:h-[300px] lg:w-[300px] "
          />
        </motion.div>
      </div>
      <div className="col-span-2 order-3 flex flex-col items-center mt-[1rem] lg:items-start lg:mt-[0.5rem] lg:hidden">
        <p className="italic mt-[1rem] lg:mt-0">
          "Build for everyone with everyone"
        </p>
        <button className="bg-transparent border mt-[1rem] p-[1rem]">
          Check out my work
        </button>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/NifemiSoneye"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl hover:text-green-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-green-400 transition-colors" />
          </a>
          <a href="https://x.com/AFCNIFEMI" target="_blank" rel="noreferrer">
            <FaTwitter className="text-2xl hover:text-green-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
