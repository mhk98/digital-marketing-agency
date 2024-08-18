import React from 'react';
import blog1 from '../image/blog/1.webp'
import blog2 from '../image/blog/2.webp'
import { MdArrowOutward } from 'react-icons/md';


const Blog = () => {
    return (
        <div>
                <div className="flex flex-col  items-center bg-white text-black">
            
        
      {/* Left Section: Title */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left relative">
      
      <div className='mx-auto ml-24'>
      <div className='border-l border-gray-500 h-36 '>
      </div>
      </div>

        <h2 className="uppercase text-xs md:text-sm text-gray-600 mb-2 lg:mb-4 tracking-widest">
          RECENT BLOG
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
        READ UPDATED
         <br /> JOURNAL
        </h1>
      </div>
      
      {/* Right Section: Description */}
      <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start mt-24 ml-40">
      <div className='border-l border-gray-500 h-56'></div>
        <p className="text-sm md:text-base font-semibold lg:text-lg text-gray-700 leading-relaxed max-w-lg ml-24 text-left">
        Read our blog and try to see everything <br/>
from every perspective. Our passion lies <br/>
in making everything accessible and <br/>
aesthetic for everyone.
        </p>
      </div>
    </div>


    


        

            {/* Blog Articles */}
            <div className="bg-white text-black px-4 lg:px-8 py-12">
            {/* Section Header */}
            

            {/* Blog Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Blog 1 */}
                <div className="relative flex flex-col md:flex-row bg-white rounded-lg overflow-hidden ">
                    <img
                        className="w-full md:w-1/2 object-cover"
                        src={blog1}
                        alt="Article"
                    />
                    <div className="md:absolute md:top-1/2 md:left-60 md:h-72 md:mt-20 transform md:-translate-y-1/2 p-6 bg-white flex flex-col justify-center w-72">
                        <div className='text-left'>
                            <p className="text-sm text-gray-500 font-semibold">UI Design · 02 May 2019</p>
                            <h2 className="text-xl font-semibold mt-2">
                                How to bring fold to your startup company with Axtra
                            </h2>
                        </div>
                        <div className="mt-4">
                            <div className='border-t border-gray-300 mb-2'></div>
                            <a
                                href="#"
                                className="text-gray-700 hover:underline flex items-center"
                            >
                                Read More <span className="ml-2"><MdArrowOutward /></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Blog 2 */}
                <div className="relative flex flex-col md:flex-row bg-white rounded-lg overflow-hidden ">
                    <img
                        className="w-full md:w-1/2 object-cover"
                        src={blog2}
                        alt="Article"
                    />
                    <div className="md:absolute md:top-1/2 md:h-72 md:mt-20 md:right-24 w-72 transform md:-translate-y-1/2 p-6 bg-white flex flex-col justify-center">
                        <div className='text-left'>
                            <p className="text-sm text-gray-500 font-semibold">UI Design · 02 May 2019</p>
                            <h2 className="text-xl font-semibold mt-2">
                                How to manage a talented and successful design team
                            </h2>
                        </div>
                        <div className="mt-4">
                            <div className='border-t border-gray-300 mb-2'></div>
                            <a
                                href="#"
                                className="text-gray-700 hover:underline flex items-center"
                            >
                                Read More <span className="ml-2"><MdArrowOutward /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </div>
    );
};

export default Blog;