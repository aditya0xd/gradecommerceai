import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-[3px] left-0 right-0 z-[1000] transition-all duration-300 border-b ${
          isScrolled ? "border-border" : "border-transparent"
        } bg-bg/75 backdrop-blur-[20px] backdrop-saturate-[180%]`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <NavBrand />
          <NavLinks />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-lg bg-transparent border border-border text-text2 cursor-pointer flex items-center justify-center hover:bg-surface"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
