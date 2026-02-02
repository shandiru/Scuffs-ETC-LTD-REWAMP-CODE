
import React, { useState} from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

import { PHONE_NUMBER, PHONE_NUMBER_FORMATTED, PHONE_NUMBER_RAW } from '../../Data/contact';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const PINK = "#E066E6";
  const LIME = "#CCFF66";
  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid UK phone number is required.";
    if (!formData.date) newErrors.date = "Preferred date is required.";
    if (!formData.time) newErrors.time = "Preferred time is required.";
    if (!formData.service) newErrors.service = "Service selection is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const message =
        `*Quote Request*\n\n` +
        `*Name:* ${formData.firstName} ${formData.lastName}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Preferred Date:* ${formData.date}\n` +
        `*Preferred Time:* ${formData.time}\n` +
        `*Service:* ${formData.service}\n` +
        `*Message:* ${formData.message}`;

      const encodedMsg = encodeURIComponent(message);
      // Use the imported phone number variable instead of hardcoded value
      const phoneNumber = PHONE_NUMBER_RAW;

      window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* 🎨 GLOBAL FIXES */}
      <style>{`
        /* Fix blue highlight on option */
        select option:hover,
        select option:focus {
          background-color: ${PINK} !important;
          color: #fff !important;
        }

        /* Floating Icon Animation */
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
      `}</style>

      {/* 🟢 Dotted pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CCFF66_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
        }}
      />

      {/* ✨ Floating icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaPhoneAlt className="bg-icon w-20 h-20 top-8 left-8" style={{ animationDelay: "0s" }} />
        <FaEnvelope className="bg-icon w-24 h-24 top-1/4 right-8" style={{ animationDelay: "5s" }} />
        <FaMapMarkerAlt className="bg-icon w-20 h-20 bottom-1/4 left-8" style={{ animationDelay: "10s" }} />
        <FaRegClock className="bg-icon w-24 h-24 bottom-8 right-8" style={{ animationDelay: "15s" }} />
      </div>

      {/* Main section */}
      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-4xl md:text-5xl mb-4"
            style={{ color: PINK }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to restore your vehicle? Contact us to arrange a free quote and
            professional consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info card */}
          <div className="space-y-6">
            {[
              {
                label: "Phone",
                icon: <FaPhoneAlt />,
                value: PHONE_NUMBER_FORMATTED,
                href: `tel:${PHONE_NUMBER}`,
              },
              {
                label: "Email",
                icon: <FaEnvelope />,
                value: "info@scuffsetc.co.uk",
                href: "mailto:info@scuffsetc.co.uk",
              },
              {
                label: "Location",
                icon: <FaMapMarkerAlt />,
                value: "Unit 7, Elliot Business Park, Sheffield S4 8DA",
                href: "https://maps.google.com?q=Unit+7+Elliot+Business+Park",
              },
              {
                label: "Hours",
                icon: <FaRegClock />,
               value: "Mon–Thu: 8AM–3PM\nFri: 8AM–3AM\nSat: Closed\nSun: Closed",

                multiLine: true,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${LIME}40` }}
                >
                  <div style={{ color: PINK }}>{item.icon}</div>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{item.label}</p>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline whitespace-pre-line"
                      style={{ color: PINK }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-xl p-8 shadow-xl bg-white/95 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">Book Your Free Quote</h3>
            <span className="text-base font-normal text-gray-500">
              Bring your car in for an in-person quote - choose a time between 9 AM and
              1 PM that suits you best.
            </span>

            <form className="space-y-6 mt-3" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name*</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium">Last Name*</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium">Phone*</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Date & Time */}
              <div>
                <label className="text-sm font-medium">Preferred Date & Time*</label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    min="09:00"
                    max="13:00"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                  />
                </div>

                {(errors.date || errors.time) && (
                  <p className="text-red-500 text-sm">
                    {errors.date || errors.time}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium">Service Required*</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6] bg-white text-gray-800"
                >
                  <option value="">Select a service</option>
                  <option>Alloy Wheel Repair</option>
                  <option>Bodywork Scuffs, Cracks and Dents</option>
                  <option>Textured Plastic Repairs</option>
                  <option>Panel Damage</option>
                  <option>Full Respray</option>
                  <option>Quality Guarantee</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E066E6]"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-md font-semibold transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${PINK}, ${LIME})`,
                  color: "#000",
                }}
              >
                Book My Quote
              </button>

              <p className="text-xs text-center dark:text-gray-300">
                By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}