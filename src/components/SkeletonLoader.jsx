"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SkeletonLoader({ type = "text", count = 1, className = "" }) {
  const shimmerVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      if (type === "text") {
        skeletons.push(
          <motion.div
            key={i}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            className={`bg-gray-200 rounded w-full h-4 mb-2 ${className}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
          />
        );
      } else if (type === "title") {
         skeletons.push(
          <motion.div
            key={i}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            className={`bg-gray-200 rounded w-3/4 h-8 mb-4 ${className}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.12)" }}
          />
        );
      } else if (type === "image") {
        skeletons.push(
          <motion.div
            key={i}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            className={`bg-gray-200 rounded-2xl w-full h-64 ${className}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
          />
        );
      } else if (type === "card") {
        skeletons.push(
          <div key={i} className={`border border-gray-100 rounded-2xl p-6 bg-white shadow-sm ${className}`}>
             <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-200 rounded-lg w-12 h-12 mb-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
            />
            <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-200 rounded w-2/3 h-5 mb-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            />
             <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-200 rounded w-full h-4 mb-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
            />
             <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-200 rounded w-4/5 h-4 mb-2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
            />
          </div>
        );
      }
    }
    return skeletons;
  };

  return (
    <div className={`flex flex-col w-full`} aria-busy="true" aria-live="polite">
       <span className="sr-only">Loading content...</span>
       {renderSkeletons()}
    </div>
  );
}
