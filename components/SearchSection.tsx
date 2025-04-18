'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button3D from './Button3D';

const SearchSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const items = [
    {
      title: "Models & spreadsheets",
      subtitle: "#internal",
      icon: (
        <svg className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z"/>
        </svg>
      )
    },
    {
      title: "Data rooms, meeting notes",
      subtitle: "#documents",
      icon: (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
        </svg>
      )
    },
    {
      title: "Research reports, analysis",
      subtitle: "#research",
      icon: (
        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 12h4v4H7zm0-4h4v2H7z"/>
          <path d="M13 10h4v6h-4z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    // Add your search functionality here
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[90%] max-w-[2000px] mx-auto px-[5%]">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-rooftop text-[#415d80] mb-4">All your data in one place</h1>
          <p className="body-text text-tertiary">
            Access all your critical business information instantly with our powerful search and organization tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Document Display */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-16 w-64 overflow-hidden bg-gray-50 rounded-lg mb-6">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentTextIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-4"
                >
                  <div className="flex items-center space-x-3">
                    {items[currentTextIndex].icon}
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-gray-900">
                        {items[currentTextIndex].title}
                      </span>
                      <span className="text-sm text-gray-500">
                        {items[currentTextIndex].subtitle}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <h3 className="text-xl font-rooftop text-tertiary mt-8 mb-4">Filings and earnings</h3>

            <p className="text-tertiary mb-4">
              Firmi searches, analyzes, and cites across millions of
              documents — including your proprietary internal content and
              our extensive library — saving you hours of manual digging.
            </p>
          </motion.div>

          {/* Right Side - Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-10">
              <Button3D
                variant="primary"
                active={true}
                size="icon"
                className="aspect-square w-12 h-12"
                icon={
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                }
              />
              <Button3D
                variant="secondary"
                size="icon"
                className="aspect-square w-12 h-12"
                icon={
                  <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                }
              />
              <Button3D
                variant="secondary"
                size="icon"
                className="aspect-square w-12 h-12"
                icon={
                  <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                }
              />
              <Button3D
                variant="secondary"
                size="icon"
                className="aspect-square w-12 h-12"
                icon={
                  <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                }
              />
              <Button3D
                variant="secondary"
                size="icon"
                className="aspect-square w-12 h-12"
                icon={
                  <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                }
              />
            </div>

            <div>
              <h3 className="text-2xl font-rooftop text-[#415d80] mb-4">Focus on the important work</h3>
              <p className="text-tertiary mb-6">
                Use a suite of productivity tools to supercharge your work. Spend
                less time on manual tasks, let your junior team members focus on
                higher-value work, and empower executives to answer their own
                questions.
              </p>
              <button 
                className="btn-primary inline-flex items-center justify-center"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;