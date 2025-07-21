
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import SocialMedia from "@/components/Social";
import Interactive from "@/components/Interactive";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <SocialMedia />
      <Interactive />
      <Testimonials />
      <Events />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
