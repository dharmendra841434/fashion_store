import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "../OtpInput";
import Loader2 from "./Loader2";
import {
  setCartItems,
  setIsLoggedIn,
  setUserAddress,
  setUserDetails,
  updateUserCartItems,
} from "@/redux/slice/userSlice";
import { userAPI } from "@/redux/api/userAPI";
import { removeDuplicates } from "@/utils/helper";

const Otp = ({ setModelState, setPageStatus }) => {
  const cartItems = useSelector((state) => state.user.cartItems);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

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
    const userOtp = Number(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    const generatedOtp = otpData?.otp;
    // console.log(userOtp);
    //console.log(typeof Number(generatedOtp));
    if (userOtp === generatedOtp) {
      await axios
        .post(
          `/api/user/login`,
          {
            phone: otpData?.phone,
            countryCode: otpData?.code,
          },
          {
            withCredentials: true,
          }
        )
        .then(async (res) => {
          // console.log(res.data);
          dispatch(setUserDetails(res.data?.data));
          let cart = cartItems?.concat(...res?.data?.data?.cartItems);
          let rmData = removeDuplicates(cart, "_id");
          // console.log(rmData);
          dispatch(setCartItems(rmData));
          const data = {
            userId: res.data?.data?._id,
            cartItems: rmData,
          };
          dispatch(updateUserCartItems(data));
          await userAPI.getUserAddress(res.data?.data?._id).then((addreses) => {
            // console.log(addreses);
            dispatch(setUserAddress(addreses?.addresses));
          });

          dispatch(setIsLoggedIn(true));
          // localStorage.setItem("accessToken", res.data?.accessToken);
          localStorage.removeItem("otpDetails");
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
        })
        .catch((erro) => {
          console.log(erro);
          toast.error(erro?.response?.data?.message, {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            progress: false,
            hideProgressBar: true,
            //style: { backgroundColor: "green" },
          });
          setLoader(false);
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
    <div className="mt-12 ">
      <h2 className="mt-4 text-xl font-bold text-center text-appBlack">
        Otp Verification
      </h2>
      <div className="px-4 mt-5 number-input-containe">
        <OtpInput
          setPin1={setPin1}
          setPin2={setPin2}
          setPin3={setPin3}
          setPin4={setPin4}
          setPin5={setPin5}
          setPin6={setPin6}
          SetStatus={setOtpStatus}
        />
      </div>
      <div className="flex flex-col items-center pt-8 ">
        {loader ? (
          <Loader2 />
        ) : (
          <button
            onClick={() => {
              verifyOtp();
            }}
            className="w-full py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-md bg-appRed hover:bg-appRed/80"
          >
            Verify Otp
          </button>
        )}
      </div>
      <div className="flex flex-col items-center w-full pt-8 ">
        {seconds > 0 ? (
          <span className="text-sm text-appBlack">
            Request new Otp in :{" "}
            <span className="text-base font-medium text-appRed">
              00:{seconds}
            </span>
          </span>
        ) : (
          <button
            onClick={() => {
              setPageStatus(false);
            }}
            className="font-medium text-blue-600 "
          >
            Resend Otp
          </button>
        )}
      </div>
    </div>
  );
};

export default Otp;
