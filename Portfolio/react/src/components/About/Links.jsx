import React, { useEffect, useState } from "react";
import { client } from "../../sanityClient"; 

const Links = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "links"]{
          title,
          accounts[]{
            name,
            link,
            "iconUrl": icon.asset->url
          }
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="px-6 py-10 md:px-20">
      <div className="space-y-10">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.accounts.map((acc, index) => (
                <a
                  key={index}
                  href={acc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-[#1f2937]"
                >
                  {acc.iconUrl && (
                    <img
                      src={acc.iconUrl}
                      alt={acc.name}
                      className="w-12 h-12 mb-2 object-contain hover:scale-125 transition-all duration-300"
                    />
                  )}
                  <p className="text-md font-medium">{acc.name}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
