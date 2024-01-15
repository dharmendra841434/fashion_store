import React, { useState } from "react";
import { GiPhone } from "react-icons/gi";
import { MdOutlineEmail, MdLocationOn, MdClose } from "react-icons/md";
import { BsCurrencyRupee, BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import CustomSearchBar from "./CustomSearchBar";
import { FiHeart, FiMenu } from "react-icons/fi";
import { menuOptions } from "../../public/usefullData/MenuOptions";
import { useRouter } from "next/router";
import CustomModal from "../CustomModal";
import Blob1 from "../../public/blob1";
import Blob2 from "../../public/blob2";
import ShopingImage from "../../public/blob2";

const CustomHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const path = useRouter();

  //console.log(path.pathname, "path");

  const navigation = useRouter();
  return (
    <div className=" relative    ">
      <CustomModal isOpen={login}>
        <div className=" w-full flex justify-center lg:py-16 xl:py-24">
          <div className=" hidden lg:block relative bg-red-300 w-[90%] xl:w-[70%] rounded-md cursor-auto overflow-hidden">
            <Blob1 className=" opacity-50 z-40" />
            {/* <Blob2 /> */}
            <MdClose
              onClick={() => {
                setLogin(false);
              }}
              className=" text-gray-900 cursor-pointer z-50 absolute top-3 right-3 text-3xl"
            />
            <div className=" flex  absolute top-0 left-0 right-0 bottom-0 p-6 ">
              <div className=" w-[40%]  z-10 ">
                <h1 class="text-3xl   font-bold from-red-800 via-red-600 to-red-200 bg-gradient-to-r bg-clip-text text-transparent">
                  Dev-Trendy
                </h1>
                <div className=" ">
                  <h3 className=" mt-10 text-center font-bold text-2xl text-gray-900">
                    Welcome Back👏
                  </h3>
                  <div className=" ml-3 mt-7 flex flex-col">
                    <p className="  font-semibold">Enter Mobile Number</p>
                    <input
                      className=" outline-none border-b-2 border-gray-800 placeholder:text-gray-800 my-3 text-sm bg-transparent"
                      placeholder="+91XXXXXXXXX"
                    />
                    <span className=" text-sm font-thin mt-3">
                      By continuing, you agree to Dev-Trendy's{" "}
                      <span className=" text-blue-600">Terms of Use</span> and{" "}
                      <span className=" text-blue-600">Privacy Policy</span>.
                    </span>
                    <button className=" bg-appRed text-white font-medium mt-8 py-2 transition-all duration-300 ease-in-out hover:bg-appRed/80">
                      Request Otp
                    </button>
                    <span className=" text-sm text-appBlack font-medium text-center mt-8">
                      New to Dev-Trendy ?{" "}
                      <span className=" text-appRed cursor-pointer">
                        Register
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-[60%] relative z-10 ">
                <img src="/images/shop.png" className=" z-20" />
              </div>
            </div>
            <img
              src="/images/shap2.png"
              className=" absolute opacity-30 left-10 top-0 "
            />
            <img
              src="/images/shap3.png"
              className=" absolute opacity-20  -top-[12rem] left-[30%] "
            />
          </div>
        </div>
      </CustomModal>
      {/* <div
        className={` lg:hidden absolute z-40  bg-red-300 h-[65%] w-full transition-all duration-500 ease-in-out   ${
          login ? "translate-y-60" : " -translate-y-full"
        }`}
      >
        hjghg
      </div> */}
      <div className="   bg-secoundryBlack w-full px-5 ">
        <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto py-3 ">
          <div className=" flex flex-wrap items-center gap-y-3  gap-x-3">
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
            <button
              onClick={() => {
                setLogin((prev) => !prev);
              }}
              className=" flex items-center cursor-pointer group"
            >
              <BiUser className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                My Account
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block  ">
        <div className="bg-appBlack border-b-2 border-appRed">
          <div className="  flex items-center  justify-between max-w-7xl mx-auto py-6 px-5">
            <div>
              <h1 className=" font-bold text-4xl text-white cursor-pointer">
                DevOpps<span className=" text-appRed ml-1 text-5xl">.</span>
              </h1>
            </div>
            <div className="  w-[36rem]">
              <CustomSearchBar />
            </div>
            <div className=" flex items-center gap-x-3 ">
              <div className=" flex flex-col items-center ">
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
          <div className=" max-w-7xl mx-auto px-5  ">
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
      <div className=" lg:hidden md:px-4 py-3 bg-appBlack border-b-2 border-appRed">
        <div className=" w-full flex justify-center">
          <h1 className=" font-bold text-4xl text-white cursor-pointer">
            DevOpps<span className=" text-appRed ml-1 text-5xl">.</span>
          </h1>
        </div>
        <div className="  py-4  w-full flex justify-center ">
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
          className={` absolute h-screen top-0 z-20 bottom-0 transition-all duration-300 ease-in-out ${
            !openMenu
              ? "-translate-x-[21rem] md:-translate-x-[35rem]"
              : "translate-x-0 md:-translate-x-5"
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
