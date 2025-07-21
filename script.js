// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // Navbar height
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    navLinks.classList.remove('show');
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Tarot card game functionality
const tarotCards = [
  "The Star - Hope and inspiration are guiding your path",
  "The Sun - Success and positivity are coming your way",
  "The Moon - Trust your intuition and inner wisdom"
];

document.querySelectorAll('.tarot-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    card.textContent = tarotCards[index];
    card.classList.add('revealed');
  });
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  testimonials.forEach((slide) => {
    slide.style.display = 'none';
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  testimonials[index].style.display = 'flex';
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-advance slides
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 5000);

// Initialize first slide
showSlide(0);

// Horoscope functionality
const horoscopeText = document.getElementById('horoscope-text');
const zodiacSelect = document.getElementById('zodiac-select');

const horoscopes = {
  aries: "Today's energies align perfectly for new beginnings. Trust your instincts.",
  taurus: "Focus on material security and comfort. A pleasant surprise awaits.",
  gemini: "Communication flows easily today. Share your ideas freely."
  // Add more horoscopes
};

zodiacSelect?.addEventListener('change', (e) => {
  const sign = e.target.value;
  if (sign && horoscopes[sign]) {
    horoscopeText.textContent = horoscopes[sign];
    horoscopeText.style.animation = 'none';
    horoscopeText.offsetHeight; // Trigger reflow
    horoscopeText.style.animation = 'fadeIn 0.6s ease-out forwards';
  }
});

// Enhance scroll animations with intersection observer
const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .contact-form, .social-link');
animatedElements.forEach(element => {
  observer.observe(element);
});

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Add your form submission logic here
  console.log('Form submitted:', data);
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  e.target.reset();
});
