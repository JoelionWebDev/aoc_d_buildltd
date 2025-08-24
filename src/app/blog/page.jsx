"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  ArrowRight,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const MburubuBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const postsPerPage = 6;

  const categories = [
    "All",
    "Company News",
    "Construction Tips",
    "Project Highlights",
    "Industry Trends",
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "OAC D-BUILD Construction Completes Landmark Lagos Commercial Complex",
      excerpt:
        "Our latest project showcases innovative sustainable building practices in Nigeria's commercial sector.",
      category: "Company News",
      date: "2025-08-10",
      image:
        "https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop",
      alt: "Modern commercial building in Lagos",
    },
    {
      id: 2,
      title: "Essential Foundation Tips for Nigerian Climate Conditions",
      excerpt:
        "Learn key foundation techniques that withstand Nigeria's diverse weather patterns and soil conditions.",
      category: "Construction Tips",
      date: "2025-08-08",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      alt: "Construction foundation work",
    },
    {
      id: 3,
      title: "Abuja Residential Development: 50 Modern Homes Delivered",
      excerpt:
        "Showcasing our latest residential project featuring energy-efficient designs and modern amenities.",
      category: "Project Highlights",
      date: "2025-08-05",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop",
      alt: "Modern residential houses in Abuja",
    },
    {
      id: 4,
      title: "2025 Construction Industry Trends Shaping Nigeria's Future",
      excerpt:
        "Exploring emerging technologies and sustainable practices transforming Nigeria's construction landscape.",
      category: "Industry Trends",
      date: "2025-08-03",
      image:
        "https://images.unsplash.com/photo-1590725175075-269e761e2f2d?w=600&h=400&fit=crop",
      alt: "Modern construction technology",
    },
    {
      id: 5,
      title:
        "Quality Materials: Sourcing Best Construction Supplies in Nigeria",
      excerpt:
        "Guide to selecting premium materials while maintaining cost-effectiveness in Nigerian construction projects.",
      category: "Construction Tips",
      date: "2025-08-01",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      alt: "Construction materials and supplies",
    },
    {
      id: 6,
      title: "Port Harcourt Industrial Complex: Engineering Excellence",
      excerpt:
        "Behind the scenes of our largest industrial construction project in Rivers State.",
      category: "Project Highlights",
      date: "2025-07-28",
      image:
        "https://images.unsplash.com/photo-1615734963275-d0ffcdb7bb70?w=600&h=400&fit=crop",
      alt: "Industrial construction site in Port Harcourt",
    },
    {
      id: 7,
      title: "OAC D-BUILD Construction Wins National Safety Excellence Award",
      excerpt:
        "Recognition for outstanding workplace safety standards and zero-accident project completion record.",
      category: "Company News",
      date: "2025-07-25",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      alt: "Construction safety award ceremony",
    },
    {
      id: 8,
      title: "Green Building Practices: Sustainable Construction in Nigeria",
      excerpt:
        "Implementing eco-friendly construction methods to reduce environmental impact and operational costs.",
      category: "Industry Trends",
      date: "2025-07-22",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      alt: "Green building with solar panels",
    },
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleSubmit = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">
                OAC D-BUILD LTD
              </h1>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMobileMenuOpen && <div className="md:hidden py-4 border-t"></div>}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop"
            alt="Construction site with modern buildings"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest Insights & Updates from OAC D-BUILD
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Stay informed with the latest industry news, construction tips,
              project highlights, and company updates from Nigeria's trusted
              construction partner.
            </p>
            <div className="flex justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === "All" ? "All Posts" : selectedCategory}
              </h2>
              <p className="text-gray-600">
                Showing {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button
                      onClick={() =>
                        window.open("https://youtbe.com", "_blank")
                      }
                      className="flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Subscribe to get updated
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? "bg-blue-900 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100 border"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mburubu Construction</h3>
              <p className="text-gray-300 mb-4">
                Building Nigeria's future with excellence, innovation, and
                integrity. Your trusted partner for all construction needs.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Residential Construction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Commercial Building
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Industrial Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Renovation & Remodeling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Project Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest construction insights
                and company updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Mburubu Construction. All rights reserved. | Built with
              excellence in Nigeria.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MburubuBlog;
