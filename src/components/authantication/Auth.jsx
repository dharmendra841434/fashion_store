"use client";

import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Blob1 from "../../../public/blob1";
import WebLogo from "../WebLogo";
import CircleLoader from "./CircleLoader";
import Otp from "./Otp";

const Auth = ({ setOpenModel }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [OTPStatus, setOTPStatus] = useState(false);
  const [otpLoader, setOtpLoader] = useState(false);

  const login = async () => {
    setOtpLoader(true);
    await axios
      .post(`/api/user/send-otp`, {
        phone: `${mobileNumber}`,
        countryCode: "+91",
      })
      .then((res) => {
        console.log(res.data);
        // Serialize the object to a JSON string
        let phoneData = JSON.stringify(res?.data?.data);
        // Store the serialized object in localStorage
        localStorage.setItem("otpDetails", phoneData);
        setOTPStatus(true);
        setOTPStatus(true);
        toast.success("Otp sent to your mobile", {
          theme: "colored",
          position: "top-center",
          autoClose: 1000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
        setOtpLoader(false);
      })
      .catch((error) => {
        setOtpLoader(false);
        console.log(error);
        toast.error(error?.response?.data?.message, {
          theme: "colored",
          position: "top-center",
          autoClose: 1000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
      });
  };

  return (
    <div className="flex justify-center w-full lg:py-16 xl:py-24">
      <div className=" hidden lg:block relative bg-red-300 w-[90%] lg:h-[65%] xl:h-auto xl:w-[70%] rounded-md cursor-auto overflow-hidden">
        <Blob1 className="z-40 opacity-50 " />
        <MdClose
          onClick={() => {
            setOpenModel(false);
            setOTPStatus(false);
          }}
          className="absolute z-50 text-3xl text-gray-900 cursor-pointer top-3 right-3"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex p-6 ">
          <div className=" w-[40%]  z-10 ">
            <WebLogo className="flex items-center" />
            <>
              {!OTPStatus ? (
                <div className="">
                  <h3 className="mt-10 text-2xl font-bold text-center text-gray-900 ">
                    Welcome Back👏
                  </h3>
                  <div className="flex flex-col ml-3 mt-7">
                    <p className="font-semibold ">Enter Mobile Number</p>
                    <input
                      className="my-3 text-sm bg-transparent border-b-2 border-gray-800 outline-none placeholder:text-gray-800"
                      placeholder="+91XXXXXXXXX"
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                      }}
                    />
                    <span className="mt-3 text-sm font-thin ">
                      By continuing, you agree to Dev-Trendy's{" "}
                      <span className="text-blue-600 ">Terms of Use</span> and{" "}
                      <span className="text-blue-600 ">Privacy Policy</span>.
                    </span>
                    <div className="flex flex-col items-center pt-8 ">
                      {otpLoader ? (
                        <CircleLoader />
                      ) : (
                        <button
                          onClick={() => {
                            login();
                          }}
                          className="w-full py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-md bg-appRed hover:bg-appRed/80"
                        >
                          Request Otp
                        </button>
                      )}
                    </div>
                    {/* <span className="mt-8 text-sm font-medium text-center text-appBlack">
                        New to Dev-Trendy ?{" "}
                        <span
                          onClick={() => {
                            setIsLogin(!isLogin);
                          }}
                          className="cursor-pointer text-appRed"
                        >
                          Register
                        </span>
                      </span> */}
                  </div>
                </div>
              ) : (
                <div>
                  <Otp
                    setModelState={setOpenModel}
                    setPageStatus={setOTPStatus}
                  />
                </div>
              )}
            </>
          </div>
          <div className=" w-[60%] relative z-10 ">
            <img src="/images/shop.png" className="z-20 " />
          </div>
        </div>
        <img
          src="/images/shap2.png"
          className="absolute top-0 opacity-30 left-10"
        />
        <img
          src="/images/shap3.png"
          className=" absolute opacity-20  -top-[12rem] left-[30%] "
        />
      </div>
    </div>
  );
};

export default Auth;
