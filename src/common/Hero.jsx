

import { ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function AlloyWheelHero({
  backText,
  badge,
  title,
  subtitle,
  ctaText,
  ctaLink,
  pink,
  lime,
}) {
  const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white mt-25">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <a
          href="/"
          className="flex items-center text-sm md:text-base text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          {backText}
        </a>
      </div>

      <div
        className="text-center py-16 md:py-24 px-4 text-white"
        style={{ backgroundColor: pink }}
      >
        <span
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
          style={{ backgroundColor: lime, color: "#000" }}
        >
          {badge}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

        <p className="text-xl mb-8 opacity-90">{subtitle}</p>

        <HashLink
          smooth
          to={ctaLink}
          scroll={scrollWithOffset}
          className="inline-flex items-center justify-center gap-2 font-medium h-10 rounded-md text-lg px-8 py-3 transition"
          style={{ backgroundColor: lime, color: "#000" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = pink;
            e.currentTarget.style.border = `2px solid ${lime}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = lime;
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.border = "none";
          }}
        >
          {ctaText}
        </HashLink>
      </div>
    </section>
  );
}
