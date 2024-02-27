import React, { useEffect, useRef } from "react";

const InputBox = ({ isEdit, title, value, focus, onChange }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`flex flex-col px-3 py-1 border border-gray-300 ${
        !isEdit && "bg-appGray/40"
      }`}
    >
      <div className="h-5 ">
        {isEdit && <p className=" text-[12px] text-gray-500 mb-2">{title}</p>}
      </div>
      <input
        className={`outline-none caret-appRed capitalize ${
          !isEdit ? " text-gray-500" : " text-appTextBlack"
        }`}
        disabled={!isEdit}
        value={value}
        ref={inputRef}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
