// File: PanelRestoration.jsx

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaCarCrash, FaTools, FaHammer, FaRulerCombined } from "react-icons/fa";

const PanelRestoration = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F9FFFA" }}
    >
     

      {/* ✅ Dotted full background */}
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

      {/* ✅ Animated full-width icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaCarCrash
          className="bg-icon w-24 h-24 top-8 left-8"
          style={{ animationDelay: "0s" }}
        />
      
        <FaRulerCombined
          className="bg-icon w-24 h-24 bottom-8 right-8"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ✅ Content container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Complete Panel Restoration
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            From minor panel damage to major collision repairs, our skilled
            technicians can restore your vehicle's panels to factory
            specifications. We handle everything from door panels and fenders to
            quarter panels and structural repairs.
          </p>

          <div className="space-y-4">
            {[
              "Panel replacement and alignment",
              "Structural damage repair",
              "Frame straightening and alignment",
              "Welding and fabrication services",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
              >
                <FiCheckCircle className="h-5 w-5" style={{ color: PINK }} />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div
          className="rounded-lg p-2"
          style={{ backgroundColor: `${LIME}50` }}
        >
          <img
             loading="lazy"
            alt="Panel damage repair process"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            src="/panel.png"
          />
        </div>
      </div>
    </section>
  );
};

export default PanelRestoration;
