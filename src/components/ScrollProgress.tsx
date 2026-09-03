import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      role="progressbar"
      aria-label="Scroll progress"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-700 via-[#B91C1C] to-accent-600 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
