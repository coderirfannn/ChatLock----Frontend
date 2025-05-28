import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ size = 'medium', fullScreen = false }) => {
  // Size variants
  const sizeVariants = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
    xlarge: 'h-20 w-20'
  };

  // Dot colors
  const dotColors = [
    'bg-purple-600',
    'bg-pink-500',
    'bg-blue-500',
    'bg-indigo-500'
  ];

  // Animation variants
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const dotVariants = {
    initial: {
      y: '0%'
    },
    animate: {
      y: '100%',
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'fixed inset-0 bg-white bg-opacity-90 z-50' : ''}`}>
      <motion.div
        className={`flex justify-between ${sizeVariants[size]}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {dotColors.map((color, index) => (
          <motion.div
            key={index}
            className={`${color} rounded-full ${size === 'small' ? 'h-2 w-2' : 'h-3 w-3'}`}
            variants={dotVariants}
            style={{
              originY: 0.5 // Makes the animation bounce from the center
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loading;