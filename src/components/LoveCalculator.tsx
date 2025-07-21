import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, RefreshCcw, Calendar, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

// Zodiac Data with expanded information
const ZODIAC_DATA = {
  Aries: {
    element: 'Fire',
    planet: 'Mars',
    strengths: 'Confident, Courageous, Enthusiastic',
    weaknesses: 'Impulsive, Short-tempered, Aggressive',
    loveStyle: 'Passionate and direct in love, seeks adventure'
  },
  Taurus: {
    element: 'Earth',
    planet: 'Venus',
    strengths: 'Patient, Reliable, Devoted',
    weaknesses: 'Stubborn, Possessive, Uncompromising',
    loveStyle: 'Romantic and sensual, values stability'
  },
  Gemini: {
    element: 'Air',
    planet: 'Mercury',
    strengths: 'Adaptable, Versatile, Intellectual',
    weaknesses: 'Inconsistent, Indecisive, Restless',
    loveStyle: 'Playful and communicative, needs mental stimulation'
  },
  Cancer: {
    element: 'Water',
    planet: 'Moon',
    strengths: 'Nurturing, Protective, Intuitive',
    weaknesses: 'Moody, Oversensitive, Manipulative',
    loveStyle: 'Deep emotional connection, highly protective'
  },
  Leo: {
    element: 'Fire',
    planet: 'Sun',
    strengths: 'Generous, Warm-hearted, Creative',
    weaknesses: 'Arrogant, Stubborn, Self-centered',
    loveStyle: 'Grand gestures, loves attention and admiration'
  },
  Virgo: {
    element: 'Earth',
    planet: 'Mercury',
    strengths: 'Analytical, Practical, Diligent',
    weaknesses: 'Overcritical, Perfectionist, Shy',
    loveStyle: 'Attentive to detail, shows love through acts of service'
  },
  Libra: {
    element: 'Air',
    planet: 'Venus',
    strengths: 'Diplomatic, Gracious, Fair-minded',
    weaknesses: 'Indecisive, Avoids confrontation, Self-pitying',
    loveStyle: 'Seeks harmony and balance, romantic partnerships'
  },
  Scorpio: {
    element: 'Water',
    planet: 'Mars',
    strengths: 'Passionate, Determined, Magnetic',
    weaknesses: 'Jealous, Secretive, Controlling',
    loveStyle: 'Intense and deeply emotional connections'
  },
  Sagittarius: {
    element: 'Fire',
    planet: 'Jupiter',
    strengths: 'Optimistic, Freedom-loving, Philosophical',
    weaknesses: 'Impatient, Promises more than can deliver',
    loveStyle: 'Adventures and intellectual exploration in love'
  },
  Capricorn: {
    element: 'Earth',
    planet: 'Saturn',
    strengths: 'Responsible, Disciplined, Self-controlled',
    weaknesses: 'Know-it-all, Unforgiving, Expecting the worst',
    loveStyle: 'Traditional approach, values long-term commitment'
  },
  Aquarius: {
    element: 'Air',
    planet: 'Staurn',
    strengths: 'Progressive, Original, Independent',
    weaknesses: 'Runs from emotional expression, Temperamental',
    loveStyle: 'Unconventional relationships, values intellectual connection'
  },
  Pisces: {
    element: 'Water',
    planet: 'Jupiter',
    strengths: 'Compassionate, Artistic, Gentle',
    weaknesses: 'Fearful, Overly trusting, Desire to escape reality',
    loveStyle: 'Romantic dreamers, deeply empathetic connections'
  }
};

