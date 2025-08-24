"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  // State for controlling animations
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="OAC D-BUILD LTD Hero Section"
    >
      {/* Background Image with Next.js Image optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="Construction site with building under development"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />

        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline with fade-in animation */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            One Project,{" "}
            <span className="text-yellow-400 block sm:inline">at a Time</span>
          </h1>

          {/* SEO-optimized subtext with slide-up animation */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            OAC D-BUILD LTD is your trusted partner in construction excellence.
            We specialize in residential and commercial construction,
            renovations, and building development projects.
          </p>

          {/* Call-to-Action Buttons with staggered animations */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Primary CTA Button */}
            <Link
              href="https://wa.me/message/YVHTLI5PKVTMD1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-black min-w-[200px]"
              aria-label="Get a construction quote from OAC D-BUILD LTD"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-yellow-300 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transform hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black min-w-[200px]"
              aria-label="View OAC D-BUILD LTD construction projects portfolio"
            >
              <span className="relative z-10">View Our Projects</span>
            </Link>
          </div>

          {/* Trust indicators with delayed animation */}
          <div
            className={`mt-12 pt-8 border-t border-gray-500/30 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-gray-300">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  10+
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  500+
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  98%
                </div>
                <div className="text-sm uppercase tracking-wide">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with pulse animation */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "1000ms" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2 hidden sm:block">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
