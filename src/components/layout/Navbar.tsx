import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className="h-16 fixed w-full z-[999] bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <nav className="h-full w-full max-w-[1230px]  px-[20px] mx-auto flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <Button>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
