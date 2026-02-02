// File: PanelRepairs.jsx

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaCarCrash, FaTools, FaHammer, FaRulerCombined } from "react-icons/fa";

const panelRepairData = [
  {
    title: "Minor Panel Damage",
    description: "Small dents, creases, and surface damage",
    items: [
      { name: "Dent removal" },
      { name: "Surface preparation" },
      { name: "Paint touch-up" },
      { name: "Polishing" },
    ],
  },
  {
    title: "Major Panel Damage",
    description: "Significant damage requiring panel replacement",
    items: [
      { name: "Panel replacement" },
      { name: "Structural alignment" },
      { name: "Welding" },
      { name: "Full refinishing" },
    ],
  },
  {
    title: "Collision Damage",
    description: "Accident-related panel and structural damage",
    items: [
      { name: "Frame straightening" },
      { name: "Multiple panel repair" },
      { name: "Safety inspection" },
      { name: "Insurance coordination" },
    ],
  },
  {
    title: "Rust Repair",
    description: "Corrosion treatment and panel restoration",
    items: [
      { name: "Rust removal" },
      { name: "Metal treatment" },
      { name: "Panel patching" },
      { name: "Protective coating" },
    ],
    disclaimer: "*Rust repairs are not covered under warranty.",
  },
];

const PanelRepairs = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F9FFFA" }}
    >
      <style>
        {`
          @keyframes panelSpin {
            0%   { transform: rotate(0deg); opacity: 0.4; }
            100% { transform: rotate(360deg); opacity: 0.4; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: panelSpin 36s linear infinite;
            filter: drop-shadow(0 0 15px rgba(224,102,230,0.5));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 20s;
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

      {/* ✅ Animated panel-repair themed icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaTools
          className="bg-icon w-24 h-24 top-12 left-10"
          style={{ animationDelay: "0s" }}
        />
       
        <FaHammer
          className="bg-icon w-24 h-24 bottom-10 right-8"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Types of Panel Repairs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panelRepairData.map((repair, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: LIME,
                borderColor: `${PINK}40`,
                color: "#000",
              }}
            >
              <div className="px-6 pb-2">
                <div className="font-semibold text-xl">{repair.title}</div>
                <div className="text-gray-800 text-base">
                  {repair.description}
                </div>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {repair.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-gray-900"
                    >
                      <FiCheckCircle
                        className="h-4 w-4"
                        style={{ color: PINK }}
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>

                {/* Disclaimer (only shows if present) */}
                {repair.disclaimer && (
                  <p className="text-sm text-gray-700 italic mt-4">
                    {repair.disclaimer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelRepairs;
