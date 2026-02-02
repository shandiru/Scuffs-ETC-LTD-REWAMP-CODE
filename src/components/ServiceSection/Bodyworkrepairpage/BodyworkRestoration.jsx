// File: BodyworkRestoration.jsx

import {
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaCar,
  FaTools,
  FaHammer,
  FaPaintBrush,
} from "react-icons/fa";

export default function BodyworkRestoration() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#F1FAF1" }}
    >
      <style>
        {`
          @keyframes bodySpin {
            0%   { transform: rotate(0deg); opacity: 0.4; }
            100% { transform: rotate(360deg); opacity: 0.4; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK} !important;
            animation: bodySpin 35s linear infinite;
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

      {/* ✅ Animated background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaCar
          className="bg-icon w-24 h-24 top-10 left-10"
          style={{ animationDelay: "0s" }}
        />
        <FaTools
          className="bg-icon w-20 h-20 top-1/3 right-12"
          style={{ animationDelay: "6s" }}
        />
        <FaHammer
          className="bg-icon w-20 h-20 bottom-1/3 left-12"
          style={{ animationDelay: "12s" }}
        />
        <FaPaintBrush
          className="bg-icon w-24 h-24 bottom-8 right-10"
          style={{ animationDelay: "18s" }}
        />
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
              Professional Bodywork Restoration
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our expert technicians specialise in repairing all types of bodywork damage, from minor scratches and scuffs to major dents
              and cracks. We use industry-leading techniques, including SMART repair (Small to Medium Area Repair Technology), to deliver fast,
              cost-effective, and invisible results that restore your vehicle's original appearance.
            </p>

            <div className="space-y-4">
              {[
                "Paintless dent removal (PDR)",
                "Scratch and scuff repair",
                "Panel beating and reshaping",
                "Color matching and blending",
                "SMART repair – quick and affordable small-area restoration",
                "Bodywork repair process",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5" style={{ color: PINK }} />
                  <span className="text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: `${LIME}30` }}
          >
            <img
               loading="lazy"
              src="/body.png"
              alt="Bodywork repair process"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Types of damage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Types of Damage We Repair
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Door Dings",
                desc: "Small dents from car doors and shopping carts",
              },
              {
                title: "Scratches",
                desc: "Surface and deep scratches from various sources",
              },
              {
                title: "Scuffs",
                desc: "Paint transfer and abrasion damage",
              },
              {
                title: "Hail Damage",
                desc: "Multiple small dents from hail storms",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                style={{ borderColor: `${PINK}40` }}
              >
                <div className="px-6">
                  <div className="font-semibold text-lg">{card.title}</div>
                </div>
                <div className="px-6">
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlights */}
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <FaClock
                  className="h-8 w-8 mx-auto mb-1"
                  style={{ color: LIME }}
                />
              ),
              title: "Same Day Service",
              desc: "Many repairs completed the same day",
            },
            {
              icon: (
                <FaShieldAlt
                  className="h-8 w-8 mx-auto mb-1"
                  style={{ color: LIME }}
                />
              ),
              title: "Lifetime Warranty",
              desc: "Guaranteed workmanship for peace of mind",
            },
            {
              icon: (
                <FaStar
                  className="h-8 w-8 mx-auto mb-1"
                  style={{ color: LIME }}
                />
              ),
              title: "Insurance Approved",
              desc: "Work with all major insurance companies",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: `${PINK}40` }}
            >
              {item.icon}
              <div className="font-semibold">{item.title}</div>
              <p className="text-sm text-gray-600 px-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
