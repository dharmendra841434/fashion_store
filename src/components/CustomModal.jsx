import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CustomModal = ({ isOpen, children, className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    createPortal(
      <>
        {isOpen && (
          <div
            className={` fixed top-0 bottom-0 left-0 right-0 z-50 shadow-xl cursor-not-allowed  bg-gray-800/90 ${className} `}
          >
            <div className="flex justify-center h-full ">{children}</div>
          </div>
        )}
      </>,
      document.getElementById("modal")
    )
  );
};

export default CustomModal;
