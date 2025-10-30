"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function BookDemoPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");

  const FORM_URLS = {
    chess: "https://forms.gle/RGYKvt6qQfLWqwrg8?embedded=true",
    coding: "https://forms.gle/NX2NFUgQJRdNSJ3K6?embedded=true",
  };

  return (
    <main className="min-h-screen pt-24 px-4 bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-3">
          Book Your Free Demo Class
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Choose a demo type to proceed. Our team will confirm your preferred time after submission.
        </p>

        {/* Stylish track cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <button
            onClick={() => {
              setSelectedTrack("chess");
              setLoaded(false);
            }}
            className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 ${
              selectedTrack === "chess"
                ? "border-yellow-500 bg-white ring-2 ring-yellow-300"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">♟️</span>
              <h3 className="text-xl font-bold text-black">Demo class for Chess</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Strategy, tactics and thinking skills for kids. Beginner friendly.
            </p>
          </button>
          <button
            onClick={() => {
              setSelectedTrack("coding");
              setLoaded(false);
            }}
            className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 ${
              selectedTrack === "coding"
                ? "border-yellow-500 bg-white ring-2 ring-yellow-300"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💻</span>
              <h3 className="text-xl font-bold text-black">Demo class for Coding</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Create games, apps and AI projects in a fun interactive session.
            </p>
          </button>
        </div>

        {!selectedTrack && (
          <div className="w-full h-[40vh] flex items-center justify-center bg-white border rounded-xl mb-4">
            <p className="text-gray-700 font-semibold">Select an option above to continue</p>
          </div>
        )}

        {selectedTrack && !loaded && (
          <div className="w-full h-[70vh] flex items-center justify-center bg-white border rounded-xl mb-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
              <p className="text-gray-700 font-semibold">Loading form...</p>
            </div>
          </div>
        )}

        {selectedTrack && (
          <div className="w-full h-[70vh] rounded-2xl overflow-hidden bg-white shadow-xl border-2 border-yellow-400">
            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500">
              <div className="font-bold text-black">
                {selectedTrack === "chess" ? "Chess Demo Form" : "Coding Demo Form"}
              </div>
              <div className="flex gap-2">
                <span className="hidden sm:inline-block text-xs text-black/80 bg-white/40 px-2 py-0.5 rounded-full">
                  Average time: 1 min
                </span>
              </div>
            </div>
            <iframe
              src={FORM_URLS[selectedTrack]}
              title="Book Demo Class Form"
              className="w-full h-full border-0"
              onLoad={() => setLoaded(true)}
            />
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/919038162791"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#25D366] text-white font-extrabold tracking-wide uppercase px-6 py-3 rounded-full border-2 border-[#128C7E] shadow-md hover:shadow-lg transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </main>
  );
}


