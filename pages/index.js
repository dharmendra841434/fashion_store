import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import NewProductSlider from "../components/homeComponents/NewProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { menuOptions } from "../public/usefullData/MenuOptions";
import { useRouter } from "next/router";
import HotDeals from "../components/homeComponents/HotDeals";
import DropDown from "../components/homeComponents/DropDown";
import SeoHeadTags from "../components/layouts/SeoHeadTags";

const Home = () => {
  const path = useRouter();
  const [isOpne, setIsOpne] = useState(false);
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]?.title);
  return (
    <>
      <SeoHeadTags title="Coders Choice Shoping Store" />
      <div className="pb-6 ">
        <div className="px-3 mx-auto max-w-7xl">
          <div className="py-8 border-b-2 border-gray-200">
            <div className="px-5 mx-auto max-w-7xl">
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-6">
                  {menuOptions?.map((item, index) => (
                    <div key={index} className="cursor-pointer group">
                      <h4
                        className={` font-medium capitalize ${
                          path.pathname === item.route
                            ? "text-appRed"
                            : "text-appBlack"
                        }  text-sm  group-hover:text-appRed`}
                      >
                        {item.title}
                      </h4>

                      <div className="flex mt-1 ">
                        <div
                          className={`h-[2px] bg-appRed  transition-all duration-500 ease-in-out  ${
                            path.pathname === item.route
                              ? "w-full  bg-appRed h-[2px]"
                              : " w-0 group-hover:w-full"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DropDown
                data={menuOptions}
                dropDown={isOpne}
                setDropDown={setIsOpne}
                selectedItem={selectedOption}
                setSelectedItem={setSelectedOption}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 px-2 lg:grid-cols-3">
            <div className=" relative flex items-center group  bg-appGray/70 justify-center  h-[15rem] overflow-hidden ">
              <Image
                src="/images/tshirt.png"
                height={240}
                width={240}
                className="transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className={`${styles.overlay}`}></div>
              <div className="absolute top-0 left-0 px-3 pt-8 cursor-auto ">
                <h2 className="text-3xl font-bold text-white ">T-Shirts</h2>
                <p className=" w-[65%] text-white mt-2">
                  we make a perfect designed and with best material t-shirts for
                  developers
                </p>
                <div className="flex items-center mt-4 ">
                  <h3 className="font-semibold text-white uppercase ">
                    Shop Now
                  </h3>
                  <button className="mx-2 ">
                    <BsFillArrowRightCircleFill className="text-xl text-white " />
                  </button>
                </div>
              </div>
            </div>
            <div className=" relative flex items-center group bg-appGray/70  justify-center  h-[15rem] overflow-hidden">
              <Image
                src="/images/tanktop.png"
                height={240}
                width={240}
                className="transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className={`${styles.overlay}`}></div>
              <div className="absolute top-0 left-0 px-3 pt-8 cursor-auto ">
                <h2 className="text-3xl font-bold text-white ">Tank-Top</h2>
                <p className=" w-[65%] text-white mt-2">
                  we make perfect Comfertable designed and with best material
                  tank-top
                </p>
                <div className="flex items-center mt-4 ">
                  <h3 className="font-semibold text-white uppercase ">
                    Shop Now
                  </h3>
                  <button className="mx-2 ">
                    <BsFillArrowRightCircleFill className="text-xl text-white " />
                  </button>
                </div>
              </div>
            </div>
            <div className=" relative flex group bg-appGray/70  items-center justify-center h-[15rem] overflow-hidden">
              <Image
                src="/images/hoodies.png"
                height={240}
                width={240}
                className="transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className={`${styles.overlay}`}></div>
              <div className="absolute top-0 left-0 px-3 pt-8 cursor-auto ">
                <h2 className="text-3xl font-bold text-white ">Hoodies</h2>
                <p className=" w-[65%] text-white mt-2">
                  we make warm and with best material Hoodies for you
                </p>
                <div className="flex items-center mt-4 ">
                  <h3 className="font-semibold text-white uppercase ">
                    Shop Now
                  </h3>
                  <button className="mx-2 ">
                    <BsFillArrowRightCircleFill className="text-xl text-white " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 ">
            <NewProductSlider />
          </div>
        </div>
        <HotDeals />
      </div>
    </>
  );
};

export default Home;
