import React, { useState, useEffect } from "react";
import { FaStar, FaMagic, FaShieldAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    name: "Honey Ratcliffe",
    text: `Took my car to have some scratches fixed and they have done an amazing job at it, You can’t even tell it was there in the first place. I would 100% recommend the man is so friendly and got me in very fast. Thank you again! Before and after photos below 😊`,
  },
  {
    name: "Michelle Chambers",
    text: `Highly recommend Darren and his colleagues.
All of them are polite and will go above and beyond .Besides making u feel welcome and comfortable.
Also the communication from Darren was fantastic.`,
  },
  {
    name: "Louis Sinyard",
    text: `Rang Darren asking about re spraying two bumpers for my friend's car. He was very helpful and advised me on what was needed and provided a quote over the phone. He's done a fantastic job and given a new lease of life to the car. Would highly recommend him and his team to anyone that needs any bodywork or paint doing. Super friendly and helpful, couldn't be happier.`,
  },
  {
    name: "Phil Bower",
    text: `Great service from Darren who gave me great advice in regard to repairing my ST which had the dreaded lacquer peel on roof and bonnet. Darren prepared my car and refurbished my alloys doing a fantastic job at a great price. Professional, friendly and willing to go the extra mile to help. Can’t recommend enough. Thanks Daz 5⭐️.`,
  },
  {
    name: "Lewis Armitage",
    text: `Red GTC damaged side/arch.
Did a really nice Job of repairing and painting a decent sized scratch and dent on my car I cant even tell where the damage was!`,
  },
  {
    name: "A Hobson",
    text: `Recently completed my partners Audi A1. A brilliant job, and brilliant service. It was a more difficult colour to match but the boys smashed it and at a very reasonable price too.`,
  },
  {
    name: "Rob Nixon",
    text: `Went to Scuffs ETC LTD as they were well rated and I wasn't dissapointed. Darren and the team managed to get the dents on either side of my front bumper looking as good as new without having to remove the bumper and incur additional cost. He was friendly and honest about the process and what to expect. Couldn't fault anything and I would 100% reccomend Scuffs ETC LTD.`,
  },
  {
    name: "Liam Turner",
    text: `I wouldn't trust anyone else to smart repair or paint parts I've needed painting over the years, Darren is always very friendly helpful and looks after you with the price. Definitely one of the best painters in Sheffield!`,
  },
  {
    name: "Sajid Hussain",
    text: `I recently bought a hardtop for my Z4 and Darren and Brandon did an amazing job preparing and painting it for me.`,
  },
];

const Testimonials = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Large screens: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Medium screens: 2 items
      } else {
        setItemsPerView(1); // Small screens: 1 item
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Handle touch/swipe for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 relative overflow-hidden bg-white"
    >
      {/* Background styles */}
      <style>
        {`
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.4); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.1); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(224,102,230,0.8));
            z-index: 0;
            pointer-events: none;
          }
          .spray-icon {
            position: absolute;
            animation: pulseSpin 20s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(204,255,102,0.8));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon, .spray-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* Dotted background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CCFF66_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="spray-icon top-8 left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52  rounded-full flex items-center justify-center"
          style={{ animationDelay: "0s" }}
        >
          <FaMagic className="w-1/2 h-1/2 text-pink-500" />
        </div>
        
        <FaShieldAlt
          className="bg-icon w-24 h-24 bottom-8 right-8"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: PINK }}>
          What Our Customers Say
        </h2>
        <p className="text-lg mb-12 text-gray-700">
          Don't just take our word for it – hear from our satisfied customers
        </p>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed bg-gray-300' 
                : 'hover:scale-110 hover:shadow-xl'
            }`}
            style={{
              backgroundColor: currentIndex === 0 ? '#ccc' : PINK,
              color: 'white',
              transform: 'translateX(-50%) translateY(-50%)',
            }}
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed bg-gray-300' 
                : 'hover:scale-110 hover:shadow-xl'
            }`}
            style={{
              backgroundColor: currentIndex >= maxIndex ? '#ccc' : PINK,
              color: 'white',
              transform: 'translateX(50%) translateY(-50%)',
            }}
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Testimonials Slider */}
          <div 
            className="overflow-hidden mx-8 sm:mx-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  <div
                    className="h-full p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{
                      backgroundColor: LIME,
                      border: `2px solid ${PINK}`,
                      minHeight: '280px',
                    }}
                  >
                    <div className="flex flex-col items-center mb-4">
                      <h4
                        className="text-lg sm:text-xl mb-2 text-center font-semibold"
                        style={{ color: PINK }}
                      >
                        {t.name}
                      </h4>
                      <div className="flex mb-2" style={{ color: PINK }}>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    <p className="italic text-center text-black text-sm sm:text-base leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'scale-125' : 'hover:scale-110'
                }`}
                style={{
                  backgroundColor: currentIndex === index ? PINK : '#ccc',
                }}
              />
            ))}
          </div>

          {/* Current Position Indicator */}
          <p className="text-center mt-4 text-sm text-gray-600">
            {currentIndex + 1} of {maxIndex + 1}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;