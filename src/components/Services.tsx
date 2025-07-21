
import { motion } from "framer-motion";
import { Sparkles, Moon, Compass, BookOpen } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Tarot Reading",
    description: "Unlock insights into your past, present, and future through the ancient wisdom of tarot cards.",
    price: "From $75",
  },
  {
    icon: Moon,
    title: "Birth Chart Analysis",
    description: "Discover your unique celestial blueprint and understand your life's purpose and potential.",
    price: "From $95",
  },
  {
    icon: Compass,
    title: "Numerology",
    description: "Explore the mystical significance of numbers in your life and their influence on your path.",
    price: "From $65",
  },
  {
    icon: BookOpen,
    title: "Spiritual Workshops",
    description: "Join group sessions to deepen your understanding of astrology and spiritual practices.",
    price: "From $45",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-600 font-medium">Services</span>
          <h2 className="text-4xl font-serif font-light mt-2 mb-4">Discover Your Path</h2>
          <p className="text-muted-foreground">
            Choose from a range of spiritual services designed to provide clarity, guidance, and transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-gold-600" size={24} />
              </div>
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <span className="text-gold-600 font-medium">{service.price}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book a Session
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
