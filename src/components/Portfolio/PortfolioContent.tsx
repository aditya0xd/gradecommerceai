import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "./portfolio.constants";

const PortfolioContent = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPortfolio =
    activeTab === "all"
      ? PORTFOLIO
      : PORTFOLIO.filter((item) => item.cat.includes(activeTab));

  return (
    <section id="portfolio" className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Briefcase className="w-3.5 h-3.5" /> Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Projects That
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Speak for Themselves
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
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium border cursor-pointer transition-all ${
                activeTab === category.id
                  ? "bg-primary-700 text-white border-primary-700"
                  : "bg-transparent text-text2 border-border hover:bg-primary-700 hover:text-white hover:border-primary-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, i) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-surface2 group"
              >
                <img
                  src={`https://picsum.photos/seed/${item.img}/640/480.jpg`}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19f2] via-[#0B0F1980] to-transparent flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-[0.05em] mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-[17px] font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[13px] text-text2 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioContent;
