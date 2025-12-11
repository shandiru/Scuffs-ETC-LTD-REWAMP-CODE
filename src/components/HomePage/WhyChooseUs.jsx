"use client";
import React, { useEffect } from "react";
import { FaCarCrash } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdFormatPaint } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const services = [
    {
      icon: <GiCarDoor className="text-[40px]" />,
      title: "Paintless Dent Removal",
      desc: "Flawless, expert repairs to restore your car’s perfect finish.",
    },
    {
       image: "/spray.png", // ✅ use your image here
      title: "Professional Painting",
      desc: "Professional paintwork designed to match or refresh your vehicle.",
    },
    {
      image: "/spray.png", // ✅ use your image here
      title: "Spray Gun Works",
      desc: "Trusted technicians keeping your car in shape.",
    },
    {
      icon: <FaCarCrash className="text-[40px]" />,
      title: "Damage Repairs",
      desc: "Quick, reliable fixes for minor accident damage.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* ✅ Background styles */}
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
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* ✅ Dotted background */}
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

      {/* ✅ Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <GiCarDoor
          className="bg-icon w-20 h-20 top-8 left-8"
          style={{ animationDelay: "0s" }}
        />
        <FaCarCrash
          className="bg-icon w-24 h-24 bottom-8 right-8"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* ✅ Main content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <h2
          className="text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Why Choose Us
        </h2>
        <p
          className="text-lg text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Recognised for award-winning service, certified quality, and 5-star
          customer satisfaction.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: PINK,
              }}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div
                className="w-[80px] h-[80px] rounded-full mb-4 flex items-center justify-center"
                style={{
                  backgroundColor: LIME,
                  color: PINK,
                }}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[65px] h-[65px] object-contain"
                  />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
