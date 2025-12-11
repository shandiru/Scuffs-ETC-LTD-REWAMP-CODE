// File: BodyworkCTA.jsx
"use client";
import { HashLink } from "react-router-hash-link";

export default function BodyworkCTA() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  // offset for header
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if header height changes
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F1FAF1" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Get Your Bodywork Repaired Today
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-8">
          Free damage assessment and competitive pricing
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Assessment Button → scrolls to contact */}
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="font-semibold rounded-md text-lg px-8 h-12 flex items-center justify-center transition shadow-sm"
            style={{
              backgroundColor: LIME,  // Start with LIME as the background color
              color: "#000",          // Start with black text color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = PINK; // On hover, change background to PINK
              e.currentTarget.style.color = "#fff";          // On hover, change text color to white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = LIME;  // On mouse leave, change background back to LIME
              e.currentTarget.style.color = "#000";          // On mouse leave, change text color back to black
            }}
          >
            Book Assessment
          </HashLink>
          {/* Call Button */}
          <a
            href="tel:+447776300300"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-md text-lg px-8 h-12 border transition shadow-sm"
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
            Call +44 7776 300300
          </a>
        </div>
      </div>
    </section>
  );
}
