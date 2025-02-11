import React, { useState, useEffect } from "react";
import profileImage from "../assets/DG Image.jpeg";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const titles = [
    "Front-End Developer",
    "React.JS Developer",
    "Full-stack Web Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section id="about" className="py-58 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Left Side: Profile Image with hover effects */}
        <motion.div
          className="flex justify-center md:w-1/3 mb-10 md:mb-0"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-58 h-58 object-cover border-4 border-gray-500 shadow-lg hover:shadow-indigo-500 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Side: About Text with Flip-Up Animation */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
            About Me
          </h2>

          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            Motivated{" "}
            <span className="text-indigo-500 font-semibold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -90 }}
                  transition={{ duration: 0.6 }}
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            , with hands-on experience in building responsive web applications
            using React.JS, HTML, CSS, JavaScript, and modern UI frameworks
            like Tailwind CSS and React-Bootstrap. Seeking to leverage
            technical expertise, problem-solving abilities, and a proactive
            mindset to contribute to innovative projects in a dynamic
            organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
