"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const HeaderMobileView = ({ title }) => {
  const navigation = useRouter();
  return (
    <div className="flex items-center px-2 py-2 lg:px-5 lg:py-5 gap-x-2 bg-appBlack">
      <BsArrowLeft
        className="text-2xl text-white cursor-pointer "
        onClick={() => navigation.back()}
      />
      <div className="flex items-center gap-x-4">
        <img src="/images/withoutBgLogo.png" className="w-12 h-12 lg:hidden " />
        <h2 className="font-medium text-white capitalize">{title}</h2>
      </div>
    </div>
  );
};

export default HeaderMobileView;
