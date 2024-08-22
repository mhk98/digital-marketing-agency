import React, { useRef, useEffect } from "react";

function HorizontalScrollSlider() {
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = window.scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slides = [
    { id: 1, title: "Slide 1", bgColor: "bg-blue-500" },
    { id: 2, title: "Slide 2", bgColor: "bg-green-500" },
    { id: 3, title: "Slide 3", bgColor: "bg-purple-500" },
    { id: 4, title: "Slide 4", bgColor: "bg-red-500" },
    { id: 5, title: "Slide 5", bgColor: "bg-yellow-500" },
  ];

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div
        ref={containerRef}
        className="flex w-[500vw] h-full"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-none w-screen h-full ${slide.bgColor} flex justify-center items-center`}
          >
            <h1 className="text-5xl font-bold text-white">{slide.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalScrollSlider;
