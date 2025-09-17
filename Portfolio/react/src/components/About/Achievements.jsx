import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "achievement"] | order(date desc)`)
      .then((data) => setAchievements(data))
      .catch(console.error);
  }, []);

  return (
    <div className="px-6 py-10 md:px-20">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map((achieve) => (
          <div
            key={achieve._id}
            className="flex flex-col p-6 rounded-xl shadow-md bg-white dark:bg-[#1f2937] 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {achieve.icon && (
              <img
                src={urlFor(achieve.icon).width(80).url()}
                alt={achieve.title}
                className="w-16 h-16 mb-4 object-contain mx-auto hover:scale-125 transition"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
              {achieve.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              {achieve.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic text-center">
              {new Date(achieve.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>

            {/* ✅ Add link button if available */}
            {achieve.link && (
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
              >
                View More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
