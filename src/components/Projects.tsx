import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 }, // start off invisible & below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });
  const projects = [
    {
      title: "IP-TRACKER",
      desc: " A utility web app that allows users to track IP addresses and see geolocation data on a map in real time. Built with React, Tailwind CSS, LeafletJS, and the IPify API, it demonstrates API integration, state management, and responsive UI design for practical tools.",
      mobileImg: new URL("../assets/IP-tracker-mobile.png", import.meta.url)
        .href,
      desktopImg: new URL("../assets/IP-tracker-desktop.png", import.meta.url)
        .href,
      demo: "https://nifemisoneye.github.io/IP_tracker/",
      source: "https://github.com/NifemiSoneye/IP_tracker",
    },
    {
      title: "MULTI-FORM ",
      desc: "A dynamic, responsive form that guides users through multiple steps with validation at each stage. Implemented using React, Tailwind CSS and Typescript it emphasizes form state handling, conditional rendering, and user-friendly feedback, showcasing polished frontend interactions as well as form validation and error handling.",
      mobileImg: new URL("../assets/multi-form-mobile.png", import.meta.url)
        .href,
      desktopImg: new URL("../assets/multi-form-desktop.png", import.meta.url)
        .href,
      demo: "https://multi-step-form-kohl-kappa.vercel.app/",
      source: "https://github.com/NifemiSoneye/Multi-step-form",
    },
    {
      title: "SPACE-TOURISM WEBSITE",
      desc: "A multi-page, responsive web project inspired by a space travel theme. Built with React and Tailwind CSS, it features smooth navigation, dynamic content, and immersive animations. Users can explore destinations, learn about crew members, and experience a visually rich, interactive interface.",
      mobileImg: new URL("../assets/space-tourism-mobile.png", import.meta.url)
        .href,
      desktopImg: new URL(
        "../assets/space-tourism-desktop.png",
        import.meta.url
      ).href,
      demo: "https://spacetourismsolution.netlify.app/",
      source: "https://github.com/NifemiSoneye/Space_tourism",
    },
    {
      title: "COUNTRY-API WEBSITE",
      desc: "A responsive web app that displays data about countries using the REST Countries API. Built with React , Typescript and Tailwind CSS, it allows users to search, filter, and view detailed country information. The project highlights API integration, dynamic rendering, and a clean, user-friendly interface.",
      mobileImg: new URL("../assets/rest-countries-mobile.png", import.meta.url)
        .href,
      desktopImg: new URL(
        "../assets/rest-countries-desktop.png",
        import.meta.url
      ).href,
      demo: "https://rest-countries-app-wine.vercel.app/",
      source: "http://github.com/NifemiSoneye/rest-countries-app",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#111113] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem] "
    >
      <div className="w-full flex justify-center flex-col">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
          className="flex flex-col justify-center max-w-3xl mx-auto px-6"
        >
          <div className="flex justify-start max-w-7xl mx-auto px-6">
            <h2 className="text-[48px] lg:text-[6rem] opacity-70 text-green-400 font-bold my-[4rem] text-nowrap">
              My Projects
            </h2>
          </div>
        </motion.div>
        <div className="flex flex-col">
          {projects.map((project, index) => {
            const projectRef = useRef(null);
            const projectInView = useInView(projectRef, {
              once: false,
              amount: 0.4,
            });
            return (
              <motion.div
                key={index}
                ref={projectRef}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  projectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-col lg:flex-row items-center justify-center gap-6 my-12 px-4 max-w-7xl mx-auto min-h-[40vh] w-full"
              >
                <div className="flex items-center  flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12">
                  <div>
                    <h3 className="text-[22px] font-bold ">{project.title}</h3>
                    <p className="text-[22px]">{project.desc}</p>
                    <div className="flex mt-[1rem] ml-[1rem]">
                      <a
                        href={project.demo}
                        className="border border-white p-[1rem] mr-[1rem] hover:bg-green-400"
                      >
                        View Demo
                      </a>
                      <a
                        href={project.source}
                        className="border border-white p-[1rem] hover:bg-green-400"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    <img
                      src={project.desktopImg}
                      alt={`${project.title} mobile`}
                      className="w-[500px] h-[350px] lg:w-[800px] lg:h-[500px]"
                      loading="lazy"
                    />
                    <img
                      src={project.mobileImg}
                      alt={`${project.title} desktop`}
                      className="w-[100px] h-[202px] absolute left-[70%] bottom-[10%] lg:left-[80%] -translate-x-1/2 lg:w-[150px] lg:h-[300px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
