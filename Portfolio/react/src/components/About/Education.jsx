import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaUserGraduate} from 'react-icons/fa6';
const Education = () => {
  return (
    <>
      {/* Bachelor’s Degree */}
      <div className="bg-white dark:bg-[#1f2937] p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 mb-6 mt-4 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaUserGraduate className="text-blue-600" /> BS Computer Science
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Government College University Faisalabad (GCUF)
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Fall: 2022 – 2026
          </p>
        </div>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Pursuing a Bachelor's degree in Computer Science with a focus on software development,
          web technologies, and data structures. Gaining a strong foundation in programming languages,
          algorithms, and database management.
        </p>
      </div>

      {/* Intermediate */}
      <div className="bg-white dark:bg-[#1f2937] p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2"><FaUser className="text-blue-600" /> Intermediate</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Aspire College, Chiniot</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2020 – 2022</p>
        </div>
        <ul className="list-disc list-inside mt-4 space-y-2 text-sm md:text-base">
          <li>Focused on Mathematics, Physics, and Computer Science.</li>
          <li>Gained foundational skills in programming and logical thinking.</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
