import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { client } from "../../sanityClient";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
          title,
          description,
          "bannerImg": bannerImg.asset->url,
          link,
          github
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div
      id="Projects"
      className="relative text-black dark:text-white md:flex items-center md:flex-wrap md:justify-center px-4 md:px-10 pt-6 pb-10 mt-4"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center">My Work</h2>
        <h3 className="text-xl md:text-2xl font-medium text-center mt-2">
          Featured Projects
        </h3>
      </div>

      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            bannerImg={proj.bannerImg}
            title={proj.title}
            main={proj.description}
            link={proj.link}
            github={proj.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
