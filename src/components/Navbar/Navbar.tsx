import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, ChevronDown, Globe, Smartphone, Cloud, Brain, Palette, Container, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.body.classList.add('light');
    }
  };

  return (
    <>
      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'border-border' : 'border-transparent'
          } ${isDark ? 'bg-[#0B0F19]/75' : 'bg-white/75'} backdrop-blur-[20px] backdrop-saturate-[180%]`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 no-underline text-text">
            <div className="w-8 h-8 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center">
              <img src="favicon.svg" alt="Logo" className="h-10" />
            </div>
            <span className="text-[20px] font-extrabold tracking-[-0.03em]">Grad Commerce AI</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            <a href="#hero" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface">Home</a>

            <div className="relative group">
              <a href="#services" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface flex items-center gap-1">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 bg-surface border border-border rounded-2xl p-5 min-w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 shadow-2xl grid grid-cols-3 gap-1.5">
                {[
                  { icon: Globe, title: 'Web Development', desc: 'Scalable web apps' },
                  { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android' },
                  { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS, Azure, GCP' },
                  { icon: Brain, title: 'AI & ML', desc: 'Intelligent systems' },
                  { icon: Palette, title: 'UI/UX Design', desc: 'User-centered' },
                  { icon: Container, title: 'DevOps', desc: 'CI/CD pipeline' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl transition-colors hover:bg-surface2 cursor-pointer">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-primary-700/10 text-primary-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-text">{item.title}</p>
                      <p className="text-[11px] text-text2 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#solutions" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface">Solutions</a>
            <a href="#portfolio" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface">Portfolio</a>
            <a href="#blog" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface">Blog</a>
            <a href="#careers" className="relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface">Careers</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-transparent border border-border text-text2 cursor-pointer flex items-center justify-center transition-all hover:text-text hover:border-text2 hover:bg-surface" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button onClick={toggleTheme} className="w-9 h-9 rounded-lg bg-transparent border border-border text-text2 cursor-pointer flex items-center justify-center transition-all hover:text-text hover:border-text2 hover:bg-surface" aria-label="Toggle theme">
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold bg-gradient-to-br from-primary-700 to-accent-600 text-white border-none transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-700/20 hover:shadow-primary-700/40">
              Get Started
            </a>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden w-9 h-9 rounded-lg bg-transparent border border-border text-text2 cursor-pointer flex items-center justify-center hover:bg-surface" aria-label="Menu">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[999] bg-bg transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-6 pt-20 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 bg-transparent border-none text-text cursor-pointer" aria-label="Close">
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col gap-1">
          {['Home', 'Services', 'Solutions', 'Portfolio', 'Blog', 'Careers', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-[18px] py-3.5 border-b border-border text-text2 hover:text-text font-medium">
              {item}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex w-full justify-center items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold bg-grad text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(158,27,27,0.4)]">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
