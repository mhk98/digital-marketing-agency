import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Clients = () => {
    const brands = [
        { name: "Creative", logo: require('../image/clients/1.webp') },
        { name: "Creative", logo: require('../image/clients/2.webp') },
        { name: "Innovate", logo: require('../image/clients/3.webp') },
        { name: "Express", logo: require('../image/clients/4.webp') },
        { name: "Brandname", logo: require('../image/clients/5.webp') },
        { name: "Name", logo: require('../image/clients/6.webp') },
    ];

    // Create a reference for the Clients section
    const ref = useRef(null);
    // Determine if the element is in view
    const isInView = useInView(ref, { margin: '-100px 0px', triggerOnce: true });

    return (
        <div
            ref={ref}
            className="py-16 bg-white"
        >
            {/* Heading */}
            <div className="text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}  
                    animate={isInView ? { opacity: 1, y: 0 } : {}}     
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-lg font-medium"
                >
                    WE WORKED WITH GLOBAL LARGEST BRANDS
                </motion.div>
            </div>
            
            {/* Brand Logos */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
                {brands.map((brand, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}  
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <img src={brand.logo} alt={brand.name} className="h-12 mb-4" />
                        <p className="text-sm text-gray-500">{brand.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
