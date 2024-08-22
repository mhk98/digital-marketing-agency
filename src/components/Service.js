import React, { useRef, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import service1 from '../image/services/1.jpg'
import './Service.css'
import { motion, useInView } from 'framer-motion';
const Service = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const [isHovered1, setIsHovered1] = useState(false);
  const [position1, setPosition1] = useState({ x: 0, y: 0 });


  const [isHovered2, setIsHovered2] = useState(false);
  const [position2, setPosition2] = useState({ x: 0, y: 0 });


  const [isHovered3, setIsHovered3] = useState(false);
  const [position3, setPosition3] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };


  const handleMouseMove1 = (e) => {
    setPosition1({
      x: e.clientX,
      y: e.clientY,
    });
  };


  const handleMouseMove2 = (e) => {
    setPosition2({
      x: e.clientX,
      y: e.clientY,
    });
  };


  const handleMouseMove3 = (e) => {
    setPosition3({
      x: e.clientX,
      y: e.clientY,
    });
  };


    

    return (
        <div>
            <div className="flex flex-col  items-center bg-white text-black p-8 lg:p-24 min-h-screen">
            <div className='mx-auto mb-8'>
            <div className='border-l border-gray-500 h-36 '></div>

            </div>
        
      {/* Left Section: Title */}
      <div  
                    className="lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left relative">
        <h2 className="uppercase text-xs md:text-sm text-gray-600 mb-2 lg:mb-4 tracking-widest">
          Services
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          OUR MARKETING <br /> SERVICES
        </h1>
      </div>
      
      {/* Right Section: Description */}
      <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start mt-24">
      <div className='border-l border-gray-500 h-56'></div>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-lg ml-4">
          Consumers today rely heavily on digital means to research products. We research a brand’s online presence, ensuring engaging content. Meanwhile, 51% of consumers say they use Google to research products before buying.
        </p>
      </div>
    </div>

   {/* Search Engine Optimization */}
    <div className=''>
    <div className='border-t border-gray-500 mx-20'></div>

    <motion.div  initial={{ opacity: 0, y: 100 }}  
                    animate={{ opacity: 1, y: 0 }}     
                    transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group flex flex-col lg:flex-row items-center justify-between bg-white text-black ml-4 mt-4 md:mx-28 lg:mx-28 pb-24 pt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Left Section: Title and Description */}
      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <h2 className="uppercase text-lg md:text-3xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 text-left">
          SEARCH ENGINE <br />
          OPTIMIZATION
        </h2>
      </div>

      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <p className="text-sm md:text-base  text-gray-600 mb-4 lg:mb-6 max-w-md text-left font-semibold">
          We help brands stand out through impactful, elegant visual design. Our design philosophy focuses on clarity and functionality.
        </p>
        <ul className="text-sm md:text-base text-gray-700 space-y-2 text-left font-semibold">
          <li>+ Logo Design</li>
          <li>+ Advertisement</li>
          <li>+ Promotion</li>
        </ul>
      </div>

      {/* Right Section: Circular Details Button */}
      <div className="lg:w-1/3 w-full flex  lg:justify-end mt-8 lg:mt-0">
        <a
          href="#"
          className="relative flex items-center justify-center w-40 h-40 font-semibold rounded-full border border-gray-400 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
        >
          Details
          <MdArrowOutward size={18} className="absolute right-8 text-black" />
        </a>
      </div>

      {/* Hover Image */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '400px',
            backgroundImage: `url(${service1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            margin: '-200px 0 0 -150px',
            zIndex: 0, // Make sure it's behind the text
          }}
          animate={{
            x: position.x - 150,  // Offset by half of image width
            y: position.y - 200,  // Offset by half of image height
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
    </motion.div>
    </div>

{/* Email marketing */}

<div>
    <div className='border-t border-gray-500 mx-20'></div>

    <motion.div  initial={{ opacity: 0, y: 100 }}  
                    animate={{ opacity: 1, y: 0 }}     
                    transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group flex flex-col lg:flex-row items-center justify-between bg-white text-black pb-24 pt-8 ml-4 mt-4 md:mx-28 lg:mx-28"
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
      onMouseMove={handleMouseMove1}
    >
      {/* Left Section: Title and Description */}
      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 text-left">
          EMAIL <br />
          MARKETING
        </h2>
      </div>

      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <p className="text-sm md:text-base text-gray-600 mb-4 lg:mb-6 max-w-md text-left font-semibold">
          We help brands stand out through impactful, elegant visual design. Our design philosophy focuses on clarity and functionality.
        </p>
        <ul className="text-sm md:text-base text-gray-700 space-y-2 text-left font-semibold">
          <li>+ Logo Design</li>
          <li>+ Advertisement</li>
          <li>+ Promotion</li>
        </ul>
      </div>

      {/* Right Section: Circular Details Button */}
      <div className="lg:w-1/3 w-full flex  lg:justify-end mt-8 lg:mt-0">
        <a
          href="#"
          className="relative flex items-center justify-center w-40 h-40 font-semibold rounded-full border border-gray-400 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
        >
          Details
          <MdArrowOutward size={18} className="absolute right-8 text-black" />
        </a>
      </div>

      {/* Hover Image */}
      {isHovered1 && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '400px',
            backgroundImage: `url(${service1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            margin: '-200px 0 0 -150px',
            overflow: 'hidden',
          }}
          animate={{
            x: position.x - 150,  // Offset by half of image width
            y: position.y - 200,  // Offset by half of image height
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
    </motion.div>
    </div>
    


    {/* Content MARKETING */}


    <div>
    <div className='border-t border-gray-500 mx-20'></div>

    <motion.div  initial={{ opacity: 0, y: 100 }}  
                    animate={{ opacity: 1, y: 0 }}     
                    transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group flex flex-col lg:flex-row items-center justify-between bg-white text-black pb-24 pt-8 ml-4 mt-4 md:mx-28 lg:mx-28"
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
      onMouseMove={handleMouseMove2}
    >
      {/* Left Section: Title and Description */}
      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 text-left">
          CONTENT <br />
          MARKETING
        </h2>
      </div>

      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <p className="text-sm md:text-base text-gray-600 mb-4 lg:mb-6 max-w-md text-left font-semibold">
          We help brands stand out through impactful, elegant visual design. Our design philosophy focuses on clarity and functionality.
        </p>
        <ul className="text-sm md:text-base text-gray-700 space-y-2 text-left font-semibold">
          <li>+ Logo Design</li>
          <li>+ Advertisement</li>
          <li>+ Promotion</li>
        </ul>
      </div>

      {/* Right Section: Circular Details Button */}
      <div className="lg:w-1/3 w-full flex  lg:justify-end mt-8 lg:mt-0">
        <a
          href="#"
          className="relative flex items-center justify-center w-40 h-40 font-semibold rounded-full border border-gray-400 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
        >
          Details
          <MdArrowOutward size={18} className="absolute right-8 text-black" />
        </a>
      </div>

      {/* Hover Image */}
      {isHovered2 && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '400px',
            backgroundImage: `url(${service1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            margin: '-200px 0 0 -150px',
            overflow: 'hidden',
          }}
          animate={{
            x: position.x - 150,  // Offset by half of image width
            y: position.y - 200,  // Offset by half of image height
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
    </motion.div>
    </div>

    {/* Social Media MARKETING */}


    <div>
    <div className='border-t border-gray-500 mx-20'></div>

    <motion.div  initial={{ opacity: 0, y: 100 }}  
                    animate={{ opacity: 1, y: 0 }}     
                    transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group flex flex-col lg:flex-row items-center justify-between bg-white text-black pb-24 pt-8 ml-4 mt-4 md:mx-28 lg:mx-28"
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)}
      onMouseMove={handleMouseMove3}
    >
      {/* Left Section: Title and Description */}
      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <h2 className="uppercase text-2xl md:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 text-left">
          SOCIAL MEDIA <br />
          MARKETING
        </h2>
      </div>

      <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
        <p className="text-sm md:text-base text-gray-600 mb-4 lg:mb-6 max-w-md text-left font-semibold">
          We help brands stand out through impactful, elegant visual design. Our design philosophy focuses on clarity and functionality.
        </p>
        <ul className="text-sm md:text-base text-gray-700 space-y-2 text-left font-semibold">
          <li>+ Logo Design</li>
          <li>+ Advertisement</li>
          <li>+ Promotion</li>
        </ul>
      </div>

      {/* Right Section: Circular Details Button */}
      <div className="lg:w-1/3 w-full flex  lg:justify-end mt-8 lg:mt-0">
        <a
          href="#"
          className="relative flex items-center justify-center w-40 h-40 font-semibold rounded-full border border-gray-400 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
        >
          Details
          <MdArrowOutward size={18} className="absolute right-8 text-black" />
        </a>
      </div>

      {/* Hover Image */}
      {isHovered3 && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '400px',
            backgroundImage: `url(${service1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            margin: '-200px 0 0 -150px',
            overflow: 'hidden',
          }}
          animate={{
            x: position.x - 150,  // Offset by half of image width
            y: position.y - 200,  // Offset by half of image height
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
    </motion.div>
    </div>
        </div>
    );
};

export default Service;