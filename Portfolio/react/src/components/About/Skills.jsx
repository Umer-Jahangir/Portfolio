import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";

function Skills() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "Skills"]{_id, title, skills[]{name, icon}}`)
      .then((data) => {
        console.log("Fetched categories with skills:", data);
        setCategories(data);
      })
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <div className="px-6 py-10 md:px-20">
      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category._id}>
            {/* Category title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {category.title}
            </h3>

            {/* Skills inside this category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills?.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-[#1f2937]"
                >
                  {skill.icon && (
                    <img
                      src={urlFor(skill.icon).width(64).url()}
                      alt={skill.name}
                      className="w-16 h-16 object-contain mb-2 hover:scale-125 transition"
                    />
                  )}
                  <p className="text-md font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
