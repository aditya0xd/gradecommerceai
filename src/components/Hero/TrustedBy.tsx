import { motion } from "framer-motion";

const logos = ["Quantum", "Vertex AI", "NovaPay", "Helios", "Stratos", "Meridian"];

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="mt-14 text-center"
    >
      <p className="text-[12px] text-text2 mb-5 font-medium uppercase tracking-[0.08em]">
        Trusted by industry leaders
      </p>
      <div className="flex items-center gap-9 flex-wrap justify-center">
        {logos.map((logo, idx) => (
          <span
            key={idx}
            className="text-[17px] font-bold text-text2 opacity-35 transition-opacity duration-300 hover:opacity-65 tracking-[-0.02em]"
          >
            {logo}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TrustedBy;
