import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { mobileNavLinks } from "./navbar.constants";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[999] bg-bg text-text overflow-y-auto md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-lg border border-border bg-surface text-text2 cursor-pointer flex items-center justify-center transition-colors hover:text-text hover:border-border2"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="px-6 pt-20 pb-8 flex flex-col gap-1">
        {mobileNavLinks.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={onClose}
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
