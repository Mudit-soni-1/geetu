
import { useState, useEffect } from "react";
import { Menu, X, Home, BookOpen, Briefcase, Award, Brain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const isHomePage = path === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-serif font-bold text-amber-600">
              <span className="text-2xl">TKT</span>
              <span className="text-sm ml-2 font-normal hidden sm:inline-block">by Geetikaa Soni</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium flex items-center gap-1 ${path === '/' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} transition-colors`}
            >
              <Home size={16} /> Home
            </Link>
            <Link 
              to="/courses" 
              className={`text-sm font-medium flex items-center gap-1 ${path === '/courses' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} transition-colors`}
            >
              <BookOpen size={16} /> Courses
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium flex items-center gap-1 ${path === '/services' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} transition-colors`}
            >
              <Briefcase size={16} /> Services
            </Link>
            <Link 
              to="/quiz" 
              className={`text-sm font-medium flex items-center gap-1 ${path === '/quiz' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} transition-colors`}
            >
              <Brain size={16} /> Quiz
            </Link>
            {isHomePage && (
              ["About", "Testimonials", "Events", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {item}
                </button>
              ))
            )}
            <Link 
              to="/love-calculator" 
              className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
            >
              Love Calculator
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden bg-white/80 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`block w-full text-left px-3 py-2 text-base font-medium flex items-center gap-2 ${path === '/' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} hover:bg-gray-50 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            <Home size={16} /> Home
          </Link>
          <Link 
            to="/courses" 
            className={`block w-full text-left px-3 py-2 text-base font-medium flex items-center gap-2 ${path === '/courses' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} hover:bg-gray-50 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            <BookOpen size={16} /> Courses
          </Link>
          <Link 
            to="/services" 
            className={`block w-full text-left px-3 py-2 text-base font-medium flex items-center gap-2 ${path === '/services' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} hover:bg-gray-50 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            <Briefcase size={16} /> Services
          </Link>
          <Link 
            to="/quiz" 
            className={`block w-full text-left px-3 py-2 text-base font-medium flex items-center gap-2 ${path === '/quiz' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'} hover:bg-gray-50 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            <Brain size={16} /> Quiz
          </Link>
          {isHomePage && (
            ["About", "Testimonials", "Events", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
              >
                {item}
              </button>
            ))
          )}
          <Link 
            to="/love-calculator" 
            className="block w-full text-left px-3 py-2 text-base font-medium text-pink-600 hover:text-pink-800 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Love Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
