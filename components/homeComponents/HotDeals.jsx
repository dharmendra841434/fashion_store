import React from "react";
import Image from "next/image";
import Countdown from "./CountDown";

const HotDeals = () => {
  const targetDate = "2024-04-01T12:00:00Z";
  return (
    <div className=" bg-[#e5e6ef]  ">
      <div className=" flex justify-between flex-col md:flex-row max-w-[95rem] mx-auto ">
        <div className=" md:hidden lg:block">
          <Image
            src="/images/polo.png"
            height={450}
            width={450}
            className="-ml-8  -rotate-12"
          />
        </div>
        <div className="hidden  md:block lg:hidden">
          <Image
            src="/images/polo.png"
            height={400}
            width={400}
            className="-ml-8  -rotate-12"
          />
        </div>
        <div className="pt-12  md:-ml-9">
          <div className="flex items-center justify-center ">
            <Countdown targetDate={targetDate} />
          </div>
          <div className="">
            <h2 className="mt-4 text-4xl font-bold text-center  text-secoundryBlack">
              HOT DEAL THIS WEEK
            </h2>
            <p className="mt-1 text-2xl text-center  lg:text-3xl text-secoundryBlack/80">
              NEW COLLECTION UP TO 50% OFF
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <button className="px-6 py-2 my-4 font-medium text-white rounded-full  bg-appRed lg:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" md:hidden lg:block">
          <Image
            src="/images/ps6.png"
            className="mr-8 "
            height={300}
            width={300}
          />
        </div>
        <div className="hidden  md:block lg:hidden">
          <Image
            src="/images/ps6.png"
            className="mr-8 "
            height={250}
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
