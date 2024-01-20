import React from "react";
import { GiPhone } from "react-icons/gi";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  categoriesMenu,
  infoMenu,
  serviceMenu,
} from "../../public/usefullData/MenuOptions";
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
      <div className=" bg-appBlack border-t-2 border-appRed py-12 px-2">
        <div className=" max-w-7xl mx-auto">
          <div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-x-4 px-3">
            <div className=" ">
              <WebLogo className="flex flex-col justify-start items-start w-full -mt-9 " />
              {/* <h1 className=" font-bold  text-white text-lg">ABOUT US</h1>
              <p className=" text-appGray text-sm mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p> */}
              <div className="  ">
                <div className=" flex items-center cursor-pointer group my-4 ">
                  <GiPhone className=" -rotate-90 text-appRed" />
                  <p className=" text-appGray text-sm mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                    +918758745783
                  </p>
                </div>
                <div className=" flex items-center cursor-pointer group my-4">
                  <MdOutlineEmail className="  text-appRed" />
                  <p className=" text-appGray text-sm mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                    dhk@gmail.com
                  </p>
                </div>
                <div className=" flex items-center cursor-pointer group my-4">
                  <MdLocationOn className=" text-appRed" />
                  <p className=" text-appGray text-sm mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                    Jamo Bazar, Siwan
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" font-bold  text-white text-lg">CATEGORIES</h1>
              <div className=" mt-5">
                {categoriesMenu?.map((item, index) => (
                  <div key={index} className=" my-3 cursor-pointer">
                    <h2 className=" text-appGray text-sm transition-all duration-300 ease-in-out hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className=" font-bold  text-white text-lg">INFORMATION</h1>
              <div className=" mt-5">
                {infoMenu?.map((item, index) => (
                  <div key={index} className=" my-3 cursor-pointer">
                    <h2 className=" text-appGray text-sm transition-all duration-300 ease-in-out hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className=" font-bold  text-white text-lg">SERVICE</h1>
              <div className=" mt-5">
                {serviceMenu?.map((item, index) => (
                  <div key={index} className=" my-3 cursor-pointer">
                    <h2 className=" text-appGray text-sm transition-all duration-300 ease-in-out hover:text-appRed">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-secoundryBlack py-3">
        <div className=" max-w-7xl mx-auto ">
          <div className=" flex flex-col items-center justify-center">
            <div className=" flex items-center gap-x-2 opacity-25 my-5">
              <FaCcVisa className=" text-5xl" />
              <BiSolidCreditCard className=" text-[3.5rem]" />
              <FaCcPaypal className=" text-5xl" />
              <FaCcMastercard className=" text-5xl" />
              <FaCcDiscover className=" text-5xl" />
              <SiAmericanexpress className=" text-4xl" />
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
