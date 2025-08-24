"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Building2, Wrench, Trophy, ArrowRight } from "lucide-react";

const OACHomepageSections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      aria-labelledby="homepage-sections-title"
    >
      {/* Section Container with max-width for better readability */}
      <div className="max-w-7xl mx-auto">
        {/* Hidden title for SEO and accessibility */}
        <h2 id="homepage-sections-title" className="sr-only">
          OAC D-BUILD LTD Overview - About Us, Services, and Featured Projects
        </h2>

        {/* Three-column grid layout - stacks on mobile, grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div
            className={`group transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-blue-200">
              {/* Icon with gradient background */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Building2
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  About OAC D-BUILD LTD
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  With over a decade of excellence in construction, OAC D-BUILD
                  LTD delivers innovative building solutions with uncompromising
                  quality. Our experienced team transforms visions into reality
                  through professional craftsmanship and cutting-edge
                  construction techniques.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label="Read more about OAC D-BUILD LTD company"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Services Section */}
          <div
            className={`group transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-green-200">
              {/* Icon with gradient background */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Wrench className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Our Services
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  From residential homes to commercial complexes, we offer
                  comprehensive construction services including building
                  construction, renovations, structural design, and project
                  management. Every project receives our full commitment to
                  excellence and timely delivery.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label="View all construction services offered by OAC D-BUILD LTD"
                  >
                    View Services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Featured Projects Section */}
          <div
            className={`group transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-orange-200">
              {/* Icon with gradient background */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Trophy className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                  Featured Projects
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  Explore our portfolio of successful construction projects that
                  showcase our expertise and attention to detail. From modern
                  residential developments to complex commercial buildings, see
                  how we bring architectural visions to life with precision and
                  quality.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label="View all featured construction projects by OAC D-BUILD LTD"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default OACHomepageSections;
