'use client';

import React from 'react';
import PolygonIcon from '@/components/icons/PolygonIcon';
import { motion } from 'framer-motion';

function Loading() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="loader-container flex justify-center items-center relative bg-gray-100 dark:bg-gray-950 h-screen"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="w-16 h-16"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        <PolygonIcon />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="text-center text-3xl font-semibold font-serif bg-gradient-to-r from-bluebell to-lavenderRose text-transparent bg-clip-text">
          {'<SHEMMEE/>'}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
