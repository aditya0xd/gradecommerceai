import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FOOTER_DATA, SOCIALS } from "./footer.constants";

const Footer = () => {
  return (
    <footer className="pt-20 px-6 pb-8 bg-bg border-t border-border">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4 text-text hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
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
            <p className="text-text2 text-[14px] leading-[1.7] mb-5 max-w-[320px]">
              {FOOTER_DATA.brand.desc}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3.5 py-2.5 bg-surface2 border border-border rounded-lg text-text text-[13px] outline-none transition-colors focus:border-primary-700 placeholder:text-text2"
              />
              <button
                aria-label="Subscribe"
                className="flex-shrink-0 px-4 py-2.5 bg-gradient-to-br from-primary-700 to-accent-600 text-white rounded-lg transition-transform hover:-translate-y-0.5"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 text-text">
              {FOOTER_DATA.services.title}
            </h4>
            <div className="flex flex-col gap-1.5">
              {FOOTER_DATA.services.links.map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[14px] text-text2 hover:text-text transition-colors py-1 block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 text-text">
              {FOOTER_DATA.resources.title}
            </h4>
            <div className="flex flex-col gap-1.5">
              {FOOTER_DATA.resources.links.map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[14px] text-text2 hover:text-text transition-colors py-1 block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal/Company Column */}
          <div>
            <h4 className="text-[14px] font-bold mb-4 text-text">
              {FOOTER_DATA.company.title}
            </h4>
            <div className="flex flex-col gap-1.5">
              {FOOTER_DATA.company.links.map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[14px] text-text2 hover:text-text transition-colors py-1 block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-text2 text-[13px]">
            &copy; {new Date().getFullYear()} GradCommerceAi. All rights reserved.
          </p>
          
          <div className="flex gap-5">
            <Link to="/privacy" className="text-text2 hover:text-text text-[13px] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text2 hover:text-text text-[13px] transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-text2 hover:text-text text-[13px] transition-colors">
              Cookies
            </Link>
          </div>

          <div className="flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text2 transition-all hover:border-primary-700 hover:text-primary-600"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
