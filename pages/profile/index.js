import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag, FaUser, FaWallet } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import SeoHeadTags from "../../components/layouts/SeoHeadTags";

const Profile = () => {
  const userData = useSelector((state) => state.user.userDetails);
  const [selectedOption, setSelectedOption] = useState("Personal Information");
  const accountSettingOptions = [
    "Personal Information",
    "Manage Addresses",
    "PAN Information",
  ];
  const paymentsOptions = ["Gift Card", "Saved UPI", "Saved Cards"];
  return (
    <>
      <SeoHeadTags title="My Profile" />
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
              </div>
            </div>
            <div className=" w-[70%] bg-orange-300">right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
