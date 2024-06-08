import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import smoothieImage from "../../../assets/images/smoothie-logo.png";
import { cn } from "../../../lib/utils";
import { links } from "./data";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <motion.nav
      className="container flex justify-between items-center py-8"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/">
        <img
          className="h-[38.16px] w-auto"
          src={smoothieImage}
          alt="Smoothie Logo"
        />
      </NavLink>
      <ul className="flex gap-[42px]">
        {links.map((link, index) => (
          <li className="relative" key={link.name}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "font-quicksand text-base font-medium leading-[150%] text-accent",
                  isActive
                    ? [styles["link-active"], "font-semibold"].join(" ")
                    : "",
                  index == links.length - 1 ? "text-primary font-semibold" : ""
                )
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
            <motion.span
              className={styles["link-underline"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
