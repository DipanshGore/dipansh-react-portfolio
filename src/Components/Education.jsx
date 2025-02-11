import React from "react";

function Education() {
  const educationData = [
    {
      title: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "SGBAU, Amravati, MH | 2020-2024",
      detail: "SGPA: 8.5/10.00",
    },
    {
      title: "12th Grade (HSC)",
      institution: "Shri Samarth Jr College of Science | 2019-2020",
    },
    {
      title: "10th Grade (SSC)",
      institution: "S.P.M High School | 2017-2018",
    },
  ];

  return (
    <section id="education" className="py-53 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl text-indigo-500 font-bold text-center mb-12 transition-opacity duration-700 animate-fade-in">
          Education
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 hover:-translate-y-2
              hover:shadow-indigo-500 transition-all duration-500 opacity-0 animate-slide-up delay-${index + 1}00`}
            >
              <h5 className="text-2xl font-semibold mb-4 text-white-400">
                {edu.title}
              </h5>
              <p className="text-gray-300">{edu.institution}</p>
              {edu.detail && (
                <p className="text-gray-500 text-sm mt-2">{edu.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
