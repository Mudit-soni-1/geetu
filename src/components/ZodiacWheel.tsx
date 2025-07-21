import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ZodiacWheel = () => {
  const [randomStars, setRandomStars] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const stars = Array.from({ length: 12 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setRandomStars(stars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: '150vh',
          height: '150vh',
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            viewBox="0 0 800 800"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="subtleGlow">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.05)" />
                <stop offset="100%" stopColor="rgba(253, 224, 71, 0.05)" />
              </linearGradient>

              <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(253, 224, 71, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </linearGradient>
            </defs>

            <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(147, 51, 234, 0.02)" strokeWidth="1"/>
            <circle cx="400" cy="400" r="300" fill="none" stroke="url(#wheelGradient)" strokeWidth="15" strokeDasharray="10 30" filter="url(#subtleGlow)"/>
            <circle cx="400" cy="400" r="200" fill="none" stroke="url(#wheelGradient)" strokeWidth="20" filter="url(#subtleGlow)"/>

            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x = 400 + Math.cos(angle) * 200;
              const y = 400 + Math.sin(angle) * 200;
              const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
              
              return (
                <g key={i}>
                  <text x={x} y={y} fontSize="32" fill="rgba(253, 224, 71, 0.1)" textAnchor="middle" dominantBaseline="middle" filter="url(#subtleGlow)" style={{ fontWeight: 'bold' }}>
                    {symbols[i]}
                  </text>
                  <text x={x} y={y} fontSize="28" fill="url(#symbolGradient)" textAnchor="middle" dominantBaseline="middle" filter="url(#subtleGlow)" style={{ fontWeight: 'bold' }}>
                    {symbols[i]}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {randomStars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full"
            style={{ 
              left: `${star.x}%`, 
              top: `${star.y}%`,
              //filter: 'blur(1px)',
              opacity: 0.15
            }}
            animate={{
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ZodiacWheel;