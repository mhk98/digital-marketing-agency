import React from 'react';

const Clients = () => {
    const brands = [
        { name: "Creative", logo: require('../image/clients/1.webp') },
        { name: "Creative", logo: require('../image/clients/2.webp') },
        { name: "Innovate", logo: require('../image/clients/3.webp') },
        { name: "Express", logo: require('../image/clients/4.webp') },
        { name: "Brandname", logo: require('../image/clients/5.webp') },
        { name: "Name", logo: require('../image/clients/6.webp') },
    ];

    return (
        <div className="py-16 bg-white">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-lg font-medium">WE WORKED WITH GLOBAL LARGEST BRANDS</h2>
            </div>
            
            {/* Brand Logos */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
                {brands.map((brand, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={brand.logo} alt={brand.name} className="h-12 mb-4" />
                        <p className="text-sm text-gray-500">{brand.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
