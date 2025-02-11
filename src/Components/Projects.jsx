import React from "react";

function Projects() {
  const projects = [
    {
      title: "Web Developer Intern",
      location: "JK Innovative Pvt Limited, Amravati, MH | July 2022 – October 2022",
      description: [
        "Collaborated in a three-member team to develop and enhance a full-stack web application.",
        "Designed and implemented front-end interfaces using HTML, CSS, and JavaScript.",
        "Integrated back-end functionalities and managed database operations.",
      ],
    },
    {
      title: "E-Commerce Website",
      location: "Jan 2025",
      description: [
        "Developed a dynamic E-commerce website using React with a component-based architecture.",
        "Integrated APIs for product data, created an internal JSON database, and implemented login authentication.",
        "Used React Bootstrap, Tailwind CSS, MUI, Styled Components, and AOS for responsive design.",
      ],
    },
    {
      title: "Knight Bite Website Clone",
      location: "Dec 2024",
      description: [
        "Built a responsive replica of the Knight Bite website using ReactJS with Tailwind CSS and Styled Components.",
        "Integrated AOS for enhanced animations and smooth user experience.",
      ],
    },
    {
      title: "Personal Portfolio Website",
      location: "May 2024",
      description: [
        "Developed a responsive personal portfolio using HTML, CSS, JavaScript, and Bootstrap.",
        "Integrated SQL for dynamic data management and created a visually appealing experience.",
      ],
    },
    {
      title: "Employee Registration & Management Portal",
      description: [
        "Developed using NetBeans IDE and Java.",
        "Implemented features for efficient and robust employee data management.",
      ],
    },
    {
      title: "Zomato Website Clone",
      location: "Aug 2023 – Oct 2024",
      description: [
        "Designed and developed a fully responsive Zomato clone using HTML, CSS, and JavaScript.",
        "Focused on responsiveness and enhanced user interactions.",
      ],
    },
    {
      title: "Website Clones",
      location: "Nov – Dec 2024",
      description: [
        "Created clones of high-traffic platforms like Flipkart, Netflix, Rapido, and Samsung.",
        "Utilized HTML, CSS, and Bootstrap for clean, functional designs.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl text-indigo-500 font-bold text-center mb-12 animate-fade-in">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 hover:-translate-y-2
              hover:shadow-indigo-500 transition-all duration-500 opacity-0 animate-slide-up delay-${index + 1}00`}
            >
              <h5 className="text-2xl font-semibold mb-4 text-white-400">
                {project.title}
              </h5>
              {project.location && (
                <p className="text-gray-300 mb-3">{project.location}</p>
              )}
              <ul className="list-disc list-inside text-gray-300">
                {project.description.map((desc, i) => (
                  <li key={i} className="mb-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
