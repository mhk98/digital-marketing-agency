import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import img1 from '../image/slider1/2.webp';
import img2 from '../image/slider1/3.webp';
import img3 from '../image/slider1/4.webp';
import img4 from '../image/slider1/2.webp';
import Slider1 from './Slider1';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const slides = [
    { name: 'BENJON', title: ' WEBSITE', year: '2012', imageUrl: img1 },
    { name: 'BENJON ', title: ' WEBSITE', year: '2013', imageUrl: img2 },
    { name: 'BENJON ',title: ' WEBSITE', year: '2014', imageUrl: img3 },
    { name: 'BENJON ', title: ' WEBSITE', year: '2015', imageUrl: img4 },
  ];

  return (
    <div>
       

    
       <div   className="relative bg-black text-white">
  {/* Featured Work Title */}
  <h2 className="absolute -top-16  left-5 sm:left-10 md:left-20 lg:left-32 mt-16 md:mt-20 text-lg sm:text-xl md:text-2xl tracking-wider z-20 text-left">
    <span>FEATURED</span>
    <br />
    <span>WORK</span>
  </h2>

  {/* Swiper Component */}
  <Swiper
  modules={[Navigation, Pagination, Autoplay]} // Include Autoplay in modules
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false, // Keep autoplay running after user interactions
  }}
  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
>
  {slides.map((slide, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center lg:justify-between px-4 sm:px-10 md:px-20 lg:px-60 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="relative text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold mt-8 lg:mt-0">
            {slide.name}
          </h1>
          <h1 className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 absolute left-4 sm:left-8 md:left-12 lg:left-32 text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold">
            {slide.title}
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold mt-16 lg:mt-28">
            {slide.year}
          </h1>
        </div>
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className="w-full sm:w-64 md:w-96 lg:w-1/2 max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-[670px] lg:max-w-[550px]"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>;

  {/* Slide Counter */}
  <div className="absolute top-24 sm:top-32 md:top-36 lg:top-20 left-1/2 transform -translate-x-1/2 ml-0 sm:ml-12 md:ml-16 lg:-ml-40 text-base sm:text-lg md:text-xl font-bold z-20">
    <span className="text-4xl sm:text-5xl">
      {currentSlide} /
    </span> {totalSlides}
  </div>

  {/* Swiper Navigation Customization */}
  <style jsx>{`
    .swiper-button-next,
    .swiper-button-prev {
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 2px solid white;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 14px;
      font-weight: bold;
    }

    @media (min-width: 768px) {
      .swiper-button-next,
      .swiper-button-prev {
        width: 40px;
        height: 40px;
      }

      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 16px;
      }
    }
  `}</style>
</div>

    

    <Slider1/>
</div>
  );
};

export default Slider;
