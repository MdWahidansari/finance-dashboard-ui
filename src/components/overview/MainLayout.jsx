import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

export const MainLayout = ({ children }) => {
  // Fade-down animation for navbar
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-white selection:bg-neutral-300 dark:selection:bg-neutral-800 pt-2 pb-8 transition-colors duration-300">
      
      {/* Animated Navbar */}
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/80 dark:bg-black/80"
      >
        <Navbar />
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mt-4">
        {children}
      </main>
    </div>
  );
};