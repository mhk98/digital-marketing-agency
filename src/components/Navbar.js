import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars, FaBarsStaggered, FaPlus } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa'; // Close icon
import shape from '../image/shape1.webp'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const toggleMenu = (menu) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
  };



  const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const mobileMenu = (menu) => {
        if (openMenu === menu) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menu);
        }
    };

  return (
    <>
      <nav className="lg:flex xl:flex md:flex hidden items-center justify-between py-4 px-8 bg-white ">
        <div className="flex items-center">
          <div className="text-2xl font-bold">λxtra</div>
          {/* <span className="text-xs ml-2 text-gray-500">DIGITAL AGENCY STUDIO</span> */}
        </div>
        <ul className="flex space-x-20">
          <li className="hover:text-gray-700 cursor-pointer font-semibold">HOME</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">ABOUT</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">PAGES</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">SERVICES</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">TEAM</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">BLOG</li>
          <li className="hover:text-gray-700 cursor-pointer font-semibold">CONTACT</li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <AiOutlineSearch size={25} />
          </div>
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <FaBarsStaggered size={25} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        
        <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-1/4 py-6 bg-black flex flex-col justify-between border-r">
      <div>
        
        <div>
        <div className="text-5xl font-semibold border-b pb-8">λxtra</div>
          <h2 className="mb-4 mt-8 font-semibold text-xl">Follow Us</h2>
          <ul className="space-y-2">
            <li><a href="#dribbble" className="hover:text-gray-400">Dribbble</a></li>
            <li><a href="#behance" className="hover:text-gray-400">Behance</a></li>
            <li><a href="#instagram" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#facebook" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#youtube" className="hover:text-gray-400">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#career" className="hover:text-gray-400">Career</a></li>
          <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
        </ul>
      </div>
      </div>

      {/* Main Content Area */}
      <div className="w-2/4 flex flex-col py-20 max-h-screen overflow-y-auto custom-scrollbar">
    <div className="w-full flex flex-col">
        <div className="flex justify-between pl-12 items-center cursor-pointer border-y " onClick={() => toggleMenu('HOME')}>
            <div className="text-5xl font-semibold">HOME</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'HOME' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}

        <div className="flex justify-between pl-12 items-center cursor-pointer border-y  mt-8" onClick={() => toggleMenu('ABOUT')}>
            <div className="text-5xl font-semibold">ABOUT</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'ABOUT' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}

        <div className="flex justify-between items-center pl-12 cursor-pointer border-y  mt-8" onClick={() => toggleMenu('SERVICE')}>
            <div className="text-5xl font-semibold">SERVICE</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'SERVICE' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}

        <div className="flex justify-between items-center pl-12 cursor-pointer border-y  mt-8" onClick={() => toggleMenu('PAGES')}>
            <div className="text-5xl font-semibold">PAGES</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'PAGES' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}

        <div className="flex justify-between items-center pl-12 cursor-pointer border-y  mt-8" onClick={() => toggleMenu('BLOG')}>
            <div className="text-5xl font-semibold">BLOG</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'BLOG' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}

        <div className="flex justify-between items-center pl-12 cursor-pointer border-y  mt-8" onClick={() => toggleMenu('CONTACT')}>
            <div className="text-5xl font-semibold">CONTACT</div>
            <div className="text-3xl font-bold bg-[#2A2A2A] px-8 py-6">+</div>
        </div>
        {expandedMenu === 'CONTACT' && (
            <div className="pl-4 text-2xl text-left mt-2 font-semibold space-y-2">
                <div>Submenu 1</div>
                <div>Submenu 2</div>
                <div>Submenu 3</div>
            </div>
        )}
    </div>


</div>




      {/* Right Sidebar */}
      <div className="bg-black text-white w-60 h-full p-6 relative">
      {/* Close Button */}
      <div className="absolute top-8 -right-16">
        <button className="focus:outline-none" onClick={toggleSidebar}>
          <div className="bg-[#232323] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-12 mb-8">
  <div className="relative mt-28">
    <input 
      type="text" 
      placeholder="Search keyword" 
      className="bg-[#1D1D1D] text-gray-400 h-16 w-72 p-3 pl-4 border rounded-full focus:outline-none"
    />
    <button className="absolute top-6 right-0 -mr-20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</div>


      {/* Contact Info */}
      <div className='my-16'>
        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
        <ul className="space-y-2 text-xl font-semibold">
          <li>+(02) - 094 980 547</li>
          <li>info@extradesign.com</li>
          <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
        </ul>
      </div>

      {/* Decorative Circles */}
      <div className="absolute bottom-28 right-2">
        <div className="w-20 h-20 bg-purple-500 rounded-full absolute -left-10 -bottom-10"></div>
        
      </div>
      <div className="w-30 h-30 rounded-full absolute -left-4 -bottom-4">
        <img src={shape} alt=''/>
        </div>
    </div>
    </div>
      </div>


      <div>
            {/* Navbar Icon - Positioned on the right side */}
            {/* <button 
                onClick={() => setIsOpen(true)} 
                className="fixed top-4 right-4 md:hidden text-black text-3xl p-4"
            >
                <FaBars />
            </button> */}


<div className="flex items-center space-x-4 fixed top-4 right-4 md:hidden">
          <div className="cursor-pointer">
            <AiOutlineSearch size={25} />
          </div>
          <div className="cursor-pointer"  onClick={() => setIsOpen(true)} 
          >
            <FaBarsStaggered size={25} />
          </div>
        </div>

            {/* Sidebar Menu - Visible only on mobile */}
            <div 
                className={`fixed top-0 right-0 z-10 h-full w-64 bg-black text-white transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)}>
                        <FaTimes className="text-white text-2xl" />
                    </button>
                </div>
                <div className="mt-8 space-y-4">
                    {['HOME', 'ABOUT', 'SERVICE', 'PAGES', 'BLOG', 'CONTACT'].map((item, index) => (
                        <div key={index} className="border-b border-gray-700">
                            <button 
                                onClick={() => mobileMenu(item)} 
                                className="flex justify-between w-full py-3 px-4 text-left"
                            >
                                <span>{item}</span>
                                <FaPlus className={`transform transition-transform ${openMenu === item ? 'rotate-45' : ''}`} />
                            </button>
                            {openMenu === item && (
                                <div className="bg-gray-800 text-gray-400 py-2 pl-8">
                                    <p>Submenu 1</p>
                                    <p>Submenu 2</p>
                                    <p>Submenu 3</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Overlay - Visible only on mobile */}
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)} 
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                ></div>
            )}
        </div>
    </>
  );
};

export default Navbar;
