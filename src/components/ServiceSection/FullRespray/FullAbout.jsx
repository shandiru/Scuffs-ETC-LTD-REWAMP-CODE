// File: FullRespray.jsx

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaPalette, FaShieldAlt } from "react-icons/fa";

const FullRespray = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative py-12 px-6 overflow-hidden"
      style={{ backgroundColor: `${LIME}20` }}
    >
      
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

      {/* ✅ Animated background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaPalette
          className="bg-icon w-24 h-24 top-12 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaShieldAlt
          className="bg-icon w-20 h-20 bottom-12 right-12"
          style={{ animationDelay: "8s" }}
        />
      </div>

      {/* ✅ Main content */}
      <div className="relative container mx-auto max-w-6xl flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 z-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Vehicle Transformation
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Transform your vehicle with our professional full respray service.
            Whether you want to restore the original color, change to a new
            color, or repair extensive paint damage, our expert painters deliver
            showroom-quality results using premium automotive paints.
          </p>

          <ul className="space-y-4 text-gray-700">
            {[
              "Complete paint system removal",
              "Professional surface preparation",
              "Multi-coat paint application",
              "UV-resistant clear coat finish",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center transition-transform duration-300 hover:translate-x-1"
              >
                <FiCheckCircle
                  className="mr-2"
                  style={{ color: PINK }}
                  size={20}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
             loading="lazy"
            src="/full.png" // Replace with your actual image
            alt="Vehicle Transformation"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ border: `3px solid ${PINK}` }}
          />
        </div>
      </div>
    </section>
  );
};

export default FullRespray;
