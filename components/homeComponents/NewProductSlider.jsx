import { useRouter } from "next/router";
import React from "react";
import { newProductmenu } from "../../public/usefullData/MenuOptions";

const NewProductSlider = () => {
  const path = useRouter();

  return (
    <div className=" mt-7">
      <div className=" flex items-center justify-between py-5">
        <h2 className=" font-bold text-gray-700 text-2xl uppercase">
          New Products
        </h2>
        <div className=" flex items-center gap-x-6 ">
          {newProductmenu?.map((item, index) => (
            <div key={index} className=" group cursor-pointer ">
              <h4
                className={` font-medium ${
                  path.pathname === item.route ? "text-appRed" : "text-appBlack"
                }  text-sm  group-hover:text-appRed`}
              >
                {item.title}
              </h4>

              <div className=" flex mt-1">
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
    </div>
  );
};

export default NewProductSlider;
