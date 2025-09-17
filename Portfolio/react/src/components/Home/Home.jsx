import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/portfolioImage.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaDev } from "react-icons/fa6";
const titles = [
  {
    text: 'Umer Jahangir',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    text: 'Web Developer',
    gradient: 'from-green-400 via-emerald-500 to-lime-400',
  },
  {
    text: 'Contributor',
    gradient: 'from-pink-500 via-red-500 to-yellow-500',
  },
  {
    text: 'AI Enthusiast',
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
  },
];


const Home = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length); // change
        setVisible(true); // fade in
      }, 1000); // 1s fade-out duration
    }, 4000); // total cycle: show for 3s, fade for 1s

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row w-full justify-between items-center gap-10 p-10 md:p-20 transition-colors duration-300 bg-white dark:bg-[#171d32] text-black dark:text-white">
      
      {/* Left Content */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Hi, I'm{' '}
<span
  key={titles[index].text}
  className={`inline-flex items-center leading-tight text-transparent bg-clip-text bg-gradient-to-r ${
    titles[index].gradient
  } transition-all duration-1000 ease-in-out transform ${
    visible ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
  } font-extrabold drop-shadow-sm`}
>
  {titles[index].text}
</span>


        </h1>

        <p className="text-sm md:text-2xl tracking-tight leading-relaxed">
            I build WebApps with clean code and creative vision  turning ideas into reality.
        </p>

        {/* CTA Buttons */}
        <div className="gap-4 flex flex-col md:flex-row items-center">
          <button className="mt-6 md:mt-10 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-90 hover:scale-105 transition-transform duration-300">
            Let's Work Together
          </button>
          <button className="mt-6 md:mt-10 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-90 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new project
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/Umer-Jahangir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://x.com/OmerJahangeer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <FaSquareXTwitter size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/umer-jahangir-76638a336/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://dev.to/umer_jahangir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <FaDev  size={28} />
          </a>
          
        </div>
      </div>

      {/* Profile Image */}
      <img 
        className="w-64 md:w-80 rounded-3xl shadow-lg dark:shadow-white/10 transition-shadow duration-300" 
        src={profileImage} 
        alt="Umer Jahangir"
      />
    </div>
  );
};

export default Home;
