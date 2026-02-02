import React, { useEffect, useRef, useState } from "react";
import { FaWrench, FaCar, FaMagic, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GallerySection() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";
  const SLIDES = [
    { before: "/s-before.jpeg", after: "/s-after.jpeg" },
    { before: "/s1-before.jpeg", after: "/s1-after.jpeg" },
    { before: "/s2-before.jpeg", after: "/s2-after.jpeg" },
    { before: "/s3-before.jpeg", after: "/s3-after.jpeg" },
    { before: "/before.jpg", after: "/after.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (i) => setIndex((prev) => (i + SLIDES.length) % SLIDES.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(next, 5000);
    return () => timer.current && clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const slide = SLIDES[index];

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // run every time
      mirror: true, // ✅ animate on scroll up too
    });
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background scroll-m-10 relative overflow-hidden">
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
       <FaCar className="bg-icon w-24 h-24 top-1/4 right-8" style={{ animationDelay: "5s" }} />
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="/spray.png"
          alt="Spray Gun Background"
          loading="lazy"
          className="spray-icon top-8 left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"
          style={{ animationDelay: "0s" }}
        />
       
        <FaMagic className="bg-icon w-20 h-20 bottom-1/4 left-8" style={{ animationDelay: "10s" }} />
        <FaShieldAlt className="bg-icon w-24 h-24 bottom-8 right-8" style={{ animationDelay: "15s" }} />
      </div>

      {/* ✅ Main content stays above */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4"
              style={{ color: PINK }}
            >
              Our Work Gallery
            </h2>
            <p
              className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              See the transformation - before and after examples of our
              professional repair work.
            </p>
          </div>

          {/* ✅ Gallery Content */}
          <div
            className="relative max-w-6xl mx-auto"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <div
              className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md p-6 transition-all duration-500"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{ border: "2px solid transparent" }}
            >
              <div
                className="transition-all duration-500 rounded-2xl"
                style={{ border: "2px solid transparent" }}
              >
                <style jsx>{`
                  .group:hover {
                    border-color: ${PINK};
                    box-shadow: 0 0 25px ${PINK};
                  }
                `}</style>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center" data-aos="fade-right">
                    <h4
                      className="font-dm-sans font-semibold text-lg mb-4"
                      style={{ color: LIME }}
                    >
                      Before
                    </h4>
                    <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md">
                      <img
                        alt="Before repair"
                        loading="lazy"
                        className="object-cover absolute inset-0 w-full h-full"
                        src={slide.before}
                      />
                    </div>
                  </div>
                  <div className="text-center" data-aos="fade-left">
                    <h4
                      className="font-dm-sans font-semibold text-lg mb-4"
                      style={{ color: LIME }}
                    >
                      After
                    </h4>
                    <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md">
                      <img
                        alt="After repair"
                        loading="lazy"
                        className="object-cover absolute inset-0 w-full h-full"
                        src={slide.after}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="inline-flex items-center justify-center size-9 absolute left-4 top-1/2 -translate-y-1/2
                        rounded-md shadow-md bg-background/80 backdrop-blur-sm transition"
              style={{ color: PINK }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="inline-flex items-center justify-center size-9 absolute right-4 top-1/2 -translate-y-1/2
                        rounded-md shadow-md bg-background/80 backdrop-blur-sm transition"
              style={{ color: PINK }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2" data-aos="fade-up" data-aos-delay="400">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="w-3 h-3 rounded-full transition"
                  style={{
                    backgroundColor: i === index ? PINK : LIME,
                    opacity: i === index ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
