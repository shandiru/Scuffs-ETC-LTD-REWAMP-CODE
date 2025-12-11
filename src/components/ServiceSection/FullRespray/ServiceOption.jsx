// File: ServiceOptions.jsx
"use client";
import React from "react";
import { FaClock, FaShieldAlt } from "react-icons/fa";

const ServiceOptions = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const services = [
    {
      icon: <FaClock size={40} />,
      title: "7–10 Day Service",
      description: "Complete respray finished within 7–10 days",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Lifetime Warranty",
      description: "Lifetime warranty on all paintwork (rust repairs excluded)",
    },
    {
      icon: <FaClock size={40} />, // kept FaStar originally, but background icons already cover warranty/clock
      title: "Showroom Quality",
      description: "Professional-grade paint booth and equipment",
    },
  ];

  return (
    <section
      id="service-options"
      className="relative py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
      style={{ backgroundColor: `${LIME}20` }}
    >
      <style>
        {`
          @keyframes spinIcon {
            0%   { transform: rotate(0deg); opacity: 0.25; }
            100% { transform: rotate(360deg); opacity: 0.25; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: spinIcon 28s linear infinite;
            filter: drop-shadow(0 0 14px rgba(224,102,230,0.5));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 16s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* ✅ Dotted overlay background */}
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

      {/* ✅ Background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaClock
          className="bg-icon w-24 h-24 top-12 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaShieldAlt
          className="bg-icon w-20 h-20 bottom-12 right-12"
          style={{ animationDelay: "10s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Service Options Available
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center"
              style={{ borderColor: `${PINK}40` }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full"
                style={{ backgroundColor: `${PINK}15`, color: PINK }}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Global Note */}
        <p className="text-center text-sm mt-8 text-gray-600 italic">
          *Rust-related repairs are not covered under any warranty due to the unpredictable nature of corrosion.
        </p>

        {/* Gradient underline */}
        <div
          className="mt-10 h-1 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${PINK}, ${LIME})`,
          }}
        />
      </div>
    </section>
  );
};

export default ServiceOptions;
