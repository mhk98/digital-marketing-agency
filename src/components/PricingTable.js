import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const PricingTable = () => {
  // State to manage which section is expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle the expansion of a section
  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Design should enrich our day",
      content: "Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people."
    },
    {
      title: "Bring their individual experience and creative",
      content: "Content for individual experience and creative."
    },
    {
      title: "Human centered design to challenges",
      content: "Content for human-centered design to challenges."
    },
    {
      title: "Design should enrich our day",
      content: "Additional content on how design should enrich our day."
    },
    {
      title: "Developing core web applications",
      content: "Content on developing core web applications."
    }
  ];

  return (
    <div className="mt-8 bg-[#F3ECEC] flex justify-center items-center p-6">
      <div className="max-w-4xl w-full   p-8">
        <h1 className="text-4xl font-bold mb-8">BE KIND TO YOUR MIND</h1>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="space-y-4 flex-grow">
            {sections.map((section, index) => (
              <div key={index} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <span className="text-2xl">
                    {expandedSections[index] ? "−" : "+"}
                  </span>
                </div>
                {expandedSections[index] && (
                  <p className="text-gray-600 mt-2">{section.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="w-full max-w-xs lg:max-w-sm">
          <div className="bg-black text-white rounded-lg shadow-lg p-6 relative max-w-sm">
      <div className="absolute -top-4 right-4 bg-[#FF9776] text-black text-xs font-bold px-2 py-1 ">
        BEST VALUE
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm border border-white px-2 py-1 rounded-full">YEARLY</span>
        <span className="text-3xl font-bold">$129.99</span>
      </div>
      
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 px-4 bg-[#FF9776] rounded-sm flex items-center justify-center mr-2">
          <span className="text-black">✓</span>
        </div>
        <div><h3 className="text-2xl font-semibold mt-4">14 DAYS FREE</h3>
      <p className="text-gray-400 text-sm mt-2">
        Subscription fee is $129.99 USD and automatically renews each year.
      </p></div>
      </div>
    </div>


    <div className="bg-white mt-4 text-black rounded-lg shadow-lg p-6 relative max-w-sm">
      
      <div className="flex items-center justify-between">
        <span className="text-sm border border-black px-2 py-1 rounded-full">YEARLY</span>
        <span className="text-3xl font-bold">$12.99</span>
      </div>
      
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 px-4 bg-white border border-black rounded-sm flex items-center justify-center mr-2">
          <span className="text-black">✓</span>
        </div>
        <div><h3 className="text-2xl font-semibold mt-4">14 DAYS FREE</h3>
      <p className="text-black text-sm mt-2">
        Subscription fee is $129.99 USD and automatically renews each year.
      </p></div>
      </div>
    </div>
   

    <div className="mt-8">
          

          <a
          href="#"
          className="relative text-sm flex items-center justify-center w-40 h-40 font-semibold rounded-full border border-gray-400 text-gray-600 hover:text-black hover:border-black transition-all duration-300"
        >
           <p>Try It Free</p>
          <MdArrowOutward size={18} className="absolute right-8 text-black" />
        </a>
        </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default PricingTable;
