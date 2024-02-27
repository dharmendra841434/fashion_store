import React from "react";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomLayout = ({ token, children }) => {
  return (
    <>
      <CustomHeader token={token} />
      {children}
      <CustomFooter />
      <ToastContainer />
    </>
  );
};

export default CustomLayout;
