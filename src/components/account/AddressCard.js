import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const AddressCard = ({ item, index, userData }) => {
  return (
    <div key={index} className="relative px-3 py-4 my-6 border border-gray-300">
      <h2 className="px-2 py-1 text-[12px] uppercase bg-gray-300 rounded-md font-medium text-appTextBlack w-fit">
        {item?.adressType}
      </h2>
      <div className="flex mt-2 text-sm ">
        <p className="font-medium capitalize ">{item?.firstName}</p>
        <p className="ml-2 font-medium capitalize ">{item?.lastName}</p>
        <p className="ml-2 font-medium capitalize ">{userData?.phone}</p>
      </div>
      <div className="flex mt-1 text-sm gap-x-1 ">
        <p className="capitalize ">{item?.calonyORvillage}</p>
        <p className="capitalize ">{item?.houseNumber}</p>
        <p className="capitalize ">{item?.city}</p>
        <p className="capitalize ">{item?.landmark}</p>
        <p className="capitalize ">{item?.state}</p>-{" "}
        <p className="font-medium capitalize ">{item?.pinCode}</p>
      </div>
      <div className="absolute top-4 right-4">
        <BsThreeDotsVertical className="cursor-pointer 8" />
      </div>
    </div>
  );
};

export default AddressCard;
