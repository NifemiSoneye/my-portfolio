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
      title: "Task Manager",
      desc: "A fullstack Kanban board application with drag-and-drop task management, JWT authentication, real-time board updates, and server-side pagination. Built with React, Typescript, Node.js, MongoDB, and RTK Query.",
      mobileImg: new URL("../assets/task-manager-mobile.webp", import.meta.url)
        .href,
      desktopImg: new URL("../assets/task-manager-laptop.webp", import.meta.url)
        .href,
      demo: "https://task-manager-murex-ten-82.vercel.app/",
      source: "https://github.com/NifemiSoneye/task-manager-frontend",
    },
    {
      title: "Tech Meetup 2026 — Event Registration App",
      desc: "A fullstack event registration platform with JWT auth, refresh token rotation, automated email confirmation via Resend, and an admin dashboard for attendee management. Built with React, Typescript, Node.js, and MongoDB.",
      mobileImg: new URL("../assets/tech-event-mobile.webp", import.meta.url)
        .href,
      desktopImg: new URL("../assets/tech-event-laptop.webp", import.meta.url)
        .href,
      demo: "https://tech-event-teal.vercel.app/",
      source: "https://github.com/NifemiSoneye/IT-events-project",
    },
    {
      title: "Next.js Repair Shop",
      desc: "A fullstack repair shop management app built with Next.js 15, PostgreSQL, Drizzle ORM, and Kinde auth. Features server actions with next-safe-action, TanStack Table, and Sentry error monitoring. Built for larger screens.",
      desktopImg: new URL("../assets/tech-repair-laptop.webp", import.meta.url)
        .href,
      demo: "https://next-repair-shop-roan.vercel.app/login",
      source: "https://github.com/NifemiSoneye/next-repair-shop",
    },
    {
      title: "IP-TRACKER",
      desc: " A utility web app that allows users to track IP addresses and see geolocation data on a map in real time. Built with React, Tailwind CSS, LeafletJS, and the IPify API, it demonstrates API integration, state management, and responsive UI design for practical tools.",
      mobileImg: new URL("../assets/IP-tracker-mobile.webp", import.meta.url)
        .href,
      desktopImg: new URL("../assets/IP-tracker-desktop.webp", import.meta.url)
        .href,
      demo: "https://nifemisoneye.github.io/IP_tracker/",
      source: "https://github.com/NifemiSoneye/IP_tracker",
    },
    {
      title: "Inventory Tracker",
      desc: " A fullstack inventory management dashboard with live stock status tracking, CRUD operations, debounced search, and client-side filtering. Built with React, Express, Typescript and MongoDB.",
      mobileImg: new URL(
        "../assets/inventory-tracker-mobile.webp",
        import.meta.url,
      ).href,
      desktopImg: new URL(
        "../assets/inventory-tracker-laptop.webp",
        import.meta.url,
      ).href,
      demo: "https://inventory-tracker-frontend-jet.vercel.app/",
      source: "https://github.com/NifemiSoneye/inventory-tracker-frontend",
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
                    {project.mobileImg ? (
                      <img
                        src={project.mobileImg}
                        alt={`${project.title} desktop`}
                        className="w-[100px] h-[202px] absolute left-[70%] bottom-[10%] lg:left-[80%] -translate-x-1/2 lg:w-[150px] lg:h-[300px]"
                        loading="lazy"
                      />
                    ) : null}
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
