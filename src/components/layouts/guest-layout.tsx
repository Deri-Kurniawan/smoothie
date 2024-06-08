import React from "react";
import { useViewport } from "../../hooks/use-viewport";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar/navbar";

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const viewport = useViewport();

  return (
    <>
      {viewport.width < 1440 ? (
        <div className="container flex flex-col justify-center items-center min-h-screen w-full p-8 lg:p-0">
          <h1 className="text-4xl xl:text-5xl font-bold text-center max-w-xl font-poiret-one uppercase text-primary">
            Please use a bigger screen to view this page
          </h1>
          <p className="mt-4 max-w-lg text-center font-montserrat">
            At the moment, this page is only supported on screens with a width
            of 1440px or higher.
          </p>
        </div>
      ) : (
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default GuestLayout;
