"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Sample project data with categories
const projectsData = [
  {
    id: 1,
    title: "Luxury Residential Complex",
    description:
      "A modern 50-unit residential complex featuring sustainable design and premium amenities.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Residential",
    featured: false,
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    description:
      "25-story commercial building with LEED certification and state-of-the-art facilities.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    category: "Commercial",
    featured: true,
  },
  {
    id: 3,
    title: "Historic Building Renovation",
    description:
      "Complete restoration of a 1920s heritage building while preserving its architectural integrity.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    category: "Renovation",
    featured: false,
  },
  {
    id: 4,
    title: "Shopping Mall Construction",
    description:
      "Large-scale retail complex with modern amenities and energy-efficient systems.",
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
    category: "Commercial",
    featured: false,
  },
  {
    id: 5,
    title: "Residential Villa Project",
    description:
      "Luxury single-family homes with contemporary design and smart home technology.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    category: "Residential",
    featured: false,
  },
  {
    id: 6,
    title: "Industrial Warehouse Complex",
    description:
      "Modern logistics facility with advanced automation and sustainable features.",
    image:
      "https://images.unsplash.com/photo-1590725175609-b2de18e42895?w=800&h=600&fit=crop",
    category: "Industrial",
    featured: false,
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Industrial",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // Get featured project
  const featuredProject = projectsData.find((project) => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            alt="Construction project showcasing OAC D-BUILD LTD expertise"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Showcasing Our Commitment to Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Highlight Section */}
      {featuredProject && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Project
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Featured Project Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Featured Project Content */}
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {featuredProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {featuredProject.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredProject.description} This flagship project represents
                  our commitment to innovation, quality craftsmanship, and
                  sustainable construction practices. We overcame complex
                  engineering challenges while delivering on time and within
                  budget.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900">Scope:</span>
                    <span className="text-gray-600">
                      Design, Construction, Project Management
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900">
                      Timeline:
                    </span>
                    <span className="text-gray-600">24 months completion</span>
                  </div>
                </div>
                <Link
                  href={`/projects/${featuredProject.id}`}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Categories Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of construction projects, from
              residential developments to commercial complexes and industrial
              facilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Professional construction by OAC D-BUILD LTD`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-full">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    aria-label={`View details of ${project.title}`}
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No projects found message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in the {activeCategory} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&h=800&fit=crop"
            alt="Construction team ready for new projects"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Have a Project in Mind?
              <br />
              Let's Build It Together
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to turn your vision into reality? Contact our expert team
              today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Quote
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
