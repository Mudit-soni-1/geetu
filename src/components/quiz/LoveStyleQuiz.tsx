import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const ZODIAC_PROFILES = {
  Aries: {
    paragraph: `Bold, fiery, and passionate — you love with unstoppable energy. Ruled by Mars, you crave excitement, adventure, and honesty in your relationships. You dive in headfirst, leading with your heart and expecting the same fearlessness in return.`,
    bestMatches: ["Leo", "Sagittarius", "Gemini"],
    tarot: "The Chariot",
    tarotMeaning: "Love is a journey — trust your drive and passion to lead the way."
  },
  Taurus: {
    paragraph: `You offer steadfast love, comfort, and sensual presence. Ruled by Venus, you desire stability, affection, and trust. You take your time to open up — but once you're in, you're in for life. A patient and loyal heart is your perfect match.`,
    bestMatches: ["Virgo", "Cancer", "Capricorn"],
    tarot: "The Hierophant",
    tarotMeaning: "Tradition and commitment lead to long-term happiness in love."
  },
  Gemini: {
    paragraph: `Witty, curious, and emotionally agile — you crave connection through conversation. Ruled by Mercury, you're mentally turned on by shared ideas, laughter, and spontaneity. You need a partner who can keep up with your endless curiosity.`,
    bestMatches: ["Aquarius", "Libra", "Aries"],
    tarot: "The Magician",
    tarotMeaning: "Communication is your magic. Use your words to manifest love."
  },
  Cancer: {
    paragraph: `You love with quiet intensity. Emotional depth, safety, and sincerity mean the world to you. You're ruled by the Moon, making you intuitive and nurturing — but also sensitive to shifts in energy. A partner who honors your need for emotional closeness will unlock your most radiant self.`,
    bestMatches: ["Pisces", "Taurus", "Scorpio"],
    tarot: "The Star",
    tarotMeaning: "A reminder that hope and healing guide your love path."
  },
  Leo: {
    paragraph: `You radiate charm and warmth, and love when you're admired for your bold heart. Ruled by the Sun, you crave passion, attention, and creative connection. In relationships, you're loyal and generous — but need a partner who truly sees your light.`,
    bestMatches: ["Sagittarius", "Aries", "Gemini"],
    tarot: "The Sun",
    tarotMeaning: "Your love radiates joy. Shine and let others bask in your warmth."
  },
  Virgo: {
    paragraph: `Love, for you, is found in the details. You show affection through care, helpfulness, and consistency. Ruled by Mercury, you value communication and thoughtful effort. You thrive with a partner who sees your quiet devotion and appreciates your steady heart.`,
    bestMatches: ["Taurus", "Capricorn", "Cancer"],
    tarot: "Temperance",
    tarotMeaning: "Balance and care bring out the best in your relationships."
  },
  Libra: {
    paragraph: `Ruled by Venus, you are the romantic diplomat. You crave beauty, harmony, and equal partnership. Your charm draws others in, but you need emotional and intellectual balance to feel safe. True love, for you, is a graceful dance of give and take.`,
    bestMatches: ["Gemini", "Aquarius", "Leo"],
    tarot: "Justice",
    tarotMeaning: "Fairness and balance are the keys to your heart."
  },
  Scorpio: {
    paragraph: `Intense, magnetic, and all-in — you seek soul-deep connection. Ruled by Pluto, you are passionate and private in love. Your loyalty runs deep, but so does your need for trust. With the right partner, your love is transformative and powerful.`,
    bestMatches: ["Cancer", "Pisces", "Virgo"],
    tarot: "Death",
    tarotMeaning: "Let old patterns die — and rise into a more authentic love."
  },
  Sagittarius: {
    paragraph: `Freedom-loving and optimistic, you see love as an adventure. Ruled by Jupiter, you're drawn to open-minded, philosophical partners who embrace your quest for meaning. You love with laughter, enthusiasm, and honesty — and need space to grow.`,
    bestMatches: ["Aries", "Leo", "Aquarius"],
    tarot: "Wheel of Fortune",
    tarotMeaning: "Love comes when you least expect it. Keep moving forward."
  },
  Capricorn: {
    paragraph: `Devoted, ambitious, and loyal — you build love like you build everything else: patiently and with purpose. Ruled by Saturn, you value commitment, trust, and goals that align. Your love is deeply reliable and enduring, even if slow to start.`,
    bestMatches: ["Taurus", "Virgo", "Pisces"],
    tarot: "The Emperor",
    tarotMeaning: "Strong foundations lead to lasting love."
  },
  Aquarius: {
    paragraph: `Independent and visionary, you love in a way that's uniquely yours. Ruled by Uranus, you crave intellectual connection and emotional honesty. Your ideal partner respects your freedom while sharing in your ideals and curiosity.`,
    bestMatches: ["Gemini", "Libra", "Sagittarius"],
    tarot: "The Fool",
    tarotMeaning: "Love is an experiment — follow your heart into the unknown."
  },
  Pisces: {
    paragraph: `Dreamy and deeply empathetic, you're ruled by Neptune and flow on emotion and fantasy. You're the romantic dreamer, seeking soulful love. You connect most with those who can hold your emotional ocean with care.`,
    bestMatches: ["Cancer", "Scorpio", "Capricorn"],
    tarot: "The Lovers",
    tarotMeaning: "Your soul seeks deep connection. Love is sacred — and fated."
  }
};

