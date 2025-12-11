import React from "react";
import { FaShieldAlt, FaCertificate } from "react-icons/fa";

const WarrantyTerms = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const terms = [
    {
      title: "Alloy Wheel Repair",
      details: "Finish, structural integrity, color matching",
      duration: "12 Months",
    },
    {
      title: "Bodywork Repair",
      details: "Workmanship, paint adhesion",
      duration: "Lifetime",
    },
    {
      title: "Plastic Repair",
      details: "Texture matching, color stability, adhesion",
      duration: "12 Months",
    },
    {
      title: "Panel Damage",
      details: "Structural integrity, alignment, safety",
      duration: "Lifetime",
    },
    {
      title: "Full Respray",
      details: "Paint finish, color matching, clear coat",
      duration: "5 Years",
    },
    {
      title: "All Services",
      details: "100% satisfaction or we’ll make it right",
      duration: "Satisfaction",
    },
  ];

  return (
    <section
      className="relative py-16 px-5 overflow-hidden"
      style={{ backgroundColor: `${LIME}30` }}
    >
      <style>
        {`
          @keyframes spinSlow {
            0%   { transform: rotate(0deg); opacity: 0.25; }
            100% { transform: rotate(360deg); opacity: 0.25; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK};
            animation: spinSlow 40s linear infinite;
            filter: drop-shadow(0 0 12px rgba(224,102,230,0.4));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 20s;
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

      {/* ✅ Floating background icons (2 only for balance) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaShieldAlt
          className="bg-icon w-24 h-24 top-10 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaCertificate
          className="bg-icon w-20 h-20 bottom-14 right-14"
          style={{ animationDelay: "12s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 relative z-10">
        Warranty Terms by Service
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {terms.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md border transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ borderColor: `${PINK}40` }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {t.title}
            </h3>
            <p className="text-gray-700">{t.details}</p>
            <p className="mt-2 text-sm font-medium" style={{ color: PINK }}>
              {t.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WarrantyTerms;
