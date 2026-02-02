// File: PanelTransformation.jsx

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { PHONE_NUMBER, PHONE_NUMBER_FORMATTED } from '../../../Data/contact';

const PanelTransformation = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // Offset so the fixed header doesn't overlap the contact form
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if your header height is different
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F8FFF8" }}
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

      {/* ✅ Background icon */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaPhoneAlt
          className="bg-icon w-24 h-24 bottom-10 right-12"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Professional Panel Repair Services
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Expert assessment and repair for all panel damage
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA → scrolls to Contact */}
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="inline-flex items-center justify-center gap-2 font-medium h-12 rounded-md px-8 text-lg shadow-sm transition-all"
            style={{
              backgroundColor: LIME,  // Start with LIME as the background color
              color: "#000",          // Start with black text color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = PINK;  // On hover, change background to PINK
              e.currentTarget.style.color = "#fff";           // On hover, change text color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = LIME;  // On mouse leave, change background back to LIME
              e.currentTarget.style.color = "#000";           // On mouse leave, change text color back to black
            }}
          >
            Book Inspection
          </HashLink>


          {/* Secondary CTA */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 font-medium h-12 rounded-md text-lg px-8 border transition-all shadow-sm"
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
            Call {PHONE_NUMBER_FORMATTED}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PanelTransformation;