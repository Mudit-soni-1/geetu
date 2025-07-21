declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const instagramPosts = [
  "https://www.instagram.com/p/DH-S4okxI5q/",
  "https://www.instagram.com/p/DH-S4okxI5q/",
  "https://www.instagram.com/p/DH-S4okxI5q/",
  "https://www.instagram.com/p/DH-S4okxI5q/",
  "https://www.instagram.com/p/DH-S4okxI5q/",
  "https://www.instagram.com/p/DH-S4okxI5q/",
];

const SocialMedia = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="social" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-600 font-medium">Connect With Me</span>
          <h2 className="text-4xl font-serif font-light mt-2">Follow My Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl mb-6">Find Me Online</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/thekarmaatree/" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Instagram size={24} />
                <span>@TheKarmaatree</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Youtube size={24} />
                <span>Celestial Journey</span>
              </a>
              <a href="https://www.facebook.com/DivineGeetikkaTheKarmaaTree" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Facebook size={24} />
                <span>TheKarmaaTree - Awakening of Occult</span>
              </a>
            </div>
          </motion.div>

          {/* Instagram Feed */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {instagramPosts.map((postUrl, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <blockquote
                  className="instagram-media w-full h-full"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{ background: "#fff", border: 0, margin: 0, padding: 0 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
/*
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const SocialMedia = () => {
  return (
    <section id="social" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-600 font-medium">Connect With Me</span>
          <h2 className="text-4xl font-serif font-light mt-2">Follow My Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Social Media Links /}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl mb-6">Find Me Online</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Instagram size={24} />
                <span>@celestialguide</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Youtube size={24} />
                <span>Celestial Journey</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gold-600 transition-colors">
                <Facebook size={24} />
                <span>Celestial Guidance</span>
              </a>
            </div>
          </motion.div>

          {/* Instagram Feed /}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={`https://source.unsplash.com/random/400x400?astrology&${item}`}
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
*/