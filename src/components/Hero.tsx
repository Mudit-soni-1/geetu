import { motion } from "framer-motion";
import ZodiacWheel from "./ZodiacWheel";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-x-hidden">
      {/* New container div wrapping background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center" />
        <ZodiacWheel />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      {/* Content container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl px-4 mx-auto text-center"
        style={{
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gold-100 text-sm sm:text-base uppercase tracking-wider"
        >
          Welcome to Your Celestial Journey
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white"
        >
          Unlock Your Destiny with
          <span className="block font-medium mt-2">Tarot & Astrology</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Discover the ancient wisdom of the stars and cards, guiding you towards clarity and purpose
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book a Reading
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/80"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm"
          >
            Scroll to explore
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;