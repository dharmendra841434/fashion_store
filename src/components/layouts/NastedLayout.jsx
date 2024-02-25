import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag, FaUser, FaWallet } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";

const NestedLayout = ({ children }) => {
  const router = useRouter();
  //console.log(router.pathname, "ksjhk");
  const accountSettingOptions = [
    { title: "Personal Information", path: "/account/personal-info" },
    { title: "Manage Addresses", path: "/account/manage-addresses" },
    { title: "PAN Information", path: "/account/pan-info" },
  ];
  const userData = useSelector((state) => state.user.userDetails);
  const [selectedOption, setSelectedOption] = useState(
    accountSettingOptions[0].title
  );
  const paymentsOptions = ["Gift Card", "Saved UPI", "Saved Cards"];
  const myStuffOptions = [
    "My Coupons",
    "My Review & Ratings",
    "All Notifications",
    "My Wishlist",
  ];

  return (
    <div className="px-4 py-4 mx-auto max-w-7xl">
      <div className="hidden lg:block">
        <div className="flex gap-x-2 ">
          <div className=" w-[30%]">
            <div className="flex items-center py-2 bg-white border border-gray-200 rounded shadow-dpShadow">
              <img alt="dp" src="/images/dp2.png" className="h-20 " />
              <div className="ml-3">
                <p className="text-sm ">Hello,</p>
                <h2 className="font-semibold capitalize text-appBlack">
                  {userData?.firstName} {userData?.lastName}
                </h2>
                <span className="text-[12px] text-gray-400 -mt-4 ">
                  Save your addresses to easly buy products
                </span>
              </div>
            </div>
            <div className="py-2 mt-5 bg-white border border-gray-200 rounded shadow-dpShadow">
              <div className="flex items-center justify-between px-3 py-5 border-b cursor-pointer border-b-gray-200">
                <div className="flex items-center gap-x-4">
                  <FaShoppingBag className="text-2xl text-appRed" />
                  <p className="text-gray-600 capitalize">Orders</p>
                </div>
                <MdKeyboardArrowRight className="text-2xl text-appBlack" />
              </div>
              <div className="px-2 py-5 border-b border-b-gray-200">
                <div className="flex items-center gap-x-4">
                  <FaUser className="text-2xl text-appRed" />
                  <p className="text-gray-600 capitalize">Account Settings</p>
                </div>
                <div className="ml-10 ">
                  {accountSettingOptions?.map((item, index) => (
                    <h2
                      onClick={() => router.push(item.path)}
                      key={index}
                      className={`my-3 text-sm cursor-pointer ${
                        item.path === router.pathname
                          ? "text-appRed font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="px-2 py-5 border-b border-b-gray-200">
                <div className="flex items-center gap-x-4">
                  <FaWallet className="text-2xl text-appRed" />
                  <p className="text-gray-600 capitalize">Payments</p>
                </div>
                <div className="ml-10 ">
                  {paymentsOptions?.map((item, index) => (
                    <h2
                      onClick={() => setSelectedOption(item)}
                      key={index}
                      className={`my-3 text-sm cursor-pointer ${
                        item === selectedOption
                          ? "text-appRed font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="px-2 py-5 border-b border-b-gray-200">
                <div className="flex items-center gap-x-4">
                  <GoFileDirectoryFill className="text-2xl text-appRed" />
                  <p className="text-gray-600 capitalize">My Stuff</p>
                </div>
                <div className="ml-10 ">
                  {myStuffOptions?.map((item, index) => (
                    <h2
                      onClick={() => setSelectedOption(item)}
                      key={index}
                      className={`my-3 text-sm cursor-pointer ${
                        item === selectedOption
                          ? "text-appRed font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="items-center justify-center w-full">
                <button className="flex items-center justify-center w-full py-2 gap-x-3 ">
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
    </div>
  );
};

export const PageLayout = (page) => <NestedLayout>{page}</NestedLayout>;
