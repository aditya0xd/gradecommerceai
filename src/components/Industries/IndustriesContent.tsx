import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { INDUSTRIES } from "./industries.constants";

const IndustriesContent = () => {
  return (
    <section id="industries" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Building className="w-3.5 h-3.5" /> Industries
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Domain Expertise
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Across Industries
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + (i * 0.05), ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center gap-3 py-3.5 px-4.5 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-accent-600 hover:bg-accent-600/5 cursor-default"
              >
                <div className="w-9.5 h-9.5 rounded-lg flex items-center justify-center shrink-0 bg-accent-600/10 text-accent-600">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="font-semibold text-[14px] text-text">
                  {ind.n}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesContent;
