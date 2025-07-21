import { motion } from "framer-motion";
import { User, Star, Award, Bookmark, Trophy, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            About TheKarmaatree
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gold-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Discover the ancient wisdom of the stars and tap into the 
            universal energy that guides our paths
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif">Our Philosophy</h3>
            <p className="text-gray-600">
              At TheKarmaatree, we believe that the universe speaks to us through various signs and symbols. 
              Our mission is to help you interpret these cosmic messages and guide you toward a path of 
              harmony and spiritual growth.
            </p>
            <p className="text-gray-600">
              Founded in 2015 by Master Astrologer Geetikaa Soni, TheKarmaatree has grown from a small 
              consultation service to a full-fledged spiritual wellness center, offering a wide range 
              of services and courses designed to help you understand the complex interplay between 
              celestial energies and your personal journey.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold-100 p-2">
                  <User size={20} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-medium">Professional Readers</p>
                  <p className="text-sm text-gray-500">Certified experts</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold-100 p-2">
                  <Star size={20} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-medium">5-Star Rated</p>
                  <p className="text-sm text-gray-500">Trusted by clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold-100 p-2">
                  <Award size={20} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-medium">Award Winning</p>
                  <p className="text-sm text-gray-500">Recognized excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold-100 p-2">
                  <Bookmark size={20} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-medium">Ancient Wisdom</p>
                  <p className="text-sm text-gray-500">Traditional knowledge</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhcm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="Spiritual guidance"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Welcome Video Section - Moved to center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-center">
            <h3 className="font-serif text-2xl mb-3">Welcome to TheKarmaatree</h3>
            <p className="text-gray-600 mb-6">A message from our founder, Geetikaa Soni</p>
          </div>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0" 
              title="Welcome to TheKarmaatree"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif text-center mb-10">Our Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Spiritual Center 2023" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2023</span>
                </div>
                <h3 className="font-medium mb-1">Best Spiritual Center</h3>
                <p className="text-sm text-gray-500">Awarded by the International Spiritual Alliance for excellence in holistic practices and client care.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Astrological Readings 2021" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2021</span>
                </div>
                <h3 className="font-medium mb-1">Best Astrological Readings</h3>
                <p className="text-sm text-gray-500">Recognized for the accuracy and insight of our celestial interpretations by Astrology Today Magazine.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Tarot Reader 2022" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2022</span>
                </div>
                <h3 className="font-medium mb-1">Best Tarot Reader</h3>
                <p className="text-sm text-gray-500">Geetikaa Soni was named "Tarot Reader of the Year" by the Global Divination Council for her exceptional readings.</p>
              </CardContent>
            </Card> 

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Astrological Readings 2021" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2021</span>
                </div>
                <h3 className="font-medium mb-1">Best Astrological Readings</h3>
                <p className="text-sm text-gray-500">Recognized for the accuracy and insight of our celestial interpretations by Astrology Today Magazine.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Astrological Readings 2021" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2021</span>
                </div>
                <h3 className="font-medium mb-1">Best Astrological Readings</h3>
                <p className="text-sm text-gray-500">Recognized for the accuracy and insight of our celestial interpretations by Astrology Today Magazine.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Best Astrological Readings 2021" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={18} className="text-gold-500" />
                  <span className="text-sm font-medium text-gold-600">2021</span>
                </div>
                <h3 className="font-medium mb-1">Best Astrological Readings</h3>
                <p className="text-sm text-gray-500">Recognized for the accuracy and insight of our celestial interpretations by Astrology Today Magazine.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 italic">
            "We are committed to helping you discover your true path and embrace the cosmic energy 
            that guides your journey through life."
          </p>
          <p className="mt-4 font-serif">- Geetikaa Soni, Founder</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
