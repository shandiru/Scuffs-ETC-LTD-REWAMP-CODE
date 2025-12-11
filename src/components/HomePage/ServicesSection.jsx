// File: OurServices.jsx
"use client";
import React, { useEffect } from "react";
import {
  FaCar,
  FaMagic,
  FaShieldAlt,
  FaCheckCircle,
  FaWrench,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Alloy Wheel Repair",
    desc: "Professional restoration of damaged alloy wheels, from minor scuffs to major damage.",
    href: "/services/alloy-wheel-repair",
    icon: <GiCarWheel  className="h-6 w-6 text-[#E066E6]" />,
    chips: ["Scuff Repair", "Crack Welding", "Diamond Cut Cosmetic", "Color Matching"],
  },
  {
    title: "Bodywork Scuffs, Cracks and Dents",
    desc: "Expert repair of vehicle bodywork damage, restoring your car to its original condition.",
    href: "/services/bodywork-repair",
    icon: <FaCar className="h-6 w-6 text-[#E066E6]" />,
    chips: ["Dent Removal", "Scratch Repair", "Panel Beating", "Surface Preparation", "Smart Repair"],
  },
  {
    title: "Textured Plastic Repairs",
    desc: "Specialized repair and restoration of textured plastic components and trim.",
    href: "/services/textured-plastic-repair",
    icon: <FaMagic className="h-6 w-6 text-[#E066E6]" />,
    chips: ["Trim Restoration", "Texture Matching", "Color Restoration", "UV Protection"],
  },
  {
    title: "Panel Damage",
    desc: "Comprehensive panel repair services for all types of vehicle damage.",
    href: "/services/panel-damage",
    icon: <FaShieldAlt className="h-6 w-6 text-[#E066E6]" />,
    chips: ["Panel Replacement", "Structural Repair", "Alignment", "Reinforcement"],
  },
  {
    title: "Full/Part Respray",
    desc: "Complete vehicle respraying services with professional paint matching.",
    href: "/services/full-respray",
    image: "/spray.png", // service with image instead of icon
    chips: ["Color Matching", "Multi-coat System", "Primer Application", "Clear Coat Finish"],
  },
  {
    title: "Quality Guarantee",
    desc: "All our work comes with a comprehensive warranty and satisfaction guarantee.",
    href: "/services/quality-guarantee",
    icon: <FaCheckCircle className="h-6 w-6 text-[#E066E6]" />,
    chips: ["12 Month Warranty", "Satisfaction Guarantee", "Quality Assurance", "Follow-up Service"],
  },
];

export default function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="services" className="relative py-16 px-4 scroll-m-10 overflow-hidden">
      {/* Background animations + dotted overlay */}
      <style>
        {`
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.6); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: #E066E6 !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(224,102,230,0.8));
            z-index: 0;
            pointer-events: none;
          }
          .spray-icon {
            position: absolute;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 25px rgba(224,102,230,0.9));
            z-index: 0;
            pointer-events: none;
          }
        `}
      </style>

      {/* dotted BG */}
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

      {/* animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img src="/spray.png" className="spray-icon top-8 left-8 w-36 h-36" />
        <FaCar className="bg-icon w-24 h-24 top-1/4 right-8" />
        <FaMagic className="bg-icon w-20 h-20 bottom-1/4 left-8" />
        <FaShieldAlt className="bg-icon w-24 h-24 bottom-8 right-8" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From minor touch-ups to complete restorations, we provide comprehensive automotive solutions.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="bg-white text-gray-900 flex flex-col justify-between rounded-xl border border-gray-200 shadow-sm
                         hover:scale-105 hover:shadow-[0_8px_24px_rgba(224,102,230,0.35)] hover:ring-1 hover:ring-[#E066E6]/40 
                         transition-all duration-300 group relative z-10"
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            >
              {/* top section */}
              <div className="grid auto-rows-min items-start gap-1.5 px-6 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#CCFF66]/40 rounded-lg group-hover:bg-[#CCFF66]/60 group-hover:scale-110 transition-all">

                    {/* FIX — if service has image, show that instead of icon */}
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-7 w-7 object-contain"
                      />
                    ) : (
                      s.icon
                    )}

                  </div>

                  <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-[#E066E6] text-white">
                    Professional
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-[#E066E6] transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>

              {/* chips */}
              <div className="flex-grow px-6">
                <div className="flex flex-wrap gap-2 pb-6">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium
                                 text-gray-900 border-[#E066E6]/40 hover:bg-[#CCFF66]/40 hover:scale-105 transition-transform"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* button */}
              <div className="px-6 pb-6 mt-auto">
                <a href={s.href} className="block">
                  <button
                    type="button"
                    className="w-full h-9 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium
                               bg-[#CCFF66] text-black hover:bg-[#E066E6] hover:text-white hover:scale-[1.02] transition-all
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E066E6]/40"
                  >
                    Learn More
                  </button>
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
