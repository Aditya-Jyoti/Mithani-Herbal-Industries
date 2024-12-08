"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";

interface BushSVGProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Added fill color prop
}

const getRandomMotion = () => {
  const randomX = Math.random() * 2 - 2; // Random value between -2 and 2
  const randomRotate = Math.random() - 0.8; // Random rotation between -2 and 2
  const duration = Math.random() * 4 + 2;

  console.log(randomRotate)

  return {
    x: [0, randomX, -randomX, 0],
    y: [0, 0, 0, 0],
    rotate: [0, randomRotate, -randomRotate, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
};

const BushSVG: React.FC<BushSVGProps> = ({
  fillColor = "green", // Default fill color
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 82 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="bush1">
        <motion.path
          id="bush1_2"
          d="M80.4 37.9L80.2 37.6L80.3 37.2C80.6 35.3 80.2 33.4 79.1 31.6C78.2 30.1 76.9 29 75.6 28.5L75.2 28.3L75 28C74.7 27.4 74.4 26.8 74 26.2L73.8 25.9V25.5C74.1 22.5 73.3 19.4 71.6 16.6C69.9 13.8 67.4 11.8 64.8 11L64.3 10.8L64.1 10.3C62.4 5.4 57.1 0.100006 49.7 0.100006C46.9 0.100006 44 0.900005 41.1 2.40001L40.7 2.60001L40.3 2.40001C38.1 1.50001 35.9 1.00001 33.9 1.00001C27 1.00001 22.7 6.1 20.8 9.1L20.5 9.6L20 9.70001C19.6 9.70001 19.2 9.6 18.8 9.6C15.8 9.6 13.1 10.8 11.1 13C8.70001 15.7 7.2 20 7.3 24.4V25L6.80001 25.3C2.60001 27.5 -1.19999 32.6 0.400005 40.7C0.900005 43.1 3 44.8 5.4 44.8H39.5L39.7 45.5C40.2 46.9 41.5 47.8 42.9 47.8H78.8C79.6 47.8 80.4 47.5 81 46.9C81.6 46.3 81.9 45.5 81.9 44.7C81.9 42.7 81.6 39.9 80.4 37.9Z"
          fill={fillColor}
          stroke="var(--primary)"
          strokeWidth="1"
          animate={getRandomMotion()}
        />
      </g>
    </svg>
  );
};

export default BushSVG;
