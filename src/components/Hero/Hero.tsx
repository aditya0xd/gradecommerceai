import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import TrustedBy from "./TrustedBy";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[120px] pb-[80px] px-6 overflow-hidden"
    >
      {/* Mouse Glow Effect — zIndex: -1 prevents fixed+transform from escaping navbar stacking context */}
      <div
        className="fixed w-125 h-125 rounded-full pointer-events-none"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(circle, rgba(158, 27, 27, .06) 0%, transparent 70%)",
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      {/* Background Animated Orbs — initial prop + zIndex: -1 stops Framer Motion will-change:transform from creating competing compositing layers */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: -1 }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-35 pointer-events-none bg-primary-700/30 -top-[100px] -right-[100px]"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: -1 }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-35 pointer-events-none bg-cyan-500/20 -bottom-[50px] -left-[100px]"
      />

      {/* Content — zIndex: 1 keeps it above orbs but well below navbar (z-1000) */}
      <div className="max-w-[1280px] mx-auto w-full relative" style={{ zIndex: 1 }}>
        <HeroContent />
        <TrustedBy />
      </div>
    </section>
  );
};

export default Hero;
