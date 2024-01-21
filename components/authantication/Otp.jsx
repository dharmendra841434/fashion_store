import React, { useEffect, useState } from "react";
import OtpInput from "../OtpInput";
import { toast } from "react-toastify";
import axios from "axios";
import Loader2 from "./Loader2";

const Otp = ({ setModelState, setPageStatus }) => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); //

  const verifyOtp = async () => {
    setLoader(true);
    const otpData = JSON.parse(localStorage.getItem("otpDetails"));
    console.log(otpData, "otpData");
    const userOtp = Number(`${pin1}${pin2}${pin3}${pin4}`);
    const generatedOtp = otpData?.otp;
    if (userOtp === generatedOtp) {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_UR}/user/login`, {
          phone: Number(otpData?.phone),
        })
        .then((res) => {
          console.log(res.data?.data);
          localStorage.setItem("accessToken", res.data?.data?.accessToken);
          setModelState(false);
          setLoader(false);
          setPageStatus(false);
          toast.success("Login SucessFully ", {
            theme: "colored",
            position: "top-center",
            autoClose: 1000,
            progress: false,
            hideProgressBar: true,
            //style: { backgroundColor: "green" },
          });
        });
    } else {
      toast.error("Wrong Otp Try Again!!", {
        theme: "colored",
        position: "top-center",
        autoClose: 2000,
        progress: false,
        hideProgressBar: true,
        //style: { backgroundColor: "green" },
      });
      setLoader(false);
    }
  };
  return (
    <div className=" mt-12">
      <h2 className=" font-bold text-appBlack text-center text-xl mt-4">
        Otp Verification
      </h2>
      <div className=" number-input-containe px-4  mt-5">
        <OtpInput
          setPin1={setPin1}
          setPin2={setPin2}
          setPin3={setPin3}
          setPin4={setPin4}
          SetStatus={setOtpStatus}
        />
      </div>
      <div className=" flex flex-col items-center pt-8 ">
        {loader ? (
          <Loader2 />
        ) : (
          <button
            onClick={() => {
              verifyOtp();
            }}
            className=" bg-appRed text-white font-medium  rounded-md w-full py-2 transition-all duration-300 ease-in-out hover:bg-appRed/80"
          >
            Verify Otp
          </button>
        )}
      </div>
      <div className=" w-full flex flex-col items-center pt-8">
        {seconds > 0 ? (
          <span className=" text-sm text-appBlack">
            Request new Otp in :{" "}
            <span className=" text-base font-medium text-appRed">
              00:{seconds}
            </span>
          </span>
        ) : (
          <button
            onClick={() => {
              setPageStatus(false);
            }}
            className=" font-medium text-blue-600"
          >
            Resend Otp
          </button>
        )}
      </div>
    </div>
  );
};

export default Otp;
