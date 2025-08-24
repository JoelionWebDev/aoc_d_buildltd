"use client";
import React from "react";
import Link from "next/link";
import {
  Building2,
  Hammer,
  Ruler,
  ClipboardList,
  Paintbrush,
  Truck,
  Users,
  Clock,
  Lightbulb,
  Shield,
} from "lucide-react";

const ServicesPage = () => {
  // Services data array for easy maintenance
  const services = [
    {
      id: 1,
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Building Construction",
      description:
        "From residential homes to commercial complexes, we deliver high-quality construction projects that stand the test of time. Our experienced team ensures every structure meets the highest standards of safety and durability.",
    },
    {
      id: 2,
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: "Renovations & Remodeling",
      description:
        "Transform your existing spaces with our comprehensive renovation services. We breathe new life into old structures while maintaining structural integrity and enhancing functionality for modern living.",
    },
    {
      id: 3,
      icon: <Ruler className="w-12 h-12 text-blue-600" />,
      title: "Structural Design",
      description:
        "Our expert engineers create innovative and safe structural designs tailored to your specific needs. We combine cutting-edge technology with proven engineering principles to deliver optimal solutions.",
    },
    {
      id: 4,
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      title: "Project Management",
      description:
        "Comprehensive project oversight from conception to completion. Our dedicated project managers ensure timely delivery, budget adherence, and seamless coordination of all construction phases.",
    },
    {
      id: 5,
      icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
      title: "Interior & Exterior Finishing",
      description:
        "Perfect finishing touches that elevate your project's aesthetic appeal and functionality. From premium interior finishes to weather-resistant exterior coatings, we deliver exceptional results.",
    },
    {
      id: 6,
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Road & Infrastructure Construction",
      description:
        "Building the foundations of community development through robust road networks and infrastructure projects. We specialize in durable, long-lasting infrastructure solutions.",
    },
  ];

  // Why Choose Us features
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Experienced Team",
      description:
        "Over 15 years of combined expertise in construction and engineering",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Timely Delivery",
      description:
        "Committed to meeting deadlines without compromising quality",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovative Designs",
      description:
        "Cutting-edge solutions that blend functionality with aesthetics",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Safety & Compliance",
      description:
        "Strict adherence to safety standards and building regulations",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
        role="banner"
        aria-labelledby="hero-title"
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up"
          >
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl animate-fade-in-up animation-delay-200">
            Delivering Quality Construction Solutions for Every Project
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        aria-labelledby="services-title"
      >
        <div className="text-center mb-12">
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction services tailored to meet your specific
            needs and exceed your expectations
          </p>
        </div>

        {/* Responsive services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              role="article"
              aria-labelledby={`service-${service.id}-title`}
            >
              {/* Service icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>

              {/* Service content */}
              <h3
                id={`service-${service.id}-title`}
                className="text-xl font-semibold text-gray-900 mb-3 text-center"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="why-choose-title">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional construction team working on a building site with safety equipment and modern tools"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Right column - Content */}
            <div className="order-1 lg:order-2">
              <h2
                id="why-choose-title"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Why Choose OAC D-BUILD LTD?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience and a commitment to excellence, we've
                established ourselves as a trusted partner in the construction
                industry.
              </p>

              {/* Features list */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                    role="listitem"
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')`,
        }}
        role="banner"
        aria-labelledby="cta-title"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* CTA content */}
        <div className="relative z-10 text-center text-white px-4">
          <h2 id="cta-title" className="text-3xl md:text-5xl font-bold mb-4">
            Let's Bring Your Project to Life
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ready to start your construction project? Get in touch with us today
            for a personalized quote and consultation.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Request a quote for your construction project"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
