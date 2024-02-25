import React from "react";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomLayout = ({ children }) => {
  return (
    <>
      <CustomHeader />
      {children}
      <CustomFooter />
      <ToastContainer />
    </>
  );
};

export default CustomLayout;
