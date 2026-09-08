import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { mobileNavLinks } from "./navbar.constants";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    onClose();
    if (to.startsWith("/#")) {
      const targetId = to.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", to);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[2000] bg-bg text-text overflow-y-auto md:hidden flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between px-6 h-16 border-b border-border">
        <span className="font-extrabold text-[18px] tracking-[-0.03em] text-text">
          Grad Commerce AI
        </span>
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-lg border border-border bg-surface text-text2 cursor-pointer flex items-center justify-center transition-colors hover:text-text hover:border-border2"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6 pt-4 pb-8 flex flex-col gap-1">
        {mobileNavLinks.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={(e) => handleLinkClick(e, item.to)}
            className="block text-[18px] py-3.5 border-b border-border text-text2 hover:text-text font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
