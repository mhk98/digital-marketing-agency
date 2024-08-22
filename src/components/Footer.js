import React from 'react';
import logo from '../image/logo.webp';

const Footer = () => {
    return (
        <div className="bg-black text-white">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 border-b border-gray-700 px-4 md:px-12">
                {/* Logo and Description */}
                <div className="w-full flex flex-col items-start mt-28">
                    <img src={logo} alt="Logo" className="mb-4" />
                    <p className="text-gray-400 text-left w-80">
                        When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="w-full space-y-4 border-x border-gray-700">
          <a href="#" className="block text-white hover:text-gray-400 border-b border-gray-700 p-8">FACEBOOK</a>
          <a href="#" className="block text-white hover:text-gray-400 border-b border-gray-700 p-8">TWITTER</a>
          <a href="#" className="block text-white hover:text-gray-400 border-b border-gray-700 p-8">LINKEDIN</a>
          <a href="#" className="block text-white hover:text-gray-400 p-8">INSTAGRAM</a>
        </div>

                {/* Let's Talk Section */}
                <div className="w-full flex items-center  md:justify-start">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">LET'S TALK</h1>
                </div>
            </div>
            
            {/* Bottom Section */}
            <footer className="bg-black text-white py-4">
                <div className=" mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
                    <div className="text-center md:text-left">
                        <p>© 2022 - 2025 | All rights reserved</p>
                        <p className="text-gray-500">by Wealcoder</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-500">ABOUT US</a>
                        <a href="#" className="hover:text-gray-500">CONTACT</a>
                        <a href="#" className="hover:text-gray-500">CAREER</a>
                        <a href="#" className="hover:text-gray-500">FAQS</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
