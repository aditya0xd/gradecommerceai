import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Link to="/" className="flex items-center gap-2.5 no-underline text-text">
      <div className="w-8 h-8 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center">
        <img src="favicon.svg" alt="Logo" className="h-10" />
      </div>
      <span className="text-[20px] font-extrabold tracking-[-0.03em]">
        Grad Commerce AI
      </span>
    </Link>
  );
};

export default NavBrand;
