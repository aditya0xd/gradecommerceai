import { serviceLinks } from "./navbar.constants";

type ServicesMegaMenuProps = {
  isOpen: boolean;
};

const ServicesMegaMenu = ({ isOpen }: ServicesMegaMenuProps) => {
  return (
    <div
      style={{ zIndex: 1001 }}
      className={`absolute top-full left-1/2 -translate-x-1/2 bg-surface border border-border rounded-2xl p-5 min-w-[520px] transition-all duration-250 shadow-2xl grid grid-cols-3 gap-1.5 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-2 opacity-0"
      }`}
    >
      {serviceLinks.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-2.5 p-2.5 rounded-xl transition-colors hover:bg-surface2 cursor-pointer"
        >
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
  );
};

export default ServicesMegaMenu;
