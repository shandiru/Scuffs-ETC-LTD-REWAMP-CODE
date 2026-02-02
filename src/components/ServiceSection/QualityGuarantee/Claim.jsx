import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaShieldAlt, FaTools } from "react-icons/fa";
import { PHONE_NUMBER, PHONE_NUMBER_FORMATTED } from '../../../Data/contact';

const WarrantyClaimSection = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // Offset so sticky header doesn't overlap
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if your header height differs
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: `${LIME}30` }}
    >
     

      {/* ✅ Dotted lime background */}
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

      {/* ✅ Floating background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaShieldAlt
          className="bg-icon w-24 h-24 top-10 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaTools
          className="bg-icon w-20 h-20 bottom-14 right-14"
          style={{ animationDelay: "10s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Warranty Claims & Support
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          If you experience any issues with our work, contact us immediately.
          We're committed to resolving any concerns quickly and professionally.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* File Claim → goes to Contact section */}
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="inline-flex items-center justify-center font-semibold rounded-md shadow-md transition-all px-8 h-12 text-lg"
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
            File Warranty Claim
          </HashLink>


          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 font-medium rounded-md border shadow-sm transition-all px-8 h-12 text-lg"
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

export default WarrantyClaimSection;