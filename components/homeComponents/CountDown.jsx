import React, { useState, useEffect } from "react";
import moment from "moment";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = moment();
    const target = moment(targetDate);
    const duration = moment.duration(target.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days: days >= 0 ? days : 0,
      hours: hours >= 0 ? hours : 0,
      minutes: minutes >= 0 ? minutes : 0,
      seconds: seconds >= 0 ? seconds : 0,
    };
  }

  return (
    <div className="  grid grid-cols-2 md:grid-cols-4 gap-6  md:gap-2 lg:gap-6  ">
      <div className=" flex flex-col items-center justify-center  h-20 w-20 p-12 rounded-full bg-appRed text-white">
        <h2 className=" font-bold text-2xl ">{timeLeft.days} </h2>
        <h3 className=" text-sm -mt-1">days</h3>
      </div>
      <div className=" flex flex-col items-center justify-center h-20 w-20 p-12 rounded-full bg-appRed text-white">
        <h2 className=" font-bold text-2xl ">{timeLeft.hours} </h2>
        <h3 className=" text-sm -mt-1">hours</h3>
      </div>
      <div className=" flex flex-col items-center justify-center h-20 w-20 p-12 rounded-full bg-appRed text-white">
        <h2 className=" font-bold text-2xl ">{timeLeft.minutes} </h2>
        <h3 className=" text-sm -mt-1">mins</h3>
      </div>
      <div className=" flex flex-col items-center justify-center h-20 w-20 p-12 rounded-full bg-appRed text-white">
        <h2 className=" font-bold text-2xl ">{timeLeft.seconds} </h2>
        <h3 className=" text-sm -mt-1">secs</h3>
      </div>
    </div>
  );
};

export default Countdown;
