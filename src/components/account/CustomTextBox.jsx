import React, { useRef, useState } from "react";

const CustomTextBox = ({
  title,
  inputClass,
  error,
  onChange,
  name,
  Blur,
  inputMode,
  value,
}) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  //console.log(error, "this is error");
  return (
    <div>
      <div
        onClick={() => {
          inputRef.current.focus();
        }}
        className={` relative px-2  bg-white border transition-all duration-300 ease-in-out cursor-text ${
          focus ? " border-green-400" : "border-gray-300"
        }`}
      >
        <h2
          className={`  transition-all duration-300 ease-in-out text-gray-400 font-medium  ${
            focus
              ? "  text-[12px]   "
              : value && value?.length > 0
              ? " translate-y-0 text-[12px]"
              : "text-sm translate-y-3"
          }`}
        >
          {title}
        </h2>
        <textarea
          ref={inputRef}
          name={name}
          className={`w-full text-sm  transition-all duration-300 ease-in-out  outline-none ${inputClass} `}
          onFocus={() => setFocus(!focus)}
          onBlur={(e) => {
            setFocus(!focus);
            Blur(e);
          }}
          inputMode={inputMode}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="h-6 pt-1 ">
        {error && (
          <p className="text-[12px] text-appRed">This is required field!!</p>
        )}
      </div>
    </div>
  );
};

export default CustomTextBox;
