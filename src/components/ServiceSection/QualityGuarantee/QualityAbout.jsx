import React from "react";
import { FaShieldAlt, FaAward, FaThumbsUp, FaCheckCircle } from "react-icons/fa";

const QualityAbout = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative px-4 py-16 overflow-hidden"
      style={{ backgroundColor: "#fff" }}
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

      {/* ✅ Floating animated icons (4 total) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaShieldAlt
          className="bg-icon w-24 h-24 top-10 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaAward
          className="bg-icon w-20 h-20 bottom-16 left-16"
          style={{ animationDelay: "8s" }}
        />
        <FaThumbsUp
          className="bg-icon w-20 h-20 bottom-10 right-16"
          style={{ animationDelay: "14s" }}
        />
        <FaAward
          className="bg-icon w-24 h-24 top-20 right-20"
          style={{ animationDelay: "20s" }}
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground mt-10">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            We stand behind every repair with comprehensive warranties and
            guarantees because we believe in the quality of our workmanship and
            want you to have complete confidence in our services.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Warranty Items */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Comprehensive Warranty Coverage
            </h3>
            <div className="space-y-6">
              {/* Warranty Item 1 */}
              <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${LIME}30` }}
                >
                  <FaShieldAlt className="h-6 w-6" style={{ color: PINK }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    12 Month Standard Warranty
                  </h4>
                  <p className="text-muted-foreground">
                    All repairs covered for 12 months against defects in
                    workmanship and materials
                  </p>
                </div>
              </div>

              {/* Warranty Item 2 */}
              <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${LIME}30` }}
                >
                  <FaAward className="h-6 w-6" style={{ color: PINK }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Lifetime Structural Warranty
                  </h4>
                  <p className="text-muted-foreground">
                    Structural and frame repairs backed by lifetime warranty
                  </p>
                </div>
              </div>

              {/* Warranty Item 3 */}
              <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${LIME}30` }}
                >
                  <FaThumbsUp className="h-6 w-6" style={{ color: PINK }} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    100% Satisfaction Guarantee
                  </h4>
                  <p className="text-muted-foreground">
                    If you're not completely satisfied, we'll make it right
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: `${LIME}20` }}
          >
            <img
               loading="lazy"
              alt="Quality guarantee documentation"
              className="w-full h-74 object-cover rounded-lg shadow-md"
              src="/quality.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAbout;
