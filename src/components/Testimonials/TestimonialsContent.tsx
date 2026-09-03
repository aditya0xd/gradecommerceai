import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { TESTIMONIALS } from "./testimonials.constants";
import { useState, useEffect } from "react";

const TestimonialsContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-[120px] px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold bg-primary-700/10 text-primary-600 border border-primary-700/15 mb-5 tracking-[0.02em]"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-text"
          >
            What Our Clients
            <br />
            <span className="bg-gradient-to-br from-primary-700 via-[#B91C1C] to-accent-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden max-w-[700px] mx-auto"
        >
          <div 
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TESTIMONIALS.map((r, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-surface border border-border rounded-2xl p-9 transition-all duration-400 hover:border-border2 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(158,27,27,0.15)]">
                  <div className="flex gap-1 mb-4.5 text-[#FBBF24]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[16px] leading-[1.8] mb-5.5 text-text">
                    {r.text}
                  </p>
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={`https://picsum.photos/seed/${r.img}/80/80.jpg`} 
                      alt={r.name} 
                      className="w-11 h-11 rounded-xl object-cover" 
                      loading="lazy" 
                    />
                    <div>
                      <p className="font-bold text-[14px]">{r.name}</p>
                      <p className="text-[13px] text-text2">{r.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                  i === currentSlide ? "bg-primary-600 scale-125" : "bg-border2 hover:bg-primary-600/50"
                }`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsContent;
