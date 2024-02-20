import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import CustomSearchBar from "./CustomSearchBar";
import { FiHeart, FiMenu } from "react-icons/fi";
import { menuOptions } from "../../public/usefullData/MenuOptions";
import { useRouter } from "next/router";
import CustomModal from "../CustomModal";
import WebLogo from "../WebLogo";
import Auth from "../authantication/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../app/slice/userSlice";
import { FaCircleUser } from "react-icons/fa6";
import axios from "axios";

const CustomHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const userData = useSelector((state) => state.user.userDetails);
  console.log(userData, "usersss");

  const path = useRouter();

  const dispatch = useDispatch();

  //console.log(path.pathname, "path");

  const navigation = useRouter();

  const getUser = () => {
    let t = localStorage.getItem("accessToken");
    if (t !== null) {
      console.log(t, "token");
      dispatch(getUserDetails(t));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const loginNow = async () => {
    await axios
      .post(
        "https://dev-trendy-store-api.vercel.app/api/v1/user/login",
        {
          phone: "7761895776",
          countryCode: "+91",
        },
        {
          auth: true,
        }
      )
      .then((res) => {
        console.log(res?.data, "response");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative ">
      <CustomModal isOpen={isOpenModel}>
        <Auth setOpenModel={setIsOpenModel} />
      </CustomModal>
      {/* <div
        className={` lg:hidden absolute z-40  bg-red-300 h-[65%] w-full transition-all duration-500 ease-in-out   ${
          login ? "translate-y-60" : " -translate-y-full"
        }`}
      >
        hjghg
      </div> */}
      {/* <div className="hidden w-full px-5 lg:block bg-secoundryBlack">
        <div className="flex flex-col py-3 mx-auto lg:flex-row lg:items-center lg:justify-between max-w-7xl">
          <div className="flex flex-wrap items-center gap-y-3 gap-x-3">
            <div className="flex items-center cursor-pointer group">
              <GiPhone className="-rotate-90 text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                +918758745783
              </p>
            </div>
            <div className="flex items-center cursor-pointer group">
              <MdOutlineEmail className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                dhk@gmail.com
              </p>
            </div>
            <div className="flex items-center cursor-pointer group">
              <MdLocationOn className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                Jamo Bazar, Siwan
              </p>
            </div>
            <button
              onClick={() => {
                setLogin((prev) => !prev);
              }}
              className="flex items-center cursor-pointer group"
            >
              <BiUser className=" text-appRed" />
              <p className=" text-white text-[12px] mx-1 transition-all duration-300 ease-in-out   group-hover:text-appRed">
                My Account
              </p>
            </button>
          </div>
        </div>
      </div> */}
      <div className="hidden lg:block">
        <div className="border-b-2 bg-appBlack border-appRed">
          <div className="flex items-center justify-between px-5 py-6 mx-auto max-w-7xl">
            <WebLogo className="flex items-center" />
            <div className="  w-[36rem] relative">
              <CustomSearchBar />
            </div>
            <div className="flex items-center gap-x-3">
              <div className="flex flex-col items-center ">
                <div className="relative cursor-pointer ">
                  <FiHeart className="text-xl text-white " />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    2
                  </span>
                </div>
                <h3 className=" text-white text-[12px] mt-0.5">
                  Your Wishlist
                </h3>
              </div>
              <div className="flex flex-col items-center ">
                <div className="relative cursor-pointer ">
                  <BsCart3 className="text-xl text-white " />
                  <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                    6
                  </span>
                </div>
                <h3 className=" text-white text-[12px] mt-0.5">Your Cart</h3>
              </div>
              <div>
                {userData === null ? (
                  <button
                    onClick={() => {
                      loginNow();
                      // setIsOpenModel(!isOpenModel);
                    }}
                    className="px-4 text-white capitalize transition-all duration-300 ease-in-out rounded bg-appRed hover:scale-105"
                  >
                    login
                  </button>
                ) : (
                  <div className="flex flex-col items-center -mt-4 border-4 border-green-500 rounded-full cursor-pointer h-fit w-fit">
                    <FaCircleUser className="text-4xl text-gray-200 " />
                    {/* <h2 className=" text-white text-[12px] mt-0.5">
                      {userData?.user?.firstName}
                    </h2> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-b-2 lg:hidden md:px-4 bg-appBlack border-appRed">
        <div className="flex justify-center w-full ">
          <WebLogo className="flex items-center" />
        </div>
        <div className="flex justify-center w-full py-4 ">
          <CustomSearchBar />
        </div>
        <div className="flex items-center justify-end mx-3 my-3 gap-x-12">
          <div className="flex flex-col items-center ">
            <div className="relative cursor-pointer ">
              <FiHeart className="text-xl text-white " />
              <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                2
              </span>
            </div>
            <h3 className=" text-white text-[12px] mt-0.5">Your Wishlist</h3>
          </div>
          <div className="flex flex-col items-center ">
            <div className="relative cursor-pointer ">
              <BsCart3 className="text-xl text-white " />
              <span className=" absolute flex items-center justify-center text-[12px] -top-3 -right-3 h-4 w-4 bg-appRed text-white rounded-full">
                6
              </span>
            </div>
            <h3 className=" text-white text-[12px] mt-0.5">Your Cart</h3>
          </div>
          <div className="flex flex-col items-center ">
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              className="relative cursor-pointer "
            >
              <FiMenu className="text-2xl text-white " />
            </button>
            <h3 className=" text-white text-[12px] mt-0.5">Menu</h3>
          </div>
        </div>
        <div
          className={` absolute h-screen top-0 z-20 bottom-0 transition-all duration-300 ease-in-out ${
            !openMenu
              ? "-translate-x-[21rem] md:-translate-x-[35rem]"
              : "translate-x-0 md:-translate-x-5"
          }  w-[65%] bg-appBlack`}
        >
          <div className="flex justify-end p-4 ">
            <button
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <MdClose className="text-2xl text-white " />
            </button>
          </div>
          <div className="px-4 mt-20 ">
            {menuOptions?.map((item, index) => (
              <div key={index} className=" my-7">
                <h4
                  className={`${
                    path.pathname === item.route ? "text-appRed" : "text-white"
                  }  text-sm`}
                >
                  {item.title}
                </h4>

                {path.pathname === item.route && (
                  <div className=" h-[2px] w-full bg-appRed mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
