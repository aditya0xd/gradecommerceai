import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";
import { FOOTER_DATA, SOCIALS } from "./footer.constants";

const Footer = () => {
  return (
    <footer className="pt-20 px-6 pb-10 bg-bg border-t border-border relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-48 bg-primary-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Main Footer Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_0.85fr_0.85fr_1fr_1.3fr] gap-10 lg:gap-8 mb-16">
          
          {/* 1. Brand Column */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-4 text-text hover:opacity-90 transition-opacity w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-5 h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 46 12 L 18 28.5 L 18 71.5 L 46 88 L 46 74 L 30 64.7 L 30 35.3 L 46 26 Z"
                    fill="#990000"
                  />
                  <path
                    d="M 46 39.5 L 30.5 48.5 L 30.5 54 L 46 45 Z"
                    fill="#B20000"
                  />
                  <path d="M 46 51.5 L 35 58 L 46 64.5 Z" fill="#DC2626" />
                  <path
                    d="M 46 64.5 L 35 58 L 30 61 L 46 70.3 Z"
                    fill="#7F0000"
                  />
                  <path
                    d="M 46 12 L 46 26 L 30 35.3 L 18 28.5 Z"
                    fill="#DC2626"
                    opacity="0.85"
                  />
                  <path
                    d="M 46 88 L 18 71.5 L 30 64.7 L 46 74 Z"
                    fill="#5F0000"
                  />
                  <path
                    d="M 54 12 L 82 28.5 L 82 71.5 L 54 88 L 54 74 L 70 64.7 L 70 35.3 L 54 26 Z"
                    fill="#7F0000"
                  />
                  <path
                    d="M 54 12 L 54 26 L 70 35.3 L 82 28.5 Z"
                    fill="#DC2626"
                  />
                  <path
                    d="M 54 88 L 82 71.5 L 70 64.7 L 54 74 Z"
                    fill="#4F0000"
                  />
                </svg>
              </div>
              <span className="text-[20px] font-extrabold tracking-[-0.03em]">
                Grad Commerce AI
              </span>
            </Link>

            <p className="text-text2 text-[14px] leading-[1.7] mb-5 max-w-[340px]">
              {FOOTER_DATA.brand.desc}
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface2 border border-border text-[12px] text-text2 mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new projects</span>
            </div>

            {/* Social Icons in Brand Column */}
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-surface2 border border-border flex items-center justify-center text-text2 transition-all duration-200 hover:text-text hover:border-primary-700 hover:bg-primary-700/10 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Services Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] mb-4 text-text">
              {FOOTER_DATA.services.title}
            </h4>
            <div className="flex flex-col gap-1">
              {FOOTER_DATA.services.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[14px] text-text2 hover:text-text hover:translate-x-1 transition-all duration-200 py-1.5 inline-flex items-center group w-fit"
                >
                  <span className="transition-colors group-hover:text-primary-600">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Company Column */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] mb-4 text-text">
              {FOOTER_DATA.company.title}
            </h4>
            <div className="flex flex-col gap-1">
              {FOOTER_DATA.company.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[14px] text-text2 hover:text-text hover:translate-x-1 transition-all duration-200 py-1.5 inline-flex items-center group w-fit"
                >
                  <span className="transition-colors group-hover:text-primary-600">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Explore Column (Option 1 - On-Page Sections) */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] mb-4 text-text">
              {FOOTER_DATA.explore.title}
            </h4>
            <div className="flex flex-col gap-1">
              {FOOTER_DATA.explore.links.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => {
                    if (link.to.startsWith("/#")) {
                      const targetId = link.to.replace("/#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", `/#${targetId}`);
                      }
                    }
                  }}
                  className="text-[14px] text-text2 hover:text-text hover:translate-x-1 transition-all duration-200 py-1.5 inline-flex items-center group w-fit cursor-pointer"
                >
                  <span className="transition-colors group-hover:text-primary-600">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* 5. Headquarters / Contact Column (Option 2 - Contact Details) */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] mb-4 text-text">
              {FOOTER_DATA.contact.title}
            </h4>
            <div className="flex flex-col gap-3 text-[13px] text-text2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                <span className="leading-[1.6]">{FOOTER_DATA.contact.address}</span>
              </div>
              <a
                href={`mailto:${FOOTER_DATA.contact.email}`}
                className="flex items-center gap-2.5 hover:text-text transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary-600 shrink-0 group-hover:text-primary-500" />
                <span className="group-hover:text-primary-600 transition-colors break-all">
                  {FOOTER_DATA.contact.email}
                </span>
              </a>
              <a
                href={`tel:${FOOTER_DATA.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-text transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary-600 shrink-0 group-hover:text-primary-500" />
                <span className="group-hover:text-primary-600 transition-colors">
                  {FOOTER_DATA.contact.phone}
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary-600 shrink-0" />
                <span>{FOOTER_DATA.contact.hours}</span>
              </div>
            </div>

            {/* Quick Contact Link CTA */}
            <div className="mt-5 pt-4 border-t border-border/60">
              <a
                href="#contact"
                onClick={(e) => {
                  const element = document.getElementById("contact");
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#contact");
                  }
                }}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-600 hover:text-primary-500 transition-colors group cursor-pointer"
              >
                <span>Have questions? Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text2">
          <p>
            &copy; {new Date().getFullYear()} Grad Commerce AI. All rights reserved.
          </p>

          <p className="text-text2/70 text-[12px]">
            Engineered with precision for modern commerce & enterprise AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


