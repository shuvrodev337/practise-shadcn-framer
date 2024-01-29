import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About/About";
import AddService from "@/pages/Admin/AddService";
import Dashboard from "@/pages/Admin/Dashboard";
import ServiceList from "@/pages/Admin/ServiceList";
import Home from "@/pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/dashboard"}></Navigate>, // to avoid activeLink at '/admin' all the time.
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
    ],
  },
]);

export default router;
