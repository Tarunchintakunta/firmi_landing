'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <motion.nav 
        className={`flex items-center justify-between px-6 sm:px-12 py-3 w-[90%] sm:w-[70%] max-w-6xl rounded-full ${
          scrolled 
            ? 'shadow-lg bg-[#e4e4e5] backdrop-blur-lg backdrop-saturate-150' 
            : 'shadow-md bg-[#e4e4e5] backdrop-blur-md backdrop-saturate-125'
        } border border-gray-200/20`}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center">
          <span className=" font-medium text-[#415d80] text-xl">Firmi</span>
        </Link>

        {/* Middle - Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/product" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Product
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="/research" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Research
          </Link>
        </div>

        {/* Right side - Get Started Button */}
        <Link
          href="/login"
          className="btn-primary inline-flex items-center justify-center"
        >
          Get Started
        </Link>
      </motion.nav>
    </header>
  );
};

export default Navbar;