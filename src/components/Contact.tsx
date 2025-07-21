import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Contact = () => {
  // Contact links
  const emailLink = "mailto:contact@celestialjourney.com";
  const whatsappLink = "https://wa.me/919999928422";
  const instagramLink = "https://www.instagram.com/thekarmaatree/";
  const phoneLink = "tel:+919999928422";

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-sage-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-gold-100/30 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-sage-100/30 blur-3xl"></div>
      <div className="absolute top-60 right-1/4 w-40 h-40 rounded-full bg-[#FFDEE2]/20 blur-3xl"></div>
      
      {/* Gold flourish */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 opacity-20">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15C40 5 80 25 100 15C120 5 160 25 200 15" stroke="#FFC300" strokeWidth="2"/>
          <path d="M0 15C40 25 80 5 100 15C120 25 160 5 200 15" stroke="#FFC300" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-light mt-2 mb-4 text-gray-800">Begin Your Celestial Journey</h2>
          <div className="h-0.5 w-24 bg-gold-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Let's connect and explore how the stars can guide your path. Whether you're planning an event 
            or seeking personal guidance, we're here to illuminate your journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sage-100/30 rounded-2xl -rotate-3 transform"></div>
              <div className="absolute inset-0 bg-gold-100/30 rounded-2xl rotate-3 transform"></div>
              <div className="rounded-2xl overflow-hidden relative z-10 shadow-xl">
                <img 
                  src="/cardback.jpg" 
                  alt="Celestial guidance" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <h3 className="text-2xl font-playfair text-white mb-2">Let's Create Magic Together</h3>
                    <p className="text-white/90">Guided by the stars, crafted with intention</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-playfair text-gray-800 mb-6">Reach Out Through The Cosmos</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-white/70 backdrop-blur-lg border-gold-100 hover:shadow-lg hover:shadow-gold-100/20 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-4 shadow-md">
                          <Mail className="text-gold-600" size={22} />
                        </div>
                        <h3 className="font-playfair text-xl mb-2 text-gray-800">Email</h3>
                        <p className="text-gray-500 text-sm mb-4">Send us a message anytime</p>
                        <a 
                          href={emailLink}
                          className="inline-flex items-center text-gold-600 font-medium text-sm hover:text-gold-700 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-gold-100">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-gray-600">contact@celestialjourney.com</p>
                      <p className="text-xs text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-white/70 backdrop-blur-lg border-gold-100 hover:shadow-lg hover:shadow-gold-100/20 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-4 shadow-md">
                          <MessageCircle className="text-green-600" size={22} />
                        </div>
                        <h3 className="font-playfair text-xl mb-2 text-gray-800">WhatsApp</h3>
                        <p className="text-gray-500 text-sm mb-4">Chat with us directly</p>
                        <a 
                          href={whatsappLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-gold-100">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-gray-600">+91 9999928422</p>
                      <p className="text-xs text-muted-foreground">Available 9am-6pm IST weekdays</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* Instagram Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-white/70 backdrop-blur-lg border-gold-100 hover:shadow-lg hover:shadow-gold-100/20 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center mb-4 shadow-md">
                          <Instagram className="text-pink-600" size={22} />
                        </div>
                        <h3 className="font-playfair text-xl mb-2 text-gray-800">Instagram</h3>
                        <p className="text-gray-500 text-sm mb-4">Follow our cosmic journey</p>
                        <a 
                          href={instagramLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-gold-100">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-gray-600">@celestialjourney</p>
                      <p className="text-xs text-muted-foreground">Daily celestial updates and event highlights</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>

              {/* Phone Card */}
              <motion.div variants={itemVariants}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden bg-white/70 backdrop-blur-lg border-gold-100 hover:shadow-lg hover:shadow-gold-100/20 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 shadow-md">
                          <Phone className="text-blue-600" size={22} />
                        </div>
                        <h3 className="font-playfair text-xl mb-2 text-gray-800">Phone</h3>
                        <p className="text-gray-500 text-sm mb-4">Schedule a personal call</p>
                        <a 
                          href={phoneLink}
                          className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                        >
                          <span>Connect</span>
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-gold-100">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-gray-600">+91 9999928422</p>
                      <p className="text-xs text-muted-foreground">Book a call between 10am-4pm IST</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-gold-100/30 mt-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-10 bg-gradient-to-b from-gold-400 to-gold-200"></div>
                <h3 className="font-playfair text-xl text-gray-800">Our Promise</h3>
              </div>
              <p className="text-gray-600 italic">
                "We believe in connections guided by the cosmos. Reach out to us for a consultation, and let the 
                universe weave its magic into your special moments."
              </p>
              <div className="mt-4 text-right text-gold-600 font-playfair">— Celestial Journey</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Gold flourish bottom */}
        <div className="mt-16 flex justify-center opacity-20">
          <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15C40 5 80 25 100 15C120 5 160 25 200 15" stroke="#FFC300" strokeWidth="2"/>
            <path d="M0 15C40 25 80 5 100 15C120 25 160 5 200 15" stroke="#FFC300" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;

