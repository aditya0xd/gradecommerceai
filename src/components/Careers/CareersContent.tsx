import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BENEFITS, JOBS, JOB_DEPARTMENTS } from "./careers.constants";

const CareersContent = () => {
  const [activeDept, setActiveDept] = useState("all");

  const filteredJobs =
    activeDept === "all" ? JOBS : JOBS.filter((j) => j.dept === activeDept);

  return (
    <section id="careers" className="py-[120px] px-6 bg-bg">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Briefcase className="w-3.5 h-3.5" /> Careers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Build Software That
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Shapes the Future
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-text2 text-[16px] max-w-[560px] mx-auto leading-[1.7]"
          >
            Join a senior-only team of makers, engineers, and creators building
            products that matter.
          </motion.p>
        </div>

        {/* Culture/Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="bg-surface border border-border rounded-2xl p-8 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-700/10 text-primary-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-[17px] font-bold mb-2 text-text">
                  {benefit.title}
                </h4>
                <p className="text-text2 text-[14px] leading-[1.6]">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Open Positions Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-text">
              Open Positions
            </h3>
            <p className="text-text2 text-[14px] mt-1">
              Discover your next challenge at GradCommerceAi
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {JOB_DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-medium border border-transparent cursor-pointer transition-all ${
                  activeDept === dept.id
                    ? "bg-primary-700 text-white"
                    : "bg-transparent text-text2 border-border hover:bg-surface hover:text-text hover:border-border2"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, i) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className="bg-surface border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-5 transition-all duration-300 hover:border-border2 hover:shadow-lg"
              >
                <div className="flex-1 min-w-[280px]">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-[18px] font-bold text-text">
                      {job.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-primary-600 bg-primary-700/10 px-2.5 py-1 rounded-md uppercase tracking-[0.02em]">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-text2 text-[14px] leading-[1.6] mb-3">
                    {job.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 text-text2 text-[13px]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {job.loc}
                    </span>
                    <span className="flex items-center gap-1.5 uppercase tracking-[0.02em] font-medium">
                      <Briefcase className="w-3.5 h-3.5" /> {job.dept}
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold bg-gradient-to-br from-primary-700 to-accent-600 text-white border-none transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-700/20 hover:shadow-primary-700/40"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersContent;
