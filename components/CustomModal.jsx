import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CustomModal = ({ isOpen, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    createPortal(
      <>
        {isOpen && (
          <div className=" fixed top-0 left-0 bottom-0 cursor-not-allowed right-0 bg-gray-800/90   shadow-xl  z-50 ">
            <div className=" flex  justify-center h-full   ">{children}</div>
          </div>
        )}
      </>,
      document.getElementById("modal")
    )
  );
};

export default CustomModal;
