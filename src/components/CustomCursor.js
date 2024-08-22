import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-10 h-10 bg-transparent border-2 border-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
