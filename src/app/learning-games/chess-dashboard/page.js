"use client";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import IntuitionTrainer from "./components/IntuitionTrainer";
import TacticsContent from "./components/TacticsContent";
import OpeningTrainer from "./components/OpeningTrainer";
import EndgameMastery from "./components/EndgameMastery";
import StrategySimulator from "./components/StrategySimulator";
import ChessTest from "./components/ChessTest";
import GameAnalyzer from "./components/GameAnalyzer";
import LearnChessAdventure from "./components/LearnChessAdventure";

const chessGames = [
  { key: "tactics", name: "Solve Tactics" },
  { key: "intuition", name: "Improve Intuition" },
  { key: "openings", name: "Opening Trainer" },
  { key: "endgames", name: "Endgame Mastery" },
  { key: "strategy", name: "Strategy Simulator" },
  { key: "analyzer", name: "Game Analyzer" },
  { key: "test", name: "Chess Test" },
  { key: "learnchess", name: "Learn Chess" },
];

const gameContent = {
  tactics: <TacticsContent />,
  intuition: <IntuitionTrainer />,
  openings: <OpeningTrainer />,
  endgames: <EndgameMastery />,
  strategy: <StrategySimulator />,
  analyzer: <GameAnalyzer />, // The component remains available
  test: <ChessTest />,
  learnchess: <LearnChessAdventure />,
};

export default function ChessDashboard() {
  const [selectedGame, setSelectedGame] = useState("endgames");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Remove ChessVsEngine from sidebar and content
  const chessGamesWithEngine = chessGames;
  const gameContentWithEngine = gameContent;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex flex-1 pt-24 pb-12 w-full">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r rounded-l-xl shadow-lg hidden md:block fixed top-24 left-0 h-[calc(100vh-6rem)] z-20">
          <div className="py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Chess Games
            </h2>
            <ul className="space-y-2">
              {chessGamesWithEngine.map((game) => (
                <li key={game.key}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                      selectedGame === game.key
                        ? "bg-yellow-400 text-black"
                        : "hover:bg-yellow-100 text-gray-800"
                    }`}
                    onClick={() => setSelectedGame(game.key)}
                  >
                    {game.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-16 left-4 z-50 p-2 bg-yellow-400 rounded-lg shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-24 right-0 w-full h-[calc(100vh-6rem)] bg-white rounded-lg shadow-lg p-4 overflow-y-auto transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Chess Games</h2>
          <div className="space-y-2">
            {chessGamesWithEngine.map((game) => (
              <button
                key={game.key}
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedGame === game.key
                    ? "bg-yellow-400 text-black"
                    : "hover:bg-yellow-100 text-gray-800"
                }`}
                onClick={() => {
                  setSelectedGame(game.key);
                  setIsMenuOpen(false);
                }}
              >
                {game.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <section className="flex-1 bg-white shadow-lg p-6 min-h-[400px] flex flex-col items-center justify-center w-full mx-auto rounded-none md:rounded-r-xl ml-0 md:ml-64">
          {gameContentWithEngine[selectedGame]}
        </section>
      </main>
      <Footer />
    </div>
  );
}
