import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Blob1 from "../../public/blob1";
import WebLogo from "../WebLogo";
import axios from "axios";
import Otp from "./Otp";

const Auth = ({ setOpenModel }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [OTPStatus, setOTPStatus] = useState(false);

  const login = async () => {
    console.log(mobileNumber, "mob");
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_UR}/user/login`, {
        phone: Number(mobileNumber),
      })
      .then((res) => {
        console.log(res.data);
        setOTPStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-full flex justify-center lg:py-16 xl:py-24">
      <div className=" hidden lg:block relative bg-red-300 w-[90%] xl:w-[70%] rounded-md cursor-auto overflow-hidden">
        <Blob1 className=" opacity-50 z-40" />
        <MdClose
          onClick={() => {
            setOpenModel(false);
          }}
          className=" text-gray-900 cursor-pointer z-50 absolute top-3 right-3 text-3xl"
        />
        <div className=" flex  absolute top-0 left-0 right-0 bottom-0 p-6 ">
          <div className=" w-[40%]  z-10 ">
            <WebLogo className="flex items-center" />

            {isLogin ? (
              <>
                {!OTPStatus ? (
                  <div className=" ">
                    <h3 className=" mt-10 text-center font-bold text-2xl text-gray-900">
                      Welcome Back👏
                    </h3>
                    <div className=" ml-3 mt-7 flex flex-col">
                      <p className="  font-semibold">Enter Mobile Number</p>
                      <input
                        className=" outline-none border-b-2 border-gray-800 placeholder:text-gray-800 my-3 text-sm bg-transparent"
                        placeholder="+91XXXXXXXXX"
                        onChange={(e) => {
                          setMobileNumber(e.target.value);
                        }}
                      />
                      <span className=" text-sm font-thin mt-3">
                        By continuing, you agree to Dev-Trendy's{" "}
                        <span className=" text-blue-600">Terms of Use</span> and{" "}
                        <span className=" text-blue-600">Privacy Policy</span>.
                      </span>
                      <button
                        onClick={() => {
                          login();
                        }}
                        className=" bg-appRed text-white font-medium mt-8 py-2 transition-all duration-300 ease-in-out hover:bg-appRed/80"
                      >
                        Request Otp
                      </button>
                      <span className=" text-sm text-appBlack font-medium text-center mt-8">
                        New to Dev-Trendy ?{" "}
                        <span
                          onClick={() => {
                            setIsLogin(!isLogin);
                          }}
                          className=" text-appRed cursor-pointer"
                        >
                          Register
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Otp />
                  </div>
                )}
              </>
            ) : (
              <div>
                <h3 className="  text-center font-bold text-2xl text-gray-900">
                  Register Now 🛒
                </h3>
                <div className=" ml-3 mt-4 flex flex-col">
                  <p className="  font-semibold">First name</p>
                  <input
                    className=" outline-none border-b-2 border-gray-800 placeholder:text-gray-800 my-3 text-sm bg-transparent"
                    placeholder="Enter first name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <p className="  font-semibold">Last name</p>
                  <input
                    className=" outline-none border-b-2 border-gray-800 placeholder:text-gray-800 my-3 text-sm bg-transparent"
                    placeholder="Enter last name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <p className="  font-semibold">Mobile Number</p>
                  <input
                    className=" outline-none border-b-2 border-gray-800 placeholder:text-gray-800 my-3 text-sm bg-transparent"
                    placeholder="Enter mobile number"
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                    }}
                  />
                  <span className=" text-sm font-thin mt-1">
                    By continuing, you agree to Dev-Trendy's{" "}
                    <span className=" text-blue-600">Terms of Use</span> and{" "}
                    <span className=" text-blue-600">Privacy Policy</span>.
                  </span>
                  <button className=" bg-appRed text-white font-medium mt-3 py-2 transition-all duration-300 ease-in-out hover:bg-appRed/80">
                    Register
                  </button>
                  <span className=" text-sm text-appBlack font-medium text-center mt-3">
                    Already a user ?{" "}
                    <span
                      onClick={() => {
                        setIsLogin(!isLogin);
                      }}
                      className=" text-appRed cursor-pointer"
                    >
                      Login
                    </span>
                  </span>
                </div>
              </div>
            )}
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
  );
};

export default Auth;
