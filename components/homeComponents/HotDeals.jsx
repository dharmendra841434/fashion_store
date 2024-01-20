import React from "react";
import Image from "next/image";
import Countdown from "./CountDown";

const HotDeals = () => {
  const targetDate = "2024-02-01T12:00:00Z";
  return (
    <div className=" bg-[#e5e6ef]  ">
      <div className=" flex justify-between flex-col md:flex-row max-w-[95rem] mx-auto ">
        <div className=" md:hidden lg:block">
          <Image
            src="/images/polo.png"
            height={450}
            width={450}
            className=" -rotate-12 -ml-8 "
          />
        </div>
        <div className=" hidden md:block lg:hidden">
          <Image
            src="/images/polo.png"
            height={400}
            width={400}
            className=" -rotate-12 -ml-8 "
          />
        </div>
        <div className="  pt-12 md:-ml-9 ">
          <div className=" flex items-center justify-center">
            <Countdown targetDate={targetDate} />
          </div>
          <div className="    ">
            <h2 className=" text-center text-4xl font-bold text-secoundryBlack mt-4 ">
              HOT DEAL THIS WEEK
            </h2>
            <p className=" text-center text-2xl  lg:text-3xl text-secoundryBlack/80 mt-1 ">
              NEW COLLECTION UP TO 50% OFF
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <button className=" bg-appRed text-white px-6 my-4 lg:mt-6 rounded-full font-medium py-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" md:hidden lg:block">
          <Image
            src="/images/ps6.png"
            className=" mr-8"
            height={300}
            width={300}
          />
        </div>
        <div className=" hidden md:block lg:hidden">
          <Image
            src="/images/ps6.png"
            className=" mr-8"
            height={250}
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
