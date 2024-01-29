import { LayoutDashboardIcon } from "lucide-react";
import { Outlet } from "react-router-dom";
import SideNavLink from "../ui/SideNavLink";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-light-gray h-screen p-4 md:p-5 sticky top-0 left-0 overflow-auto">
        <aside className="flex flex-col gap-2">
          <SideNavLink to={"/admin/dashboard"}>Dashboard</SideNavLink>
          <SideNavLink to={"/admin/add-service"}>Add Service</SideNavLink>
          <SideNavLink to={"/admin/service-list"}>Service list</SideNavLink>
          <SideNavLink to={"/"}>Home</SideNavLink>
        </aside>
      </div>
      <div className="col-span-10 h-full px-5 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

// <NavLink
//         className={
//           "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate flex items-center"
//         }
//         to={"/admin"}
//       >
//         <LayoutDashboardIcon />
//         Dashboard
//       </NavLink>
