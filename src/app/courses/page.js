"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { courses, categories } from "../../data/courseData";
import Navbar from "../../components/Navbar";
import GoogleFormModal from "../../components/GoogleFormModal";
import Footer from "../../components/Footer";
import FloatingDemoButton from "../../components/FloatingDemoButton";

export default function CoursesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    let filtered = courses;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [selectedCategory, searchTerm]);

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Online Courses for Kids - Chess, Coding, AI & Robotics",
      description:
        "Comprehensive online courses for children in chess, coding, artificial intelligence, robotics, and STEM education. Expert-led classes with free trial available.",
      url: "https://kingmaster.com/courses",
      numberOfItems: courses.length,
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          name: course.name,
          description: course.description,
          url: `https://kingmaster.com/courses/${course.id}`,
          provider: {
            "@type": "Organization",
            name: "KingCompiler Academy",
            url: "https://kingmaster.com",
          },
          courseMode: "online",
          educationalLevel: "Beginner to Advanced",
          inLanguage: "en",
          timeRequired: course.duration,
          price: course.price,
          offers: {
            "@type": "Offer",
            price: course.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    };

    // Add organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "KingCompiler Academy",
      url: "https://kingmaster.com",
      logo: "https://kingmaster.com/logo.png",
      description:
        "Leading online academy offering expert-led courses in chess, coding, AI, and robotics for children aged 5+",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: [
        "https://facebook.com/kingcompiler",
        "https://twitter.com/kingcompiler",
        "https://instagram.com/kingcompiler",
      ],
    };

    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://kingmaster.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Courses",
          item: "https://kingmaster.com/courses",
        },
      ],
    };

    // Inject structured data
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(organizationData);
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  const handleCourseClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  const openVideoModal = (e) => {
    e.stopPropagation();
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Explore Our Courses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto">
              Discover a world of learning opportunities designed to nurture
              your child&apos;s talents and prepare them for the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 sm:mb-8">
              <button
                onClick={openFormModal}
                className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                🎯 BOOK A FREE TRIAL
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-3 sm:mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 sm:px-6 py-2 sm:py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                />
                <svg
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1 w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-200 text-sm sm:text-base ${
                    selectedCategory === category
                      ? "bg-yellow-500 text-black"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-gray-600 text-sm sm:text-base">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-100"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {/* Course Image */}
                  <div className="relative h-56 overflow-hidden group">
                    <Image
                      src={course.image}
                      alt={course.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {course.price}
                      </span>
                    </div>
                    {/* Play Button Overlay */}
                    <button
                      onClick={openVideoModal}
                      className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      style={{ zIndex: 2 }}
                      aria-label="Play Course Video"
                    >
                      <span className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg">
                        <svg
                          className="w-8 h-8 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Course Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Duration: {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Level:{" "}
                        {course.details[2]?.replace("Level: ", "") ||
                          "Beginner"}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Age: {course.details[0]?.replace("Age: ", "") || "5+"}
                      </div>
                    </div>

                    {/* Benefits Preview */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {course.benefits.slice(0, 2).map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-auto flex flex-col gap-2 w-full">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openFormModal();
                        }}
                        className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 border-2 border-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform duration-200 hover:scale-105 hover:-translate-y-1"
                      >
                        🎯 BOOK A FREE TRIAL
                      </button>
                      <button
                        onClick={() => handleCourseClick(course.id)}
                        className="w-auto mx-auto flex items-center justify-center bg-white border border-yellow-400 text-black font-bold py-1.5 px-3 rounded shadow-lg hover:bg-yellow-100 transition-colors duration-200 text-sm"
                      >
                        Explore Course
                        <span className="ml-2 flex items-center">
                          <span className="inline-flex items-center justify-center rounded-full bg-gray-200 w-6 h-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="inline-block align-middle"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss custom learning programs tailored to your
            child&apos;s specific needs and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openFormModal}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              🎯 BOOK A FREE TRIAL
            </button>
            <button
              onClick={() => router.push("/")}
              className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <GoogleFormModal isOpen={isFormModalOpen} onClose={closeFormModal} />

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 py-8">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl relative border-4 border-yellow-500 mx-auto">
            {/* Header Bar */}
            <div className="bg-yellow-500 px-6 py-3 rounded-t-lg flex items-center justify-between">
              <h3 className="text-black font-bold text-lg">
                Coding Logic for Kids (Scratch + Python)
              </h3>
              <button
                onClick={closeVideoModal}
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Close Video"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/lxIFwQ6GaZI?si=jn8mYOaAkz5MnQ62"
                  title="Coding Logic for Kids - KingCompiler"
                  className="w-full h-full rounded-b-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="px-6 py-4 text-center">
              <p className="text-black font-medium">
                Teach programming logic through fun, visual tools.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Demo Button */}
      <FloatingDemoButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
