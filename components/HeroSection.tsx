'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-50 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#415d80] leading-tight">
              Supercharge your investment
              <br /> research with AI
            </h1>
            <p className="text-lg md:text-xl text-firmi/70 max-w-lg">
              Financial research made simpler, better, and faster for the modern investor
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/secure/chat" 
                className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Video - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px] md:h-[400px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/FAsSZz-hQz7z9QpE.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;