
export default function HomeSection() {


  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-16"
        data-aos="fade-up"
      >
        {/* LOGO */}
        <img
          src="/bgblack-removebg-preview.png"
          alt="Scuffs ETC LTD Logo"
          className="mx-auto mb-6 w-40 md:w-56"
          data-aos="fade-down"
         loading="lazy"
        />

        <h1
          className="font-space-grotesk font-bold text-5xl md:text-7xl text-white mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="text-lime">Scuffs ETC</span>{" "}
          <span className="text-pink">LTD</span>
        </h1>

        <p
          className="font-dm-sans text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Professional vehicle body repair specialists in Sheffield. From minor
          scuffs to full resprays, we restore your vehicle to perfection.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       shadow-xs h-10 rounded-md bg-pink text-white hover:bg-[#b84dbf]
                       font-dm-sans text-lg px-8 py-4"
          >
            Get a Free Quote
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                       border shadow-xs h-10 rounded-md border-lime text-lime
                       hover:bg-lime hover:text-black
                       font-dm-sans text-lg px-8 py-4 bg-transparent"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
