import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { categories } from "../../public/usefullData/categoriesdata";
import { HiMiniLink } from "react-icons/hi2";

const CustomSearchBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [searchedItem, setSearchedItem] = useState([]);

  //console.log(searchedItem, "iterm");

  return (
    <div className="  flex items-center bg-white w-full h-fit mx-2 md:mx-0 md:w-[100%]  rounded-3xl overflow-hidden ">
      <input
        className=" outline-none h-full w-[90%]    p-3 placeholder:text-sm caret-appRed text-sm"
        placeholder="Search here"
        onChange={(e) => {
          if (e.target.value.length > 2) {
            setDropDown(true);
            let f = categories?.filter((item, index) =>
              item
                .toLocaleLowerCase()
                .includes(e.target.value.toLocaleLowerCase())
            );
            setSearchedItem(f);
          } else {
            setDropDown(false);
          }
        }}
      />
      <button className=" bg-appRed h-full py-3 font-semibold text-white pl-4 md:pl-8  px-4 lg:px-4 p lg:py-3 text-[13px] lg:text-sm ">
        Search
      </button>
      {dropDown && (
        <div className=" absolute bg-white top-full mt-1 right-0 left-0 h-[22rem] shadow-lg rounded-md overflow-hidden z-50  ">
          {searchedItem?.length === 0 ? (
            <div>
              <h2>Item not found!!!</h2>
            </div>
          ) : (
            <>
              {searchedItem?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setDropDown(false);
                  }}
                  className=" flex items-center justify-between cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-105 px-5 py-1"
                >
                  <h2>{item}</h2>
                  <HiMiniLink />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSearchBar;
