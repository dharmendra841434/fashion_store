import React, { useState, useRef } from "react";
import styles from "../styles/inputstyle.module.css";

const OtpInput = ({
  setPin1,
  setPin2,
  setPin3,
  setPin4,
  setPin5,
  setPin6,
  SetStatus,
}) => {
  const [pin1Status, setPin1Status] = useState(true);
  const [pin2Status, setPin2Status] = useState(false);
  const [pin3Status, setPin3Status] = useState(false);
  const [pin4Status, setPin4Status] = useState(false);
  const [pin5Status, setPin5Status] = useState(false);
  const [pin6Status, setPin6Status] = useState(false);
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const pin6Ref = useRef();
  return (
    <div className="grid grid-cols-6 gap-x-2">
      <input
        type="number"
        ref={pin1Ref}
        autoFocus={pin1Status}
        onFocus={() => setPin1Status(true)}
        onBlur={() => setPin1Status(false)}
        onChange={(p1) => {
          setPin1(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin2Ref.current.focus();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
      <input
        type="number"
        ref={pin2Ref}
        autoFocus={pin2Status}
        onFocus={() => setPin2Status(true)}
        onBlur={() => setPin2Status(false)}
        onChange={(p1) => {
          setPin2(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin3Ref.current.focus();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
      <input
        type="number"
        ref={pin3Ref}
        autoFocus={pin3Status}
        onFocus={() => setPin3Status(true)}
        onBlur={() => setPin3Status(false)}
        onChange={(p1) => {
          setPin3(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin4Ref.current.focus();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
      <input
        type="number"
        ref={pin4Ref}
        autoFocus={pin4Status}
        onFocus={() => setPin4Status(true)}
        onBlur={() => setPin4Status(false)}
        onChange={(p1) => {
          setPin4(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin5Ref.current.focus();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
      <input
        type="number"
        ref={pin5Ref}
        autoFocus={pin5Status}
        onFocus={() => setPin5Status(true)}
        onBlur={() => setPin5Status(false)}
        onChange={(p1) => {
          setPin5(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin6Ref.current.focus();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
      <input
        type="number"
        ref={pin6Ref}
        autoFocus={pin6Status}
        onFocus={() => setPin6Status(true)}
        onBlur={() => setPin6Status(false)}
        onChange={(p1) => {
          setPin6(p1.target.value);
          SetStatus(false);
          if (p1.target.value !== "") {
            pin6Ref.current.blur();
          }
        }}
        className={`${styles.otpinput} outline-none bg-inputBg  rounded-md py-3 text-appBlack  caret-red-400 text-center border-appRed/60  transition-all ease-in-out duration-500
        focus:border-secoundry border-2`}
      />
    </div>
  );
};

export default OtpInput;
