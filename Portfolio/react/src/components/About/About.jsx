import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Interests from './Interestes'; // Make sure spelling matches the file name
import Accounts from './Links';
import Achievements from './Achievements';
const tabOrder = ['Profile', 'Skills', 'Experience', 'Achievements', 'Education', 'Accounts', 'Interests'];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <Profile />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Achievements':
        return <Achievements />;
      case 'Education':
        return <Education />;
      case 'Accounts':
        return <Accounts/>;
      case 'Interests':
        return <Interests />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextIndex = currentIndex + 1;
    if (nextIndex < tabOrder.length) {
      setActiveTab(tabOrder[nextIndex]);
    }
  };

  return (
    <>
      <div id="About" className="relative text-black dark:text-white md:flex items-center md:flex-wrap md:justify-center px-4 md:px-10 pt-6 pb-10 mt-4">
        {!isOpen && (
          <RiMenu2Line
            size={28}
            className="md:hidden absolute top-6 right-6 cursor-pointer z-50 text-black dark:text-white"
            onClick={() => setIsOpen(true)}
          />
        )}

        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-center">About</h2>
          <h3 className="text-xl md:text-2xl font-medium text-center mt-2">Get to know me better</h3>

          {/* Tab Buttons */}
          <div className="hidden md:flex gap-6 mt-6 px-6 py-2 font-semibold text-md rounded-full backdrop-blur-md border border-gray-300/20 shadow-md transition-all duration-300 w-fit mx-auto">
            {tabOrder.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition duration-300 hover:text-blue-500 hover:scale-105 ${
                  activeTab === tab ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-center text-base md:text-lg mt-0 px-4">
            {renderTabContent()}

            {/* Next → Button */}
            {tabOrder.indexOf(activeTab) < tabOrder.length - 1 && (
              <div className="mt-4">
                <button
                  onClick={handleNext}
                  className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-90 hover:scale-105 transition-transform duration-300"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center text-white justify-center gap-8 font-medium text-lg bg-black/90 dark:bg-[#171d32]/90 transition-all duration-300">
          <RiCloseLine
            size={28}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          {tabOrder.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className="hover:text-blue-400 transition duration-300"
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default About;
