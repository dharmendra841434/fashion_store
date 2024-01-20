import React from "react";
import Image from "next/image";

const WebLogo = ({ className }) => {
  return (
    <div className={` ${className} `}>
      <Image src="/images/logo2.png" height={100} width={100} />
      <div className=" flex flex-col items-center">
        <h2 className=" font-bold text-2xl text-white">Dev Trendy</h2>
        <h2 className=" text-appRed font-medium text-sm -mt-1">
          Coders Choice
        </h2>
      </div>
    </div>
  );
};

export default WebLogo;
