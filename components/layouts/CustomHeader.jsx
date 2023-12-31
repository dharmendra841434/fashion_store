import React, { useState } from "react";
import { GiPhone } from "react-icons/gi";
import { MdOutlineEmail, MdLocationOn, MdClose } from "react-icons/md";
import { BsCurrencyRupee, BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import CustomSearchBar from "./CustomSearchBar";
import { FiHeart, FiMenu } from "react-icons/fi";
import { menuOptions } from "../../public/usefullData/MenuOptions";
import { useRouter } from "next/router";

const CustomHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const path = useRouter();

  //console.log(path.pathname, "path");
  return (
    <div className=" relative    ">
      <div className="  bg-secoundryBlack w-full px-3 lg:px-0">
        <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto py-3 ">
          <div className=" flex flex-wrap items-center  gap-x-3">
            <div className=" flex items-center cursor-pointer group ">
              <GiPhone className=" -rotate-90 text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                +918758745783
              </p>
            </div>
            <div className=" flex items-center cursor-pointer group">
              <MdOutlineEmail className="  text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                dhk@gmail.com
              </p>
            </div>
            <div className=" flex items-center cursor-pointer group">
              <MdLocationOn className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                Jamo Bazar, Siwan
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-x-3 mt-2 lg:mt-0">
            <div className=" flex items-center cursor-pointer group">
              <BsCurrencyRupee className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                Rupee
              </p>
            </div>
            <div className=" flex items-center cursor-pointer group">
              <BiUser className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                My Account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block ">
        <div className="bg-appBlack border-b-2 border-appRed">
          <div className=" flex items-center  justify-between max-w-7xl mx-auto py-6">
            <div>
              <h1 className=" font-bold text-4xl text-white cursor-pointer">
                DevOpps<span className=" text-appRed ml-1 text-5xl">.</span>
              </h1>
            </div>
            <CustomSearchBar />
            <div className=" flex items-center gap-x-3">
              <div className=" flex flex-col items-center">
                <div className=" relative cursor-pointer">
                  <FiHeart className=" text-white text-xl" />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    2
                  </span>
                </div>
                <h3 className=" text-white text-[12px] mt-0.5">
                  Your Wishlist
                </h3>
              </div>
              <div className=" flex flex-col items-center">
                <div className=" relative cursor-pointer">
                  <BsCart3 className=" text-white text-xl" />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    6
                  </span>
                </div>
                <h3 className=" text-white text-[12px] mt-0.5">Your Cart</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-b-2 border-gray-200">
          <div className=" max-w-7xl mx-auto  ">
            <div className=" flex items-center gap-x-6 ">
              {menuOptions?.map((item, index) => (
                <div key={index} className=" group cursor-pointer ">
                  <h4
                    className={` font-medium ${
                      path.pathname === item.route
                        ? "text-appRed"
                        : "text-appBlack"
                    }  text-sm  group-hover:text-appRed`}
                  >
                    {item.title}
                  </h4>

                  <div className=" flex mt-1">
                    <div
                      className={`h-[2px] bg-appRed  transition-all duration-500 ease-in-out  ${
                        path.pathname === item.route
                          ? "w-full  bg-appRed h-[2px]"
                          : " w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden py-3 bg-appBlack">
        <div className=" w-full flex justify-center">
          <h1 className=" font-bold text-4xl text-white cursor-pointer">
            DevOpps<span className=" text-appRed ml-1 text-5xl">.</span>
          </h1>
        </div>
        <div className=" mx-3 py-4 md:mx-28">
          <CustomSearchBar />
        </div>
        <div className=" flex items-center justify-end gap-x-12 mx-3 my-3">
          <div className=" flex flex-col items-center">
            <div className=" relative cursor-pointer">
              <FiHeart className=" text-white text-xl" />
              <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                2
              </span>
            </div>
            <h3 className=" text-white text-[12px] mt-0.5">Your Wishlist</h3>
          </div>
          <div className=" flex flex-col items-center">
            <div className=" relative cursor-pointer">
              <BsCart3 className=" text-white text-xl" />
              <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                6
              </span>
            </div>
            <h3 className=" text-white text-[12px] mt-0.5">Your Cart</h3>
          </div>
          <div className=" flex flex-col items-center">
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              className=" relative cursor-pointer"
            >
              <FiMenu className=" text-white text-2xl" />
            </button>
            <h3 className=" text-white text-[12px] mt-0.5">Menu</h3>
          </div>
        </div>
        <div
          className={` absolute h-screen top-0 transition-all duration-300 ease-in-out ${
            !openMenu
              ? "-translate-x-[21rem] md:-translate-x-[35rem]"
              : "translate-x-0"
          }  w-[65%] bg-appBlack`}
        >
          <div className=" flex justify-end p-4">
            <button
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <MdClose className=" text-white text-2xl" />
            </button>
          </div>
          <div className=" mt-20 px-4">
            {menuOptions?.map((item, index) => (
              <div key={index} className=" my-7">
                <h4
                  className={`${
                    path.pathname === item.route ? "text-appRed" : "text-white"
                  }  text-sm`}
                >
                  {item.title}
                </h4>

                {path.pathname === item.route && (
                  <div className=" h-[2px] w-full bg-appRed mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
