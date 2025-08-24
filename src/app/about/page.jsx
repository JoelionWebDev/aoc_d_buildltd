import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Clock,
  Lightbulb,
  DollarSign,
  Award,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "20+ years experience in construction management and business development.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Engineer",
      description:
        "Expert in structural engineering with expertise in sustainable building practices.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b524?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      description:
        "Specialized in large-scale commercial projects and client relationship management.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Architect",
      description:
        "Award-winning architect focused on innovative and sustainable design solutions.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  // Why choose us features
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our skilled professionals bring decades of combined construction expertise to every project.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We pride ourselves on completing projects on schedule without compromising quality.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Designs",
      description:
        "Cutting-edge architectural solutions that blend functionality with aesthetic appeal.",
    },
    {
      icon: DollarSign,
      title: "Affordable Solutions",
      description:
        "Competitive pricing without sacrificing quality materials or workmanship.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541976590-713941681591?w=1920&h=1080&fit=crop)",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About OAC D-BUILD LTD
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Building the Future, One Project at a Time
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
              alt="OAC D-BUILD construction site showcasing our expertise"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right column - Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Founded in 2005, OAC D-BUILD LTD has established itself as a
                premier construction company dedicated to delivering exceptional
                building solutions across residential, commercial, and
                industrial sectors. Our journey began with a simple mission: to
                transform architectural visions into reality through superior
                craftsmanship and unwavering commitment to excellence.
              </p>
              <p>
                Over nearly two decades, we have successfully completed over 500
                projects, ranging from luxury homes to large-scale commercial
                developments. Our team of certified professionals combines
                traditional construction expertise with cutting-edge technology
                and sustainable building practices to ensure every project
                exceeds client expectations.
              </p>
              <p>
                At OAC D-BUILD LTD, we believe that quality construction is the
                foundation of thriving communities. Our commitment to
                innovation, safety, and environmental responsibility drives us
                to continuously evolve our methods and adopt the latest industry
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment
              to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Mission
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To deliver exceptional construction services with unwavering
                commitment to excellence, innovation, and client satisfaction
                while maintaining the highest standards of quality and safety in
                every project we undertake.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Vision
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the leading construction company recognized for pioneering
                innovative and sustainable building solutions that shape the
                future of our communities while setting new industry benchmarks
                for excellence.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Core Values
              </h3>
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-gray-600">Quality</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-gray-600">Integrity</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-gray-600">Safety</span>
                </div>
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-gray-600">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose OAC D-BUILD LTD
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart in the construction industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced professionals driving our success and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at OAC D-BUILD LTD`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop)",
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* CTA content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Your Dream Project Together
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Our team is here to
            bring your construction dreams to life with unmatched expertise and
            dedication.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
