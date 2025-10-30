"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CourseTrackSection() {
  const router = useRouter();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleKnowMore = (track) => {
    if (track === "Chess") {
      router.push("/courses/chess");
      return;
    }
    router.push(`/courses?category=${track}`);
  };

  const handleEnrollNow = () => {
    router.push("/book-demo");
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#000" }}>
              Course Track
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-2"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Choose your learning path and embark on an exciting journey of
              skill development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Chess Side */}
            <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl border-2 border-yellow-500">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
                poster="/navbg.png"
              >
                <source src="/track/chess.mp4" type="video/mp4" />
              </video>

              {/* Enhanced Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Fallback Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/navbg.png')",
                  display: "none",
                }}
              />

              {/* Content with Glass Morphism */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6 lg:p-10 z-10">
                {/* Icon Container with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative text-7xl lg:text-8xl animate-bounce group-hover:animate-pulse">
                    ♟️
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Chess
                  </span>
                </h3>

                <p className="text-white/95 text-lg lg:text-xl mb-10 max-w-md drop-shadow-xl leading-relaxed">
                  Master the game of strategy, develop critical thinking, and
                  become a chess champion
                </p>

                {/* Enhanced Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleKnowMore("Chess")}
                    className="group/btn relative px-8 py-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl overflow-hidden min-w-[140px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Know More
                      <svg
                        className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                  </button>

                  <button
                    onClick={handleEnrollNow}
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl overflow-hidden min-w-[140px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enroll Now
                      <svg
                        className="w-5 h-5 transform group-hover/btn:rotate-12 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Coding Side */}
            <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl border-2 border-yellow-500">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
                poster="/banner.png"
              >
                <source src="/track/coding.mp4" type="video/mp4" />
              </video>

              {/* Enhanced Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-500"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Fallback Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/banner.png')",
                  display: "none",
                }}
              />

              {/* Content with Glass Morphism */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6 lg:p-10 z-10">
                {/* Icon Container with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative text-7xl lg:text-8xl animate-pulse group-hover:animate-bounce">
                    💻
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                  <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
                    Coding
                  </span>
                </h3>

                <p className="text-white/95 text-lg lg:text-xl mb-10 max-w-md drop-shadow-xl leading-relaxed">
                  Learn programming languages, build apps, and unlock your
                  creative potential
                </p>

                {/* Enhanced Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleKnowMore("Coding")}
                    className="group/btn relative px-8 py-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl overflow-hidden min-w-[200px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Coding Courses
                      <svg
                        className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                  </button>

                  <button
                    onClick={handleEnrollNow}
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl overflow-hidden min-w-[140px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enroll Now
                      <svg
                        className="w-5 h-5 transform group-hover/btn:rotate-12 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Modal removed: navigation to /book-demo */}
    </>
  );
}
