"use client";

import React, { useState } from "react";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "./CheckBox";
import { userAPI } from "@/redux/api/userAPI";
import { setUserDetails } from "@/redux/slice/userSlice";
import { FaHeadphonesAlt, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { accountOptions } from "../../../public/usefullData/MenuOptions";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const PersonalInfo = () => {
  const userData = useSelector((state) => state.user?.userDetails);
  const [editState, setEditState] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [selectedGen, setSelectedGen] = useState(userData?.gender);
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigation = useRouter();

  const updataUser = async () => {
    const data = {
      id: userData?._id,
      body: {
        firstName: firstName,
        lastName: lastName,
        gender: selectedGen,
      },
    };
    setLoader(true);
    await userAPI
      .updateUserDetails(data)
      .then((res) => {
        console.log(res);
        dispatch(setUserDetails(res?.user));
        setLoader(false);
        setEditState(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="hidden p-6 lg:block ">
        <div className="flex items-center ">
          <h2 className="text-lg font-bold text-appTextBlack">
            Personal Information
          </h2>
          <button
            onClick={() => {
              if (editState) {
                setEditState(false);
              } else {
                setEditState(true);
              }
            }}
            className="ml-5 text-sm font-medium text-appRed"
          >
            {editState ? "Cancel" : "Edit"}
          </button>
        </div>
        <div className="flex mt-6 gap-x-5">
          <InputBox
            isEdit={editState}
            title="First name"
            value={firstName}
            focus={editState}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            isEdit={editState}
            title="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mt-8 ">
          <h2 className="text-lg text-appTextBlack">Your Gender</h2>
          <div className="flex mt-5 gap-x-3">
            {["male", "female"]?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-3"
              >
                <CheckBox
                  isChecked={selectedGen === item}
                  onChecked={() => {
                    if (editState) {
                      setSelectedGen(item);
                    }
                  }}
                  isEdit={editState}
                />
                <p
                  className={` capitalize ${
                    editState ? "text-appTextBlack" : "text-appGray"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        {editState && (
          <button
            onClick={() => updataUser()}
            className="px-10 py-3 mt-10 font-medium text-white bg-appRed/80"
          >
            {loader ? "Updating..." : "Save"}
          </button>
        )}
      </div>
      <div className=" lg:hidden">
        <div>
          <div className="flex px-2 pt-4 ">
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
          <div className="grid grid-cols-2 gap-4 px-2 py-4 mt-3 ">
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
      </div>
    </div>
  );
};

export default PersonalInfo;
