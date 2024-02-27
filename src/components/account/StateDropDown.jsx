"use client";

import { userAPI } from "@/redux/api/userAPI";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const StateDropDown = ({
  title,
  inputClass,
  error,
  selectedState,
  setSelectedState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allStates, setAllStates] = useState([]);
  // const [selectedState, setSelectedState] = useState("");

  const getUserStates = async () => {
    const stateData = await userAPI.getAllStates({ country: "india" });
    console.log(stateData?.data);
    setAllStates(stateData?.data);
  };

  useEffect(() => {
    getUserStates();
  }, []);

  return (
    <div>
      <div
        className={` relative px-2  py-1  bg-white border transition-all duration-300 ease-in-out cursor-pointer border-gray-300`}
      >
        <h2
          className={`  transition-all duration-300 ease-in-out text-gray-400 font-medium  text-[12px]`}
        >
          {title}
        </h2>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full "
        >
          <h2 className="text-sm ">
            {selectedState === "" ? "-Select State" : selectedState}
          </h2>
          <RiArrowDownSFill
            className={` transition-all duration-300 ease-in-out ${
              isOpen && " rotate-180"
            }`}
          />
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 z-20 py-3 overflow-y-scroll bg-white border border-gray-300 rounded-md h-44 top-12 shadow-dpShadow">
            {allStates?.map((item, index) => (
              <h2
                onClick={() => {
                  setSelectedState(item?.state_name);
                  setIsOpen(!isOpen);
                }}
                className={` ${
                  selectedState === item?.state_name
                    ? "bg-appRed/80 text-white"
                    : "text-appTextBlack"
                } transition-all duration-300 ease-in-out px-3 py-1 text-sm font-medium  hover:bg-appRed/80 hover:text-white`}
                key={index}
              >
                {item?.state_name}
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className="h-6 pt-1 ">
        {error && (
          <p className="text-[12px] text-appRed">This is required field!!</p>
        )}
      </div>
    </div>
  );
};

export default StateDropDown;
