import React from 'react';
import profileImage from '../../assets/PortfolioImage.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Profile = () => {
  return (
<section className="w-full bg-white dark:bg-[#171d32] text-black dark:text-white transition-colors duration-300 mt-2">
  <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 px-6 py-10 md:py-14">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-2xl font-bold tracking-tight mb-4">
            Hello there! I'm <strong className = 'text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300'>Umer Jahangir</strong>
          </h3>

          <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300 space-y-3">
            <span className="block">
              I’m a passionate <strong>Full Stack Web Developer</strong> with a strong foundation in modern web technologies and a commitment to building <span className="italic">high-quality, scalable</span> applications With hands-on experience in the <strong className="text-emerald-600 dark:text-emerald-400">MERN Stack</strong>
            </span>

            <span className="block">
              I actively <strong>contribute to open-source</strong> communities and stay aligned with the rapidly evolving tech landscape. My interests span <strong>Artificial Intelligence</strong>, <strong>automation</strong>, and <strong>real-time applications</strong> — all fueled by a deep curiosity and love for continuous learning.
            </span>

            <span className="block">
              <em className="text-gray-800 dark:text-gray-200">Let’s connect and build something amazing together.</em>
            </span>
          </p>


          <button className="mt-6 md:mt-8 text-white bg-[#465697] py-2 px-6 text-sm md:text-base font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-transform duration-300">
            Let's Work Together
          </button>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start items-center gap-5 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/Umer-Jahangir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/OmerJahangeer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <FaSquareXTwitter size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/umer-jahangir-76638a336/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center md:justify-end">
          <img 
            src={profileImage} 
            alt="Umer Jahangir" 
            className="w-64 rounded-3xl shadow-lg dark:shadow-white/10 transition-shadow duration-300 -mt-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
