import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-17 bg-gradient-to-r from-black-900 via-black-800 to-indigo text-white w-full z-10 shadow-lg fixed top-0">
      
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold relative">
  <Link
    to="/"
    className="bg-gradient-to-r from-indigo-600 to-teal-400 text-transparent bg-clip-text hover:from-teal-400 hover:to-indigo-600 transition-all duration-500"
  >
    <b>Dipansh Gore</b>
  </Link>
</h1>






        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {["about", "skills", "education", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className="relative text-white hover:text-white-100 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