// Tarot Cards with meaningful interpretations
const TAROT_CARDS = [
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

// Love Quotes for Splash Screen
const LOVE_QUOTES = [
  "Love is composed of a single soul inhabiting two bodies. - Aristotle",
  "To love and be loved is to feel the sun from both sides. - David Viscott",
  "Love recognizes no barriers. - Maya Angelou",
  "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
  "You know you're in love when reality is finally better than your dreams. - Dr. Seuss",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
  "The best love is the kind that awakens the soul. - Nicholas Sparks",
  "Where there is love there is life. - Mahatma Gandhi"
];

// Cosmic Advice Messages
const COSMIC_ADVICE = [
  "Your hearts are aligned. Just remember to listen.",
  "Open up emotionally this week.",
  "Let love flow, but don't lose yourself.",
  "The stars suggest a deep connection.",
  "Communication will strengthen your bond.",
  "Trust your intuition in matters of the heart.",
  "A phase of spiritual growth awaits your relationship.",
  "The universe supports your union."
];

const LoveCalculator: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name1: '',
    birthdate1: '',
    name2: '',
    birthdate2: '',
  });
  const [result, setResult] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [selectedTarotCard, setSelectedTarotCard] = useState<any>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Handle splash screen and quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote(LOVE_QUOTES[Math.floor(Math.random() * LOVE_QUOTES.length)]);
    }, 4000);

    setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    // Handle time updates
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const getZodiacSign = (date: string) => {
    const birthDate = new Date(date);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    return "Pisces";
  };

  const calculateLifePathNumber = (birthdate: string) => {
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    let sum = day + month + year;
    while (sum > 9) {
      sum = sum.toString().split('').reduce((a, b) => parseInt(a.toString()) + parseInt(b), 0);
    }
    return sum;
  };

  const calculateCompatibility = () => {
    if (soundEnabled) {
      toast({
        title: "Calculating compatibility...",
        description: "The stars are aligning to reveal your cosmic connection.",
      });
    }

    const sign1 = getZodiacSign(formData.birthdate1);
    const sign2 = getZodiacSign(formData.birthdate2);
    
    const combined = formData.birthdate1 + formData.birthdate2;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }
    const percentage = Math.abs(hash % 101);

    const lifePathNumber1 = calculateLifePathNumber(formData.birthdate1);
    const lifePathNumber2 = calculateLifePathNumber(formData.birthdate2);

    const cosmicAdvice = COSMIC_ADVICE[Math.floor(Math.random() * COSMIC_ADVICE.length)];

    setResult({
      percentage,
      sign1,
      sign2,
      name1: formData.name1,
      name2: formData.name2,
      lifePathNumber1,
      lifePathNumber2,
      cosmicAdvice,
    });
  };

  const drawTarotCard = () => {
    if (soundEnabled) {
      toast({
        title: "Drawing a tarot card...",
        description: "The universe is revealing its guidance for your relationship.",
      });
    }
    const randomCard = TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)];
    setSelectedTarotCard(randomCard);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-4 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">
          Welcome to <span className="text-yellow-300">thekarmaatree Love Calculator</span>
        </h1>
        <p className="text-xl italic text-pink-200 animate-fade-in">
          {currentQuote}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl shadow-lg p-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 opacity-50" />
      
      {/* Sound Toggle */}
      <Button
        onClick={() => setSoundEnabled(!soundEnabled)}
        variant="outline"
        size="icon"
        className="absolute top-4 right-4"
      >
        {soundEnabled ? <Volume2 className="w-5 h-5 text-pink-500" /> : <VolumeX className="w-5 h-5" />}
      </Button>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="pulse">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">thekarmaatree Love Calculator</h2>
          <p className="text-gray-600">Discover your celestial compatibility</p>
          <p className="text-sm text-gray-500 mt-2">{currentTime}</p>
        </div>

        {!showForm ? (
          <Button
            onClick={() => setShowForm(true)}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover-scale"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Begin Your Cosmic Love Journey
          </Button>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* Partner 1 Input */}
            <Card>
              <CardHeader>
                <CardTitle>Partner 1</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    type="text"
                    value={formData.name1}
                    onChange={(e) => setFormData({ ...formData, name1: e.target.value })}
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Birth Date</label>
                  <Input
                    type="date"
                    value={formData.birthdate1}
                    onChange={(e) => setFormData({ ...formData, birthdate1: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="flex justify-center items-center">
              <div className="w-1/3 h-px bg-gray-300"></div>
              <ArrowRight className="w-8 h-8 text-pink-500 mx-4" />
              <div className="w-1/3 h-px bg-gray-300"></div>
            </div>

            {/* Partner 2 Input */}
            <Card>
              <CardHeader>
                <CardTitle>Partner 2</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    type="text"
                    value={formData.name2}
                    onChange={(e) => setFormData({ ...formData, name2: e.target.value })}
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Birth Date</label>
                  <Input
                    type="date"
                    value={formData.birthdate2}
                    onChange={(e) => setFormData({ ...formData, birthdate2: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={calculateCompatibility}
              disabled={!formData.name1 || !formData.name2 || !formData.birthdate1 || !formData.birthdate2}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
            >
              Calculate Cosmic Compatibility
            </Button>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="mt-8 space-y-6 animate-fade-in">
            {/* Compatibility Score */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold text-pink-500 mb-4 animate-scale-in">
                  {result.percentage}%
                </div>
                <p className="text-xl text-gray-700 mb-2">
                  {result.name1} & {result.name2}
                </p>
                <p className="text-gray-600">
                  {result.percentage >= 80
                    ? '✨ Soulmates in this life and the next! ✨'
                    : result.percentage >= 60
                    ? '💖 Great potential for lasting love! 💖'
                    : result.percentage >= 40
                    ? '💫 There\'s a spark worth exploring! 💫'
                    : '🌟 Keep searching for your star-crossed love! 🌟'}
                </p>
              </CardContent>
            </Card>

            {/* Zodiac Profiles */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{result.name1}'s Zodiac Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sign: {result.sign1}</p>
                  <p>Element: {ZODIAC_DATA[result.sign1]?.element}</p>
                  <p>Planet: {ZODIAC_DATA[result.sign1]?.planet}</p>
                  <p>Love Style: {ZODIAC_DATA[result.sign1]?.loveStyle}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{result.name2}'s Zodiac Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sign: {result.sign2}</p>
                  <p>Element: {ZODIAC_DATA[result.sign2]?.element}</p>
                  <p>Planet: {ZODIAC_DATA[result.sign2]?.planet}</p>
                  <p>Love Style: {ZODIAC_DATA[result.sign2]?.loveStyle}</p>
                </CardContent>
              </Card>
            </div>

            {/* Numerology */}
            <Card>
              <CardHeader>
                <CardTitle>Numerology Match</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p>{result.name1}'s Life Path Number: {result.lifePathNumber1}</p>
                  </div>
                  <div>
                    <p>{result.name2}'s Life Path Number: {result.lifePathNumber2}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tarot Section */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Tarot Insight</CardTitle>
              </CardHeader>
              <CardContent>
                {!selectedTarotCard ? (
                  <Button
                    onClick={drawTarotCard}
                    variant="secondary"
                  >
                    Draw a Tarot Card
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <img
                      src={selectedTarotCard.image}
                      alt={selectedTarotCard.name}
                      className="w-32 h-48 object-cover rounded-lg mx-auto shadow-lg"
                    />
                    <h5 className="text-xl font-medium">{selectedTarotCard.name}</h5>
                    <p>{selectedTarotCard.meaning}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Cosmic Advice */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Cosmic Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">{result.cosmicAdvice}</p>
              </CardContent>
            </Card>

            {/* Share Your Problem Section */}
            <Card>
              <CardHeader>
                <CardTitle>
                  SHARE YOUR PROBLEM, GET SOLUTIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p><Heart className="inline w-4 h-4 mr-2" /> LOVE</p>
                    <p><Heart className="inline w-4 h-4 mr-2" /> RELATIONSHIP</p>
                    <p><Heart className="inline w-4 h-4 mr-2" /> CAREER</p>
                    <p><Heart className="inline w-4 h-4 mr-2" /> BUSINESS</p>
                    <p><Heart className="inline w-4 h-4 mr-2" /> FAMILY</p>
                    <p><Heart className="inline w-4 h-4 mr-2" /> FINANCE</p>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">The Karmaa Tree</div>
                    <div>Experience: 25 Years</div>
                    <a
                      href="https://www.instagram.com/thekarmaatree/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                    >
                      TALK TO ASTROLOGER NOW
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reset Button */}
            <div className="text-center">
              <Button
                onClick={() => {
                  setFormData({ name1: '', birthdate1: '', name2: '', birthdate2: '' });
                  setResult(null);
                  setSelectedTarotCard(null);
                }}
                variant="ghost"
                className="text-gray-600 hover:text-gray-800"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Calculate Another Match
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveCalculator;