const ZODIAC_QUESTIONS = [
  {
    question: "How do you typically approach new relationships?",
    options: [
      { text: "Dive in with passion and enthusiasm", signs: ["Aries", "Leo", "Sagittarius"] },
      { text: "Take it slow and build trust gradually", signs: ["Taurus", "Virgo", "Capricorn"] },
      { text: "Connect mentally first through conversation", signs: ["Gemini", "Libra", "Aquarius"] },
      { text: "Feel it out emotionally and intuitively", signs: ["Cancer", "Scorpio", "Pisces"] }
    ]
  },
  {
    question: "What's your idea of a perfect date?",
    options: [
      { text: "Adventure and spontaneous activities", signs: ["Aries", "Sagittarius", "Leo"] },
      { text: "Cozy dinner at a luxurious restaurant", signs: ["Taurus", "Libra", "Cancer"] },
      { text: "Deep conversations over coffee", signs: ["Gemini", "Aquarius", "Virgo"] },
      { text: "Romantic evening under the stars", signs: ["Pisces", "Scorpio", "Cancer"] }
    ]
  },
  {
    question: "How do you show affection?",
    options: [
      { text: "Grand gestures and passionate displays", signs: ["Leo", "Aries", "Sagittarius"] },
      { text: "Practical acts of service and loyalty", signs: ["Virgo", "Capricorn", "Taurus"] },
      { text: "Thoughtful words and intellectual connection", signs: ["Gemini", "Libra", "Aquarius"] },
      { text: "Deep emotional bonding and nurturing", signs: ["Cancer", "Scorpio", "Pisces"] }
    ]
  },
  {
    question: "What's your biggest relationship challenge?",
    options: [
      { text: "Being patient and staying committed", signs: ["Aries", "Gemini", "Sagittarius"] },
      { text: "Opening up and showing vulnerability", signs: ["Capricorn", "Scorpio", "Virgo"] },
      { text: "Making decisions and being consistent", signs: ["Libra", "Pisces", "Gemini"] },
      { text: "Giving space and avoiding possessiveness", signs: ["Cancer", "Taurus", "Leo"] }
    ]
  },
  {
    question: "How do you handle relationship conflicts?",
    options: [
      { text: "Face them head-on immediately", signs: ["Aries", "Leo", "Scorpio"] },
      { text: "Analyze and solve practically", signs: ["Virgo", "Capricorn", "Aquarius"] },
      { text: "Discuss and find compromise", signs: ["Libra", "Gemini", "Sagittarius"] },
      { text: "Process emotions before addressing", signs: ["Cancer", "Pisces", "Taurus"] }
    ]
  },
  {
    question: "What quality do you value most in a partner?",
    options: [
      { text: "Confidence and independence", signs: ["Aries", "Leo", "Sagittarius"] },
      { text: "Reliability and stability", signs: ["Taurus", "Capricorn", "Virgo"] },
      { text: "Intelligence and communication", signs: ["Gemini", "Aquarius", "Libra"] },
      { text: "Emotional depth and understanding", signs: ["Cancer", "Scorpio", "Pisces"] }
    ]
  },
  {
    question: "How do you prefer to spend quality time together?",
    options: [
      { text: "Active and exciting experiences", signs: ["Aries", "Leo", "Sagittarius"] },
      { text: "Relaxing in comfort and luxury", signs: ["Taurus", "Libra", "Cancer"] },
      { text: "Learning and exploring new ideas", signs: ["Gemini", "Aquarius", "Virgo"] },
      { text: "Creating deep emotional connections", signs: ["Scorpio", "Pisces", "Cancer"] }
    ]
  },
  {
    question: "What's your approach to relationship commitment?",
    options: [
      { text: "Enthusiastic but need freedom", signs: ["Sagittarius", "Aquarius", "Aries"] },
      { text: "Slow but extremely loyal once committed", signs: ["Taurus", "Capricorn", "Scorpio"] },
      { text: "Flexible and adaptable", signs: ["Gemini", "Libra", "Pisces"] },
      { text: "All-in and deeply devoted", signs: ["Cancer", "Leo", "Virgo"] }
    ]
  },
  {
    question: "How do you express love?",
    options: [
      { text: "Through actions and physical affection", signs: ["Aries", "Taurus", "Leo"] },
      { text: "Through practical support and gifts", signs: ["Virgo", "Capricorn", "Taurus"] },
      { text: "Through words and intellectual connection", signs: ["Gemini", "Libra", "Aquarius"] },
      { text: "Through emotional support and intuition", signs: ["Cancer", "Scorpio", "Pisces"] }
    ]
  },
  {
    question: "What's your biggest strength in relationships?",
    options: [
      { text: "Passion and excitement", signs: ["Aries", "Leo", "Sagittarius"] },
      { text: "Loyalty and dependability", signs: ["Taurus", "Virgo", "Capricorn"] },
      { text: "Adaptability and communication", signs: ["Gemini", "Libra", "Aquarius"] },
      { text: "Empathy and emotional depth", signs: ["Cancer", "Scorpio", "Pisces"] }
    ]
  },
  {
    question: "What attracts you most in a potential partner?",
    options: [
      { text: "Their confidence and charisma", signs: ["Leo", "Aries", "Sagittarius"] },
      { text: "Their stability and reliability", signs: ["Taurus", "Capricorn", "Virgo"] },
      { text: "Their wit and intelligence", signs: ["Gemini", "Aquarius", "Libra"] },
      { text: "Their emotional sensitivity", signs: ["Cancer", "Pisces", "Scorpio"] }
    ]
  },
  {
    question: "How do you handle jealousy in relationships?",
    options: [
      { text: "Confront it directly and honestly", signs: ["Aries", "Leo", "Sagittarius"] },
      { text: "Work through it privately and practically", signs: ["Capricorn", "Virgo", "Taurus"] },
      { text: "Discuss it openly and rationally", signs: ["Gemini", "Libra", "Aquarius"] },
      { text: "Process it deeply and emotionally", signs: ["Scorpio", "Cancer", "Pisces"] }
    ]
  }
];
const shareText = 
 ` What's your lovestyle?` +
  "\nDiscover yours at https://yourdomain.com/quiz"
 "";

const LoveStyleQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [zodiacResult, setZodiacResult] = useState<any>(null);

  const handleZodiacAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < ZODIAC_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const signCounts: Record<string, number> = {};
      newAnswers.forEach((answerIndex, questionIndex) => {
        const selectedSigns = ZODIAC_QUESTIONS[questionIndex].options[answerIndex].signs;
        selectedSigns.forEach(sign => {
          signCounts[sign] = (signCounts[sign] || 0) + 1;
        });
      });

      const matchedSign = Object.entries(signCounts).reduce((a, b) => 
        signCounts[a[0]] > signCounts[b[0]] ? a : b
      )[0];

      setZodiacResult(ZODIAC_PROFILES[matchedSign as keyof typeof ZODIAC_PROFILES]);
      toast({ title: "✨ Your Love Style Result is Ready! ✨" });
    }
  };

  const resetZodiacQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setZodiacResult(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-center px-4">
      <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2 bg-gradient-to-r from-pink-600 via-purple-500 to-red-500 text-transparent bg-clip-text">
        💝 Discover Your Love Style
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Answer these questions about your romantic tendencies to reveal your cosmic love personality.
      </p>

      {!zodiacResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-6 mb-8 max-w-3xl mx-auto"
        >
          <div className="mb-4 text-sm text-gray-500">
            Question {currentQuestion + 1} of {ZODIAC_QUESTIONS.length}
          </div>
          <h2 className="text-xl font-semibold mb-6 text-purple-800">
            {ZODIAC_QUESTIONS[currentQuestion].question}
          </h2>
          <div className="grid gap-4 ">
            {ZODIAC_QUESTIONS[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleZodiacAnswer(index)}
                //className="w-full text-left p-4 hover:bg-purple-50 transition-colors"
                className="w-full text-left text-black p-4 rounded-md border border-purple-300 bg-purple-400 hover:bg-yellow-100 transition-colors shadow-sm"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </motion.div>
      )}

      {zodiacResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 max-w-3xl mx-auto"
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Your Cosmic Love Style
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {zodiacResult.paragraph}
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 mb-2">
                Best Compatibility Matches
              </h3>
              <p className="text-purple-600">
                {zodiacResult.bestMatches.join(", ")}
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-pink-800 mb-2">
                Tarot Insight
              </h3>
              <p className="text-pink-600">
                {zodiacResult.tarot} — {zodiacResult.tarotMeaning}
              </p>
            </div>
            <Button
                            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white text-lg"
                            onClick={() => navigator.share?.({ title: "My Lovestyle Analysis", text: shareText }) || navigator.clipboard.writeText(shareText)}
                          >
                            🔗 Share My Results
                          </Button>
            <Button
              onClick={resetZodiacQuiz}
              //className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              className="mt-4 text-white underline text-sm"
            >
              Take the Quiz Again
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LoveStyleQuiz;