import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-light-gray h-screen p-6 sticky top-0 left-0 overflow-auto">
        <aside className="flex flex-col ">
          <NavLink
            className={
              "bg-gray p-2 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate"
            }
            to={"/admin"}
          >
            Dashboard
          </NavLink>
          <NavLink to={"/admin/add-service"}>Add Service</NavLink>
          <NavLink to={"/admin/service-list"}>Service list</NavLink>
          <NavLink to={"/"}>Home</NavLink>
        </aside>
      </div>
      <div className="col-span-10 h-[200vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
