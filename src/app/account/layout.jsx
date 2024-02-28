"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  FaShoppingBag,
  FaUser,
  FaWallet,
  FaRegHeart,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoggedIn,
  setUserAddress,
  setUserDetails,
} from "@/redux/slice/userSlice";
import { BsArrowLeft } from "react-icons/bs";
import { accountOptions } from "../../../public/usefullData/MenuOptions";

const AccountLayout = ({ children }) => {
  const userData = useSelector((state) => state.user?.userDetails);

  const navigation = useRouter();
  const pathname = usePathname();

  const dispatch = useDispatch();
  //console.log(pathname);
  const accountSettingOptions = [
    { title: "Personal Information", route: "/account" },
    { title: "Manage Addresses", route: "/account/manage-addresses" },
    { title: "PAN Information", route: "/account/pan-info" },
  ];
  const paymentsOptions = [
    {
      title: "Gift Card",
      route: "/account/payments/gift-card",
    },
    {
      title: "Saved UPI",
      route: "/account/payments/saved-upi",
    },
    {
      title: "Saved Cards",
      route: "/account/payments/saved-card",
    },
  ];
  const myStuffOptions = [
    {
      title: "My Coupons",
      route: "/account/my-stuff/my-coupons",
    },
    {
      title: "My Review & Ratings",
      route: "/account/my-stuff/review-ratings",
    },
    {
      title: "All Notifications",
      route: "/account/my-stuff/all-notifications",
    },
    {
      title: "My Wishlist",
      route: "/account/my-stuff/wishlist",
    },
  ];

  const logout = async () => {
    await axios
      .delete(`/api/user/logout`)
      .then((res) => {
        navigation.push("/");

        toast.success(res.data?.message, {
          theme: "colored",
          position: "top-center",
          autoClose: 1000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
        dispatch(setUserDetails(null));
        dispatch(setUserAddress([]));
        dispatch(setIsLoggedIn(false));
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message, {
          theme: "colored",
          position: "top-center",
          autoClose: 2000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
      });
  };
  return (
    <>
      <div className="mx-auto lg:px-4 lg:py-4 max-w-7xl">
        <div className="hidden lg:block">
          <div className="flex gap-x-2 ">
            <div className=" w-[30%]">
              <div className="flex items-center py-2 bg-white border border-gray-200 rounded shadow-dpShadow">
                <img alt="dp" src="/images/dp2.png" className="h-20 " />
                <div className="ml-3">
                  <p className="text-[12px] ">Hello,</p>
                  <h2 className="font-semibold capitalize text-appBlack">
                    {userData?.firstName} {userData?.lastName}
                  </h2>
                  <span className="text-[12px] text-gray-400 -mt-4 ">
                    Save your addresses to easly buy products
                  </span>
                </div>
              </div>
              <div className="py-2 mt-5 bg-white border border-gray-200 rounded shadow-dpShadow">
                <div
                  onClick={() => {
                    navigation.push("/account/orders");
                  }}
                  className="flex items-center justify-between px-3 py-5 border-b cursor-pointer border-b-gray-200"
                >
                  <div className="flex items-center gap-x-4">
                    <FaShoppingBag className="text-2xl text-appRed" />
                    <p className="text-gray-600 capitalize">Orders</p>
                  </div>
                  <MdKeyboardArrowRight className="text-2xl text-appBlack" />
                </div>
                <div className="py-5 border-b border-b-gray-200">
                  <div className="flex items-center px-2 gap-x-4">
                    <FaUser className="text-2xl text-appRed" />
                    <p className="text-gray-600 capitalize">Account Settings</p>
                  </div>
                  <div className="mt-2 ">
                    {accountSettingOptions?.map((item, index) => (
                      <h2
                        onClick={() => {
                          navigation.push(item.route);
                        }}
                        key={index}
                        className={` px-12 py-2 text-sm cursor-pointer ${
                          item.route === pathname
                            ? "text-appRed font-medium bg-appRed/5"
                            : "text-gray-700"
                        }`}
                      >
                        {item.title}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="py-5 border-b border-b-gray-200">
                  <div className="flex items-center px-2 gap-x-4">
                    <FaWallet className="text-2xl text-appRed" />
                    <p className="text-gray-600 capitalize">Payments</p>
                  </div>
                  <div className="mt-2 ">
                    {paymentsOptions?.map((item, index) => (
                      <h2
                        onClick={() => {
                          navigation.push(item.route);
                        }}
                        key={index}
                        className={` px-12 py-2 text-sm cursor-pointer ${
                          pathname === item.route
                            ? "text-appRed font-medium bg-appRed/5"
                            : "text-gray-700"
                        }`}
                      >
                        {item.title}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="py-5 border-b border-b-gray-200">
                  <div className="flex items-center px-2 gap-x-4">
                    <GoFileDirectoryFill className="text-2xl text-appRed" />
                    <p className="text-gray-600 capitalize">My Stuff</p>
                  </div>
                  <div className="mt-2 ">
                    {myStuffOptions?.map((item, index) => (
                      <h2
                        onClick={() => {
                          navigation.push(item.route);
                        }}
                        key={index}
                        className={` px-12 py-2 text-sm cursor-pointer ${
                          pathname === item.route
                            ? "text-appRed font-medium bg-appRed/5"
                            : "text-gray-700"
                        }`}
                      >
                        {item.title}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="items-center justify-center w-full">
                  <button
                    onClick={() => logout()}
                    className="flex items-center justify-center w-full py-2 gap-x-3 "
                  >
                    <AiOutlineLogout className="text-2lg text-appRed" />
                    <p className="font-medium text-appBlack">Logout</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded shadow-dpShadow  w-[70%]">
              {children}
            </div>
          </div>
        </div>
        <div className=" lg:hidden">
          {pathname === "account" ? (
            <div>
              <div className="flex ">
                <BsArrowLeft
                  className="text-2xl "
                  onClick={() => navigation.back()}
                />
                <div className="flex ">
                  <img alt="dp" src="/images/dp2.png" className="h-20 " />
                  <div className="ml-3">
                    <p className="text-[12px] ">Hello,</p>
                    <h2 className="font-semibold capitalize text-appBlack">
                      {userData?.firstName} {userData?.lastName}
                    </h2>
                    <span className="text-[12px] text-gray-400 -mt-4 ">
                      Save your addresses to easly buy products
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3 ">
                {accountOptions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigation.push(item.path)}
                    className="flex items-center p-3 text-sm border border-gray-300 rounded-md cursor-pointer gap-x-2 text-appTextBlack"
                  >
                    {item.title === "Orders" && (
                      <FaShoppingBag className="text-2xl text-appRed" />
                    )}
                    {item.title === "Whishlist" && (
                      <FaRegHeart className="text-2xl text-appRed" />
                    )}
                    {item.title === "Coupons" && (
                      <FiGift className="text-2xl text-appRed" />
                    )}
                    {item.title === "Help Center" && (
                      <FaHeadphonesAlt className="text-2xl text-appRed" />
                    )}
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="">{children}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
