import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./navbar.constants";
import ServicesMegaMenu from "./ServicesMegaMenu";

const linkClassName =
  "relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface";

const NavLinks = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
      {navLinks.map((link) =>
        link.hasMegaMenu ? (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocus={() => setIsServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsServicesOpen(false);
              }
            }}
          >
            <Link
              to={link.to}
              className={`${linkClassName} flex items-center gap-1`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              {link.label} <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <ServicesMegaMenu isOpen={isServicesOpen} />
          </div>
        ) : (
          <Link key={link.label} to={link.to} className={linkClassName}>
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
};

export default NavLinks;
