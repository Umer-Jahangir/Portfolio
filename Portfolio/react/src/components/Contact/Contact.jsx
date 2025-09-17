import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div id = "Contact" className="relative text-black dark:text-white px-4 md:px-10 py-10 mt-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Let's Connect</h2>
        <h3 className="text-xl md:text-2xl font-medium mb-6">Get in Touch</h3>
        <p className="text-md md:text-lg mb-10">
          Always up for new opportunities, collabs, or idea exchanges. Reach out through any of these channels and I’ll get back to you ASAP!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
            <a
            href="mailto:umerjahangir.cs@gmail.com"
            className="block"
            target='_blank'
            rel="noopener noreferrer"
            >
            <div className="flex items-center bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                <div className="text-3xl text-red-500 mr-4">
                <MdEmail />
                </div>
                <div className="text-left">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    umerjahangir.cs@gmail.com
                </p>
                </div>
            </div>
            </a>


          {/* GitHub */}
          <a
            href="https://github.com/Umer-Jahangir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="text-3xl text-gray-800 dark:text-white mr-4">
              <FaGithub />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Umer-Jahangir</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/umer-jahangir-76638a336/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="text-3xl text-blue-600 mr-4">
              <FaLinkedin />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">umer-jahangir-76638a336</p>
            </div>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/OmerJahangeer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="text-3xl text-black dark:text-white mr-4">
              <FaSquareXTwitter />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Twitter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">OmerJahangeer</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
