import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient"; // make sure urlFor is exported

const Interest = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "interest"] | order(name asc)`)
      .then((data) => setInterests(data))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-6">
      {interests.map((item) => (
        <div
          key={item._id}
          className="flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-2xl 
transition-all duration-300 bg-white dark:bg-[#1f2937] hover:scale-110 hover:brightness-110 
group w-30 md:w-46"

        >
          {/* Icon */}
          {item.icon && (
            <img
              src={urlFor(item.icon).width(100).url()}
              alt={item.name}
              className="w-20 h-20 mb-3 object-contain group-hover:rotate-12 transition-transform duration-300"
            />
          )}

          {/* Label */}
          <p className="text-base md:text-lg font-semibold text-center">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Interest;
