import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const HeroContent = () => {
  return (
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
        Build Software That
        <br />
        <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
          Shapes the Future
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-text2 text-[16px] max-w-[580px] mx-auto mb-10 leading-[1.7]"
      >
        We partner with ambitious companies to design, engineer, and scale
        digital products that drive real business outcomes.
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

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold bg-transparent text-text border border-border2 cursor-pointer transition-all hover:-translate-y-0.5 hover:border-primary-700 hover:bg-primary-700/5 no-underline"
        >
          <PlayCircle className="w-[18px] h-[18px]" /> View Our Work
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
