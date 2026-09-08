import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "./services.constants";

const ServicesContent = () => {
  return (
    <section id="services" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Layers className="w-3.5 h-3.5" /> Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            End-to-End Digital
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Product Development
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-text2 text-[16px] max-w-[560px] mx-auto leading-[1.7]"
          >
            From concept to deployment, we deliver comprehensive software
            solutions tailored to your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 * i,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="bg-surface border border-border rounded-2xl p-8 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)] flex flex-col group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: service.bg, color: service.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold mb-2 text-text">
                  {service.title}
                </h3>
                <p className="text-text2 text-[14px] leading-[1.7] mb-4 flex-1">
                  {service.desc}
                </p>
                <Link
                  to="/#contact"
                  onClick={(e) => {
                    const el = document.getElementById("contact");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "/#contact");
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-text2 transition-all hover:gap-2.5 group-hover:text-primary-600"
                  style={{ color: service.color }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
