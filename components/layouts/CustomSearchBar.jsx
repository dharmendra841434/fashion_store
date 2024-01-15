import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { categories } from "../../public/usefullData/categoriesdata";

const CustomSearchBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  return (
    <div className=" flex items-center bg-white w-full h-fit mx-2 md:mx-0 md:w-[100%]  rounded-3xl overflow-hidden ">
      <div className=" hidden lg:block  w-[15rem]">
        <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
          className=" flex items-center   gap-x-2 border-r-2 border-gray-200 px-2 py-3 lg:p-3"
        >
          <p className=" text-[13px] lg:text-sm">{selectedCategory}</p>
          <MdKeyboardArrowDown
            className={` transition-all duration-300 ease-in-out ${
              dropDown ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <input
        className=" outline-none h-full w-[90%]   p-3 placeholder:text-sm caret-appRed text-sm"
        placeholder="Search here"
      />
      <button className=" bg-appRed h-full py-3 font-semibold text-white pl-4 md:pl-8  px-4 lg:px-4 p lg:py-3 text-[13px] lg:text-sm ">
        Search
      </button>
      {dropDown && (
        <div className=" absolute bg-white top-[60%] shadow-lg rounded-md overflow-hidden z-50  ">
          {categories?.map((item, index) => (
            <h2
              key={index}
              onClick={() => {
                setSelectedCategory(item);
                setDropDown(false);
              }}
              className=" cursor-pointer text-sm transition-all duration-300 ease-in-out hover:bg-appRed hover:text-white px-5 py-1 "
            >
              {item}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSearchBar;
