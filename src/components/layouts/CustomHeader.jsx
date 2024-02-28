"use client";

import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FiHeart, FiMenu } from "react-icons/fi";
import { menuOptions } from "@/usefullData/MenuOptions";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleUser, FaUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import CustomSearchBar from "./CustomSearchBar";
import WebLogo from "../WebLogo";
import CustomModal from "../CustomModal";
import Auth from "../authantication/Auth";
import { getUserDetails } from "@/redux/slice/userSlice";
import { sortString } from "@/utils/helper";
//import { FaUserCircle } from "react-icons/fa";

const CustomHeader = ({ token }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const userData = useSelector((state) => state.user?.userDetails);
  //console.log(userData, "usersss");

  const path = useRouter();

  const dispatch = useDispatch();

  //console.log(path.pathname, "path");

  const navigation = useRouter();

  const getUser = async () => {
    // console.log(token);
    if (token) {
      await dispatch(getUserDetails(token));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <CustomModal isOpen={isOpenModel}>
        <Auth setOpenModel={setIsOpenModel} />
      </CustomModal>
      <div className="hidden lg:block">
        <div className="border-b-2 bg-appBlack border-appRed">
          <div className="flex items-center justify-between px-2 py-1 mx-auto max-w-7xl">
            <WebLogo
              className="flex items-center lg:w-[25%] "
              onClick={() => navigation.push("/")}
            />
            <div className="  lg:w-[50%] relative ">
              <CustomSearchBar />
            </div>
            <div className=" flex items-center justify-between w-[25%] pr-3 gap-x-2 pl-2">
              <div className="">
                {userData === null ? (
                  <button
                    onClick={() => {
                      setIsOpenModel(!isOpenModel);
                    }}
                    className="flex items-center gap-x-2 "
                  >
                    <FaCircleUser className="text-3xl text-white " />
                    <h3 className="text-sm text-white ">Login Now</h3>
                  </button>
                ) : (
                  <button
                    name="profile"
                    onClick={() => {
                      navigation.push("/account");
                    }}
                    className="flex items-center gap-x-2"
                  >
                    <img src="/images/user.png" className="w-8 h-8 ml-[25%]" />
                    <h3 className=" text-white text-[12px] mt-0.5 capitalize">
                      {sortString(`${userData?.firstName}`, 18)}
                    </h3>
                  </button>
                )}
              </div>
              <div className="flex items-center gap-x-2 ">
                <div className="relative cursor-pointer ">
                  <BsCart3 className="text-xl text-white " />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    6
                  </span>
                </div>
                <h3 className="text-sm text-white ">Cart</h3>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="relative cursor-pointer ">
                  <FiHeart className="text-xl text-white " />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    2
                  </span>
                </div>
                <h3 className="text-sm text-white ">Wishlist</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-b-2 lg:hidden md:px-4 bg-appBlack border-appRed">
        <div className="flex justify-between w-full px-2 ">
          <div className="flex items-center gap-x-2">
            <img src="/images/withoutBgLogo.png" className="w-12 h-12 " />
          </div>
          <div className="flex items-center justify-between px-2 py-2 w-[55%] ">
            <div className="-mt-1 ">
              {userData === null ? (
                <button
                  onClick={() => {
                    // otp();
                    // loginNow();
                    setIsOpenModel(!isOpenModel);
                  }}
                  className="flex flex-col items-center "
                >
                  <FaCircleUser className="text-3xl text-white " />
                </button>
              ) : (
                <button
                  name="profile"
                  onClick={() => {
                    navigation.push("/account");
                  }}
                  className="flex-col items-center justify-center w-full -mt-1 "
                >
                  <img
                    src="/images/man.png"
                    className="self-center w-8 h-8 ml-[25%] "
                  />
                  {/* <h3 className=" text-white text-[13px]  capitalize">
                    {sortString(`${userData?.firstName}`, 14)}
                  </h3> */}
                </button>
              )}
            </div>
            <div className="flex flex-col items-center ">
              <div className="relative cursor-pointer ">
                <FiHeart className="text-xl text-white " />
                <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                  2
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="relative cursor-pointer ">
                <BsCart3 className="text-xl text-white " />
                <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                  6
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <button
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                className="relative cursor-pointer "
              >
                <FiMenu className="text-2xl text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-4 ">
          <CustomSearchBar />
        </div>

        <div
          className={` absolute h-screen top-0 z-20 bottom-0 transition-all duration-300 ease-in-out ${
            !openMenu
              ? "-translate-x-[21rem] md:-translate-x-[35rem]"
              : "translate-x-0 md:-translate-x-5"
          }  w-[65%] bg-appBlack`}
        >
          <div className="flex justify-end p-4 ">
            <button
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <MdClose className="text-2xl text-white " />
            </button>
          </div>
          <div className="px-4 mt-20 ">
            {menuOptions?.map((item, index) => (
              <div key={index} className=" my-7">
                <h4
                  className={` capitalize ${
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
