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
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
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
              href="https://www.figma.com/community/file/1128586699392676680"
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
