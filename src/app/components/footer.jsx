"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  // State for back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid - Responsive: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Section 1: Company Info */}
          <div className="space-y-4">
            <div>
              {/* Company Logo/Name */}
              <h3 className="text-2xl font-bold text-orange-400 mb-3">
                OAC D-BUILD LTD
              </h3>
              {/* SEO-optimized company description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading construction company specializing in residential,
                commercial, and industrial projects. Building excellence with
                quality craftsmanship and innovative solutions across Nigeria.
              </p>
              {/* Company tagline */}
              <p className="text-orange-300 font-medium text-sm italic mt-3">
                "Building Tomorrow, Today"
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Section 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+2348012345678"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  aria-label="Call OAC D-BUILD LTD"
                >
                  +234 706 555 0354 <br />
                  +234 7059965090
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@oacdbuild.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  aria-label="Email OAC D-BUILD LTD"
                >
                  oacdbuild@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-sm">
                  <p className="text-gray-300 leading-relaxed">
                    By Magaji House, Kpaduma 3, <br /> Asokoro Extension, Abuja.
                    No. <br /> 2 liverpool Avenue, Peace Eastate <br /> Soluyi
                    Gbagada, Lagos.
                  </p>
                  {/* Google Maps Link */}
                  <a
                    href="https://maps.google.com/?q=Victoria+Island+Lagos+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors duration-200 text-xs mt-1 inline-block"
                    aria-label="View location on Google Maps"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCeBoL81HB0riQ8_g-akazsQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 group"
                aria-label="Follow us on YouTube"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Jce1Jofbq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/oacdbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 group"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-2.09c-.245.245-.49.368-.857.368s-.612-.123-.857-.368c-.245-.245-.368-.49-.368-.857s.123-.612.368-.857c.245-.245.49-.368.857-.368s.612.123.857.368c.245.245.368.49.368.857s-.123.612-.368.857z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@oacdbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200 group"
                aria-label="Follow us on TikTok"
              >
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            {/* Social Media Call-to-Action */}
            <p className="text-gray-400 text-xs mt-4">
              Stay updated with our latest projects and construction insights
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} OAC D-BUILD LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
