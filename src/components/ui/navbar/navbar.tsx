import { motion } from "framer-motion";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import smoothieImage from "../../../assets/images/smoothie-logo.png";
import { cn } from "../../../lib/utils";
import styles from "./navbar.module.css";

export type NavbarLink = {
  name: string;
  path: string;
};

interface NavbarProps {
  links?: NavbarLink[];
}

const Navbar: FC<NavbarProps> = ({ links = [] }) => {
  return (
    <motion.nav
      className="container flex items-center justify-between py-8"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
    >
      <NavLink to="/">
        <img
          className="h-[38.16px] w-auto"
          src={smoothieImage}
          alt="Smoothie Logo"
        />
      </NavLink>
      {links.length > 0 && (
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
                    index == links.length - 1
                      ? "text-primary font-semibold"
                      : ""
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
      )}
    </motion.nav>
  );
};

export default Navbar;
