import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const tarotCards = [
  {
    name: "The Lovers",
    image: "https://images.unsplash.com/photo-1601325979086-d54da2c7419c",
    meaning: "Perfect union, harmony, and soul connection. Your relationship is blessed by divine forces."
  },
  {
    name: "The Sun",
    image: "https://images.unsplash.com/photo-1596662100219-5903f73e9b1f",
    meaning: "Joy, happiness, and successful partnership. Your love radiates positive energy."
  },
  {
    name: "The Star",
    image: "https://images.unsplash.com/photo-1587740895806-03a251d7c524",
    meaning: "Hope, inspiration, and spiritual connection. Your love has a higher purpose."
  },
  {
    name: "Two of Cups",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    meaning: "Deep emotional bond, mutual attraction, and partnership."
  }
];

const getRandomCard = () => tarotCards[Math.floor(Math.random() * tarotCards.length)];

const Interactive = () => {
  const [card, setCard] = useState<any>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setCard(getRandomCard());
  }, []);

  return (
    <section id="interactive" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium">Interactive Experience</span>
          <h2 className="text-4xl font-serif font-light mt-2">Discover Your Path</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tarot Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-gold-600" size={24} />
              <h3 className="text-xl font-medium">Your Tarot for Today</h3>
            </div>
            <p className="text-muted-foreground mb-4">Click the card to reveal your message.</p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div
                className="w-40 h-[240px] rounded-xl overflow-hidden border border-gray-300 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-100"
                onClick={() => setRevealed(true)}
              >
                <img
                  src={
                    revealed
                      ? card.image
                      :  "/cardback.jpg"
                  }
                  alt={revealed ? card.name : "Tarot Back"}
                  className="w-full h-full object-cover"
                />
              </div>

              {revealed && (
                <div className="text-left max-w-sm">
                  <h4 className="text-xl font-bold mb-2">{card.name}</h4>
                  <p className="text-muted-foreground text-sm">{card.meaning}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Love Calculator + Quiz */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-pink-600" size={24} />
                <h3 className="text-xl font-medium">Love Calculator</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Discover your cosmic compatibility with our celestial love calculator
              </p>
              <Link
                to="/love-calculator"
                className="block w-full px-6 py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition-colors"
              >
                Find Your Match
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-gold-600" size={24} />
                <h3 className="text-xl font-medium">Astrology Quiz</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Discover your life path number and its meaning in your journey
              </p>
              <Link
                to="/quiz"
                className="block w-full px-6 py-3 bg-gold-500 text-white text-center rounded-lg hover:bg-gold-600 transition-colors"
              >
                Start Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;


/*
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Interactive = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const tarotCards = [
    {
      name: 'The Lovers',
      image: 'https://images.unsplash.com/photo-1601325979086-d54da2c7419c',
      meaning: 'Perfect union, harmony, and soul connection. Your relationship is blessed by divine forces.'
    },
    {
      name: 'The Sun',
      image: 'https://images.unsplash.com/photo-1596662100219-5903f73e9b1f',
      meaning: 'Joy, happiness, and successful partnership. Your love radiates positive energy.'
    },
    {
      name: 'The Star',
      image: 'https://images.unsplash.com/photo-1596662100219-5903f73e9b1f',
      meaning: 'Hope, inspiration, and spiritual connection. Your love has a higher purpose.'
    },
    {
      name: 'Two of Cups',
      image: 'https://images.unsplash.com/photo-1596662100219-5903f73e9b1f',
      meaning: 'Deep emotional bond, mutual attraction, and partnership.'
    }
  ];
  const tarotCards = [
    "The Star - Hope and inspiration are guiding your path",
    "The Sun - Success and positivity are coming your way",
    "The Moon - Trust your intuition and inner wisdom"
  ];

  return (
    <section id="interactive" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium">Interactive Experience</span>
          <h2 className="text-4xl font-serif font-light mt-2">Discover Your Path</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tarot Card Picker /}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-gold-600" size={24} />
              <h3 className="text-xl font-medium">Daily Tarot Reading</h3>
            </div>
            <p className="text-muted-foreground mb-8">Choose a card to receive your daily guidance</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCard(index)}
                  className={`aspect-[2/3] rounded-lg ${
                    selectedCard === index
                      ? "bg-gold-100 border-2 border-gold-500"
                      : "bg-gray-100 hover:bg-gold-50"
                  } transition-colors relative overflow-hidden`}
                >
                  {selectedCard === index ? (
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm">
                      {tarotCards[index]}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles size={24} className="text-gold-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Love Calculator Section (Replacing Daily Horoscope) /}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-pink-600" size={24} />
                <h3 className="text-xl font-medium">Love Calculator</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Discover your cosmic compatibility with our celestial love calculator
              </p>
              <Link to="/love-calculator" className="block w-full px-6 py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition-colors">
                Find Your Match
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-gold-600" size={24} />
                <h3 className="text-xl font-medium">Astrology Quiz</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Discover your life path number and its meaning in your journey
              </p>
              <button className="w-full px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors">
                Start Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
*/