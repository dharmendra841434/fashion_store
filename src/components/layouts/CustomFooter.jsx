"use client";

import React from "react";
import { GiPhone } from "react-icons/gi";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  categoriesMenu,
  infoMenu,
  serviceMenu,
} from "@/usefullData/MenuOptions";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";
import { BiSolidCreditCard } from "react-icons/bi";
import { SiAmericanexpress } from "react-icons/si";
import WebLogo from "../WebLogo";

const CustomFooter = () => {
  return (
    <div>
      <div className="px-2 py-12 border-t-2 bg-appBlack border-appRed">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 px-3 lg:grid-cols-4 lg:gap-x-4">
            <div className="">
              <WebLogo className="flex flex-col items-start justify-start w-full -mt-9 " />
              {/* <h1 className="text-lg font-bold text-white ">ABOUT US</h1>
              <p className="mt-5 text-sm text-appGray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p> */}
              <div className="">
                <div className="flex items-center my-4 cursor-pointer group">
                  <GiPhone className="-rotate-90 text-appRed" />
                  <p className="mx-1 text-sm transition-all duration-300 ease-in-out text-appGray group-hover:text-appRed">
                    +918758745783
                  </p>
                </div>
                <div className="flex items-center my-4 cursor-pointer group">
                  <MdOutlineEmail className=" text-appRed" />
                  <p className="mx-1 text-sm transition-all duration-300 ease-in-out text-appGray group-hover:text-appRed">
                    dhk@gmail.com
                  </p>
                </div>
                <div className="flex items-center my-4 cursor-pointer group">
                  <MdLocationOn className=" text-appRed" />
                  <p className="mx-1 text-sm transition-all duration-300 ease-in-out text-appGray group-hover:text-appRed">
                    Jamo Bazar, Siwan
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white ">CATEGORIES</h1>
              <div className="mt-5 ">
                {categoriesMenu?.map((item, index) => (
                  <div key={index} className="my-3 cursor-pointer ">
                    <h2 className="text-sm transition-all duration-300 ease-in-out text-appGray hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white ">INFORMATION</h1>
              <div className="mt-5 ">
                {infoMenu?.map((item, index) => (
                  <div key={index} className="my-3 cursor-pointer ">
                    <h2 className="text-sm transition-all duration-300 ease-in-out text-appGray hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white ">SERVICE</h1>
              <div className="mt-5 ">
                {serviceMenu?.map((item, index) => (
                  <div key={index} className="my-3 cursor-pointer ">
                    <h2 className="text-sm transition-all duration-300 ease-in-out text-appGray hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-secoundryBlack">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center my-5 opacity-25 gap-x-2">
              <FaCcVisa className="text-5xl " />
              <BiSolidCreditCard className=" text-[3.5rem]" />
              <FaCcPaypal className="text-5xl " />
              <FaCcMastercard className="text-5xl " />
              <FaCcDiscover className="text-5xl " />
              <SiAmericanexpress className="text-4xl " />
            </div>
            <span className=" text-appGray text-[12px]">
              Copyright ©2023 All rights reserved by Dev-Trendy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
