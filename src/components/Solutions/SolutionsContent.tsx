import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target } from "lucide-react";
import { SOLUTIONS, tabNames, type SolutionsData } from "./solutions.constants";

const SolutionsContent = () => {
  const [activeTab, setActiveTab] = useState<keyof SolutionsData>("all");

  return (
    <section id="solutions" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Target className="w-3.5 h-3.5" /> Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Tailored Solutions for
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Every Business Stage
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="flex gap-2 justify-center mb-12 flex-wrap"
        >
          {(Object.keys(tabNames) as Array<keyof SolutionsData>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-medium border border-transparent cursor-pointer transition-all ${
                activeTab === key
                  ? "bg-primary-700 text-white"
                  : "bg-transparent text-text2 hover:bg-surface2 hover:text-text"
              }`}
            >
              {tabNames[key]}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {SOLUTIONS[activeTab].map((solution, i) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={`${activeTab}-${solution.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="bg-surface border border-border rounded-2xl p-8 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-border2 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: solution.bg, color: solution.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-text">
                    {solution.title}
                  </h3>
                  <p className="text-text2 text-[14px] leading-[1.7]">
                    {solution.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SolutionsContent;
