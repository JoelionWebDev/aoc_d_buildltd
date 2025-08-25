"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ConstructionHomepage = () => {
  // State for testimonials carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Eze Samuel",
      project: "Residential Extension",
      review:
        "OAC D-BUILD transformed our home with exceptional craftsmanship. Their attention to detail and professional approach made our extension project seamless and stress-free.",
      rating: 5,
      image: "/samuel.webp",
    },
    {
      id: 2,
      name: "Zainab Hussaini",
      project: "Commercial Renovation",
      review:
        "Outstanding work on our office renovation. The team delivered on time and within budget while maintaining the highest quality standards throughout the project.",
      rating: 5,
      image: "salome.jpeg",
    },
    {
      id: 3,
      name: "Iniso Emmanuel",
      project: "Kitchen Remodel",
      review:
        "From initial consultation to final walkthrough, OAC D-BUILD exceeded our expectations. Our new kitchen is exactly what we dreamed of and more.",
      rating: 5,
      image: "/testimoney.jpeg",
    },
    {
      id: 4,
      name: "Benjamin Obaje",
      project: "New Construction",
      review:
        "Building our family home with OAC D-BUILD was an incredible experience. Their expertise and dedication to quality is unmatched in the industry.",
      rating: 5,
      image: "/obaje.jpeg",
    },
  ];

  // Auto-advance testimonials carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => observer.disconnect();
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle successful form submission
      console.log("Form submitted:", formData);
      alert("Thank you for your inquiry! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-full">
      {/* 1. TESTIMONIALS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their experience with OAC D-BUILD LTD.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="bg-white rounded-xl shadow-lg p-6 mx-4">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-blue-600">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonials[currentTestimonial].review}
              </p>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CALL-TO-ACTION BANNER */}
      <section
        id="cta-section"
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build Your Dream Project?
            </h2>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your vision into reality with OAC D-BUILD LTD's expert
              craftsmanship and unwavering commitment to excellence.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Request a Quote
                </button>
              </Link>
              <Link href="/projects">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your construction project? Contact us today for a
              free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={
                      formErrors.name ? "name-error" : undefined
                    }
                  />
                  {formErrors.name && (
                    <p
                      id="name-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                    aria-describedby={
                      formErrors.email ? "email-error" : undefined
                    }
                  />
                  {formErrors.email && (
                    <p
                      id="email-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                    aria-describedby={
                      formErrors.phone ? "phone-error" : undefined
                    }
                  />
                  {formErrors.phone && (
                    <p
                      id="phone-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project requirements..."
                    aria-describedby={
                      formErrors.message ? "message-error" : undefined
                    }
                  />
                  {formErrors.message && (
                    <p
                      id="message-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8">
                  Get in touch with OAC D-BUILD LTD for all your construction
                  needs. We're here to help bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@oacdbuild.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      info@oacdbuild.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      123 Construction Avenue
                      <br />
                      Building District, Lagos
                      <br />
                      Nigeria 100001
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionHomepage;
