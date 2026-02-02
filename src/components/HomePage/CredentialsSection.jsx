
import React, { useEffect } from "react";
import { FaWrench, FaCar, FaMagic, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CredentialsSection() {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // animate every scroll
      mirror: true, // ✅ re-animate when scrolling up
    });
  }, []);

  return (
    <section
      id="credentials"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-muted scroll-m-10 relative overflow-hidden"
    >
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
      <img
          src="/spray.png"
          alt="Spray Gun Background"
          loading="lazy"
          className="spray-icon top-8 left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"
          style={{ animationDelay: "0s" }}
        />
        <FaCar className="bg-icon w-24 h-24 top-1/4 right-8" style={{ animationDelay: "5s" }} />
        <FaMagic className="bg-icon w-20 h-20 bottom-1/4 left-8" style={{ animationDelay: "10s" }} />
        <FaShieldAlt className="bg-icon w-24 h-24 bottom-8 right-8" style={{ animationDelay: "15s" }} />
      </div>

      {/* ✅ Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4"
            style={{ color: PINK }}
          >
            Our Credentials
          </h2>
          <p
            className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Recognized excellence in vehicle body repair services with
            industry-leading certifications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Awards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card"
              style={{ borderColor: PINK }}
              data-aos="fade-right"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}33` }}
                  >
                    {/* Award Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={PINK}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                      <circle cx="12" cy="8" r="6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl">
                      Best Business of 2025
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      ThreeBest Rated Excellence Award
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans">
                  Recognized as one of the top vehicle body repair specialists,
                  demonstrating consistent excellence in service quality and
                  customer satisfaction.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card"
              style={{ borderColor: PINK }}
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}33` }}
                  >
                    {/* Shield Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={PINK}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl">
                      Top 3 Car Body Shops
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      Sheffield, UK - Certificate of Excellence
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans">
                  Certified as one of the top 3 car body shops in Sheffield, UK,
                  after extensive customer reviews and quality assessments.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card"
              style={{ borderColor: PINK }}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${LIME}33` }}
                  >
                    {/* Star Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={PINK}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl">
                      5-Star Rating
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      Consistent Customer Excellence
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans">
                  Maintaining a perfect 5-star rating through commitment to
                  quality workmanship, customer service, and professional
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="bg-card rounded-lg p-6 shadow-lg border"
              style={{ borderColor: PINK }}
            >
              <h3
                className="font-space-grotesk font-bold text-xl text-center mb-4"
                style={{ color: PINK }}
              >
                Official Certifications
              </h3>
              <div className="space-y-6">
                <div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border"
                  style={{ borderColor: LIME }}
                  data-aos="zoom-in"
                >
                  <img
                    alt="Best Business of 2025 - ThreeBest Rated Excellence Award"
                    className="object-contain w-full h-full"
                    loading="lazy"
                    src="/certificate1.png"
                  />
                </div>
                <div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border"
                  style={{ borderColor: LIME }}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img
                    alt="Certificate of Excellence 2025 - Top 3 Car Body Shops Sheffield"
                    className="object-contain w-full h-full"
                    loading="lazy"
                    src="/certificate2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
