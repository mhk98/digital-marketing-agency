import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
    <div className="relative bg-black text-white">
      {/* Featured Work Title */}
      <h2 className="absolute top-5 left-32 mt-20 text-xl tracking-wider z-20 text-left">
         
        <span>FEATURED</span>
<br/>
        <span>WORK</span>
      </h2>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        className=""
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className=" flex items-center justify-between px-60">
            <div className='flex justify-between items-center'>

            <div className="relative">
               
        <h1 className=" text-6xl lg:text-8xl font-extrabold mt-8">
              {slide.name}
            </h1>
            <h1 className="ml-16 absolute left-16 text-6xl lg:text-8xl font-extrabold">
              {slide.title}
            </h1>
            <h1 className=" text-6xl lg:text-8xl font-extrabold mt-24">
              {slide.year}
            </h1>
      </div>
           
            <img src={slide.imageUrl} alt={slide.title} style={{width:'500', height:'400'}} className="" />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Counter */}
      <div className='absolute top-40 left-96 ml-24 text-lg lg:text-xl font-bold z-20'>
        <span className='text-5xl'>
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
          width: 40px;
          height: 40px;
          border:2px solid white;

        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>

      <Slider1/>
    </div>
  );
};

export default Slider;
