// File: ServiceCards.jsx
"use client";
import React from "react";
import { FaClock, FaShieldAlt, FaStar, FaTools, FaCarCrash } from "react-icons/fa";

const ServiceCards = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F9FFFA" }}
    >
      <style>
        {`
          @keyframes spinSlow {
            0%   { transform: rotate(0deg); opacity: 0.4; }
            100% { transform: rotate(360deg); opacity: 0.4; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: spinSlow 38s linear infinite;
            filter: drop-shadow(0 0 15px rgba(224,102,230,0.5));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 22s;
              opacity: 0.2;
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

      {/* ✅ Only 2 animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaCarCrash
          className="bg-icon w-20 h-20 top-10 left-10"
          style={{ animationDelay: "0s" }}
        />
       
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-10">
        {/* 3-5 Day Service Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaClock className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">3–5 Day Service</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              Most panel repairs completed within 3–5 days
            </p>
          </div>
        </div>

        {/* Structural Warranty Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaShieldAlt className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">Structural Warranty</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              Lifetime warranty on structural repairs
            </p>
          </div>
        </div>

        {/* Factory Standards Card */}
        <div
          className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-white text-gray-900 
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          style={{ borderColor: `${PINK}40` }}
        >
          <div className="px-6 pb-6 text-center">
            <FaStar className="h-8 w-8 mx-auto mb-3" style={{ color: LIME }} />
            <div className="leading-none font-semibold">Factory Standards</div>
          </div>
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600">
              All repairs meet manufacturer specifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
