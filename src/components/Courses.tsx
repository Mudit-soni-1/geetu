
import { motion } from "framer-motion";
import { Book, Calendar, Clock, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      title: "The Art of Tarot Reading",
      image: "https://images.unsplash.com/photo-1633414654227-2975db68b9d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFyb3QlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "Master the ancient art of tarot card reading and interpretation. Learn the meanings behind the cards and how to connect with your intuition for insightful readings.",
      duration: "8 weeks",
      students: "124",
      rating: 4.9,
      price: "$399",
      level: "Beginner to Intermediate",
      startDate: "June 15, 2025",
      popular: true
    },
    {
      title: "Astrology Fundamentals",
      image: "https://images.unsplash.com/photo-1572506795268-48237b3e2e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN0cm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      description: "Discover the basic principles of astrology, from planets and houses to aspects and chart interpretation. Learn how celestial movements affect your daily life.",
      duration: "10 weeks",
      students: "98",
      rating: 4.7,
      price: "$449",
      level: "All Levels",
      startDate: "July 5, 2025",
      popular: false
    },
    {
      title: "Norse Runes: Ancient Wisdom",
      image: "https://images.unsplash.com/photo-1617868186608-87ae5c6f660c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVuZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      description: "Explore the ancient wisdom of Norse runes and learn how to use these powerful symbols for divination, guidance, and personal growth.",
      duration: "6 weeks",
      students: "76",
      rating: 4.8,
      price: "$349",
      level: "Beginner Friendly",
      startDate: "August 10, 2025",
      popular: true
    }
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            Our Spiritual Courses
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
            Expand your spiritual knowledge and skills with our expert-led courses in various divination arts
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  {course.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gold-500">Popular</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-medium mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className="text-gold-500" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={16} className="text-gold-500" />
                      <span className="text-sm">{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={16} className="text-gold-500" />
                      <span className="text-sm">{course.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Book size={16} className="text-gold-500" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-gold-500" />
                    <span className="text-sm">Starting: {course.startDate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{course.price}</span>
                    <Button className="bg-gold-500 hover:bg-gold-600">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gold-500 text-gold-600 hover:bg-gold-50">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
