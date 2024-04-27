"use client";
import React from 'react'
import { ImagesSlider } from '@/app/ui/frontend/images-slider';
import { motion } from "framer-motion";

const images = [
    '/prod1.jpg',
    '/prod2.jpg',
    '/prod3.jpg',
    '/prod4.jpg',
    // Add more image URLs as needed
  ];

const BackgroundImages = () => {
  return (
    
         <ImagesSlider className="h-[20rem] w-[25rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
          </motion.div>
        </ImagesSlider>
    
  )
}

export default BackgroundImages