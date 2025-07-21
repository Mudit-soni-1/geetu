
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, Clock, Gift, FileText, Users, Star, Coffee, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const courses = [
  {
    id: 1,
    title: "Vedic Astrology Fundamentals",
    description: "Learn the basics of Vedic astrology, including planetary positions, houses, and aspects.",
    image: "https://source.unsplash.com/random/400x300?astrology&1",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Tarot Reading Mastery",
    description: "Master the art of tarot reading from basic spreads to advanced interpretations.",
    image: "https://source.unsplash.com/random/400x300?tarot&2",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Numerology Essentials",
    description: "Discover how numbers influence your life path, personality, and destiny.",
    image: "https://source.unsplash.com/random/400x300?numerology&3",
    duration: "4 weeks",
  },
  {
    id: 4,
    title: "Palmistry Complete Guide",
    description: "Learn to decode the lines and mounts on your palms to reveal your life's story.",
    image: "https://source.unsplash.com/random/400x300?palmreading&4",
    duration: "5 weeks",
  },
  {
    id: 5,
    title: "Crystal Healing Certification",
    description: "Harness the power of crystals for healing and spiritual growth.",
    image: "https://source.unsplash.com/random/400x300?crystals&5",
    duration: "6 weeks",
  },
  {
    id: 6,
    title: "Chakra Balancing Workshop",
    description: "Learn techniques to balance your chakras and improve your overall well-being.",
    image: "https://source.unsplash.com/random/400x300?chakra&6",
    duration: "3 weeks",
  },
  {
    id: 7,
    title: "Dream Interpretation",
    description: "Unlock the mysteries of your dreams and understand their spiritual significance.",
    image: "https://source.unsplash.com/random/400x300?dreams&7",
    duration: "4 weeks",
  },
  {
    id: 8,
    title: "Meditation for Beginners",
    description: "Start your meditation journey with guided practices for inner peace.",
    image: "https://source.unsplash.com/random/400x300?meditation&8",
    duration: "5 weeks",
  },
  {
    id: 9,
    title: "Advanced Horoscope Reading",
    description: "Take your horoscope reading skills to the next level with professional techniques.",
    image: "https://source.unsplash.com/random/400x300?horoscope&9",
    duration: "8 weeks",
  },
  {
    id: 10,
    title: "Spiritual Healing Practices",
    description: "Learn various spiritual healing modalities to help yourself and others.",
    image: "https://source.unsplash.com/random/400x300?spiritual&10",
    duration: "7 weeks",
  },
  {
    id: 11,
    title: "Feng Shui Fundamentals",
    description: "Transform your living space and enhance your life with Feng Shui principles.",
    image: "https://source.unsplash.com/random/400x300?fengshui&11",
    duration: "4 weeks",
  },
  {
    id: 12,
    title: "Moon Phases & Manifestation",
    description: "Align your intentions with the moon phases to manifest your dreams.",
    image: "https://source.unsplash.com/random/400x300?moon&12",
    duration: "4 weeks",
  },
];

const rewards = [
  {
    icon: Award,
    title: "Certification",
    description: "Receive an officially recognized certificate upon completion",
  },
  {
    icon: Gift,
    title: "Cashback",
    description: "Get 10% cashback on your next course enrollment",
  },
  {
    icon: FileText,
    title: "Free E-Books",
    description: "Access to premium spiritual e-books library",
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Personal guidance from experienced practitioners",
  },
  {
    icon: Star,
    title: "Community Access",
    description: "Join our exclusive spiritual community forum",
  },
  {
    icon: Coffee,
    title: "Live Sessions",
    description: "Weekly live Q&A sessions with course instructors",
  },
  {
    icon: CheckCircle,
    title: "Lifetime Access",
    description: "Unlimited access to course materials forever",
  },
];

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 bg-sage-50/30 min-h-screen">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-gold-600 font-medium">Expand Your Knowledge</span>
            <h1 className="text-4xl font-serif font-light mt-2 mb-4">Our Spiritual Courses</h1>
            <p className="text-muted-foreground">
              Embark on a journey of self-discovery with our expertly crafted courses.
              From astrology to tarot, find the perfect path for your spiritual growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-light">Top Rewards</h2>
              <p className="text-muted-foreground mt-2">
                Enjoy these exclusive benefits when you enroll in our courses
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
                >
                  <div className="bg-gold-100 p-3 rounded-full">
                    <reward.icon className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{reward.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
