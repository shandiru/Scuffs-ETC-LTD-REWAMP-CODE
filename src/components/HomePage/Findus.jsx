
import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  const PINK = "#E066E6";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,   // runs every time you scroll down
      mirror: true,  // also animates on scroll up
    });
  }, []);

  return (
    <section className="py-10 px-4 bg-background relative overflow-hidden">
      {/* ✅ Background styles */}
      <style>
        {`
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.4); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.1); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(224,102,230,0.8));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
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

      {/* ✅ Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaMapMarkerAlt className="bg-icon w-20 h-20 top-8 left-8" style={{ animationDelay: "0s" }} />
      
        <FaPhoneAlt className="bg-icon w-24 h-24 bottom-8 right-8" style={{ animationDelay: "5s" }} />
      </div>

      {/* ✅ Main content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-black"
          data-aos="fade-up"
        >
          Find Us
        </h2>

        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <iframe
            title="Google Map - Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4 8DA, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76096.42434296223!2d-1.5281607079625814!3d53.41458899281664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879791d78a1cbd5%3A0x627bd191fe359158!2sScuffs%20Etc%20Ltd%20-%20Vehicle%20body%20repair%20Specialists!5e0!3m2!1sen!2slk!4v1757349508750!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
