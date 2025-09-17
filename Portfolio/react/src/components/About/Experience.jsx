import { useEffect, useState } from "react";
import { client } from "../../sanityClient";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "experience"] | order(startDate desc)`)
      .then((data) => setExperiences(data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-6 mt-4">
      {experiences.map((exp) => (
        <div
          key={exp._id}
          className="bg-white dark:bg-[#1f2937] p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company} – {exp.location}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              {exp.startDate} – {exp.endDate || "Present"}
            </p>
          </div>

          {/* Highlights */}
          <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base">
            {exp.highlights?.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
