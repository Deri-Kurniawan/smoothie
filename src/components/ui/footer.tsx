import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

export type footerLink = {
  href: string;
  target: string;
  icon: JSX.Element;
};

interface FooterProps {
  links?: footerLink[];
}

const Footer: FC<FooterProps> = ({ links = [] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 1, type: "spring" }}
      className="container flex items-center justify-between py-6 font-medium"
    >
      <p>
        Build by{" "}
        <a
          className="transition-colors duration-300 ease-in-out text-primary"
          href="https://www.deri.my.id"
          target="_blank"
          rel="noreferrer"
        >
          Deri Kurniawan
        </a>{" "}
        | Design by{" "}
        <a
          className="transition-colors duration-300 ease-in-out text-primary"
          href="https://www.figma.com/@Nickelfox"
          target="_blank"
          rel="noreferrer"
        >
          Nickelfox Design
        </a>
      </p>
      {links.length > 0 && (
        <div className="flex gap-[20px]">
          {links.map((link, index) => (
            <a
              key={index}
              className={
                "text-accent hover:text-primary transition-colors duration-300 ease-in-out"
              }
              href={link.href}
              target={link.target}
              rel={link.target == "_blank" ? "noreferrer" : ""}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
