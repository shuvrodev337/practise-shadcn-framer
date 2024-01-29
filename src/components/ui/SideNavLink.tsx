import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const SideNavLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate flex items-center",
          { " bg-dark-gray text-white": isActive }
        )
      }
      to={to}
    >
      {/* <Icon /> */}
      <span className="truncate">{children}</span>
    </NavLink>
  );
};

export default SideNavLink;
