'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button3D from './Button3D';

const PresentationSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto" style={{ width: '90%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-rooftop text-[#415d80] mb-6">
              Presentation-Ready Outputs
            </h2>
            <p className="text-xl text-tertiary mb-8">
              Accelerate time to value by formatting analyses into tailor-made deliverables.
            </p>

            <h3 className="text-xl font-medium text-tertiary mb-5">
              Firmi can generate
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#415d80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="font-medium">PowerPoints</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#415d80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-medium">Documents</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#415d80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <span className="font-medium">Charts</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#415d80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-medium">Spreadsheets</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Presentation Examples Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-2">
              <div className="relative h-full w-full">
                {/* Interactive Document Display */}
                <div className="bg-blue-50 p-4 rounded-lg mb-2">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-yellow-400 text-white rounded-md flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800">Company A | Public Market Overview</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-2">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-md flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800">TechForge's Acquisition of CloudMatrix</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800">Leading Cybersecurity Companies Analysis</span>
                  </div>
                </div>

                {/* Spreadsheet Table */}
                <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left font-medium text-gray-500">#</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Company</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Market Cap</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Focus</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-500">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">1</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center text-white font-bold mr-2">CS</div>
                            <span>CrowdStrike</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">~$30B</td>
                        <td className="py-3 px-4">Cloud-native endpoint security platform</td>
                        <td className="py-3 px-4">Sunnyvale, CA, USA</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">2</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white font-bold mr-2">PA</div>
                            <span>Palo Alto Networks</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">~$70B</td>
                        <td className="py-3 px-4">Network security, cloud & SASE</td>
                        <td className="py-3 px-4">Santa Clara, CA, USA</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">3</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center text-white font-bold mr-2">CA</div>
                            <span>CyberArk</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">~$6B</td>
                        <td className="py-3 px-4">Privileged access security</td>
                        <td className="py-3 px-4">Newton, MA, USA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10 filter blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-10 filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;