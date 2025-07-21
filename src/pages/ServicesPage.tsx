
import React from "react";
import { motion } from "framer-motion";
import { Star, Moon, Compass, BookOpen, User, Coffee, Award, Gift, FileText, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: Star,
    title: "Vedic Astrology",
    description: "Discover the ancient wisdom of Vedic astrology and unlock insights about your life path, relationships, and career.",
    image: "https://source.unsplash.com/random/800x600?astrology&1",
  },
  {
    icon: Moon,
    title: "Tarot Reading",
    description: "Get clarity on your life situations through the mystical wisdom of tarot cards interpreted by our expert readers.",
    image: "https://source.unsplash.com/random/800x600?tarot&2",
  },
  {
    icon: Compass,
    title: "Numerology",
    description: "Explore how numbers influence your personality, strengths, challenges, and life's purpose.",
    image: "https://source.unsplash.com/random/800x600?numerology&3",
  },
  {
    icon: BookOpen,
    title: "Life Coaching",
    description: "Transform your life with personalized guidance to overcome obstacles and achieve your highest potential.",
    image: "https://source.unsplash.com/random/800x600?coaching&4",
  },
  {
    icon: User,
    title: "Career Advice",
    description: "Find your ideal career path through astrological insights and personal counseling sessions.",
    image: "https://source.unsplash.com/random/800x600?career&5",
  },
  {
    icon: Coffee,
    title: "Relationship Counseling",
    description: "Improve your relationships through spiritual guidance and practical relationship tools.",
    image: "https://source.unsplash.com/random/800x600?relationship&6",
  },
  {
    icon: Star,
    title: "Energy Healing",
    description: "Experience deep healing through various energy modalities to balance your mind, body, and spirit.",
    image: "https://source.unsplash.com/random/800x600?healing&7",
  },
  {
    icon: Moon,
    title: "Spiritual Retreats",
    description: "Join our transformative retreats to disconnect from daily stress and reconnect with your inner self.",
    image: "https://source.unsplash.com/random/800x600?retreat&8",
  },
];

const rewards = [
  {
    icon: Award,
    title: "First Session Discount",
    description: "20% off on your first consultation",
  },
  {
    icon: Gift,
    title: "Loyalty Program",
    description: "Earn points with every service booking",
  },
  {
    icon: FileText,
    title: "Free Report",
    description: "Detailed PDF report after your session",
  },
  {
    icon: Users,
    title: "Group Sessions",
    description: "Complimentary group healing sessions",
  },
  {
    icon: Star,
    title: "Priority Booking",
    description: "Priority access to limited appointment slots",
  },
  {
    icon: CheckCircle,
    title: "Follow-up Call",
    description: "Free 15-minute follow-up consultation",
  },
];

const ServicesPage = () => {
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
            <span className="text-gold-600 font-medium">Professional Guidance</span>
            <h1 className="text-4xl font-serif font-light mt-2 mb-4">Our Spiritual Services</h1>
            <p className="text-muted-foreground">
              Explore our range of personalized services designed to provide clarity,
              guidance, and transformation on your spiritual journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gold-100 p-2 rounded-full mr-3">
                        <service.icon className="h-5 w-5 text-gold-600" />
                      </div>
                      <h3 className="font-medium text-lg">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    <button className="mt-4 text-gold-600 font-medium flex items-center hover:text-gold-700 transition-colors">
                      Book Now <span className="ml-1">→</span>
                    </button>
                  </CardContent>
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
              <h2 className="text-3xl font-serif font-light">Service Rewards</h2>
              <p className="text-muted-foreground mt-2">
                Enjoy these exclusive benefits when you book our services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default ServicesPage;
