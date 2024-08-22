import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./HorizontalScrollSlider.css";
import counter from '../image/slider3/counter-3.webp';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSlider() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      // Define a function to set up the horizontal scrolling
      const setupHorizontalScroll = () => {
        const isMobile = window.innerWidth < 768;

        gsap.to(panels, {
          xPercent: isMobile ? 0 : -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: !isMobile, // Disable pinning on mobile
            scrub: 1,
            snap: isMobile ? false : {
              snapTo: 1 / (panels.length - 1), // snapping points
              duration: { min: 0.2, max: 0.3 }, // control snap speed
              ease: "power1.inOut" // easing function
            },
            end: () => "+=" + slider.current.offsetWidth,
          },
        });
      };

      setupHorizontalScroll();

      // Recalculate on window resize
      window.addEventListener("resize", setupHorizontalScroll);

      return () => {
        window.removeEventListener("resize", setupHorizontalScroll);
      };
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      <div ref={slider} className="container">
        <div className="panel blue" ><h1 className="lg:text-9xl text-center  font-bold">WHY <br /> CHOOSE US?</h1></div>
        <div className="panel">
          <div className="why-choose-us-container">
            <div className="left-side">
              <p className=" font-bold">WHY CHOOSE US</p>
              <h1>KEYWORD, RESEARCH, STRATEGY, SURVEY, & ANALYTICS</h1>
              <p className="lg:ml-16">
                Attention, we take out our round glasses and <br /> our sweater with elbow patches to go back <br /> to the origins of the user experience: the first <br /> mention of the user and its importance was <br /> born in the...
              </p>
              <div className="flex space-x-4">
      <button className=" research__tools hover:bg-black hover:text-white transition-colors" style={{fontSize:'14px'}}>
        GOOGLE
      </button>
      <button className=" research__tools hover:bg-black hover:text-white transition-colors" style={{fontSize:'14px'}}>
        PINTEREST
      </button>
      <button className=" research__tools hover:bg-black hover:text-white transition-colors" style={{fontSize:'14px'}}>
        INSTAGRAM
      </button>
    </div>
            </div>
            <div className="right-side">
              <div className="circle-stat lg:ml-16">
                <div className="circle">60%</div>
                <div>
                  <h3>STRATEGY</h3>
                  <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                </div>
              </div>
              <div className="circle-stat">
                <div className="circle">95%</div>
                <div>
                  <h3>AUDIENCE</h3>
                  <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                </div>
              </div>
              <div className="circle-stat lg:ml-16">
                <div className="circle">70%</div>
                <div>
                  <h3>KEYWORD</h3>
                  <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel third-panel">
          <div className="third-panel-container">
            <div className="stats">
              <div className="flex gap-28">
                <div className="stat-item">
                  <h2>25k</h2>
                  <p>Projects <br /> completed</p>
                </div>
                <div className="stat-item">
                  <h2>8k</h2>
                  <p>Happy <br /> customers</p>
                </div>
              </div>
              <div className="flex gap-28">
                <div className="stat-item">
                  <h2>15</h2>
                  <p>Years</p>
                </div>
                <div className="stat-item">
                  <h2>98</h2>
                  <p>Awards</p>
                </div>
              </div>
            </div>
            <div className="teamwork-images">
              <img src={counter} alt="" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="panel">
          <div className="flex flex-col items-center justify-center h-full w-screen bg-[#E0E3CC]">
            <p className="text-md text-gray-600 mb-4">Have you project in mind?</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center leading-tight">
              Let’s make something <br /> great together!
            </h1>
            <div className="relative mt-10">
              <a
                href="#"
                className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#E0E3CC] text-black border border-black text-center font-medium text-sm md:text-lg"
              >
                Contact <br /> With Us
                <span className="ml-2">➔</span>
              </a>
              <div className="absolute bottom-[-15px] left-[50%] transform -translate-x-[50%] w-4 h-4 rounded-full bg-blue-600 animate-ping"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
