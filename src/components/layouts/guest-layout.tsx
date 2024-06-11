import {
  IconBrandFigma,
  IconBrandGithub,
  IconGlobe,
} from "@irsyadadl/paranoid";
import React from "react";
import { useViewport } from "../../hooks/use-viewport";
import Footer, { footerLink } from "../ui/footer";
import Navbar, { NavbarLink } from "../ui/navbar/navbar";

const navbarLinks: NavbarLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Specialties",
    path: "/specialties",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const footerLinks: footerLink[] = [
  {
    href: "https://www.figma.com/community/file/1128586699392676680",
    target: "_blank",
    icon: <IconBrandFigma />,
  },
  {
    href: "https://github.com/Deri-Kurniawan/smoothie",
    target: "_blank",
    icon: <IconBrandGithub />,
  },
  {
    href: "https://www.deri.my.id",
    target: "_blank",
    icon: <IconGlobe />,
  },
];

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const viewport = useViewport();

  return (
    <>
      {viewport.width < 1440 ? (
        <div className="container flex flex-col items-center justify-center w-full min-h-screen p-8 lg:p-0">
          <h1 className="max-w-xl text-4xl font-bold text-center uppercase xl:text-5xl font-poiret-one text-primary">
            Please use a bigger screen to view this page
          </h1>
          <p className="max-w-lg mt-4 text-center font-montserrat">
            At the moment, this page is only supported on screens with a width
            of 1440px or higher.
          </p>
        </div>
      ) : (
        <div className="max-w-[1440px] mx-auto">
          <Navbar links={navbarLinks} />
          <main>{children}</main>
          <Footer links={footerLinks} />
        </div>
      )}
    </>
  );
};

export default GuestLayout;
