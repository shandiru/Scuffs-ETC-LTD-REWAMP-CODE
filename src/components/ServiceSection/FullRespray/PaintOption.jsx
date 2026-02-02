// File: PaintOptions.jsx

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaPalette, FaCompactDisc } from "react-icons/fa";

const PaintOptions = () => {
  const options = [
    {
      title: "Solid Colors",
      description: "Classic single-stage colors",
      features: [
        "Wide color selection",
        "Cost-effective",
        "Durable finish",
        "Easy maintenance",
      ],
    },
    {
      title: "Metallic Finishes",
      description: "Sparkling metallic paint systems",
      features: [
        "Premium appearance",
        "Light reflection",
        "Depth and richness",
        "Resale value",
      ],
    },
    {
      title: "Pearl & Special Effects",
      description: "Luxury pearl and color-changing paints",
      features: [
        "Unique appearance",
        "Color depth",
        "Premium finish",
        "Show-quality results",
      ],
    },
  ];

  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative  py-12 px-4 overflow-hidden"
      style={{ backgroundColor: `${LIME}10` }}
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

      {/* ✅ Background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaPalette
          className="bg-icon w-24 h-24 top-12 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaCompactDisc
          className="bg-icon w-20 h-20 bottom-12 right-12"
          style={{ animationDelay: "10s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 z-10">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Paint Options Available
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: `${PINK}40` }}
            >
              <div className="px-6">
                <div className="font-semibold text-xl mb-1">{option.title}</div>
                <div className="text-gray-600 text-sm">{option.description}</div>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm transition-transform hover:translate-x-1"
                    >
                      <FiCheckCircle
                        className="h-4 w-4"
                        style={{ color: PINK }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Accent bar below */}
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

export default PaintOptions;
