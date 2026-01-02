// File: RestoreWheelsCTA.jsx
"use client";
import { HashLink } from "react-router-hash-link";
import { PHONE_NUMBER, PHONE_NUMBER_FORMATTED } from '../../../Data/contact';

export default function RestoreWheelsCTA() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // offset so header doesn't cover section
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust to match your header height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F5FFF7" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Restore Your Wheels?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get a free quote for your alloy wheel repair today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Free Quote Button → scrolls to contact */}
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="inline-flex items-center justify-center gap-2 font-medium shadow-sm transition h-10 rounded-md text-lg px-8 py-3"
            style={{
              backgroundColor: LIME, // Start with LIME as the background color
              color: "#000", // Start with black text color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = PINK; // On hover, change background to PINK
              e.currentTarget.style.color = "#fff"; // On hover, change text color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = LIME; // On mouse leave, change background back to LIME
              e.currentTarget.style.color = "#000"; // On mouse leave, change text color back to black
            }}
          >
            Get Free Quote
          </HashLink>


          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 font-medium transition h-10 rounded-md text-lg px-8 py-3 border"
            style={{
              borderColor: PINK,
              color: PINK,
              backgroundColor: "#fff",
            }}
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
}