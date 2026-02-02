// File: PaintProcess.jsx

import React from "react";
import { FaPalette, FaShieldAlt } from "react-icons/fa";

const PaintProcess = () => {
  const steps = [
    { id: 1, title: "Preparation", description: "Complete disassembly and masking" },
    { id: 2, title: "Stripping", description: "Old paint removal and surface prep" },
    { id: 3, title: "Primer", description: "High-quality primer application" },
    { id: 4, title: "Base Coat", description: "Color application in controlled environment" },
    { id: 5, title: "Clear Coat", description: "Protective clear coat and polishing" },
  ];

  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative  py-12 px-4 overflow-hidden"
      style={{ backgroundColor: `${LIME}10` }}
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
        < FaShieldAlt
          className="bg-icon w-24 h-24 top-10 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaPalette
          className="bg-icon w-20 h-20 bottom-10 right-12"
          style={{ animationDelay: "8s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 z-10">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Our Paint Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: `${PINK}40` }}
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div
                  className="w-12 h-12 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg"
                  style={{ backgroundColor: PINK }}
                >
                  {step.id}
                </div>
                <div className="font-semibold text-lg">{step.title}</div>
              </div>

              <div className="px-6">
                <div className="text-gray-600 text-sm">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar accent */}
        <div
          className="mt-8 h-1 w-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${PINK}, ${LIME})` }}
        />
      </div>
    </section>
  );
};

export default PaintProcess;
