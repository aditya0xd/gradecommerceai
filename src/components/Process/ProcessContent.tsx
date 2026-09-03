import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import { PROCESS } from "./process.constants";

const ProcessContent = () => {
  return (
    <section id="process" className="py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <GitBranch className="w-3.5 h-3.5" /> Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            From Idea to
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Production in 7 Steps
            </span>
          </motion.h2>
        </div>

        <div className="relative pl-10 before:content-[''] before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-600 before:to-accent-600">
          {PROCESS.map((p, i) => {
            const isEarly = i < 2;
            const isMid = i >= 2 && i < 4;
            const clr = isEarly ? "text-primary-600" : isMid ? "text-accent-600" : "text-[#10B981]";
            const bg = isEarly ? "bg-primary-700/10" : isMid ? "bg-accent-600/10" : "bg-[#10B981]/10";

            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + (i * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="relative mb-9 last:mb-0 group"
              >
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-bg border-[3px] border-primary-600 z-10 transition-all duration-300 group-hover:bg-primary-600 group-hover:shadow-[0_0_20px_rgba(158,27,27,0.4)]" />
                <div className="bg-surface border border-border rounded-2xl p-[22px] transition-all duration-400 group-hover:border-border2 group-hover:-translate-y-1 group-hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`text-[12px] font-bold px-2.5 py-0.5 rounded-md ${clr} ${bg}`}>
                      {p.n}
                    </span>
                    <h3 className="text-[16px] font-bold text-text">{p.title}</h3>
                  </div>
                  <p className="text-text2 text-[14px] leading-[1.7]">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessContent;
