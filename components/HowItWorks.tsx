'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            className="heading-lg text-[#415d80] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See how Firmi transforms document processing
          </motion.h1>
          <motion.p 
            className="body-text text-tertiary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Watch our short demo to understand how our AI-powered platform can revolutionize
            your document workflow.
          </motion.p>
        </div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-[#2b4559]/5 to-[#497293]/5">
            <video
              className="w-full h-full object-cover"
              src="/Firmi floww.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                (e.target as HTMLVideoElement).playbackRate = 2;
                (e.target as HTMLVideoElement).style.imageRendering = 'crisp-edges';
              }}
              style={{ 
                filter: 'brightness(1.15) contrast(1.15) saturate(1.1) hue-rotate(-5deg)',
                transform: 'scale(1.02)',
                imageRendering: 'crisp-edges',
                WebkitFontSmoothing: 'antialiased',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </motion.div>

        <div className="mt-8 text-center">
        <Button
          className="btn-primary"
        >
          Visit Playground
        </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;