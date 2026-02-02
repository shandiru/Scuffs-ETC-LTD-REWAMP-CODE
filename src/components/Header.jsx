
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const SERVICE_LINKS = [
  { name: "Alloy Wheel Repair", link: "/services/alloy-wheel-repair" },
  { name: "Bodywork Scuffs & Dents", link: "/services/bodywork-repair" },
  { name: "Textured Plastic Repairs", link: "/services/textured-plastic-repair" },
  { name: "Panel Damage", link: "/services/panel-damage" },
  { name: "Full Respray", link: "/services/full-respray" },
  { name: "Quality Guarantee", link: "/services/quality-guarantee" },
];

const LINKS = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#credentials", label: "Credentials" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setServiceOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close Services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b  border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center  justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            alt="Scuffs ETC LTD Logo"
            loading="lazy"
            width={60}
            height={60}
            decoding="async"
            className="rounded-full"
            src="/Scuffs-etc-logo.png"
          />
          <div>
            <h1 className="font-space-grotesk font-bold text-xl text-gray-900">
              Scuffs ETC LTD
            </h1>
            <p className="font-dm-sans text-sm text-gray-500">
              Vehicle Body Repair Specialist
            </p>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 relative">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServiceOpen((prev) => !prev)}
              className="flex items-center gap-1 font-dm-sans font-semibold cursor-pointer text-gray-900 hover:text-[#b30086] transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown (Desktop Hover or Click) */}
            <div
              className={`absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-md 
                transition-all duration-300 z-40 
                ${serviceOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              <ul className="py-2">
                {SERVICE_LINKS.map((service) => (
                  <li key={service.link}>
                    <a
                      href={service.link}
                      className="block px-4 py-2 text-sm font-dm-sans text-gray-800 
                       hover:bg-gray-100 hover:text-[#b30086]"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other links */}
          {LINKS.map((l) => (
            <HashLink
              key={l.href}
              smooth
              to={l.href}
              scroll={scrollWithOffset}
              className="font-dm-sans font-semibold text-gray-900 hover:text-[#b30086] transition-colors"
            >
              {l.label}
            </HashLink>
          ))}
        </nav>

        {/* Right: CTA (desktop) */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
                     text-sm font-medium h-9 px-4 py-2 shadow-xs transition-colors
                     bg-[#b30086] hover:bg-[#990074] text-white font-dm-sans"
        >
          Get Free Quote
        </HashLink>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md
                     text-gray-700 hover:bg-gray-100 focus-visible:outline-none
                     focus-visible:ring-2 focus-visible:ring-[#d34ab6]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 flex flex-col space-y-1">
            {/* Mobile Services dropdown */}
            <div>
              <button
                onClick={() => setServiceOpen((prev) => !prev)}
                className="flex justify-between items-center w-full rounded-md px-3 py-2 text-base font-dm-sans font-semibold text-gray-900 hover:text-[#b30086]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {serviceOpen && (
                <div className="ml-4 border-l border-gray-200 pl-3 mt-1 space-y-1">
                  {SERVICE_LINKS.map((service) => (
                    <a
                      key={service.link}
                      href={service.link}
                      onClick={() => {
                        setOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block px-2 py-1 text-sm text-gray-700 hover:text-[#b30086]"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {LINKS.map((l) => (
              <HashLink
                key={l.href}
                smooth
                to={l.href}
                scroll={scrollWithOffset}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-dm-sans font-semibold text-gray-900 hover:text-[#b30086] transition-colors"
              >
                {l.label}
              </HashLink>
            ))}
          </nav>

          <div className="px-4 pb-4">
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md 
                         text-sm font-medium h-10 px-4 py-2 shadow-xs transition-colors
                         bg-[#b30086] hover:bg-[#990074] text-white font-dm-sans"
            >
              Get Free Quote
            </HashLink>
          </div>
        </div>
      )}
    </header>
  );
}
