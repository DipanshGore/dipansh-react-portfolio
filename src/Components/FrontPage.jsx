import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaGithub, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/DG Image.jpeg";
import gmailIcon from "../assets/gmail-logo.png";
import linkedInImage from "../assets/linkedin-logo.svg";

function FrontPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  const onButtonClick = () => {
    const pdfUrl = "Dipansh Bhaskar Gore Front-End Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Dipansh Bhaskar Gore Front-End Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`${
        isHomePage ? "min-h-screen flex flex-col justify-center items-center relative" : "h-20"
      } bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white w-full z-10 shadow-lg transition-all duration-500`}
    >
      {isHomePage && (
        <div
          className={`container mx-auto px-8 py-6 flex flex-col items-center text-center space-y-8 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* PDF Download Button */}
          <div className="absolute top-8 right-8">
            <button
              onClick={onButtonClick}
              className="bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              Download Resume
            </button>
          </div>

          <div className="absolute top-150 right-8">
          <p className="text-md italic font-light bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 to-indigo-100 animate-fade-in-right">
              Welcome to My Portfolio Website!
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              {/* Gmail Icon */}
              <a
                href="mailto:dgore7078@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={gmailIcon}
                  alt="Gmail"
                  className="w-8 h-8"
                />
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/dipansh-gore-561586247"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={linkedInImage}
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/DipanshGore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaGithub size={30} className="text-black-100" />
              </a>

              {/* Twitter Icon */}
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTwitter size={30} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-65 h-65 object-cover border-4 border-gray-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />

            <Link to="/">
              <h1 className="text-6xl sm:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
                Dipansh Gore
              </h1>
            </Link>

            <p className="text-lg text-gray-200 font-light max-w-2xl">
              Full-Stack Developer | Crafting Elegant & Efficient Digital Solutions
            </p>
          </div>

          {/* Navigation Menu */}
          <ul className="flex justify-center space-x-8 text-lg font-medium">
            {["about", "skills", "education", "projects", "contact"].map(
              (item) => (
                <li key={item} className="transition-transform hover:scale-110">
                  <Link
                    to={`/${item}`}
                    className="relative text-white hover:text-gray-100 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Call to Action */}
          <div className="mt-6 animate-bounce">
            <Link
              to="/about"
              className="inline-flex items-center bg-gradient-to-r from-indigo-700 to-teal-500 hover:from-teal-600 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <strong>Explore Portfolio</strong> <FaArrowRight size={25} className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default FrontPage;
