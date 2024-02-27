import React from "react";

const CheckBox = ({ isChecked, onChecked, isEdit }) => {
  return (
    <div>
      <div
        onClick={onChecked}
        className={`w-5 h-5 p-1 bg-white border-2 rounded-full ${
          isEdit && "cursor-pointer"
        } ${isEdit ? "border-appRed" : "border-appRed/40"}`}
      >
        <div
          className={`w-full h-full rounded-full ${
            isChecked && `${isEdit ? "bg-appRed" : "bg-appRed/40"}`
          }`}
        />
      </div>
    </div>
  );
};

export default CheckBox;
