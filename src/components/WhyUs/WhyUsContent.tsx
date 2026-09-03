import { motion, useInView, animate } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { WHY_ITEMS, WHY_STATS } from "./whyus.constants";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const WhyUsContent = () => {
  return (
    <section id="why-us" className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
            >
              <Award className="w-3.5 h-3.5" /> Why GradCommerceAi
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
            >
              Engineering Excellence
              <br />
              <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
                Meets Business Vision
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-text2 text-[16px] mb-9 leading-[1.7]"
            >
              We architect solutions that scale, perform, and deliver measurable impact.
            </motion.p>
            
            <div className="flex flex-col gap-5.5">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + (i * 0.1), ease: [0.4, 0, 0.2, 1] }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center shrink-0 text-[#10B981]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-text">{item.title}</h4>
                    <p className="text-text2 text-[14px] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {WHY_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + (i * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="bg-surface border border-border rounded-2xl p-8 text-center transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]"
              >
                <div className={`text-[40px] font-extrabold tracking-[-0.03em] ${stat.cls}`}>
                  {typeof stat.val === 'number' ? (
                    <AnimatedNumber value={stat.val} />
                  ) : (
                    stat.val
                  )}
                  {stat.suffix}
                </div>
                <div className="text-[13px] text-text2 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsContent;
