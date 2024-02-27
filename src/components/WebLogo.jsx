import React from "react";
import Image from "next/image";

const WebLogo = ({ className }) => {
  return (
    <div className={` ${className} `}>
      <Image alt="logo" src="/images/logo2.png" height={100} width={100} />
      <div className="flex flex-col items-center ">
        <h2 className="text-2xl font-bold text-white ">Dev Trendy</h2>
        <h2 className="-mt-1 text-sm font-medium text-appRed">Coders Choice</h2>
      </div>
    </div>
  );
};

export default WebLogo;
