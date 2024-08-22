import React, { useRef } from 'react';
import img1 from '../image/slider2/1.webp';
import img2 from '../image/slider2/2.webp';
import img3 from '../image/slider2/3.webp';
import img4 from '../image/slider2/4.webp';
import img5 from '../image/slider2/5.webp';
import img6 from '../image/slider2/6.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Slider1 = () => {
    const swiperRef = useRef(null);
    const testimonials = [
        {
          quote: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
          author: "MARIA D. HALK",
          title: "Managing Director"
        },
        {
          quote: "Alts has been a pivotal partner in our growth journey, offering invaluable support at every step. Their dedication and expertise have truly made a difference.",
          author: "JOHN DOE",
          title: "CEO"
        },
        {
          quote: "The team's commitment to excellence is unmatched. Alts is not just a service provider; they are a true partner in our success.",
          author: "JANE SMITH",
          title: "COO"
        },
        {
          quote: "Working with Alts has been a game changer. Their strategic insights and collaborative approach have helped us achieve our business goals.",
          author: "MICHAEL JOHNSON",
          title: "CTO"
        },
      ];

  return (

    <div>
       <div className="flex items-center justify-center bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-8 gap-8 md:gap-16 lg:gap-72 place-items-center">
    {/* Left Side - Large Image */}
    <div className="p-4">
      <img
        src={img1}
        alt="Large Image"
        className="shadow-lg"
        style={{ width: '100%', maxWidth: '170px', height: 'auto', maxHeight: '200px' }}
      />
    </div>

    {/* Right Side - Small Image */}
    <div className="p-4">
      <img
        src={img2}
        alt="Small Image"
        className="shadow-lg"
        style={{ width: '100%', maxWidth: '90px', height: 'auto', maxHeight: '100px' }}
      />
    </div>
  </div>
</div>

          {/* Second Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white space-y-8 lg:space-y-0 lg:space-x-12 lg:px-16 md:px-12 ">
                {/* Left Side - Two Images */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <img
                            src={img3}
                            alt="Left Image 1"
                            style={{ width: '90px', height: '110px' }} // Adjusted for responsiveness
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src={img4}
                            alt="Left Image 2"
                            style={{ width: '250px', height: '320px' }} // Adjusted for responsiveness
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Middle Section - Slider */}
                <div className="bg-white w-full lg:max-w-xl">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20} // Adjusted for responsiveness
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="w-full"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center text-center p-4">
                                    <blockquote className="text-lg italic text-black font-semibold mb-4">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <p className="text-md text-black font-bold mt-4">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="space-x-4 mt-8 flex justify-center">
                        <button
                            className="w-8 h-8 rounded-full border border-black text-black font-bold"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            &#8592;
                        </button>
                        <button
                            className="w-8 h-8 rounded-full border border-black text-black font-bold"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                {/* Right Side - Two Images */}
                <div className="relative flex flex-col space-y-4">
                    <div>
                        <img
                            src={img5}
                            alt="Right Image 1"
                            style={{ width: '180px', height: '200px' }} // Adjusted for responsiveness
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-16 -left-16">
                        <img
                            src={img6}
                            alt="Right Image 2"
                            style={{ width: '120px', height: '140px' }} // Adjusted for responsiveness
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
    </div>
    
  );
};

export default Slider1;
