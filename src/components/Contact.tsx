import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { section } from "framer-motion/client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xovydzgv");
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

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#111113] text-white overflow-x-hidden border-b border-gray-500 pb-[1rem] "
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // 👈 animate when in view
        className="flex flex-col justify-center max-w-3xl mx-auto px-6 lg:ml-[3rem]"
      >
        <div className="flex justify-start max-w-7xl mx-auto px-6">
          <h2 className="text-[48px] lg:text-[6rem] opacity-70 text-green-400 font-bold my-[4rem] text-nowrap">
            Contact Me
          </h2>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:grid lg:grid-cols-2 items-start lg:gap-[20vw]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-[80vw] w-full mx-auto  lg:max-w-[40vw]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white text-lg font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="p-3 rounded-lg bg-[#1a1a1d] text-white border border-gray-600 focus:border-green-400 focus:outline-none"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white text-lg font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="p-3 rounded-lg bg-[#1a1a1d] text-white border border-gray-600 focus:border-green-400 focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white text-lg font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-3 rounded-lg bg-[#1a1a1d] text-white border border-gray-600 min-h-[150px] focus:border-green-400 focus:outline-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
          {state.succeeded && (
            <p className="text-green-500 text-2xl font-semibold mt-6">
              Message sent! I'll get back to you soon.
            </p>
          )}
        </form>
        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:w-1/3 mx-[3rem] text-nowrap">
          <h2 className="text-4xl font-bold text-green-400 text-nowrap">
            Contact Info
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:nifemisoneye@gmail.com"
              className="hover:text-green-400 text-white"
            >
              soneyenifemi@gamil.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+2347085897934"
              className="hover:text-green-400 text-white"
            >
              +234 708 589 7934
            </a>
          </p>
          <p>Location: Lagos, Nigeria</p>
          <div className="flex gap-4 text-2xl mt-4">
            <a
              href="https://www.linkedin.com/in/nifemi-soneye-07269b347/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NifemiSoneye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/AFCNIFEMI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
