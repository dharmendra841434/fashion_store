import React from "react";
import styles from "@/styles/Home.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({
  setDropDown,
  dropDown,
  data,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <div className="relative  lg:hidden">
      <button
        onClick={() => {
          setDropDown(!dropDown);
        }}
        className={`${styles.dropDown} border border-gray-300 rounded`}
      >
        <p>{selectedItem && selectedItem}</p>
        <MdKeyboardArrowDown
          className={` transition-all duration-300 ease-in-out ml-3 ${
            dropDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {dropDown && (
        <div className="absolute left-0 right-0 z-50 bg-white border border-gray-200 rounded-md  top-9 drop-shadow-2xl">
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItem(item.title);
                setDropDown(false);
              }}
              className=" px-2 py-0.5 hover:bg-appRed hover:text-white"
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
