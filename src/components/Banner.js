import React from 'react';
import video from '../image/video-player.gif';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import banner from '../image/1.webp';
import { IoIosStarOutline } from 'react-icons/io';
import { IoStarSharp } from 'react-icons/io5';

const Banner = () => {
  return (
    <div>
      {/* Top Section: Digital and Star */}
      <div className="flex justify-between items-center w-full px-4 py-2 pt-12">
        <div className="flex items-center">
          <span className="font-bold text-sm md:text-lg">DIGITAL</span>
          <div className="ml-2 w-16 border-t-2 border-black"></div>
        </div>
        <div className="relative px-10 md:px-20">
          <IoIosStarOutline className="text-gray-500" size={30} />
          <IoStarSharp className="text-black absolute right-10 md:right-20" size={10} />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-40">
        {/* Left Side: MARK Text */}
        <div className="flex items-center">
          <h1 className="font-bold leading-none text-6xl md:text-8xl lg:text-[160px]">
            MARK
          </h1>
        </div>

        {/* Right Side: Video Button */}
        <div className="flex items-center space-x-1 mt-8 md:mt-0">
          <div className="relative">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={video}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <a
                href="#"
                className="absolute flex items-center justify-center bg-black h-8 w-8 rounded-full text-white"
              >
                <svg className="default" width="10" height="10" viewBox="0 0 13 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20L13 10L0 0V20Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-left mt-2 font-semibold text-black text-sm md:text-base">
            WATCH <br /> VIDEO INTRO
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-40">
        <p className="mt-4 text-left text-gray-500 max-w-sm text-sm md:text-base">
          Static and dynamic secure code review can prevent a delay before your product is even released. We can integrate with your dev environment.
        </p>
        <div className="flex items-center mt-8 md:mt-0">
          <h1 className="font-bold leading-none text-6xl md:text-8xl lg:text-[160px]">
            ETING
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Animated Arrow */}
        <div className="flex items-center justify-center py-10 md:py-0">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
            className="flex justify-center items-center border-2 border-gray-300 rounded-full w-10 h-24"
          >
            <FaArrowDown className="text-gray-600" />
          </motion.div>
        </div>

        {/* Right Side: Banner Image */}
        <div className="w-full h-full">
          <img src={banner} alt="Banner" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
