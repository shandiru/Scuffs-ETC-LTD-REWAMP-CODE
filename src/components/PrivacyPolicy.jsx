import React from "react";
import { FaShieldAlt, FaUserLock } from "react-icons/fa";

const PrivacyPolicy = () => {
  const PINK = "#E066E6";
  const LIME = "#CCFF66";

  return (
    <section
      className="relative px-4 py-12 sm:px-6 lg:px-16 overflow-hidden"
      style={{ backgroundColor: `${LIME}20` }}
    >
      {/* 🔹 Animated background style */}
      <style>
        {`
          @keyframes spinSlow {
            0%   { transform: rotate(0deg); opacity: 0.25; }
            100% { transform: rotate(360deg); opacity: 0.25; }
          }
          .bg-icon {
            position: absolute;
            color: ${PINK};
            animation: spinSlow 50s linear infinite;
            filter: drop-shadow(0 0 12px rgba(224,102,230,0.4));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              opacity: 0.15;
              animation-duration: 25s;
            }
          }
        `}
      </style>

      {/* 🔹 Dotted lime background */}
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

      {/* 🔹 Background floating icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaShieldAlt
          className="bg-icon w-28 h-28 top-16 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaUserLock
          className="bg-icon w-24 h-24 bottom-16 right-12"
          style={{ animationDelay: "12s" }}
        />
      </div>

      {/* 🔹 Foreground content */}
      <div className="relative max-w-6xl mx-auto text-gray-900 z-10">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-700">Last updated: 09/09/25</p>

        <div className="mt-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-medium">1. Information We Collect</h2>
            <p className="mt-2 text-gray-700">
              When you complete a form on our website or contact us directly, we
              may collect:
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (if relevant to the service)</li>
              <li>Details of your enquiry or project</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We may also collect limited technical data automatically when you
              visit our website, such as your IP address and browser type.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-medium">2. Lawful Basis for Processing</h2>
            <p className="mt-2 text-gray-700">
              We only process your personal data where we have a lawful basis to
              do so. This includes:
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Contract – to provide a quote or fulfill an agreement</li>
              <li>Consent – when you permit us to contact you</li>
              <li>
                Legitimate interests – to respond to inquiries and manage our
                business
              </li>
              <li>Legal obligation – to comply with the law</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-medium">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-gray-700 mt-2">
              <li>Respond to inquiries and provide quotes</li>
              <li>Deliver repair services</li>
              <li>Communicate with you about your project</li>
              <li>Maintain records and comply with legal requirements</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We do not sell or trade your personal details to third parties.
            </p>
          </section>

          {/* Section 9 Contact */}
          <section>
            <h2 className="text-2xl font-medium">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, contact us:
            </p>
            <div className="mt-2 text-gray-800">
              <p>
                <strong>Scuffs ETC LTD</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@scuffsetc.co.uk"
                  className="text-[#E066E6] hover:underline"
                >
                  info@scuffsetc.co.uk
                </a>
              </p>
              <p>Phone: +44 7776 300300</p>
              <p>
                Address: Unit 7, Elliot Business Park, Chambers Ln, Sheffield S4
                8DA, United Kingdom
              </p>
            </div>
            <p className="mt-2 text-gray-700">
              If you are not satisfied with our response, you may complain to{" "}
              <a
                href="https://ico.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E066E6] hover:underline"
              >
                Information Commissioner’s Office (ICO)
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
