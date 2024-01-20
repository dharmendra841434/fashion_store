import React, { useState } from "react";
import OtpInput from "../OtpInput";

const Otp = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  return (
    <div>
      <div className=" px-4  mt-5">
        <OtpInput
          setPin1={setPin1}
          setPin2={setPin2}
          setPin3={setPin3}
          setPin4={setPin4}
          SetStatus={setOtpStatus}
        />
      </div>
    </div>
  );
};

export default Otp;
