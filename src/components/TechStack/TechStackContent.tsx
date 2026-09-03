import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { TECH } from "./techstack.constants";

const TechStackContent = () => {
  return (
    <section id="technologies" className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Cpu className="w-3.5 h-3.5" /> Tech Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Technologies We
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Master & Deliver
            </span>
          </motion.h2>
        </div>

        <div>
          {Object.entries(TECH).map(([category, items], catIndex) => (
            <div key={category} className={catIndex < 2 ? "mb-9" : ""}>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-[12px] font-semibold text-text2 uppercase tracking-[0.08em] mb-3.5"
              >
                {category}
              </motion.p>
              <div className="flex flex-wrap gap-2.5">
                {items.map((tech, itemIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.n}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 + (itemIndex * 0.05), ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center gap-2.5 py-3 px-4.5 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-primary-600 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)] cursor-default"
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: tech.c }} />
                      <span className="font-semibold text-[14px] text-text">
                        {tech.n}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackContent;
