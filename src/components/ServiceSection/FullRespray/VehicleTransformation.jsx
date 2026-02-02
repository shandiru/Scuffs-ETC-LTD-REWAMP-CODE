// File: VehicleTransformation.jsx

import React from "react";
import { FaPalette, FaStar, FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER, PHONE_NUMBER_FORMATTED } from '../../../Data/contact';

const VehicleTransformation = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
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

      {/* ✅ Dotted overlay */}
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

      {/* ✅ Floating icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaPalette
          className="bg-icon w-24 h-24 top-12 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaStar
          className="bg-icon w-20 h-20 bottom-12 right-12"
          style={{ animationDelay: "10s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Transform Your Vehicle Today
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Professional full respray services with color consultation
        </p>

        {/* ✅ CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Consultation */}
          <button
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md px-8 h-12 text-lg shadow-md transition-all duration-300"
            style={{ backgroundColor: LIME, color: "#000" }}  // Initial state with LIME background and black text
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = PINK;  // On hover, change background to PINK
              e.currentTarget.style.color = "#fff";           // On hover, change text color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = LIME;  // On mouse leave, change background back to LIME
              e.currentTarget.style.color = "#000";           // On mouse leave, change text color back to black
            }}
          >
            Book Consultation
          </button>


          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 font-medium rounded-md px-8 h-12 text-lg border transition-all shadow-sm"
            style={{ borderColor: PINK, color: PINK, backgroundColor: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = LIME;
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = PINK;
            }}
          >
            <FaPhoneAlt className="text-[#E066E6]" /> Call {PHONE_NUMBER_FORMATTED}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleTransformation;