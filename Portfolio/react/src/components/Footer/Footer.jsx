import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaDev } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#111827] text-black dark:text-white py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Left: Name or Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">© {new Date().getFullYear()} Umer Jahangir</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Built with ❤️ using React, Tailwind and Sanity</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:umerjahangir.cs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-red-500 transition-all duration-300"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Umer-Jahangir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-white transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/umer-jahangir-76638a336/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/OmerJahangeer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-black dark:hover:text-white transition-all duration-300"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://dev.to/umer_jahangir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev.to"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <FaDev />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
