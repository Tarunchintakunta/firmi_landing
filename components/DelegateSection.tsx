'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DelegateSection = () => {
  return (
    // <section className="py-20 bg-white">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[90%] max-w-[2000px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Task Delegation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-rooftop text-[#415d80] mb-6">
              Delegate High Frequency Tasks
            </h2>
            <p className="text-lg text-tertiary mb-8">
              Firmi agents break down tasks into customizable plans with 
              traceable steps. Automate your team's analytical legwork at scale.
            </p>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Task Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" rx="1" fill="#333" />
                      <rect x="3" y="14" width="7" height="7" rx="1" fill="#333" />
                      <rect x="14" y="3" width="7" height="7" rx="1" fill="#333" />
                      <rect x="14" y="14" width="7" height="7" rx="1" fill="#333" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Create a comprehensive overview of Goodyear in Q4</span>
                </div>
              </div>

              {/* Task Progress */}
              <div className="px-5 py-4 border-b border-gray-100 flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <span className="text-gray-700">Task plan created</span>
              </div>

              <div className="px-5 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span className="text-gray-700">Scanning multiple sources</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-xs border-2 border-white">C</div>
                      <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs border-2 border-white">E</div>
                      <div className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs border-2 border-white">F</div>
                    </div>
                    <span className="text-gray-500 text-sm">+ 10K Earning calls</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 border-b border-gray-100 flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-700">Generating outputs</span>
              </div>

              {/* Files Output */}
              <div className="p-5 pt-3 pb-8 flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-md border border-green-100">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-gray-700">GY_Overview_Q4.xls</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-md border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700">GY_Overview_Q4.docx</span>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span>Repeat for peer set</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Data Organization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-rooftop text-[#415d80] mb-6">
              Reason over All of Your Data
            </h2>
            <p className="text-lg text-tertiary mb-8">
              Firmi unifies your internal files, external data, and trusted
              sources into a single searchable plane, enabling every analysis
              to be as comprehensive as possible.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
                <div className="w-32 h-32 opacity-10">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="#000" />
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="#000" />
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="#000" />
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="#000" />
                  </svg>
                </div>
              </div>

              {/* News Articles */}
              <div className="max-w-md mb-6">
                <div className="bg-white rounded-md shadow-sm p-3 mb-3">
                  <h4 className="font-medium text-sm text-gray-900 mb-1">
                    Acme Loses $113 Billion in Value As Regulators Close In
                  </h4>
                  <div className="text-xs text-gray-500">techcrunch.com</div>
                </div>
                
                <div className="bg-white rounded-md shadow-sm p-3 mb-3">
                  <h4 className="font-medium text-sm text-gray-900 mb-1">
                    Acme Sales Hit Quarterly Record as Phone Business Rebounds
                  </h4>
                  <div className="text-xs text-gray-500">bloomberg.com</div>
                </div>
                
                <div className="bg-white rounded-md shadow-sm p-3">
                  <h4 className="font-medium text-sm text-gray-900 mb-1">
                    Acme Corp (ACM) Stock Price Today
                  </h4>
                  <div className="text-xs text-gray-500">WSJ - The Wall Street Journal</div>
                  <div className="text-xs text-gray-500">wsj.com</div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-sm p-3 inline-block">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Files found</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">1,312</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DelegateSection;