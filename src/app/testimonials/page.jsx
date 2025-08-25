"use client";
import React from "react";
import Link from "next/link";
import { Star, Quote, Play } from "lucide-react";

const TestimonialsPage = () => {
  // Sample testimonial data - replace with real client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Eze Samuel",
      project: "Residential Extension in Lagos",
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
    {
      id: 5,
      name: "Grace Ikenna",
      project: "Residential Complex, Ikeja",
      rating: 5,
      review:
        "Exceptional workmanship and customer service. OAC D-Build brought our residential complex project to life with outstanding quality and attention to detail. Truly professional team.",
      image: "/patience.webp",
    },
    {
      id: 6,
      name: "James Oluwaseun",
      project: "Shopping Mall Renovation, Ikoyi",
      rating: 5,
      review:
        "Impressive renovation work that exceeded our expectations. The team managed the project efficiently while maintaining high safety standards. Excellent value for money.",
      image: "/docas.jpeg",
    },
    {
      id: 7,
      name: "Fayose Adesola",
      project: "Modern Duplex, Lekki",
      rating: 4,
      review:
        "Professional construction services with great attention to modern design requirements. The team delivered quality work and maintained excellent communication throughout our project.",
      image: "/emma.jpeg",
    },
  ];

  // Video testimonials data - replace with real video URLs
  const videoTestimonials = [
    {
      id: 1,
      title: "Commercial Project Success Story",
      thumbnail:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    },
    {
      id: 2,
      title: "Residential Client Experience",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    },
  ];

  // Render star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590725175499-8486d4d4d0cd?w=1920&h=600&fit=crop')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Hear What Our Clients Have to Say About Our Work
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Grid Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why clients across Nigeria trust OAC D-BUILD LTD for
              their construction needs
            </p>
          </div>

          {/* Responsive testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
              >
                {/* Client photo and info */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - OAC D-BUILD client`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.project}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our clients share their experiences working with OAC D-BUILD
              LTD
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Video thumbnail with play overlay */}
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Quote Section */}
        <section
          className="py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop')",
          }}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <Quote className="w-16 h-16 mx-auto mb-8 text-blue-300" />
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              "OAC D-Build doesn't just construct buildings, they build dreams.
              Their commitment to excellence and attention to detail transformed
              our vision into a reality that exceeded all expectations."
            </blockquote>
            <cite className="text-xl font-semibold">
              - Sarah Johnson, Residential Client
            </cite>
          </div>
        </section>

        {/* Call-to-Action Footer Banner */}
        <section
          className="py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=600&fit=crop')",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We'd Love to Work With You Next
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust OAC D-BUILD LTD for
              their construction needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OAC D-BUILD LTD",
            review: testimonials.map((testimonial) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: testimonial.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
              reviewBody: testimonial.review,
            })),
          }),
        }}
      />
    </div>
  );
};

export default TestimonialsPage;
