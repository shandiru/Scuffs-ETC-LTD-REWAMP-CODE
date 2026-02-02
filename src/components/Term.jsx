
import { FaGavel, FaLink } from "react-icons/fa";

const TermsConditions = () => {
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

      {/* 🔹 Floating background icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FaGavel
          className="bg-icon w-28 h-28 top-16 left-12"
          style={{ animationDelay: "0s" }}
        />
        <FaLink
          className="bg-icon w-24 h-24 bottom-16 right-12"
          style={{ animationDelay: "12s" }}
        />
      </div>

      {/* 🔹 Foreground content */}
      <div className="relative max-w-6xl mx-auto text-gray-900 z-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Website Terms of Use
        </h1>
        <p className="text-center text-gray-700">Last updated: 09/09/25</p>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-medium">1. Use of Our Website</h2>
            <p className="text-gray-700">
              The content on this website is for general information only. You
              must not use this site for unlawful purposes or in any way that
              may damage our reputation or impair its availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">2. Accuracy of Information</h2>
            <p className="text-gray-700">
              We make reasonable efforts to keep information on this website up
              to date, but we do not guarantee accuracy, completeness, or
              reliability. Any reliance on website content is at your own risk.
              For project details, quotes, or professional advice, please
              contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website (including text, images, graphics, and
              logos) is owned by or licensed to Scuffs ETC LTD. You may view,
              download, and print content for personal use only. You must not
              copy, reproduce, or distribute our website content without prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">4. Links to Other Websites</h2>
            <p className="text-gray-700">
              This site may include links to external websites for convenience.
              We are not responsible for the content or practices of third-party
              websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">5. Liability</h2>
            <p className="text-gray-700">
              We are not liable for any loss or damage arising from use of this
              website, except where required by law. Nothing in these terms
              excludes or limits liability for death or personal injury caused
              by negligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">6. Privacy & Data Protection</h2>
            <p className="text-gray-700">
              Our use of your personal data is explained in our Privacy Policy,
              which forms part of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">7. Changes to These Terms</h2>
            <p className="text-gray-700">
              We may update these terms from time to time. Please check this
              page periodically for the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">8. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by the laws of England and Wales. Any
              disputes will be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Use, please contact
              us:
            </p>
            <div className="text-gray-800">
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
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
