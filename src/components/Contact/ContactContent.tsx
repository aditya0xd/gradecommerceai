import { motion } from "framer-motion";
import { Send, ArrowRight, MapPin, Mail, Phone, Clock, Calendar, Loader2 } from "lucide-react";
import { OFFICES } from "./contact.constants";
import { useState } from "react";

const ContactContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-[120px] px-6 bg-surface">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <Send className="w-3.5 h-3.5" /> Contact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            Let's Build Something
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Remarkable Together
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-text2 text-[16px] mt-4 max-w-[560px] mx-auto leading-[1.7]"
          >
            Tell us about your project and we'll respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="bg-surface border border-border rounded-2xl p-9 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3 bg-surface2 border rounded-xl text-text text-[14px] outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)] ${
                      errors.name ? "border-accent-600 focus:border-accent-600" : "border-border focus:border-primary-600"
                    }`}
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && (
                    <p className="text-accent-600 text-[12px] mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className={`w-full p-3 bg-surface2 border rounded-xl text-text text-[14px] outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)] ${
                      errors.email ? "border-accent-600 focus:border-accent-600" : "border-border focus:border-primary-600"
                    }`}
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-accent-600 text-[12px] mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-surface2 border border-border rounded-xl text-text text-[14px] outline-none transition-all duration-200 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)]"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                    Service
                  </label>
                  <select
                    className="w-full p-3 bg-surface2 border border-border rounded-xl text-text text-[14px] outline-none transition-all duration-200 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)] cursor-pointer appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software">Custom Software</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                    Budget
                  </label>
                  <select
                    className="w-full p-3 bg-surface2 border border-border rounded-xl text-text text-[14px] outline-none transition-all duration-200 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)] cursor-pointer appearance-none"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="$10K-$25K">$10K-$25K</option>
                    <option value="$25K-$75K">$25K-$75K</option>
                    <option value="$75K-$150K">$75K-$150K</option>
                    <option value="$150K+">$150K+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[13px] font-semibold mb-1.5 text-text2">
                  Project Details *
                </label>
                <textarea
                  className={`w-full p-3 bg-surface2 border rounded-xl text-text text-[14px] outline-none transition-all duration-200 resize-y min-h-[100px] focus:shadow-[0_0_0_3px_rgba(158,27,27,0.15)] ${
                    errors.message ? "border-accent-600 focus:border-accent-600" : "border-border focus:border-primary-600"
                  }`}
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && (
                  <p className="text-accent-600 text-[12px] mt-1">{errors.message}</p>
                )}
              </div>

              {!isSuccess ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl text-[15px] font-semibold bg-gradient-to-br from-primary-700 to-accent-600 text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(158,27,27,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-[18px] h-[18px] animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-[18px] h-[18px]" />
                    </>
                  )}
                </button>
              ) : (
                <div className="text-center p-5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl mt-4">
                  <p className="font-semibold text-[#10B981]">Message sent successfully!</p>
                  <p className="text-[13px] text-text2 mt-1">We'll respond within 24 hours.</p>
                </div>
              )}
            </form>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="bg-surface border border-border rounded-2xl p-7 mb-5 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]"
            >
              <h3 className="text-[16px] font-bold mb-5 text-text">Our Offices</h3>
              <div className="flex flex-col gap-5">
                {OFFICES.map((office, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <MapPin className="w-[18px] h-[18px] text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[14px] text-text">{office.city}</p>
                      <p className="text-text2 text-[13px]">{office.addr}</p>
                      <p className="text-text2 text-[13px]">{office.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="bg-surface border border-border rounded-2xl p-7 mb-5 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]"
            >
              <h3 className="text-[16px] font-bold mb-4 text-text">Quick Contact</h3>
              <div className="flex flex-col gap-3.5">
                <a
                  href="mailto:hello@gradcommerceai.com"
                  className="flex items-center gap-3 text-text2 text-[14px] transition-colors duration-200 hover:text-text group"
                >
                  <Mail className="w-[18px] h-[18px] text-primary-600 transition-colors group-hover:text-primary-400" />
                  hello@gradcommerceai.com
                </a>
                <a
                  href="tel:+918143676779"
                  className="flex items-center gap-3 text-text2 text-[14px] transition-colors duration-200 hover:text-text group"
                >
                  <Phone className="w-[18px] h-[18px] text-primary-600 transition-colors group-hover:text-primary-400" />
                  +91 8143676779
                </a>
                <div className="flex items-center gap-3 text-text2 text-[14px]">
                  <Clock className="w-[18px] h-[18px] text-primary-600" />
                  Mon-Fri, 9AM-6PM
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="bg-surface border border-border rounded-2xl p-7 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]"
            >
              <h3 className="text-[16px] font-bold mb-4 text-text">Schedule a Call</h3>
              <p className="text-text2 text-[14px] mb-4">
                Book a 30-minute discovery call with our team.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 w-full p-3 rounded-xl text-[13px] font-semibold bg-transparent text-text border border-border2 transition-all duration-300 hover:border-primary-600 hover:bg-primary-700/5 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" /> Book on Calendly
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
