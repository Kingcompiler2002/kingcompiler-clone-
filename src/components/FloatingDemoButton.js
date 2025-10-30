"use client";

import { useRouter } from "next/navigation";

export default function FloatingDemoButton() {
  const router = useRouter();

  return (
    <>
      {/* Fixed Floating Demo Button */}
      <button
        onClick={() => router.push("/book-demo")}
        className="fixed bottom-6 right-24 z-50 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-110 border-2 border-red-600 text-sm"
      >
        BOOK A FREE DEMO CLASS
      </button>
    </>
  );
}
