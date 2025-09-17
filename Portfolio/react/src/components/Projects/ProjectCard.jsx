import React from "react";

const ProjectCard = ({ bannerImg, title, main, link, github }) => {
  return (
    <div className="w-72 p-4 rounded-xl shadow-md bg-white dark:bg-[#1f2937] hover:scale-105 transition-transform">
      {bannerImg && (
        <img
          src={bannerImg}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{main}</p>
        <div className="flex gap-3 mt-4">
        {link && (
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium 
                        shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
            Live Demo
            </a>
        )}
        {github && (
            <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium 
                        shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
            GitHub
            </a>
        )}
        </div>
    </div>
  );
};

export default ProjectCard;
