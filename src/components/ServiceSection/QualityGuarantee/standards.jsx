import React from "react";
import { Users, Award, CheckCircle, Star } from "lucide-react";
import { FaShieldAlt, FaThumbsUp } from "react-icons/fa";

export default function QualityStandards() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  const standards = [
    {
      icon: <Users size={40} style={{ color: PINK }} />,
      title: "Certified Technicians",
      description: "All technicians are certified and continuously trained",
    },
    {
      icon: <Award size={40} style={{ color: PINK }} />,
      title: "Premium Materials",
      description: "We use only high-quality, OEM-approved materials",
    },
    {
      icon: <CheckCircle size={40} style={{ color: PINK }} />,
      title: "Quality Inspections",
      description: "Multi-point quality checks throughout the repair process",
    },
    {
      icon: <Star size={40} style={{ color: PINK }} />,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with 5-star reviews",
    },
  ];

  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: `${LIME}20` }}
    >
     

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

      {/* ✅ Floating background icons (only 2 for balance) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaShieldAlt
          className="bg-icon w-24 h-24 top-14 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaThumbsUp
          className="bg-icon w-20 h-20 bottom-12 right-14"
          style={{ animationDelay: "12s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Our Quality Standards
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center 
                         transition transform hover:scale-105 hover:shadow-xl"
              style={{ borderColor: PINK }}
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
