"use client";
import React from "react";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const CustomLayout = ({ token, children }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-0 z-50 hidden lg:block">
        <CustomHeader token={token} />
      </div>
      <div className="sticky top-0 z-50 lg:hidden">
        {pathname === "/" && <CustomHeader token={token} />}
      </div>
      {children}
      <CustomFooter />
      <ToastContainer />
    </>
  );
};

export default CustomLayout;
