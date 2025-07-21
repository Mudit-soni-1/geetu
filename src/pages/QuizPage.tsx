// src/pages/QuizPage.tsx or wherever your /quiz route points
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import NumerologyQuiz from "@/components/quiz/NumerologyQuiz";
import LoveStyleQuiz from "@/components/quiz/LoveStyleQuiz";

const QuizPage: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<"numerology" | "zodiac">("numerology");

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            ✨ Choose Your Cosmic Quiz
          </h1>

          <div className="flex justify-center gap-4 mb-10">
            <Button
              onClick={() => setActiveQuiz("numerology")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-200
                ${activeQuiz === "numerology"
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-white text-purple-700 border-purple-300 hover:bg-purple-100 hover:text-purple-800"}`}
            >
              <Stars size={22} />
              Numerology Quiz
            </Button>

            <Button
              onClick={() => setActiveQuiz("zodiac")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-200
                ${activeQuiz === "zodiac"
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-white text-purple-700 border-purple-300 hover:bg-purple-100 hover:text-purple-800"}`}
            >
              <Heart size={22} />
              Love Style Quiz
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {activeQuiz === "numerology" ? (
              <motion.div
                key="numerology"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full"
              >
                <NumerologyQuiz />
              </motion.div>
            ) : (
              <motion.div
                key="zodiac"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <LoveStyleQuiz />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
