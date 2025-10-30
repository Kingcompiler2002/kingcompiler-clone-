"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import OurOfferingsSection from "../components/OurOfferingsSection";
import CourseTrackSection from "../components/CourseTrackSection";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import AchieversSection from "../components/AchieversSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
// GoogleFormModal removed in favor of dedicated page
import FloatingDemoButton from "../components/FloatingDemoButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // SEO structured data for homepage
  const homepageStructuredData = {
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Online Courses for Kids",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Online Chess Classes for Kids",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Coding Logic for Kids",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Machine Learning and AI for Kids",
          },
        },
      ],
    },
  };

  // Handle hash navigation to courses section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#courses") {
        setTimeout(() => {
          const coursesSection = document.getElementById("courses");
          if (coursesSection) {
            coursesSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100); // Small delay to ensure page is loaded
      }
    }
  }, []);

  const handleBookDemo = () => {
    router.push("/book-demo");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Metadata provided via app/layout.js and structured data injected separately */}
      <Navbar onBookDemo={handleBookDemo} />
      <HeroSection onBookDemo={handleBookDemo} />
      <AchieversSection />
      <StatsSection />
      <WhyChooseUs />
      <OurOfferingsSection />
      <CourseTrackSection />
      <TestimonialsSection />
      <Footer />
      {/* GoogleFormModal removed: navigation to /book-demo */}
      <FloatingDemoButton />
    </div>
  );
}
