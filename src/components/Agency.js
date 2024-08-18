import React from 'react';
import agency from '../image/agency.webp';
import { MdArrowOutward } from 'react-icons/md';

function Agency() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 bg-black text-white py-24">
      
      {/* Left Section: Image */}
      <div className="flex items-center justify-center">
        <img 
          src={agency}
          alt="Office" 
          className="object-cover h-full w-full max-w-md"
        />
      </div>

      {/* Right Section: Content */}
      {/* <div className="w-full flex flex-col justify-start p-8 ">
        <div className="max-w-lg mx-auto">
          
        </div>
      </div> */}

      <div className='max-w-lg text-left'>
      <h2 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">Who We Are</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            WE ARE LEADING DIGITAL MARKETING AGENCY.
          </h1>
          <div className='ml-32 border-l border-gray-500 pl-8'>
          <p className="text-base md:text-md mb-8 text-gray-300 mt-16">
            We’re a team of strategic digital marketing experts working globally with the largest brands. We believe that progress only happens when you refuse to play things safe. We combine ideas, behaviors, and insights with design and technological data to produce brand experiences that customers love.
          </p>
          <div className="flex bg-black">
      <a 
        href="#"
        className="relative flex items-center justify-center h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-40 lg:h-40 rounded-full bg-gray-900 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300"
      >
        <span className="text-gray-400 hover:text-white text-sm md:text-base lg:text-lg hover:text-black">
          Explore Us
        </span>
        <MdArrowOutward size={20} className='absolute right-3 text-white hover:text-black' />
      </a>
    </div>
          </div>
      </div>
    </div>
  );
}

export default Agency;
