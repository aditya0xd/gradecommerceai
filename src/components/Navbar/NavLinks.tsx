
import { Link } from "react-router-dom";
import { navLinks } from "./navbar.constants";


const linkClassName =
  "relative text-text2 text-[14px] font-medium px-3.5 py-2 rounded-lg transition-all hover:text-text hover:bg-surface";

const NavLinks = () => {

  return (
    <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
      {navLinks.map((link) =>
        link && (
          <Link key={link.label} to={link.to} className={linkClassName}>
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
};

export default NavLinks;
