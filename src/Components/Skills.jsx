import React from "react";
import { FaHtml5, FaCss3Alt, FaJava,
  FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaBootstrap, FaFire } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFirebase, SiAuth0, SiMui } from "react-icons/si";

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Core Java (Basic)", icon: <FaJava size={24} className="text-yellow-500" /> },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={24} className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare size={24} className="text-yellow-300" /> },
        { name: "React.JS", icon: <FaReact size={24} className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap size={24} className="text-purple-500" /> },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" /> },
        { name: "REST APIs", icon: <FaDatabase size={24} className="text-gray-400" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React Bootstrap", icon: <FaBootstrap size={24} className="text-purple-500" /> },
        { name: "Material-UI (MUI)", icon: <SiMui size={24} className="text-blue-600" /> },
        { name: "Redux", icon: <SiRedux size={24} className="text-purple-400" /> },
        { name: "Styled Components", icon: <FaCss3Alt size={24} className="text-pink-400" /> },
        { name: "Axios", icon: <FaJsSquare size={24} className="text-yellow-500" /> },
      ],
    },
    {
      category: "Authentication",
      skills: [
        { name: "Auth0", icon: <SiAuth0 size={24} className="text-orange-500" /> },
        { name: "Firebase Authentication", icon: <FaFire size={24} className="text-yellow-400" /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase size={24} className="text-gray-300" /> },
        { name: "Firebase Firestore", icon: <SiFirebase size={24} className="text-yellow-400" /> },
      ],
    },
    {
      category: "Other Tools",
      skills: [
        { name: "VS Code", icon: <FaGitAlt size={24} className="text-blue-500" /> },
        { name: "MySQL Workbench", icon: <FaDatabase size={24} className="text-gray-300" /> },
        { name: "Oracle SQL* Plus", icon: <FaDatabase size={24} className="text-orange-400" /> },
        { name: "IntelliJ IDEA", icon: <FaJsSquare size={24} className="text-red-500" /> },
        { name: "NetBeans IDE", icon: <FaJsSquare size={24} className="text-green-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-12 text-indigo-500">
          Technical Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-110 hover:-translate-y-2 
              hover:shadow-indigo-500 transition-all duration-500 ease-in-out`}
            >
              <h5 className="text-2xl font-semibold mb-4 text-white-400">
                {skillCategory.category}
              </h5>
              <ul className="list-disc list-inside text-gray-300">
                {skillCategory.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span>{skill.name}</span>
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

export default Skills;
