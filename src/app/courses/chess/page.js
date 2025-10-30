"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChessCourseDetailsPage() {
  const router = useRouter();

  const handleBookDemo = () => {
    router.push("/book-demo");
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                Master Chess with KingCompiler
              </h1>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                Build strategy, focus, and decision-making with our structured chess program for kids and teens.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleBookDemo}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-lg border-2 border-yellow-600 hover:scale-105 transition"
                >
                  Book a Free Demo
                </button>
                <button
                  onClick={() => window.open("https://wa.me/919038162791", "_blank")}
                  className="px-6 py-3 rounded-lg font-bold text-black border-2 border-yellow-400 hover:bg-yellow-100 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>
			<div className="relative">
				<Image
					src="/chess/chess.png"
					alt="Student playing chess"
					width={1200}
					height={800}
					className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-yellow-400"
					priority
				/>
			</div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - 4 cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Built for real improvement</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-md hover:shadow-lg hover:border-yellow-500 transition">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-yellow-400 text-black grid place-items-center mb-4 text-xl">🎓</div>
              <h3 className="text-xl font-extrabold mb-2 text-black">Expert Instructors</h3>
              <p className="text-gray-700">Learn from rated coaches with proven, kid-friendly methods.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-md hover:shadow-lg hover:border-yellow-500 transition">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-yellow-400 text-black grid place-items-center mb-4 text-xl">👥</div>
              <h3 className="text-xl font-extrabold mb-2 text-black">Small Class Sizes</h3>
              <p className="text-gray-700">Maximum 6 learners for personalized attention and faster progress.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-md hover:shadow-lg hover:border-yellow-500 transition">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-yellow-400 text-black grid place-items-center mb-4 text-xl">🎯</div>
              <h3 className="text-xl font-extrabold mb-2 text-black">Structured Curriculum</h3>
              <p className="text-gray-700">Clear paths from basics to advanced tournament strategies.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-md hover:shadow-lg hover:border-yellow-500 transition">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-yellow-400 text-black grid place-items-center mb-4 text-xl">🏆</div>
              <h3 className="text-xl font-extrabold mb-2 text-black">Tournament Prep</h3>
              <p className="text-gray-700">Practice arenas, analysis, and regular assessments for competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">What we are offering</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-yellow-400 bg-white shadow-sm">
              <h3 className="text-xl font-extrabold mb-2 text-black">Live Interactive Classes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Small batches or 1:1 classes</li>
                <li>Engaging drills and game-based learning</li>
                <li>Session recordings and class notes</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-2 border-yellow-400 bg-white shadow-sm">
              <h3 className="text-xl font-extrabold mb-2 text-black">Practice & Tracking</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Weekly puzzles and assignments</li>
                <li>Progress reports and feedback</li>
                <li>Parent updates and milestones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills You Learn */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8"><span className="text-yellow-600">Skills</span> you learn playing chess</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "💡", title: "Innovative Thinking" },
              { icon: "🧩", title: "Problem Solving" },
              { icon: "🧠", title: "Sharp Memory" },
              { icon: "♟️", title: "Strategy & Creativity" },
              { icon: "⌛", title: "Builds Patience" },
              { icon: "💪", title: "Builds Confidence" },
              { icon: "📚", title: "Improve Academics" },
              { icon: "🧮", title: "Calculative Ability" },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border-2 border-transparent bg-white shadow-md hover:shadow-lg hover:border-yellow-500 transition text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white border-2 border-yellow-400 text-black grid place-items-center text-2xl">{s.icon}</div>
                <h4 className="font-semibold text-black">{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - bullets */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Why choose us?</h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-6 text-gray-800">
            {[
              "Trained national/international medalists and championship participants",
              "Access to our next‑gen learning platform",
              "Exclusive curriculum that has created champions",
              "Weekly assignments and quizzes for grasping concepts",
              "Weekly academy tournaments and early competition prep",
              "Highly qualified, internationally rated, certified trainers",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-1 inline-flex w-6 h-6 rounded-full bg-yellow-500 text-black items-center justify-center text-sm">✓</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Stages Timeline */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">4 Stages to become a <span className="text-yellow-600">Master</span></h2>
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {[
              { piece: "♙", level: "Beginner", title: "Pawn", note: "Learn the basics" },
              { piece: "♞", level: "Intermediate", title: "Knight", note: "Master game tricks and strategies" },
              { piece: "♖", level: "Advanced", title: "Rook", note: "Deep strategies and understanding" },
              { piece: "♔", level: "Master", title: "King", note: "Tournament skills and recognition" },
            ].map((s) => (
              <div key={s.title} className="relative flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-4 border-yellow-300 grid place-items-center bg-white shadow-sm mb-4 text-7xl text-black">{s.piece}</div>
                <div className="text-sm uppercase tracking-wide text-gray-500">{s.level} level</div>
                <div className="text-xl font-extrabold text-black">{s.title}</div>
                <p className="text-gray-600 mt-2 mb-4 max-w-[220px]">{s.note}</p>
                <button
                  onClick={() => router.push("/courses?category=Chess")}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold border-2 border-yellow-600 hover:scale-105 transition"
                >
                  Explore Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black">Ready to start your chess journey?</h3>
          <div className="flex gap-3">
            <button
              onClick={handleBookDemo}
              className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Book a Free Demo
            </button>
            <button
              onClick={() => (window.location.href = "tel:+919038162791")}
              className="bg-white text-black font-bold px-6 py-3 rounded-lg border-2 border-black hover:scale-105 transition"
            >
              Call Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


