import React, { useState } from 'react';
import {
  RiCloseLine,
  RiMenu2Line,
  RiSunLine,
  RiMoonLine
} from '@remixicon/react';

const PDF_FILE_URL = 'http://localhost:5173/UmerJahangirResume.pdf'; // Replace with actual PDF if deployed

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 dark:bg-[#111827] text-black dark:text-white flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 transition-colors duration-300">
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
          Umer Jahangir
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 mt-1 font-semibold text-md px-6 py-2 rounded-full backdrop-blur-md border border-gray-300/20 shadow-md transition-all duration-300 mb-2">
          <li>
            <a href="#Home" className="hover:scale-105 transition duration-300 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:scale-105 transition duration-300 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:scale-105 transition duration-300 hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:scale-105 transition duration-300 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
          </button>

          {/* Resume Button */}
          <a
            href={PDF_FILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-[#465697] text-white hover:bg-[#3a4a7d]"
          >
            View Resume
          </a>

          {/* Mobile Menu Icon */}
          {!menu && (
            <RiMenu2Line
              size={30}
              className="md:hidden cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div
          className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center gap-8 font-semibold text-lg ${
            isDarkMode ? 'bg-[#171d32]/95 text-white' : 'bg-black/90 text-white'
          } transition-all duration-300`}
        >
          <RiCloseLine
            size={30}
            className="absolute top-6 right-6 cursor-pointer hover:scale-110 transition duration-300"
            onClick={() => setMenu(false)}
          />
          <a href="#Home" onClick={() => setMenu(false)}>Home</a>
          <a href="#About" onClick={() => setMenu(false)}>About</a>
          <a href="#Projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#Contact" onClick={() => setMenu(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
