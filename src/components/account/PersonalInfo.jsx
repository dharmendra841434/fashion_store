"use client";

import React, { useState } from "react";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "./CheckBox";
import { userAPI } from "@/redux/api/userAPI";
import { setUserDetails } from "@/redux/slice/userSlice";

const PersonalInfo = () => {
  const userData = useSelector((state) => state.user?.userDetails);
  const [editState, setEditState] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [selectedGen, setSelectedGen] = useState(userData?.gender);
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

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
    <div className="p-6 ">
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
  );
};

export default PersonalInfo;
