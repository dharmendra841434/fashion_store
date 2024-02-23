import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-2 lg:gap-6">
      <div className="flex flex-col items-center justify-center w-20 h-20 p-12 text-white rounded-full bg-appRed">
        <span className="text-2xl font-bold ">{Number(timeLeft?.days)} </span>
        <p className="-mt-1 text-sm ">days</p>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 p-12 text-white rounded-full bg-appRed">
        <span className="text-2xl font-bold ">
          {Number(formatTime(timeLeft.hours))}{" "}
        </span>
        <p className="-mt-1 text-sm ">hours</p>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 p-12 text-white rounded-full bg-appRed">
        <span className="text-2xl font-bold ">
          {Number(formatTime(timeLeft.minutes))}{" "}
        </span>
        <p className="-mt-1 text-sm ">mins</p>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 p-12 text-white rounded-full bg-appRed">
        <span className="text-2xl font-bold ">
          {Number(formatTime(timeLeft.seconds))}{" "}
        </span>
        <p className="-mt-1 text-sm ">secs</p>
      </div>
    </div>
  );
};

export default Countdown;
