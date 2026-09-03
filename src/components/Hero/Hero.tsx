import React, { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[120px] pb-[80px] px-6 overflow-hidden">
      {/* Mouse Glow Effect */}
      <div
        className="fixed w-125 h-125 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(158, 27, 27, .06) 0%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      {/* Background Animated Orbs */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-35 pointer-events-none bg-primary-700/30 -top-[100px] -right-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-35 pointer-events-none bg-cyan-500/20 -bottom-[50px] -left-[100px]"
      />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[800px] mx-auto mb-[60px]"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(38px,7vw,70px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 max-w-full text-text"
          >
            Build Software That<br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Shapes the Future
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-text2 text-[16px] max-w-[580px] mx-auto mb-10 leading-[1.7]"
          >
            We partner with ambitious companies to design, engineer, and scale digital products that drive real business outcomes.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold bg-gradient-to-br from-primary-700 to-accent-600 text-white border-none transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-700/20 hover:shadow-primary-700/40 no-underline"
            >
              Start Your Project <ArrowRight className="w-[18px] h-[18px]" />
            </a>
            
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold bg-transparent text-text border border-border2 cursor-pointer transition-all hover:-translate-y-0.5 hover:border-primary-700 hover:bg-primary-700/5"
            >
              <PlayCircle className="w-[18px] h-[18px]" /> View Our Work
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-[12px] text-text2 mb-5 font-medium uppercase tracking-[0.08em]">
            Trusted by industry leaders
          </p>
          <div className="flex items-center gap-9 flex-wrap justify-center">
            {['Quantum', 'Vertex AI', 'NovaPay', 'Helios', 'Stratos', 'Meridian'].map((logo, idx) => (
              <span 
                key={idx} 
                className="text-[17px] font-bold text-text2 opacity-35 transition-opacity duration-300 hover:opacity-65 tracking-[-0.02em]"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
