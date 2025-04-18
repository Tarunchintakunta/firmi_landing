'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = 'documents' | 'tables' | 'charts' | 'slides';

const WorkspaceSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('documents');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'documents':
        return (
          <motion.div 
            className="bg-gray-50 p-8 rounded-b-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">Market Structure & Competitive Analysis</h3>
              <p className="text-gray-700 mb-4">
                We maintain a cautious look on the global tire sector, with a particular focus
                on premium manufactures with strong EV exposure. Our thesis is supported
                by three key pillars:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">EV Transition Catalyst:</span>
                    <span className="text-gray-700"> The accelerating EV adoption projected 27% CAGR through 
                    2027 is driving demand for specialized tires with higher ASPs (+15-20% vs. ICE tires) 
                    and margins (+200-300bps).</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded ml-2">8</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Margin Expansion:</span>
                    <span className="text-gray-700"> Industry consolidation and premiumization strategies are 
                    expected to drive 80-120 margin expansion of </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded ml-2">36</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Valuation Disconnect:</span>
                    <span className="text-gray-700"> The sector trades at 7.5x EBITDA, a 25% discount to 
                    historical averages, despite improving fundamentals and growth outlook.</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded ml-2">3</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded ml-2">19</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <div className="h-64 w-full">
                  <svg viewBox="0 0 800 300" className="w-full h-full">
                    <g transform="translate(50,20)">
                      <g className="x-axis" transform="translate(0,240)">
                        <text x="60" y="20" className="text-xs fill-gray-500">Product</text>
                        <text x="150" y="20" className="text-xs fill-gray-500">Segment</text>
                        <text x="240" y="20" className="text-xs fill-gray-500">Region</text>
                        <text x="330" y="20" className="text-xs fill-gray-500">Channel</text>
                        <text x="420" y="20" className="text-xs fill-gray-500">Customer</text>
                      </g>
                      <g className="y-axis">
                        <text x="-30" y="240" className="text-xs fill-gray-500">0</text>
                        <text x="-30" y="180" className="text-xs fill-gray-500">5</text>
                        <text x="-30" y="120" className="text-xs fill-gray-500">10</text>
                        <text x="-30" y="60" className="text-xs fill-gray-500">15</text>
                        <text x="-40" y="20" className="text-xs fill-gray-500">20</text>
                      </g>
                      <g className="bars">
                        {/* First pair */}
                        <rect x="40" y="100" width="30" height="140" fill="#4ade80" rx="2" />
                        <rect x="75" y="80" width="30" height="160" fill="#34d399" rx="2" />
                        
                        {/* Second pair */}
                        <rect x="130" y="110" width="30" height="130" fill="#4ade80" rx="2" />
                        <rect x="165" y="90" width="30" height="150" fill="#34d399" rx="2" />
                        
                        {/* Third pair */}
                        <rect x="220" y="140" width="30" height="100" fill="#4ade80" rx="2" />
                        <rect x="255" y="120" width="30" height="120" fill="#34d399" rx="2" />
                        
                        {/* Fourth pair */}
                        <rect x="310" y="150" width="30" height="90" fill="#4ade80" rx="2" />
                        <rect x="345" y="130" width="30" height="110" fill="#34d399" rx="2" />
                        
                        {/* Fifth pair */}
                        <rect x="400" y="170" width="30" height="70" fill="#4ade80" rx="2" />
                        <rect x="435" y="130" width="30" height="110" fill="#34d399" rx="2" />
                      </g>
                      <line x1="0" y1="240" x2="500" y2="240" stroke="#e5e7eb" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'tables':
        return (
          <motion.div 
            className="bg-gray-50 p-8 rounded-b-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Select M&A transactions in data security</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Target
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acquirer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Firm Value ($B)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FV/LTM Revenue
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Target Abstract
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Strategic Rationale
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-blue-600 text-white font-bold">
                            N
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Nexia</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-teal-500 text-white font-bold">
                            VT
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Verta Tech.</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Strategic
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $37.2
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        3.3x
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Data classification & messaging software
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                        Helps customers further improve their security posture and meet intensifying regulatory requirements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-gray-800 text-white font-bold">
                            S
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Sylo</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-fuchsia-600 text-white font-bold">
                            A
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Axon</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Strategic
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $58.0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        29.0x
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Data privacy & compliance SaaS
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                        The acquisition gives the data storage provider a way to address privacy challenges
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-green-500 text-white font-bold">
                            LT
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Luma Tech</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded bg-black text-white font-bold">
                            Q
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Quant</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Financial
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $90.4
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        5.1x
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Database, application & file security software
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                        Largest infosec take-private to date, eclipsing Quant's pickup of Luma Tech in 2017
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        );
      case 'charts':
        return (
          <motion.div 
            className="bg-gray-50 p-8 rounded-b-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Enterprise SaaS ARR Comparison</h3>
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                    <span className="text-sm font-medium">Atlas Tech</span>
                    <span className="ml-2 text-sm text-green-600">+22%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-teal-500 mr-2"></div>
                    <span className="text-sm font-medium">Nexus Systems</span>
                    <span className="ml-2 text-sm text-green-600">+21%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-cyan-600 mr-2"></div>
                    <span className="text-sm font-medium">Quantum Software</span>
                    <span className="ml-2 text-sm text-green-600">+29%</span>
                  </div>
                </div>
              </div>
              
              <div className="h-80 w-full">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  {/* Y-axis labels */}
                  <text x="20" y="350" className="text-xs fill-gray-400">0%</text>
                  <text x="20" y="280" className="text-xs fill-gray-400">5%</text>
                  <text x="20" y="210" className="text-xs fill-gray-400">10%</text>
                  <text x="20" y="140" className="text-xs fill-gray-400">15%</text>
                  <text x="20" y="70" className="text-xs fill-gray-400">20%</text>
                  
                  <text x="60" y="380" className="text-xs fill-gray-400">$0M</text>
                  <text x="60" y="20" className="text-xs fill-gray-400">$400M</text>
                  
                  {/* X-axis labels */}
                  <text x="100" y="380" className="text-xs fill-gray-400">2019</text>
                  <text x="200" y="380" className="text-xs fill-gray-400">2020</text>
                  <text x="300" y="380" className="text-xs fill-gray-400">2021</text>
                  <text x="400" y="380" className="text-xs fill-gray-400">2022</text>
                  <text x="500" y="380" className="text-xs fill-gray-400">2023</text>
                  <text x="600" y="380" className="text-xs fill-gray-400">2024</text>
                  
                  {/* Grid lines */}
                  <line x1="80" y1="350" x2="700" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="80" y1="280" x2="700" y2="280" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="80" y1="210" x2="700" y2="210" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="80" y1="140" x2="700" y2="140" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="80" y1="70" x2="700" y2="70" stroke="#e5e7eb" strokeWidth="1" />
                  
                  <line x1="100" y1="50" x2="100" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="300" y1="50" x2="300" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="400" y1="50" x2="400" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="500" y1="50" x2="500" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="600" y1="50" x2="600" y2="350" stroke="#e5e7eb" strokeWidth="1" />
                  
                  {/* Vertical dotted reference line */}
                  <line x1="300" y1="50" x2="300" y2="350" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Company 1 revenue bars */}
                  <rect x="90" y="320" width="20" height="30" fill="#60a5fa" rx="2" />
                  <rect x="190" y="300" width="20" height="50" fill="#60a5fa" rx="2" />
                  <rect x="290" y="270" width="20" height="80" fill="#60a5fa" rx="2" />
                  <rect x="390" y="240" width="20" height="110" fill="#60a5fa" rx="2" />
                  <rect x="490" y="210" width="20" height="140" fill="#60a5fa" rx="2" />
                  <rect x="590" y="170" width="20" height="180" fill="#60a5fa" rx="2" />
                  
                  {/* Company 2 revenue bars */}
                  <rect x="115" y="310" width="20" height="40" fill="#14b8a6" rx="2" />
                  <rect x="215" y="290" width="20" height="60" fill="#14b8a6" rx="2" />
                  <rect x="315" y="250" width="20" height="100" fill="#14b8a6" rx="2" />
                  <rect x="415" y="220" width="20" height="130" fill="#14b8a6" rx="2" />
                  <rect x="515" y="180" width="20" height="170" fill="#14b8a6" rx="2" />
                  <rect x="615" y="130" width="20" height="220" fill="#14b8a6" rx="2" />
                  
                  {/* Company 3 revenue bars */}
                  <rect x="140" y="315" width="20" height="35" fill="#0891b2" rx="2" />
                  <rect x="240" y="295" width="20" height="55" fill="#0891b2" rx="2" />
                  <rect x="340" y="260" width="20" height="90" fill="#0891b2" rx="2" />
                  <rect x="440" y="230" width="20" height="120" fill="#0891b2" rx="2" />
                  <rect x="540" y="190" width="20" height="160" fill="#0891b2" rx="2" />
                  <rect x="640" y="150" width="20" height="200" fill="#0891b2" rx="2" />
                  
                  {/* Revenue growth lines */}
                  <path d="M100,150 L200,180 L300,140 L400,250 L500,320 L600,330" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M100,180 L200,160 L300,120 L400,230 L500,310 L600,320" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  <path d="M100,170 L200,190 L300,130 L400,220 L500,300 L600,310" fill="none" stroke="#0891b2" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        );
      case 'slides':
        return (
          <motion.div 
            className="bg-gray-50 p-8 rounded-b-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Acme Corp (ACM)</h3>
                  <h4 className="text-sm font-medium text-gray-500 mb-4">Co-Segment Sales Breakdown</h4>
                  
                  <div className="h-48 w-full">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <g transform="translate(100, 100)">
                        <path d="M 0 0 L 0 -80 A 80 80 0 0 1 76.4 -23.5 Z" fill="#10b981" />
                        <path d="M 0 0 L 76.4 -23.5 A 80 80 0 0 1 49.6 62.4 Z" fill="#34d399" />
                        <path d="M 0 0 L 49.6 62.4 A 80 80 0 0 1 -49.6 62.4 Z" fill="#0ea5e9" />
                        <path d="M 0 0 L -49.6 62.4 A 80 80 0 0 1 -76.4 -23.5 Z" fill="#3b82f6" />
                        <path d="M 0 0 L -76.4 -23.5 A 80 80 0 0 1 0 -80 Z" fill="#6366f1" />
                      </g>
                      
                      <g transform="translate(160, 30)">
                        <rect x="0" y="0" width="10" height="10" fill="#10b981" />
                        <text x="15" y="9" className="text-xs fill-gray-700">Product A (58%)</text>
                        
                        <rect x="0" y="20" width="10" height="10" fill="#34d399" />
                        <text x="15" y="29" className="text-xs fill-gray-700">Product B (15%)</text>
                        
                        <rect x="0" y="40" width="10" height="10" fill="#0ea5e9" />
                        <text x="15" y="49" className="text-xs fill-gray-700">Product C (12%)</text>
                        
                        <rect x="0" y="60" width="10" height="10" fill="#3b82f6" />
                        <text x="15" y="69" className="text-xs fill-gray-700">Product D (8%)</text>
                        
                        <rect x="0" y="80" width="10" height="10" fill="#6366f1" />
                        <text x="15" y="89" className="text-xs fill-gray-700">Other (7%)</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden col-span-2 border border-blue-200">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Historical Performance</h3>
                  
                  <div className="h-64 w-full">
                    <svg viewBox="0 0 600 300" className="w-full h-full">
                      {/* Stock price chart background */}
                      <rect x="50" y="30" width="500" height="120" fill="#f8fafc" rx="2" />
                      <rect x="50" y="160" width="500" height="120" fill="#f8fafc" rx="2" />
                      
                      {/* X and Y axis lines */}
                      <line x1="50" y1="150" x2="550" y2="150" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="50" y1="90" x2="550" y2="90" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      <line x1="50" y1="210" x2="550" y2="210" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      <line x1="50" y1="270" x2="550" y2="270" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      
                      <line x1="50" y1="30" x2="50" y2="280" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="183" y1="30" x2="183" y2="280" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      <line x1="316" y1="30" x2="316" y2="280" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      <line x1="450" y1="30" x2="450" y2="280" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                      
                      {/* Date labels */}
                      <text x="50" y="295" className="text-xs fill-gray-500">Jan 22</text>
                      <text x="183" y="295" className="text-xs fill-gray-500">Apr 22</text>
                      <text x="316" y="295" className="text-xs fill-gray-500">Jul 22</text>
                      <text x="450" y="295" className="text-xs fill-gray-500">Oct 22</text>
                      
                      {/* Company A stock price line */}
                      <path d="M50,80 C100,60 120,110 150,90 C180,70 200,75 240,65 C280,55 320,70 350,50 C380,30 430,40 470,45 C510,50 540,40 550,60" 
                            fill="none" stroke="#10b981" strokeWidth="2" />
                      
                      {/* Company B stock price line */}
                      <path d="M50,100 C100,90 120,130 150,110 C180,90 200,95 240,105 C280,115 320,90 350,100 C380,110 430,90 470,105 C510,120 540,110 550,90" 
                            fill="none" stroke="#0ea5e9" strokeWidth="2" />
                      
                      {/* Company A volume line */}
                      <path d="M50,200 C100,180 120,230 150,210 C180,190 200,195 240,185 C280,175 320,190 350,170 C380,150 430,160 470,165 C510,170 540,160 550,180" 
                            fill="none" stroke="#10b981" strokeWidth="2" />
                      
                      {/* Company B volume line */}
                      <path d="M50,220 C100,210 120,250 150,230 C180,210 200,215 240,225 C280,235 320,210 350,220 C380,230 430,210 470,225 C510,240 540,230 550,210" 
                            fill="none" stroke="#0ea5e9" strokeWidth="2" />
                      
                      {/* Legend */}
                      <rect x="60" y="40" width="10" height="3" fill="#10b981" />
                      <text x="75" y="43" className="text-xs fill-gray-700">Company A</text>
                      
                      <rect x="150" y="40" width="10" height="3" fill="#0ea5e9" />
                      <text x="165" y="43" className="text-xs fill-gray-700">Company B</text>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden col-span-3">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Company A | Company Overview</h3>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                      <div className="h-48 w-full">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                          {/* Stock price chart */}
                          <rect x="40" y="20" width="330" height="160" fill="#f8fafc" rx="2" />
                          
                          {/* X and Y axis lines */}
                          <line x1="40" y1="180" x2="370" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                          <line x1="40" y1="20" x2="40" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                          
                          {/* Grid lines */}
                          <line x1="40" y1="60" x2="370" y2="60" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          <line x1="40" y1="100" x2="370" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          <line x1="40" y1="140" x2="370" y2="140" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          
                          <line x1="122" y1="20" x2="122" y2="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          <line x1="204" y1="20" x2="204" y2="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          <line x1="286" y1="20" x2="286" y2="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                          
                          {/* Company A stock price line */}
                          <path d="M40,150 C80,160 100,140 120,145 C140,150 160,120 180,110 C200,100 220,90 240,85 C260,80 280,70 300,65 C320,60 340,50 370,40" 
                                fill="none" stroke="#10b981" strokeWidth="2" />
                          
                          {/* Benchmark line */}
                          <path d="M40,140 C80,145 100,135 120,140 C140,145 160,130 180,135 C200,140 220,120 240,125 C260,130 280,110 300,115 C320,120 340,100 370,90" 
                                fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
                                
                          {/* Legend */}
                          <rect x="50" y="30" width="10" height="3" fill="#10b981" />
                          <text x="65" y="33" className="text-xs fill-gray-700">ACM</text>
                          
                          <rect x="110" y="30" width="10" height="3" fill="#94a3b8" strokeDasharray="4" />
                          <text x="125" y="33" className="text-xs fill-gray-700">S&P 500</text>
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <table className="min-w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">Market Cap</td>
                            <td className="py-2 text-right text-gray-900">$58.4B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">Revenue (TTM)</td>
                            <td className="py-2 text-right text-gray-900">$12.8B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">EBITDA Margin</td>
                            <td className="py-2 text-right text-gray-900">24.5%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">P/E Ratio</td>
                            <td className="py-2 text-right text-gray-900">32.6x</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">EV/EBITDA</td>
                            <td className="py-2 text-right text-gray-900">18.2x</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium text-gray-700">FCF Yield</td>
                            <td className="py-2 text-right text-gray-900">3.2%</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium text-gray-700">Dividend Yield</td>
                            <td className="py-2 text-right text-gray-900">0.8%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-rooftop text-[#415d80] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              An AI-native workspace
              <br />
              built for the future
            </motion.h2>
          </div>
          <motion.div 
            className="flex space-x-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'documents'
                  ? 'bg-[#415d80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'tables'
                  ? 'bg-[#415d80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('tables')}
            >
              Tables
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'charts'
                  ? 'bg-[#415d80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('charts')}
            >
              Charts
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'slides'
                  ? 'bg-[#415d80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('slides')}
            >
              Slides
            </button>
          </motion.div>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;